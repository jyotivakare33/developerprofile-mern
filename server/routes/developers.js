const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');
const Developers = require('../models/developers');

//List all developers

var avatar;

router.get('/',(req,res) => {
    if (!req.body) {
        res.status(400).send({error: "Empty body sent in request"});
        return;
    }
    Developers.find({}).then(developer => {
        if(developer)
        {
            res.status(201).send(developer);
        }
        else
        {
            res.status(201).send({result:'No Developers Found'});
        }
        
    }).catch((err) => {
        res.status(500).send(err);
    });

})

//Add a Developer
router.post('/', (req, res) => {
    if (!req.body) {
        res.status(400).send({error: "Data not present in request"});
        return;
    }

    const { github, linkedin, codechef, medium, hackerrank, twitter } = req.body;
    
    if (!github) {
        res.status(400).send({error: "Github Link not present in request"});
        return;
    }

    fetch(`https://api.github.com/users/${github}`)
    .then((res) => res.json())
    .then(response => {
        avatar = response.avatar_url;
        const company = response.company;
        const blog = response.blog;
        const location = response.location;
        const developers = new Developers({ github, linkedin,codechef, medium, hackerrank, twitter, avatar, company, blog, location  });

        developers.save().then(() => {
            console.log('Developer created');
            res.status(201).send('Developer Added');
        }).catch(() => {
            res.status(500).send("Error while adding developer." );
        });
    });

    console.log(avatar);

       return;
})

//Get a developer with developer ID
router.get('/:developerId',(req,res) => {
    if (!req.body) {
        res.status(400).send({error: "Empty body sent in request"});
        return;
    }
    const id = req.params.developerId;
    Developers.find({ github: id }).then(developer => {
        if(developer)
        {
            res.status(201).send(developer);
        }
        else
        {
            res.status(201).send({result:'Developer Not Found!'});
        }
        
    }).catch((err) => {
        res.status(500).send(err);
    });
})


module.exports = router;

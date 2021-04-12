import avatar from '../images/avatar.png';

function Header() {
    return (
        <div>
            <head>
            <meta property="og:title" content="European Travel Destinations"/>
            <meta property="og:description" content="Offering tour packages for individuals or groups."/>
            <meta property="og:image" content="http://euro-travel-example.com/thumbnail.jpg"/>
            <meta property="og:url" content="http://euro-travel-example.com/index.htm"/>
            </head>
            <header className="header">
                <nav>
                    <p className="heading">The Developer Repository</p>
                    <img src={avatar} className="avatar" alt="" />
                </nav>
            </header>
        </div>
    );
}

export default Header;

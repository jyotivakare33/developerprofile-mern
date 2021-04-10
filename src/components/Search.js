import searchtool from '../images/search-24px.svg';

function search() {
    return (
        <div>
            <p className="heading_explore">Explore Developer Profile</p>
            <hr className="divider" />
            <div className="search_main">
                <div className="outer_search">
                    <input type="text" placeholder="Search for Username" className="inner_search"></input>
                    <img src={searchtool} alt="" className="search_icon" />
                </div>
            </div>
        </div>
    );
}

export default search;

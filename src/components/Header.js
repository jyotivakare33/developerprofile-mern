import avatar from '../images/avatar.png';

function Header() {
    return (
        <div>
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

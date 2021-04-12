import AddDeveloper from './AddDeveloperModal';

function NotFound() {
    return (
        <div>
            <hr className="divider" />
            <p className="message">Could not find what you were looking for?</p>
            <div className="container_developer">
                <AddDeveloper />
            </div>
        </div>
    );
}

export default NotFound;

const Modal = ({ handleClose, show, children, handleSubmit }) => {
    const showHideClassName = show ? 'modal display-block' : 'modal display-none';

    return (
        <div className={showHideClassName}>
            <section className="modal-main">
                {children}
                <button type="button" className="cancel-form margin-20" onClick={handleClose}>
                    Cancel
                </button>
                <button type="button" className="submit-form" onClick={handleSubmit}>
                    Submit
                </button>
            </section>
        </div>
    );
};

export default Modal;

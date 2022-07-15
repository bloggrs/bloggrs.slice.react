import React from "react";
import Modal from "react-modal/lib/components/Modal";

const DeleteItemModal = props => {
    const [modalIsOpen, setIsOpen] = React.useState(false);
    const toggle = () => setIsOpen(!modalIsOpen)

    function closeModal() {
      setIsOpen(false);
    }

    return (
        <>
            { props.children ? props.children({ setIsOpen, toggle }) : null }
            <Modal
            isOpen={modalIsOpen}
            onAfterOpen={props.afterOpenModal}
            onRequestClose={closeModal}
            style={{}}
            contentLabel="Example Modal"
            className={"modal-dialog"}
            >
                <div className="modal-content">
                    <div className="modal-header bg-danger">
                        <h6 className="modal-title m-0 text-white" id="exampleModalDanger1">
                            {props.header}
                        </h6>
                        <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                        />
                    </div>
                    {/*end modal-header*/}
                    <div className="modal-body">
                        <div className="row">

                        {/*end col*/}
                        <div className="col-lg-9">
                            <h5>{props.title}</h5>
                            <p>This action cannot be reversed</p>
                            <ul className="mt-3 mb-0">
                            {/* <li>Lorem Ipsum is dummy text.</li>
                            <li>It is a long established reader.</li>
                            <li>Contrary to popular belief, Lorem simply.</li> */}
                            </ul>
                            <div className="mb-3">
                            <label className="form-label" htmlFor="exampleInputPassword1">
                                Enter "CONFIRM"
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="exampleInputPassword1"
                                placeholder=""
                            />
                            </div>
                        </div>
                        {/*end col*/}
                        </div>
                        {/*end row*/}
                    </div>
                    {/*end modal-body*/}
                    <div className="modal-footer">
                        <button type="button" className="btn btn-soft-secondary btn-sm">
                            Cancel
                        </button>
                        <button
                        type="button"
                        className="btn btn-soft-danger btn-sm"
                        data-bs-dismiss="modal"
                        >
                            Delete
                        </button>
                    </div>
                    {/*end modal-footer*/}
                </div>
            </Modal>
        </>
    )
}

export default DeleteItemModal;
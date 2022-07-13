import React from "react";
import Modal from 'react-modal';

// const customStyles = {
//   content: {
//     top: '50%',
//     left: '50%',
//     right: 'auto',
//     bottom: 'auto',
//     marginRight: '-50%',
//     transform: 'translate(-50%, -50%)',
//   },
// };

export default props => {
    const [modalIsOpen, setIsOpen] = React.useState(false);
    
    let subtitle = { style: { } }


    function openModal(e) {
      if (e) e.preventDefault();
      setIsOpen(true);
    }

    function afterOpenModal() {
      // references are now sync'd and can be accessed.
      subtitle.style.color = '#f00';
    }

    function closeModal() {
      setIsOpen(false);
    }
    return (
      <>
      <div className="col-lg-3">
        {" "}
        <div className="" style={{ marginLeft: 10 }}>
          <div className="img-group">
            <a onClick={openModal} href="" className="avatar-box thumb-md align-self-center">
              <span className="avatar-title bg-soft-info rounded-circle font-weight-normal">
                <i className="las la-plus" />
              </span>
            </a>
          </div>
        </div>
      </div>

        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={props.afterOpenModal}
          onRequestClose={closeModal}
          style={{}}
          contentLabel="Example Modal"
          className={"modal-dialog"}
        >
  <div className="modal-content">
    <div className="modal-header bg-info">
      <h6 className="modal-title m-0 text-white" id="exampleModalInfo1">
        Add team member
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
    <div className="form-group">
  <label htmlFor="pro-avatar">Project Avatar</label>
  <img
    src="/assets/images/widgets/project3.jpg"
    alt=""
    className="thumb-lg mx-3"
  />
  <div className="add-file btn btn-soft-primary btn-sm position-relative overflow-hidden">
    Change Avatar
    <input type="file" name="file" className="add-file-input" />
  </div>
</div>

    <div className="row">
    <div className="col-md-6">
    <div className="mb-3">
      <label className="form-label" htmlFor="username">
        First Name
      </label>
      <input type="text" placeholder="Enter first name.." className="form-control" id="username" required="" />
    </div>
  </div>
  <div className="col-md-6">
    <div className="mb-3">
      <label className="form-label" htmlFor="username">
        Last Name
      </label>
      <input type="text" placeholder="Enter last name.." className="form-control" id="username" required="" />
    </div>
  </div>
</div>
    <div className="mb-3">
  <label className="form-label" htmlFor="exampleInputEmail1">
    Email address
  </label>
  <input
    type="email"
    className="form-control"
    id="exampleInputEmail1"
    aria-describedby="emailHelp"
    placeholder="Enter email"
  />
  <small id="emailHelp" className="form-text text-muted">
    We'll never share your email with anyone else.
  </small>
</div>
<div className="mb-3">
  <label className="form-label" htmlFor="exampleInputPassword1">
    Password
  </label>
  <input
    type="password"
    className="form-control"
    id="exampleInputPassword1"
    placeholder="Password"
  />
</div>
      {/*end row*/}
    </div>
    {/*end modal-body*/}
    <div className="modal-footer">
      <button type="button" className="btn btn-soft-info btn-sm">
        Save changes
      </button>
      <button
        type="button"
        className="btn btn-soft-secondary btn-sm"
        data-bs-dismiss="modal"
        onClick={closeModal}
      >
        Close
      </button>
    </div>
    {/*end modal-footer*/}
  </div>
  {/*end modal-content*/}

        </Modal>
      </>
    )
}
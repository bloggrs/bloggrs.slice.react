import React from "react";

export default props => {
    return (
        <>
      <div className="row">
        <div className="col-sm-12">
          <div className="page-title-box">
            <div className="row">
              <div className="col">
                <h4 className="page-title">#1 - Nice work you've put there!</h4>
                <ol className="breadcrumb">
                  <li className="breadcrumb-item"><a href="javascript:void(0);">Bloggrs</a></li>
                  <li className="breadcrumb-item active">Comments</li>
                  <li className="breadcrumb-item active">#1</li>
                </ol>
              </div>{/*end col*/}
            </div>{/*end row*/}                                                              
          </div>{/*end page-title-box*/}
        </div>{/*end col*/}
      </div>

            <div className="col mt-1">
                <div className="card">
                <div className="card-header">
                    <h4 className="card-title">Edit Comment</h4>
                    <p className="text-muted mb-0">Basic example to demonstrate Bootstrap’s form styles.</p> 
                </div>{/*end card-header*/}
                <div className="card-body">
                    <form>
                    <div className="mb-3">
                        <label className="form-label" htmlFor="exampleInputcreatedby1">Comment Owner</label>
                        <div className="input-group">
                            <div className="input-group-text">@</div>
                            <input type="text" className="form-control" id="inlineFormInputGroupUsername" placeholder="Username" />
                        </div>
                        <small id="createdbyHelp" className="form-text text-muted">The user who commented on the post.</small>
                    </div>
                    <div className="mb-3">
                        <label className="form-label" htmlFor="exampleFormControlTextarea1">Content</label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows={3} defaultValue={"Nice work you've put there!"} />
                    </div>
                        <button type="submit" className="btn btn-soft-primary btn-md">Save</button>
                        <button type="button" style={{ marginLeft: 15 }} className="btn btn-soft-danger btn-md">Cancel</button>
                    </form>                                           
                </div>{/*end card-body*/}
                </div>{/*end card*/}
            </div>
        </>
    )
}
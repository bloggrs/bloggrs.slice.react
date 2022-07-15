import React from "react";

export default props => {
    return (
        <>
      <div className="row">
        <div className="col-sm-12">
          <div className="page-title-box">
            <div className="row">
              <div className="col">
                <h4 className="page-title">#1 - Funny</h4>
                <ol className="breadcrumb">
                  <li className="breadcrumb-item"><a href="javascript:void(0);">Bloggrs</a></li>
                  <li className="breadcrumb-item active">Tags</li>
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
                    <h4 className="card-title">Edit tag</h4>
                    <p className="text-muted mb-0">Basic example to demonstrate Bootstrap’s form styles.</p> 
                </div>{/*end card-header*/}
                <div className="card-body">
                    <form>
                    <div className="form-group">
                            <div className="d-flex">
                                <div className="col m-auto d-flex">
                                    <label className="col-1 form-label" style={{ margin: "auto 0", marginRight: "2vh" }} htmlFor="exampleFormControlTextarea1">Name</label>
                                    <input className="form-control" style={{ width: "50%" }} id="exampleFormControlTextarea1" rows={3} placeholder={"Funny"} />
                                </div>
                            </div>
                            <div className="col m-auto d-flex">
                                <div className="col-1 form-label" style={{ margin: "auto 0", marginRight: "2vh" }}/>
                                <span className="form-text text-muted font-12">
                                    The name is how it appears on your site.
                                </span>
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="d-flex">
                                <div className="col m-auto d-flex">
                                    <label className="col-1 form-label" style={{ margin: "auto 0", marginRight: "2vh" }} htmlFor="exampleFormControlTextarea1">Slug</label>
                                    <input className="form-control" style={{ width: "50%" }} id="exampleFormControlTextarea1" rows={3} placeholder={"funny"} />
                                </div>
                            </div>
                            <div className="col m-auto d-flex">
                                <div className="col-1 form-label" style={{ margin: "auto 0", marginRight: "2vh" }}/>
                                <span className="col form-text text-muted font-12">
                                    The “slug” is the URL-friendly version of the name. It is usually all lowercase and contains only letters, numbers, and hyphens.
                                </span>
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="d-flex">
                                <div className="col m-auto d-flex">
                                    <label className="col-1 form-label" style={{ margin: "auto 0", marginRight: "2vh" }} htmlFor="exampleFormControlTextarea1">Description</label>
                                    <textarea className="form-control" style={{ width: "50%" }} id="exampleFormControlTextarea1" rows={3}/>
                                </div>
                            </div>
                            <div className="col m-auto d-flex">
                                <div className="col-1 form-label" style={{ margin: "auto 0", marginRight: "2vh" }}/>
                                    <span className=" form-text text-muted font-12">
                                        The description is not prominent by default; however, some themes may show it.
                                    </span>
                                </div>
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
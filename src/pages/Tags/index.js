import React from "react";

export default props => {
    return (
        <>
      <div className="row">
        <div className="col-12">
          <div className="page-title-box">
            <div className="row">
              <div className="col">
                <h4 className="page-title">Tags</h4>
                <ol className="breadcrumb">
                  <li className="breadcrumb-item"><a href="javascript:void(0);">Bloggrs</a></li>
                  <li className="breadcrumb-item active">Tags</li>
                </ol>
              </div>{/*end col*/}
              <div className="col-auto align-self-center">
                <a href="#" className="btn btn-sm btn-outline-primary" id="Dash_Date">
                  <span className="ay-name" id="Day_Name">Today:</span>&nbsp;
                  <span className id="Select_date">Jul 12</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-calendar align-self-center icon-xs ms-1"><rect x={3} y={4} width={18} height={18} rx={2} ry={2} /><line x1={16} y1={2} x2={16} y2={6} /><line x1={8} y1={2} x2={8} y2={6} /><line x1={3} y1={10} x2={21} y2={10} /></svg>
                </a>
                <a href="#" className="btn btn-sm btn-outline-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-download align-self-center icon-xs"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1={12} y1={15} x2={12} y2={3} /></svg>
                </a>
              </div>{/*end col*/}  
            </div>{/*end row*/}                                                              
          </div>{/*end page-title-box*/}
        </div>{/*end col*/}
      </div>
      <div classname="row" style={{ display: "flex" }}>
  <div className="mb-1">
    <div className="dataTables_length" id="datatable_length">
      <label style={{ display: "flex" }}>
        <span style={{ marginRight: "2vw"}}>Show</span>
        <select
          name="datatable_length"
          aria-controls="datatable"
          className="form-select form-select-sm"
        >
          <option value="{10}">10</option>
          <option value="{25}">25</option>
          <option value="{50}">50</option>
          <option value="{100}">100</option>
        </select>{" "}
      </label>
        <span className="">entries</span>
    </div>
  </div>
  <div className="" style={{ marginLeft: "auto" }}>
    <div id="datatable_filter" className="dataTables_filter">
      <label style={{ display: "flex" }}>
        <span style={{ margin: "auto 0", marginRight: "0.5vw" }}>Search:</span>
        <input
          type="search"
          className="form-control form-control-sm"
          placeholder=""
          aria-controls="datatable"
        />
      </label>
    </div>
  </div>
</div>

      <div className="row mt-1">
        {/* end col */}
        <div className="col">

          <div className="card">
            <div className="card-body">
              <div className="table-responsive">
                <table className="table table-striped mb-0">
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Name</th>
                      <th>Slug</th>
                      <th>Count</th>
                      <th>Created By</th>
                      <th>Created at</th>
                      <th className="text-right">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>#1</td>
                      <td>Recent news</td>
                      <td style={{ textTransform: "lowercase" }}>recent-news</td>
                      <td><a className="btn btn-link" href="/posts?tag_name=recent-news">1</a></td>
                      <td><a href="#" className="btn btn-link">Gjergj Kadriu</a></td>
                      <td>25/11/2018</td>
                      <td className="text-right">
                        <div className="dropdown d-inline-block">
                          <a className="dropdown-toggle arrow-none" id="dLabel11" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="false" aria-expanded="false">
                            <i className="las la-ellipsis-v font-20 text-muted" />
                          </a>
                          <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dLabel11">
                            <a className="dropdown-item" href="#">View/Edit</a>
                            <a className="dropdown-item" href="#">Delete</a>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>#1</td>
                      <td>Fashion Industry</td>
                      <td style={{ textTransform: "lowercase" }}>Fashion-Industry</td>
                      <td><a className="btn btn-link" href="/posts?tag_name=recent-news">1</a></td>
                      <td><a href="#" className="btn btn-link">Gjergj Kadriu</a></td>
                      <td>25/11/2018</td>
                      <td className="text-right">
                        <div className="dropdown d-inline-block">
                          <a className="dropdown-toggle arrow-none" id="dLabel11" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="false" aria-expanded="false">
                            <i className="las la-ellipsis-v font-20 text-muted" />
                          </a>
                          <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dLabel11">
                            <a className="dropdown-item" href="#">View/Edit</a>
                            <a className="dropdown-item" href="#">Delete</a>
                          </div>
                        </div>
                      </td>

                    </tr>
                    <tr>
                      <td>#1</td>
                      <td>Lorem ipsum</td>
                      <td style={{ textTransform: "lowercase" }}>Lorem-ipsum</td>
                      <td><a className="btn btn-link" href="/posts?tag_name=recent-news">1</a></td>
                      <td><a href="#" className="btn btn-link">Gjergj Kadriu</a></td>
                      <td>25/11/2018</td>
                      <td className="text-right">
                        <div className="dropdown d-inline-block">
                          <a className="dropdown-toggle arrow-none" id="dLabel11" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="false" aria-expanded="false">
                            <i className="las la-ellipsis-v font-20 text-muted" />
                          </a>
                          <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dLabel11">
                            <a className="dropdown-item" href="#">View/Edit</a>
                            <a className="dropdown-item" href="#">Delete</a>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>#1</td>
                      <td>Recent news</td>
                      <td style={{ textTransform: "lowercase" }}>recent-news</td>
                      <td><a className="btn btn-link" href="/posts?tag_name=recent-news">1</a></td>
                      <td><a href="#" className="btn btn-link">Gjergj Kadriu</a></td>
                      <td>25/11/2018</td>
                      <td className="text-right">
                        <div className="dropdown d-inline-block">
                          <a className="dropdown-toggle arrow-none" id="dLabel11" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="false" aria-expanded="false">
                            <i className="las la-ellipsis-v font-20 text-muted" />
                          </a>
                          <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dLabel11">
                            <a className="dropdown-item" href="#">View/Edit</a>
                            <a className="dropdown-item" href="#">Delete</a>
                          </div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>{/*end /table*/}
              </div>{/*end /tableresponsive*/}
              <div className="mt-3" style={{ display: "flex" }}>
                <div className="col-sm-12 col-md-5"><div className="dataTables_info" id="datatable_info" role="status" aria-live="polite">Showing 1 to 10 of 10 entries</div></div>

                <ul class="pagination mr-auto" style={{ marginLeft: "auto" }}>
                                              <li class="page-item">
                                                  <a class="page-link" href="#" aria-label="Previous">
                                                      <span aria-hidden="true">«</span>
                                                      <span class="sr-only">Previous</span>
                                                  </a>
                                              </li>
                                              <li class="page-item"><a class="page-link" href="#">1</a></li>
                                              <li class="page-item"><a class="page-link" href="#">2</a></li>
                                              <li class="page-item"><a class="page-link" href="#">3</a></li>
                                              <li class="page-item">
                                                  <a class="page-link" href="#" aria-label="Next">
                                                      <span aria-hidden="true">»</span>
                                                      <span class="sr-only">Next</span>
                                                  </a>
                                              </li>
                                          </ul>
              </div>
            </div>{/*end card-body*/}
          </div>{/*end card*/}
        </div> {/* end col */}
      </div>
</>
    )
}
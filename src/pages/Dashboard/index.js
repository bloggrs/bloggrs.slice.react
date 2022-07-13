import React from "react";

export default props => {
    return (
        <div className="row" style={{ margin: 5 }}>
            <div className="col-lg-4 mt-auto">
                <div className="card mb-3">
                    <div className="row no-gutters">
                    <div className="col-md-3 align-self-center text-center">
                        <img
                        className=""
                        height={80}
                        src="https://bloggrs-platform-i1.herokuapp.com/coming-soon.png"
                        alt="Card image"
                        style={{
                            width: 98,
                            height: 80,
                            objectFit: "cover",
                            margin: "0 auto"
                        }}
                        />
                    </div>
                    <div className="col-md-9">
                        <div className="card-header">
                        <div className="row align-items-center">
                            <div className="col">
                            <h4 className="card-title">Gjergj's Blog</h4>
                            </div>
                            {/*end col*/}
                            <div className="col-auto">
                            <button type="button" class="btn btn-outline-warning">Edit Site</button>
                            </div>
                            {/*end col*/}
                        </div>{" "}
                        {/*end row*/}
                        </div>
                        {/*end card-header*/}
                        <div className="card-body">
                        <p className="card-text">
                            This is a wider card with supporting text below as a natural lead-in
                            er card with supporting text below as a natural lead-in to
                            additional content.
                        </p>
                        <p className="card-text">
                          <a href="https://gblog.gjergjkadriu.com/" target="_blank">
                            https://gblog.gjergjkadriu.com/
                          </a>
                        </p>
                        </div>
                        {/*end card-body*/}
                    </div>

                    {/*end col*/}
                    </div>
                    {/*end row*/}
                </div>
            {/*end card*/}
            </div>
            <div className="col-lg-8">
            <div className="row row-span-4">
                    <div className="col">
                        <div className="card report-card">
                        <div className="card-body">
                            <div className="row d-flex justify-content-center">
                            <div className="col">
                                <p className="text-dark mb-0 fw-semibold">Sessions</p>
                                <h3 className="m-0">24k</h3>
                                <p className="mb-0 text-truncate text-muted"><span className="text-success"><i className="mdi mdi-trending-up" />8.5%</span> New Sessions today</p>
                            </div>
                            <div className="col-auto align-self-center">
                                <div className="report-main-icon bg-light-alt">
                                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-users align-self-center text-muted icon-sm"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx={9} cy={7} r={4} /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>  
                                </div>
                            </div>
                            </div>
                        </div>{/*end card-body*/} 
                        </div>{/*end card*/} 
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <div className="card report-card">
                        <div className="card-body">
                            <div className="row d-flex justify-content-center">
                            <div className="col">
                                <p className="text-dark mb-0 fw-semibold">Pageviews</p>
                                <h3 className="m-0">24k</h3>
                                <p className="mb-0 text-truncate text-muted"><span className="text-success"><i className="mdi mdi-trending-up" />8.5%</span> New page views today</p>
                            </div>
                            <div className="col-auto align-self-center">
                                <div className="report-main-icon bg-light-alt">
                                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-users align-self-center text-muted icon-sm"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx={9} cy={7} r={4} /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>  
                                </div>
                            </div>
                            </div>
                        </div>{/*end card-body*/} 
                        </div>{/*end card*/} 
                    </div>
                </div>

            </div>
            <div className="col">
        <div className="card">
          <div className="card-header">
            <h4 className="card-title">Latest posts</h4>
            <p className="text-muted mb-0"> <code>.table-bordered</code> for
              borders on all sides of the table and cells.
            </p>
          </div>{/*end card-header*/}
          <div className="card-body">
            <div className="table-responsive">
              <table className="table table-bordered mb-0 table-centered">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Content</th>
                    <th>Created at</th>
                    <th className="text-right">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>#124781</td>
                    <td>25/11/2018</td>
                    <td>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Cum sociis natoque penatibus et magnis.    </td>
                    <td>01 Feb 2020</td>
                    <td className="text-right">
                      <div className="dropdown d-inline-block">
                        <a className="dropdown-toggle arrow-none" id="dLabel11" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="false" aria-expanded="false">
                          <i className="las la-ellipsis-v font-20 text-muted" />
                        </a>
                        <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dLabel11">
                          <a className="dropdown-item" href="#">Open</a>
                          <a className="dropdown-item" href="#">Edit</a>
                          <a className="dropdown-item" href="#">Delete</a>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>#542136</td>
                    <td>The standard chunk of Lorem Ipsum used since</td>
                    <td>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Cum sociis natoque penatibus et magnis.</td>
                    <td>01 Feb 2020</td>
                    <td className="text-right">
                      <div className="dropdown d-inline-block">
                        <a className="dropdown-toggle arrow-none" id="dLabel11" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="false" aria-expanded="false">
                          <i className="las la-ellipsis-v font-20 text-muted" />
                        </a>
                        <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dLabel11">
                          <a className="dropdown-item" href="#">Creat Project</a>
                          <a className="dropdown-item" href="#">Open Project</a>
                          <a className="dropdown-item" href="#">Tasks Details</a>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>#234578</td>
                    <td>The standard chunk of Lorem Ipsum used since</td>
                    <td>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Cum sociis natoque penatibus et magnis.    </td>
                    <td>01 Feb 2020</td>
                    <td className="text-right">
                      <div className="dropdown d-inline-block">
                        <a className="dropdown-toggle arrow-none" id="dLabel11" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="false" aria-expanded="false">
                          <i className="las la-ellipsis-v font-20 text-muted" />
                        </a>
                        <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dLabel11">
                          <a className="dropdown-item" href="#">Creat Project</a>
                          <a className="dropdown-item" href="#">Open Project</a>
                          <a className="dropdown-item" href="#">Tasks Details</a>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>#951357</td>
                    <td>The standard chunk of Lorem Ipsum used since</td>
                    <td>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Cum sociis natoque penatibus et magnis.    </td>
                    <td>01 Feb 2020</td>
                    <td className="text-right">
                      <div className="dropdown d-inline-block">
                        <a className="dropdown-toggle arrow-none" id="dLabel11" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="false" aria-expanded="false">
                          <i className="las la-ellipsis-v font-20 text-muted" />
                        </a>
                        <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dLabel11">
                          <a className="dropdown-item" href="#">Creat Project</a>
                          <a className="dropdown-item" href="#">Open Project</a>
                          <a className="dropdown-item" href="#">Tasks Details</a>
                        </div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>{/*end /table*/}
            </div>{/*end /tableresponsive*/}
          </div>{/*end card-body*/}
        </div>{/*end card*/}
      </div>

        </div>
    )
}
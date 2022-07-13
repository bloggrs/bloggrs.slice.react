import React from "react";

export default props => {
    return (
        <>
            <div className="row">
            <div className="col-sm-12">
                <div className="page-title-box">
                <div className="row">
                    <div className="col">
                    <h4 className="page-title">Teams</h4>
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                        <a href="javascript:void(0);">Bloggrs</a>
                        </li>
                        <li className="breadcrumb-item active">Teams</li>
                    </ol>
                    </div>
                    <div className="col-auto align-self-center">
                    <a href="#" className="btn btn-sm btn-outline-primary" id="Dash_Date">
                        <span className="day-name" id="Day_Name">
                        Today:
                        </span>
                        &nbsp;<span id="Select_date">Jul 12</span>
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-calendar align-self-center icon-xs ms-1"
                        >
                        <rect x={3} y={4} width={18} height={18} rx={2} ry={2} />
                        <line x1={16} y1={2} x2={16} y2={6} />
                        <line x1={8} y1={2} x2={8} y2={6} />
                        <line x1={3} y1={10} x2={21} y2={10} />
                        </svg>
                    </a>
                    <a href="#" className="btn btn-sm btn-outline-primary">
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-download align-self-center icon-xs"
                        >
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                        <polyline points="7 10 12 15 17 10" />
                        <line x1={12} y1={15} x2={12} y2={3} />
                        </svg>
                    </a>
                    </div>
                </div>
                </div>
            </div>
            </div>

            <div className="row mt-1">
  <div className="col">
    <div className="card">
      <div className="card-header">
        <h4 className="card-title">Teams</h4>
        <p className="text-muted mb-0">Manage teams and team members</p>
      </div>
      <div className="card-body">
        <div className="table-responsive">
          <table className="table table-striped mb-0">
            <thead>
              <tr>
                <th>ID</th>
                <th>Created By</th>
                <th>Team Members</th>
                <th>Blogs</th>
                <th>Created at</th>
                <th className="text-right">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>#1</td>
                <td>Gjergj Kadriu</td>
                <td>
                  <div className="card-body" style={{ }}>
                    <div className="row d-flex justify-content-center">
                        <div className="col">
                        <div className="img-group">
                            <a className="user-avatar user-avatar-group" href="#">
                            <img
                                src="assets/images/users/user-8.jpg"
                                alt="user"
                                className="thumb-lg rounded-circle"
                            />
                            </a>
                            <a className="user-avatar user-avatar-group" href="#">
                            <img
                                src="assets/images/users/user-5.jpg"
                                alt="user"
                                className="thumb-lg rounded-circle"
                            />
                            </a>
                            <a className="user-avatar user-avatar-group" href="#">
                            <img
                                src="assets/images/users/user-4.jpg"
                                alt="user"
                                className="thumb-lg rounded-circle"
                            />
                            </a>
                            <a className="user-avatar user-avatar-group" href="#">
                            <img
                                src="assets/images/users/user-6.jpg"
                                alt="user"
                                className="thumb-lg rounded-circle"
                            />
                            </a>
                        </div>
                        {/*end img-group*/}
                        </div>
                        {/*end col*/}
                        {/*end col*/}
                    </div>
                    {/*end row*/}
                    </div>
                </td>
                <td>
                                    <div className="card-body" style={{ }}>
                    <div className="row d-flex justify-content-center">
                        <div className="col">
                        <div className="img-group">
                            <a className="user-avatar user-avatar-group" href="#">
                            <img
                                src="assets/images/users/user-8.jpg"
                                alt="user"
                                className="thumb-lg rounded-circle"
                            />
                            </a>
                            <a className="user-avatar user-avatar-group" href="#">
                            <img
                                src="assets/images/users/user-5.jpg"
                                alt="user"
                                className="thumb-lg rounded-circle"
                            />
                            </a>
                            <a className="user-avatar user-avatar-group" href="#">
                            <img
                                src="assets/images/users/user-4.jpg"
                                alt="user"
                                className="thumb-lg rounded-circle"
                            />
                            </a>
                            <a className="user-avatar user-avatar-group" href="#">
                            <img
                                src="assets/images/users/user-6.jpg"
                                alt="user"
                                className="thumb-lg rounded-circle"
                            />
                            </a>
                        </div>
                        {/*end img-group*/}
                        </div>
                        {/*end col*/}
                        {/*end col*/}
                    </div>
                    {/*end row*/}
                    </div>


                </td>
                <td>25/11/2018</td>
                <td className="text-right">
                  <div className="dropdown d-inline-block">
                    <a
                      className="dropdown-toggle arrow-none"
                      id="dLabel11"
                      data-bs-toggle="dropdown"
                      href="#"
                      role="button"
                      aria-haspopup="false"
                      aria-expanded="false"
                    >
                      <i className="las la-ellipsis-v font-20 text-muted" />
                    </a>
                    <div
                      className="dropdown-menu dropdown-menu-right"
                      aria-labelledby="dLabel11"
                    >
                      <a className="dropdown-item" href="#">
                        View/Edit
                      </a>
                      <a className="dropdown-item" href="#">
                        Delete
                      </a>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td>#1</td>
                <td>Gjergj Kadriu</td>
                <td>
                  <div className="card-body" style={{ }}>
  <div className="row d-flex justify-content-center">
    <div className="col">
      <div className="img-group">
        <a className="user-avatar user-avatar-group" href="#">
          <img
            src="assets/images/users/user-8.jpg"
            alt="user"
            className="thumb-lg rounded-circle"
          />
        </a>
        <a className="user-avatar user-avatar-group" href="#">
          <img
            src="assets/images/users/user-5.jpg"
            alt="user"
            className="thumb-lg rounded-circle"
          />
        </a>
        <a className="user-avatar user-avatar-group" href="#">
          <img
            src="assets/images/users/user-4.jpg"
            alt="user"
            className="thumb-lg rounded-circle"
          />
        </a>
        <a className="user-avatar user-avatar-group" href="#">
          <img
            src="assets/images/users/user-6.jpg"
            alt="user"
            className="thumb-lg rounded-circle"
          />
        </a>
      </div>
      {/*end img-group*/}
    </div>
    {/*end col*/}
    {/*end col*/}
  </div>
  {/*end row*/}
</div>

                </td>
                <td>
                                    <div className="card-body" style={{ }}>
                    <div className="row d-flex justify-content-center">
                        <div className="col">
                        <div className="img-group">
                            <a className="user-avatar user-avatar-group" href="#">
                            <img
                                src="assets/images/users/user-8.jpg"
                                alt="user"
                                className="thumb-lg rounded-circle"
                            />
                            </a>
                            <a className="user-avatar user-avatar-group" href="#">
                            <img
                                src="assets/images/users/user-5.jpg"
                                alt="user"
                                className="thumb-lg rounded-circle"
                            />
                            </a>
                            <a className="user-avatar user-avatar-group" href="#">
                            <img
                                src="assets/images/users/user-4.jpg"
                                alt="user"
                                className="thumb-lg rounded-circle"
                            />
                            </a>
                            <a className="user-avatar user-avatar-group" href="#">
                            <img
                                src="assets/images/users/user-6.jpg"
                                alt="user"
                                className="thumb-lg rounded-circle"
                            />
                            </a>
                        </div>
                        {/*end img-group*/}
                        </div>
                        {/*end col*/}
                        {/*end col*/}
                    </div>
                    {/*end row*/}
                    </div>


                </td>
                <td>25/11/2018</td>
                <td className="text-right">
                  <div className="dropdown d-inline-block">
                    <a
                      className="dropdown-toggle arrow-none"
                      id="dLabel11"
                      data-bs-toggle="dropdown"
                      href="#"
                      role="button"
                      aria-haspopup="false"
                      aria-expanded="false"
                    >
                      <i className="las la-ellipsis-v font-20 text-muted" />
                    </a>
                    <div
                      className="dropdown-menu dropdown-menu-right"
                      aria-labelledby="dLabel11"
                    >
                      <a className="dropdown-item" href="#">
                        View/Edit
                      </a>
                      <a className="dropdown-item" href="#">
                        Delete
                      </a>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td>#1</td>
                <td>Gjergj Kadriu</td>
                <td>
                  <div className="card-body" style={{ }}>
  <div className="row d-flex justify-content-center">
    <div className="col">
      <div className="img-group">
        <a className="user-avatar user-avatar-group" href="#">
          <img
            src="assets/images/users/user-8.jpg"
            alt="user"
            className="thumb-lg rounded-circle"
          />
        </a>
        <a className="user-avatar user-avatar-group" href="#">
          <img
            src="assets/images/users/user-5.jpg"
            alt="user"
            className="thumb-lg rounded-circle"
          />
        </a>
        <a className="user-avatar user-avatar-group" href="#">
          <img
            src="assets/images/users/user-4.jpg"
            alt="user"
            className="thumb-lg rounded-circle"
          />
        </a>
        <a className="user-avatar user-avatar-group" href="#">
          <img
            src="assets/images/users/user-6.jpg"
            alt="user"
            className="thumb-lg rounded-circle"
          />
        </a>
      </div>
      {/*end img-group*/}
    </div>
    {/*end col*/}
    {/*end col*/}
  </div>
  {/*end row*/}
</div>

                </td>
                <td>
                                    <div className="card-body" style={{ }}>
                    <div className="row d-flex justify-content-center">
                        <div className="col">
                        <div className="img-group">
                            <a className="user-avatar user-avatar-group" href="#">
                            <img
                                src="assets/images/users/user-8.jpg"
                                alt="user"
                                className="thumb-lg rounded-circle"
                            />
                            </a>
                            <a className="user-avatar user-avatar-group" href="#">
                            <img
                                src="assets/images/users/user-5.jpg"
                                alt="user"
                                className="thumb-lg rounded-circle"
                            />
                            </a>
                            <a className="user-avatar user-avatar-group" href="#">
                            <img
                                src="assets/images/users/user-4.jpg"
                                alt="user"
                                className="thumb-lg rounded-circle"
                            />
                            </a>
                            <a className="user-avatar user-avatar-group" href="#">
                            <img
                                src="assets/images/users/user-6.jpg"
                                alt="user"
                                className="thumb-lg rounded-circle"
                            />
                            </a>
                        </div>
                        {/*end img-group*/}
                        </div>
                        {/*end col*/}
                        {/*end col*/}
                    </div>
                    {/*end row*/}
                    </div>


                </td>
                <td>25/11/2018</td>
                <td className="text-right">
                  <div className="dropdown d-inline-block">
                    <a
                      className="dropdown-toggle arrow-none"
                      id="dLabel11"
                      data-bs-toggle="dropdown"
                      href="#"
                      role="button"
                      aria-haspopup="false"
                      aria-expanded="false"
                    >
                      <i className="las la-ellipsis-v font-20 text-muted" />
                    </a>
                    <div
                      className="dropdown-menu dropdown-menu-right"
                      aria-labelledby="dLabel11"
                    >
                      <a className="dropdown-item" href="#">
                        View/Edit
                      </a>
                      <a className="dropdown-item" href="#">
                        Delete
                      </a>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td>#1</td>
                <td>Gjergj Kadriu</td>
                <td>
                  <div className="card-body" style={{ }}>
  <div className="row d-flex justify-content-center">
    <div className="col">
      <div className="img-group">
        <a className="user-avatar user-avatar-group" href="#">
          <img
            src="assets/images/users/user-8.jpg"
            alt="user"
            className="thumb-lg rounded-circle"
          />
        </a>
        <a className="user-avatar user-avatar-group" href="#">
          <img
            src="assets/images/users/user-5.jpg"
            alt="user"
            className="thumb-lg rounded-circle"
          />
        </a>
        <a className="user-avatar user-avatar-group" href="#">
          <img
            src="assets/images/users/user-4.jpg"
            alt="user"
            className="thumb-lg rounded-circle"
          />
        </a>
        <a className="user-avatar user-avatar-group" href="#">
          <img
            src="assets/images/users/user-6.jpg"
            alt="user"
            className="thumb-lg rounded-circle"
          />
        </a>
      </div>
      {/*end img-group*/}
    </div>
    {/*end col*/}
    {/*end col*/}
  </div>
  {/*end row*/}
</div>

                </td>
                <td>
                                    <div className="card-body" style={{ }}>
                    <div className="row d-flex justify-content-center">
                        <div className="col">
                        <div className="img-group">
                            <a className="user-avatar user-avatar-group" href="#">
                            <img
                                src="assets/images/users/user-8.jpg"
                                alt="user"
                                className="thumb-lg rounded-circle"
                            />
                            </a>
                            <a className="user-avatar user-avatar-group" href="#">
                            <img
                                src="assets/images/users/user-5.jpg"
                                alt="user"
                                className="thumb-lg rounded-circle"
                            />
                            </a>
                            <a className="user-avatar user-avatar-group" href="#">
                            <img
                                src="assets/images/users/user-4.jpg"
                                alt="user"
                                className="thumb-lg rounded-circle"
                            />
                            </a>
                            <a className="user-avatar user-avatar-group" href="#">
                            <img
                                src="assets/images/users/user-6.jpg"
                                alt="user"
                                className="thumb-lg rounded-circle"
                            />
                            </a>
                        </div>
                        {/*end img-group*/}
                        </div>
                        {/*end col*/}
                        {/*end col*/}
                    </div>
                    {/*end row*/}
                    </div>


                </td>
                <td>25/11/2018</td>
                <td className="text-right">
                  <div className="dropdown d-inline-block">
                    <a
                      className="dropdown-toggle arrow-none"
                      id="dLabel11"
                      data-bs-toggle="dropdown"
                      href="#"
                      role="button"
                      aria-haspopup="false"
                      aria-expanded="false"
                    >
                      <i className="las la-ellipsis-v font-20 text-muted" />
                    </a>
                    <div
                      className="dropdown-menu dropdown-menu-right"
                      aria-labelledby="dLabel11"
                    >
                      <a className="dropdown-item" href="#">
                        View/Edit
                      </a>
                      <a className="dropdown-item" href="#">
                        Delete
                      </a>
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <ul className="pagination mt-3 mr-auto">
          <li className="page-item">
            <a className="page-link" href="#" aria-label="Previous">
              <span aria-hidden="true">«</span>
              <span className="sr-only">Previous</span>
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              1
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              2
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              3
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#" aria-label="Next">
              <span aria-hidden="true">»</span>
              <span className="sr-only">Next</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>{" "}
</div>        </>
    )
}


const BlogCategory = () => {
    return (
<div className="container row">
  <h4 className="mt-4 mb-4">Blog Category</h4>
  <div className="col-6">
    <div className="card-body">
      <div className="input-group col-sm-8 mt-2 col form-label">
        <label className="col-sm-3 mt-2 col form-label">Search: </label>
        <button className="btn btn-primary" type="button" id="button-addon1">
          <i className="fas fa-search" />
        </button>
        <input
          type="text"
          className="form-control"
          placeholder="Search blogs.."
          aria-label="Example text with button addon"
          aria-describedby="button-addon1"
          defaultValue="Personal Blog"
        />
        <div>
          <button
            className="btn btn-outline-primary"
            style={{ position: "absolute", right: "-6vw" }}
          >
            Continue
          </button>
        </div>
      </div>
      <div className="table-responsive py-2">
        <table className="table table-striped mb-0">
          <thead>
            <tr>
              <th>Name</th>
              <th>URL</th>
              <th className="text-end">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Personal Blog</td>
              <td>
                <a href="https://gblog.gjergjkadriu.com/" target="_blank">
                  https://gblog.gjergjkadriu.com/
                </a>
              </td>
              <td className="text-end">
                <div className="form-check">
                  <button
                    className="btn btn-link"
                    type="checkbox"
                    id="flexCheckDefault"
                  >
                    Selected
                  </button>
                </div>
              </td>
            </tr>
            <tr>
              <td>Gjergj's Blog</td>
              <td>
                <a href="https://gblog.gjergjkadriu.com/" target="_blank">
                  https://gblog.gjergjkadriu.com/
                </a>
              </td>
              <td className="text-end">
                <div className="form-check">
                  <button
                    className="btn btn-link"
                    type="checkbox"
                    id="flexCheckDefault"
                  >
                    Select
                  </button>
                </div>
              </td>
            </tr>
            <tr>
              <td>Gjergj's Blog</td>
              <td>
                <a href="https://gblog.gjergjkadriu.com/" target="_blank">
                  https://gblog.gjergjkadriu.com/
                </a>
              </td>
              <td className="text-end">
                <div className="form-check">
                  <button
                    className="btn btn-link"
                    type="checkbox"
                    id="flexCheckDefault"
                  >
                    Select
                  </button>
                </div>
              </td>
            </tr>
            <tr>
              <td>Gjergj's Blog</td>
              <td>
                <a href="https://gblog.gjergjkadriu.com/" target="_blank">
                  https://gblog.gjergjkadriu.com/
                </a>
              </td>
              <td className="text-end">
                <div className="form-check">
                  <button
                    className="btn btn-link"
                    type="checkbox"
                    id="flexCheckDefault"
                  >
                    Select
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>

    )
}

export default BlogCategory;
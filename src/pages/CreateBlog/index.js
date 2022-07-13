import React from "react";

export default props =>{
    return (
        <div className="card-body">
        <form
            id="form-horizontal"
            className="form-horizontal form-wizard-wrapper wizard clearfix"
            role="application"
        >
            <div className="steps clearfix">
                <div role="tablist" style={{ display: "flex", marginLeft: "1vw", marginBottom: "1vh"  }}>
                    <div
                    role="tab"
                    className="first done"
                    aria-disabled="false"
                    aria-selected="false"
                    >
                    <a
                        id="form-horizontal-t-0"
                        href="#form-horizontal-h-0"
                        aria-controls="form-horizontal-p-0"
                    >
                        <span className="number">1.</span> General details
                    </a>
                    </div>
                    <div
                    role="tab"
                    className="done"
                    aria-disabled="false"
                    aria-selected="false"
                    >
                    <a
                        id="form-horizontal-t-1"
                        href="#form-horizontal-h-1"
                        aria-controls="form-horizontal-p-1"
                    >
                        <span className="number">2.</span> Category 
                    </a>
                    </div>
                    <div
                    role="tab"
                    className="current"
                    aria-disabled="false"
                    aria-selected="true"
                    >
                    <a
                        id="form-horizontal-t-2"
                        href="#form-horizontal-h-2"
                        aria-controls="form-horizontal-p-2"
                    >
                        {/* <span className="current-info audible">current step: </span> */}
                        <span className="number">3.</span> Choose URL
                    </a>
                    </div>
                    <div
                    role="tab"
                    className="last done"
                    aria-disabled="false"
                    aria-selected="false"
                    >
                    <a
                        id="form-horizontal-t-3"
                        href="#form-horizontal-h-3"
                        aria-controls="form-horizontal-p-3"
                    >
                        <span className="number">4.</span> Confirm details
                    </a>
                    </div>
                </div>
            </div>
            <div className="container-fluid">
  <div className="container row">
    <h4 className="mt-4 mb-4">General details</h4>
    <div className="col-md-8 row">
      <div className="col-2" style={{ margin: "auto" }}>
        <label className="mt-2 form-label mb-lg-0 text-end">Thumbnail: </label>
      </div>
      <div className="col-2 card-body m-auto">
        <div className="dropify-wrapper" style={{ height: "313.993px" }}>
          <div className="dropify-message">
            <span className="file-icon">
              {" "}
              <p>Drag and drop a file here or click</p>
            </span>
            <p className="dropify-error">Ooops, something wrong appended.</p>
          </div>
          <div className="dropify-loader" />
          <div className="dropify-errors-container">
            <ul />
          </div>
          <input
            type="file"
            id="input-file-now-custom-2"
            className="dropify"
            data-height={500}
          />
          <button type="button" className="dropify-clear">
            Remove
          </button>
          <div className="dropify-preview">
            <span className="dropify-render" />
            <div className="dropify-infos">
              <div className="dropify-infos-inner">
                <p className="dropify-filename">
                  <span className="file-icon" />{" "}
                  <span className="dropify-filename-inner" />
                </p>
                <p className="dropify-infos-message">
                  Drag and drop or click to replace
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="col-md-8 row">
      <div className="col-2" style={{ margin: "auto" }}>
        <label className="mt-2 form-label mb-lg-0 text-end">Name: </label>
      </div>
      <div className="col-2 card-body m-auto">
        <input
          type="text"
          className="form-control"
          placeholder="Enter blog name.."
          aria-label="Example text with button addon"
          aria-describedby="button-addon1"
        />
      </div>
    </div>
    <div className="col-md-8 row">
      <div className="col-2" style={{ margin: "auto" }}>
        <label className="mt-2 form-label mb-lg-0 text-end">
          Description:{" "}
        </label>
      </div>
      <div className="col-2 card-body m-auto">
        <textarea
          type="text"
          className="form-control"
          placeholder="Enter blog description.."
          aria-label="Example text with button addon"
          aria-describedby="button-addon1"
          defaultValue={""}
        />
      </div>
    </div>
  </div>
</div>
<hr/>
<div className="container-fluid">
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
      value="Personal Blog"
      aria-label="Example text with button addon"
      aria-describedby="button-addon1"
    />
      <div>
    <button style={{ position: "absolute", right: "-6vw"}} className="btn btn-outline-primary">
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
          <td>
            Personal Blog
          </td>
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
                defaultValue="true"
              >Selected</button>
            </div>
          </td>
        </tr>
        <tr>
          <td>
            Gjergj's Blog
          </td>
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
                defaultValue="true"
              >Select</button>
            </div>
          </td>
        </tr>
        <tr>
          <td>
            Gjergj's Blog
          </td>
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
                defaultValue="true"
              >Select</button>
            </div>
          </td>
        </tr>
        <tr>
          <td>
            Gjergj's Blog
          </td>
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
                defaultValue="true"
              >Select</button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

    </div>
  </div>
</div>

            <div className="actions clearfix">
            </div>
        </form>
        <hr/>
        <div className="container row">
  <h4 className="mt-4 mb-4">Choose URL</h4>
  <div className="col-md-8 row">
    <div className="col-2" style={{ margin: "auto" }}>
      <label className="mt-2 form-label mb-lg-0 text-end">URL: </label>
    </div>
    <div className="col-offset-2 col-2 card-body m-auto">
    <div className="input-group">
  <input
    type="text"
    className="form-control"
    placeholder="username"
    aria-label="username"
    aria-describedby="basic-addon2"
  />
  <span className="input-group-text" id="basic-addon2">
    .gjergjkadriu.com
  </span>
</div>

    </div>
    <div style={{ display: "flex", marginTop: "2vh" }}>
        <div style={{ width: "50%", textAlign: "left" }}>
            <button class="btn btn-outline-light" style={{ right: "-6vw", marginRight: "2vw"}}>Previous</button>
        </div>
        <div style={{ width: "50%", textAlign: "right", display: "inline" }}>

            <button class="btn btn-outline-primary" style={{ right: "-6vw", marginRight: "0.5vw" }}>Continue</button>
            </div>
        </div>
    </div>
</div>
        <hr/>
        <div className="container row">
  <h4 className="mt-4 mb-4">General details</h4>
  <div className="col-md-8 row">
    <div className="col-2" style={{ margin: "auto" }}>
      <label className="mt-2 form-label mb-lg-0 text-end">Thumbnail: </label>
    </div>
    <div className="col-2 card-body m-auto">
      <div className="dropify-wrapper" style={{ height: "313.993px", backgroundImage: "url(https://i.ytimg.com/vi/xUd_PT6HVMw/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFbyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBUi7F45f5aTSYeqVlPuPUe4OIMyA)" }}>
      </div>
    </div>
  </div>
  <div className="col-md-8 row">
    <div className="col-2" style={{ margin: "auto" }}>
      <label className="mt-2 form-label mb-lg-0 text-end">Name: </label>
    </div>
    <div className="col-2 card-body m-auto">
      <input
        type="text"
        className="form-control"
        value="Gjergj's Blog"
        disabled
        aria-label="Example text with button addon"
        aria-describedby="button-addon1"
      />
    </div>
  </div>
  <div className="col-md-8 row">
    <div className="col-2" style={{ margin: "auto" }}>
      <label className="mt-2 form-label mb-lg-0 text-end">Description: </label>
    </div>
    <div className="col-2 card-body m-auto">
      <textarea
        type="text"
        className="form-control"
        value="Dastone is a Bootstrap 5 admin dashboard, It is fully responsive and included awesome features to help build web applications fast and easy."
        aria-label="Example text with button addon"
        disabled
        aria-describedby="button-addon1"
        defaultValue={""}
      />
    </div>
  </div>
  <div className="col-md-8 row">
    <div className="col-2" style={{ margin: "auto" }}>
      <label className="mt-2 form-label mb-lg-0 text-end">Category: </label>
    </div>
    <div className="col-2 card-body m-auto">
      <input
        type="text"
        className="form-control"
        value="Personal Blog"
        disabled
        aria-label="Example text with button addon"
        aria-describedby="button-addon1"
      />
    </div>
  </div>
    <div className="col-md-8 row">
    <div className="col-2" style={{ margin: "auto" }}>
        <label className="mt-2 form-label mb-lg-0 text-end">URL: </label>
    </div>
    <div className="col-offset-2 col-2 card-body m-auto">
        <div className="input-group">
        <input
            type="text"
            className="form-control"
            value="gk-personal"
            disabled
            aria-label="username"
            aria-describedby="basic-addon2"
        />
        <span className="input-group-text" id="basic-addon2">
            .gjergjkadriu.com
        </span>
        </div>
    </div>
  <div style={{ display: "flex", marginTop: "2vh" }}>
  <div style={{ width: "50%", textAlign: "left" }}>
    <button
      className="btn btn-outline-light"
      style={{ right: "-6vw", marginRight: "2vw" }}
    >
      Previous
    </button>
  </div>
  <div style={{ width: "50%", textAlign: "right", display: "inline" }}>
    <button
      className="btn btn-outline-primary"
      style={{ right: "-6vw", marginRight: "0.5vw" }}
    >
      Continue
    </button>
  </div>
</div>
    </div>


</div>

        </div>
    )
}
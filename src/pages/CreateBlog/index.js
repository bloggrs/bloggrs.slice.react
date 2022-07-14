/* eslint-disable */

import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";

export default props =>{
    const location = useLocation();

    const [ _hash, setHash ] = useState(location.hash);
    const hash = _hash.replace("#", "");
    
    const func = event => {
        setHash(location.hash) 
    }
    const STEP_1 = "general";
    const STEP_2 = "category";
    const STEP_3 = "choose_url";
    const STEP_4 = "choose_theme";
    const STEP_5 = "confirm_details";

    
    useEffect(() => {
        addEventListener('hashchange', func);
        return () => removeEventListener('hashchange', func);
    })
    const STEPS = [ STEP_1, STEP_2, STEP_3, STEP_4, STEP_5 ] ;
    const getDoneClassOrEmpty = STEP => {
        const index = STEPS.indexOf(STEP);
        const _current = STEPS.indexOf(hash);
        const current = _current === -1 ? 0 : _current
        const same = index === current;
        const more = current > index;
        if (same) { return "current"; }
        else if (more) return "done"
        return ""
    }
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
                    aria-disabled="false"
                    aria-selected="false"
                    className={ "first " + getDoneClassOrEmpty(STEP_1) }
                    >
                    <a
                        id="form-horizontal-t-0"
                        href="#general"
                        aria-controls="form-horizontal-p-0"
                    >
                        <span className="number">1.</span> General details
                    </a>
                    </div>
                    <div
                    role="tab"
                    className={ getDoneClassOrEmpty(STEP_2) }
                    aria-disabled="false"
                    aria-selected="false"
                    >
                    <a
                        id="form-horizontal-t-1"
                        href="#category"
                        aria-controls="form-horizontal-p-1"
                    >
                        <span className="number">2.</span> Category 
                    </a>
                    </div>
                    <div
                    role="tab"
                    className={ getDoneClassOrEmpty(STEP_3) }
                    aria-disabled="false"
                    aria-selected="true"
                    >
                    <a
                        id="form-horizontal-t-2"
                        href="#choose_url"
                        aria-controls="form-horizontal-p-2"
                    >
                        {/* <span className="current-info audible">current step: </span> */}
                        <span className="number">3.</span> Choose URL
                    </a>
                    </div>
                    <div
                    role="tab"
                    className={`last ${getDoneClassOrEmpty(STEP_4)}`}
                    aria-disabled="false"
                    aria-selected="false"
                    >
                    <a
                        id="form-horizontal-t-3"
                        href="#choose_theme"
                        aria-controls="form-horizontal-p-3"
                    >
                        <span className="number">4.</span> Choose theme
                    </a>
                    </div>
                    <div
                    role="tab"
                    className={`last ${getDoneClassOrEmpty(STEP_5)}`}
                    aria-disabled="false"
                    aria-selected="false"
                    >
                    <a
                        id="form-horizontal-t-4"
                        href="#confirm_details"
                        aria-controls="form-horizontal-p-4"
                    >
                        <span className="number">5.</span> Confirm details
                    </a>
                    </div>
                </div>
            </div>
            <div style={{ display: hash === STEP_1 || !hash ? "block" : "none" }} className="container-fluid">
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
<div style={{ display: hash === STEP_2 ? "block" : "none" }} className="container-fluid">
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

            <div style={{ display: hash === STEP_2 ? "block" : "none" }} className="actions clearfix">
            </div>
        </form>
        <div style={{ display: hash === STEP_3 ? "block" : "none" }} className="container row">
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
</div>        <div style={{ display: hash === STEP_4 ? "block" : "none" }} className="container row">
  <h4 className="mt-4 mb-4">Choose the theme of your blog</h4>
  <p className="mt-4 mb-4">You can change this later anytime.</p>
        <div className="row">
        <div className="col-8">
    <div className="card">
        <div className="card-body">
        <div className="blog-card">
            <img
                style={{
                    width: "100%",
                    height: "100%"
                }}
            src="/assets/images/small/img-1.jpg"
            alt=""
            className="img-fluid rounded"
            />
        </div>
        {/*end blog-card*/}
        </div>
        {/*end card-body*/}
    </div>
  {/*end card*/}
    </div>
    <div className="col-4">
    <div className="card">
        <div className="card-body">
        <div className="blog-card">
            <h4 className="mt-4 mb-4">Minimalistic</h4>
            <p className="mt-4 mb-4">Version: 1.0.1</p>
            <p className="mt-10 mb-10">
                Minimalistic theme is great for blogger who enjoy the 
                minimum visual garbage needed for their posts to get 
                across. Timeless, easy, and accessible.
            </p>
        </div>
        {/*end blog-card*/}
        </div>
        <div className="card-footer" style={{ borderTop: "none" }}>
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
                Next
                </button>
            </div>
            </div>

        </div>
        {/*end card-body*/}
    </div>
    <div className="row">
    <button
                className="btn btn-outline-primary col-3"
                style={{ right: "-6vw", marginLeft: "auto", marginRight: "0.7vw" }}
                >
                Continue
                </button>
    </div>

  {/*end card*/}
    </div>
        </div>

</div>
        <div style={{ display: hash === STEP_5 ? "block" : "none" }} className="container row">
  <h4 className="mt-4 mb-4">Confirm details</h4>
  <div className="col-md-8 row">
    <div className="col-2" style={{ margin: "auto" }}>
      <label className="mt-2 form-label mb-lg-0 text-end">Thumbnail: </label>
    </div>
    <div className="col-2 card-body m-auto">
      <div className="" style={{ height: "313.993px", backgroundImage: "url(https://i.ytimg.com/vi/xUd_PT6HVMw/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFbyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBUi7F45f5aTSYeqVlPuPUe4OIMyA)" }}>
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
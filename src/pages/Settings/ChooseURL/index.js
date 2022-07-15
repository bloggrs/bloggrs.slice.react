

const ChooseURL = () => {
    return (
<div className="container row" style={{ display: "block" }}>
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
    )
}

export default ChooseURL;
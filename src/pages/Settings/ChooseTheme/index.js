

const ChooseTheme = () => {
    return (
<div className="container row" style={{ display: "block" }}>
  <h4 className="mt-4 mb-4">Choose the theme of your blog</h4>
  <p className="mt-4 mb-4">You can change this later anytime.</p>
  <div className="row">
    <div className="col-8">
      <div className="card">
        <div className="card-body">
          <div className="blog-card">
            <img
              src="/assets/images/small/img-1.jpg"
              alt=""
              className="img-fluid rounded"
              style={{ width: "100%", height: "100%" }}
            />
          </div>
        </div>
      </div>
    </div>
    <div className="col-4">
      <div className="card">
        <div className="card-body">
          <div className="blog-card">
            <h4 className="mt-4 mb-4">Minimalistic</h4>
            <p className="mt-4 mb-4">Version: 1.0.1</p>
            <p className="mt-10 mb-10">
              Minimalistic theme is great for blogger who enjoy the minimum
              visual garbage needed for their posts to get across. Timeless,
              easy, and accessible.
            </p>
          </div>
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
            <div
              style={{ width: "50%", textAlign: "right", display: "inline" }}
            >
              <button
                className="btn btn-outline-primary"
                style={{ right: "-6vw", marginRight: "0.5vw" }}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <button
          className="btn btn-outline-primary col-3"
          style={{ right: "-6vw", marginLeft: "auto", marginRight: "0.7vw" }}
        >
          Continue
        </button>
      </div>
    </div>
  </div>
</div>
    )
}

export default ChooseTheme;
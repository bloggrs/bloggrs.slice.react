import React from "react";

export default props => {
    return (
        <div className="container row">
            <h4 className="mt-4 mb-4">Blog Settings</h4>
            <div className="col-md-8 row">
                <div className="col-2" style={{ margin: "auto auto"}}>
                  <label class="mt-2 form-label mb-lg-0 text-end">Thumbnail: </label>
                </div>
                <div className="col-2 card-body m-auto">
                    <div className="dropify-wrapper" style={{height: '313.993px'}}><div className="dropify-message"><span className="file-icon"> <p>Drag and drop a file here or click</p></span><p className="dropify-error">Ooops, something wrong appended.</p></div><div className="dropify-loader" /><div className="dropify-errors-container"><ul /></div><input type="file" id="input-file-now-custom-2" className="dropify" data-height={500} /><button type="button" className="dropify-clear">Remove</button><div className="dropify-preview"><span className="dropify-render" /><div className="dropify-infos"><div className="dropify-infos-inner"><p className="dropify-filename"><span className="file-icon" /> <span className="dropify-filename-inner" /></p><p className="dropify-infos-message">Drag and drop or click to replace</p></div></div></div></div>
                </div>
            </div>
            <div className="col-md-8 row">
                <div className="col-2" style={{ margin: "auto auto"}}>
                  <label class="mt-2 form-label mb-lg-0 text-end">Name: </label>
                </div>
                <div className="col-2 card-body m-auto">
                    <input type="text" className="form-control" placeholder="Enter blog name.." aria-label="Example text with button addon" aria-describedby="button-addon1" />
                </div>
            </div>
            <div className="col-md-8 row">
                <div className="col-2" style={{ margin: "auto auto"}}>
                  <label class="mt-2 form-label mb-lg-0 text-end">Description: </label>
                </div>
                <div className="col-2 card-body m-auto">
                    <textarea type="text" className="form-control" placeholder="Enter blog description.." aria-label="Example text with button addon" aria-describedby="button-addon1" />
                </div>
            </div>
            <div className="col-md-8 row">
                <div className="col-3" style={{ margin: "auto auto"}}>
                  <label class="mt-2 form-label mb-lg-0 text-end">Include inside header: </label>
                </div>
                <div className="col-2 card-body m-auto">
                    <textarea type="text" className="form-control" placeholder="Enter blog description.." aria-label="Example text with button addon" aria-describedby="button-addon1" />
                </div>
            </div>

        </div>
    )
}
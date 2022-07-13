import React, { useState } from "react";
import { PostContentEditor } from "../../components/PostContentEditor";

export default props => {
    const [editorState, setEditorState] = useState(null);
    
    return (
        <div className="row" style={{ marginRight: "-1vw" }}>
            <div className="col-md-9">
                  <PostContentEditor
                    defaultValue={{"time":1654197988988,"blocks":[{"id":"sheNwCUP5A","type":"header","data":{"text":"Editor.js","level":2}},{"id":"12iM3lqzcm","type":"paragraph","data":{"text":"Hey. Meet the new Editor. On this page you can see it in action — try to edit this text."}},{"id":"fvZGuFXHmK","type":"header","data":{"text":"Key features","level":3}},{"id":"xnPuiC9Z8M","type":"list","data":{"style":"unordered","items":["It is a block-styled editor","It returns clean data output in JSON","Designed to be extendable and pluggable with a simple API"]}},{"id":"-MhwnSs3Dw","type":"header","data":{"text":"What does it mean «block-styled editor»","level":3}},{"id":"Ptb9oEioJn","type":"paragraph","data":{"text":"Workspace in classic editors is made of a single contenteditable element, used to create different HTML markups. Editor.js <mark class=\"cdx-marker\">workspace consists of separate Blocks: paragraphs, headings, images, lists, quotes, etc</mark>. Each of them is an independent contenteditable element (or more complex structure) provided by Plugin and united by Editor's Core."}},{"id":"-J7nt-Ksnw","type":"paragraph","data":{"text":"There are dozens of <a href=\"https://github.com/editor-js\">ready-to-use Blocks</a> and the <a href=\"https://editorjs.io/creating-a-block-tool\">simple API</a> for creation any Block you need. For example, you can implement Blocks for Tweets, Instagram posts, surveys and polls, CTA-buttons and even games."}},{"id":"SzwhuyoFq6","type":"header","data":{"text":"What does it mean clean data output","level":3}},{"id":"x_p-xddPzV","type":"paragraph","data":{"text":"Classic WYSIWYG-editors produce raw HTML-markup with both content data and content appearance. On the contrary, Editor.js outputs JSON object with data of each Block. You can see an example below"}},{"id":"6W5e6lkub-","type":"paragraph","data":{"text":"Given data can be used as you want: render with HTML for <code class=\"inline-code\">Web clients</code>, render natively for <code class=\"inline-code\">mobile apps</code>, create markup for <code class=\"inline-code\">Facebook Instant Articles</code> or <code class=\"inline-code\">Google AMP</code>, generate an <code class=\"inline-code\">audio version</code> and so on."}},{"id":"eD2kuEfvgm","type":"paragraph","data":{"text":"Clean data is useful to sanitize, validate and process on the backend."}},{"id":"N8bOHTfUCN","type":"delimiter","data":{}},{"id":"IpKh1dMyC6","type":"paragraph","data":{"text":"We have been working on this project more than three years. Several large media projects help us to test and debug the Editor, to make it's core more stable. At the same time we significantly improved the API. Now, it can be used to create any plugin for any task. Hope you enjoy. 😏"}},{"id":"FF1iyF3VwN","type":"image","data":{"file":{"url":"https://codex.so/public/app/img/external/codex2x.png"},"caption":"","withBorder":false,"stretched":false,"withBackground":false}}],"version":"2.23.2"}}
                    editorState={editorState}
                    onInitialize={value => {
                      setEditorState(value);
                      // console.log({ value });
                      // setEditorState(value.toString('html'));
                    }}
                  />
            </div>
            <div className="col-md-3" style={{
                margin: 0, padding: 0, marginLeft: "auto"
            }}>
                <div className="card posts-rightbar" style={{
                    height: "95vh",
                    position: "fixed"
                }}>
                    <div className="card-body">    
                        <div className="button-items" style={{ display: "inline-grid", width: "100%" }}>
                        <button type="button" style={{ width: "100%" }} className="btn btn-outline-primary">Save</button>
                        <button type="button" style={{ width: "100%" }} className="btn btn-outline-secondary">Preview</button>
                        <div class=" row">
                            <label class="col-sm-2 form-label align-self-center mb-lg-0 text-end">Status: </label>
                            <div class="col-sm-10">
                                <select class="form-select" aria-label="Default select example">
                                    <option selected="">Select status</option>
                                    <option value="1">Archived</option>
                                    <option value="2">Draft</option>
                                    <option value="3">Published</option>
                                    </select>
                            </div>
                        </div>
                    <div>
                    <label class="mt-2 col form-label mb-lg-0 text-end">Thumbnail: </label>
                        <div className="card-body" style={{ marginTop: 10, padding: 0 }}>
                            <div className="dropify-wrapper"><div className="dropify-message"><span className="file-icon"> <p>Drag and drop a file here or click</p></span><p className="dropify-error">Ooops, something wrong appended.</p></div><div className="dropify-loader" /><div className="dropify-errors-container"><ul /></div><input type="file" id="input-file-now" className="dropify" /><button type="button" className="dropify-clear">Remove</button><div className="dropify-preview"><span className="dropify-render" /><div className="dropify-infos"><div className="dropify-infos-inner"><p className="dropify-filename"><span className="file-icon" /> <span className="dropify-filename-inner" /></p><p className="dropify-infos-message">Drag and drop or click to replace</p></div></div></div></div>                                                   
                        </div>

                    </div>

                    </div>
                    <hr/>
                    <div className="row">
                        <div className="input-group col-sm-8 mt-2 col form-label">
                        <label className="col-sm-3 mt-2 col form-label">Categories: </label>
                            <button className="btn btn-secondary" type="button" id="button-addon1"><i className="fas fa-search" /></button>
                            <input type="text" className="form-control" placeholder="Search categories.." aria-label="Example text with button addon" aria-describedby="button-addon1" />

                        </div>
                            <div className="row" style={{marginLeft: 'auto', marginRight: 'auto', marginTop: '10px', padding: '1px'}}>
                                <div className="col" style={{ marginLeft: 15 }}>
                                    <div className="form-check">
                                    <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault" />
                                    <label className="form-check-label" htmlFor="flexCheckDefault">
                                        Default checkbox
                                    </label>
                                    </div>
                                    <div className="form-check">
                                    <input className="form-check-input" type="checkbox" defaultValue id="flexCheckChecked" defaultChecked />
                                    <label className="form-check-label" htmlFor="flexCheckChecked">
                                        Checked checkbox
                                    </label>
                                    </div>
                                    <div className="form-check">
                                    <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDisabled" disabled />
                                    <label className="form-check-label" htmlFor="flexCheckDisabled">
                                        Disabled checkbox
                                    </label>
                                    </div>
                                    <div className="form-check">
                                    <input className="form-check-input" type="checkbox" defaultValue id="flexCheckCheckedDisabled" defaultChecked disabled />
                                    <label className="form-check-label" htmlFor="flexCheckCheckedDisabled">
                                        Disabled checked checkbox
                                    </label>
                                    </div>
                                </div>

                            </div>

                </div>
                <div className="row">
                        <div className="input-group col-sm-8 mt-2 col form-label">
                        <label className="col-sm-2 mt-2 col form-label">Tags: </label>
                            <button className="btn btn-secondary" type="button" id="button-addon1"><i className="fas fa-search" /></button>
                            <input type="text" className="form-control" placeholder="Search tags.." aria-label="Example text with button addon" aria-describedby="button-addon1" />

                        </div>
                            <div className="row" style={{marginLeft: 'auto', marginRight: 'auto', marginTop: '10px', padding: '1px'}}>
                                <div className="col" style={{ marginLeft: 15 }}>
                                    <div className="form-check">
                                    <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault" />
                                    <label className="form-check-label" htmlFor="flexCheckDefault">
                                        Default checkbox
                                    </label>
                                    </div>
                                    <div className="form-check">
                                    <input className="form-check-input" type="checkbox" defaultValue id="flexCheckChecked" defaultChecked />
                                    <label className="form-check-label" htmlFor="flexCheckChecked">
                                        Checked checkbox
                                    </label>
                                    </div>
                                    <div className="form-check">
                                    <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDisabled" disabled />
                                    <label className="form-check-label" htmlFor="flexCheckDisabled">
                                        Disabled checkbox
                                    </label>
                                    </div>
                                    <div className="form-check">
                                    <input className="form-check-input" type="checkbox" defaultValue id="flexCheckCheckedDisabled" defaultChecked disabled />
                                    <label className="form-check-label" htmlFor="flexCheckCheckedDisabled">
                                        Disabled checked checkbox
                                    </label>
                                    </div>
                                </div>

                            </div>

                </div>
            </div>
        </div>
        </div>
        </div>
    )
}
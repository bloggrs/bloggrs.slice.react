import React from "react";
import FeatherIcon from "feather-icons-react";
import Item from "./Item";
import { useLocation, useNavigate } from "react-router";
import { Link } from "react-router-dom";

export default props => {
    const location = useLocation();
    const navigate = useNavigate();

    const { pathname } = location;

    const minimal = pathname === "/blogs/create";
    
    const onBlogChange = e => {
        const { value } = e.target;
        const redirect = value === "create";
        if (redirect) return navigate("/blogs/create");
    }
    
    const path_of_authentication = pathname.indexOf("login") !== -1 || pathname.indexOf("register") !== -1
    if (path_of_authentication) return props.children;
    if (!props.opened) return <></>
    if (minimal) {
        return (
            <div className="left-sidenav" style={{ minWidth: 85 }}>
                <div className="brand">
                    <Link to="/"  className="logo">
                        <span>
                            <img
                            src="/assets/images/logo-sm.png"
                            alt="logo-small"
                            className="logo-sm"
                            />
                        </span>
                    </Link>
                </div>
            </div>
        )
    }
    return (
        <div className="left-sidenav">
        <div className="brand">
            <Link to="/"  className="logo">
            <span>
                <img
                src="/assets/images/logo-sm.png"
                alt="logo-small"
                className="logo-sm"
                />
            </span>
            <span>
                <img
                src="/assets/images/logo.png"
                alt="logo-large"
                className="logo-lg logo-light"
                />
                <img
                src="/assets/images/logo-dark.png"
                alt="logo-large"
                className="logo-lg logo-dark"
                />
            </span>
            </Link>
        </div>
        <div className="menu-content h-100" data-simplebar="init">
            <div className="simplebar-wrapper" style={{ margin: "0px 0px -70px" }}>
            <div className="simplebar-height-auto-observer-wrapper">
                <div className="simplebar-height-auto-observer" />
            </div>
            <div className="simplebar-mask">
                <div className="simplebar-offset" style={{ right: 0, bottom: 0 }}>
                <div
                    className="simplebar-content-wrapper"
                    style={{ height: "100%", overflow: "hidden scroll" }}
                >
      <div className="col-9" style={{margin: 'auto auto'}}><select onChange={onBlogChange} className="form-select" aria-label="Default select example"><option value={4}>Gjergj's Blog</option><option value={1}>Software's Blog</option><option value={2}>Draft</option>
        <option  value={"create"}>Create</option>
      </select></div>
                    <div
                    className="simplebar-content"
                    style={{ padding: "0px 0px 70px" }}
                    >
                    <ul className="metismenu left-sidenav-menu">
                        <li className="menu-label mt-0">Main</li>
                        <Item label={"Dashboard"} to="/" icon="home" className="feather feather-home align-self-center menu-icon"/>
                        <Item label={"Posts"} to="/posts" icon="list"/>
                        <Item label={"Categories"} to="/categories" icon="align-right"/>
                        <Item label={"Tags"} to="/tags" icon="align-right"/>
                        <Item label={"Comments"} to="/comments" icon="message-square"/>
                        <Item label={"Teams"} to="/teams" icon="user"/>
                        <Item label={"Settings"} to="/settings" icon="settings"/>
                    </ul>
                    <div className="update-msg text-center">
                        <a
                        href="javascript: void(0);"
                        className="float-end close-btn text-muted"
                        data-dismiss="update-msg"
                        aria-label="Close"
                        aria-hidden="true"
                        >
                        <i className="mdi mdi-close" />
                        </a>
                        <h5 className="mt-3">Mannat Themes</h5>
                        <p className="mb-3">
                        We Design and Develop Clean and High Quality Web Applications
                        </p>
                        <a
                        href="javascript: void(0);"
                        className="btn btn-outline-warning btn-sm"
                        >   
                        Upgrade your plan
                        </a>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            <div
                className="simplebar-placeholder"
                style={{ width: "auto", height: 4335 }}
            />
            </div>
            <div
            className="simplebar-track simplebar-horizontal"
            style={{ visibility: "hidden" }}
            >
            <div
                className="simplebar-scrollbar"
                style={{ width: 0, display: "none" }}
            />
            </div>
            <div
            className="simplebar-track simplebar-vertical"
            style={{ visibility: "visible" }}
            >
            <div
                className="simplebar-scrollbar"
                style={{
                height: 316,
                display: "block",
                transform: "translate3d(0px, 0px, 0px)"
                }}
            />
            </div>
        </div>
        </div>
    )
}
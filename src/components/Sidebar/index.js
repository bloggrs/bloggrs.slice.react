import React from "react";
import FeatherIcon from "feather-icons-react";

export default props => {
    if (!props.opened) return <></>
    return (
        <div className="left-sidenav">
        <div className="brand">
            <a href="index.html" className="logo">
            <span>
                <img
                src="assets/images/logo-sm.png"
                alt="logo-small"
                className="logo-sm"
                />
            </span>
            <span>
                <img
                src="assets/images/logo.png"
                alt="logo-large"
                className="logo-lg logo-light"
                />
                <img
                src="assets/images/logo-dark.png"
                alt="logo-large"
                className="logo-lg logo-dark"
                />
            </span>
            </a>
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
                    <div
                    className="simplebar-content"
                    style={{ padding: "0px 0px 70px" }}
                    >
                    <ul className="metismenu left-sidenav-menu">
                        <li className="menu-label mt-0">Main</li>
                        <li>
                            <a href="javascript: void(0);">
                                {" "}
                                <svg
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="feather feather-home align-self-center menu-icon"
                                >
                                <g>
                                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                                    <polyline points="9 22 9 12 15 12 15 22" />
                                </g>
                                </svg>
                                <span>Dashboard</span>
                                <span className="menu-arrow">
                                <i className="mdi mdi-chevron-right" />
                                </span>
                            </a>
                        </li>
                        <li>
                            <a href="javascript: void(0);">
                                {" "}
                                <FeatherIcon icon="list"
                                    className="feather feather-home align-self-center menu-icon"
                                >
                                </FeatherIcon>
                                <span>Posts</span>
                                <span className="menu-arrow">
                                <i className="mdi mdi-chevron-right" />
                                </span>
                            </a>
                        </li>
                        <li>
                            <a href="javascript: void(0);">
                                {" "}
                                <FeatherIcon icon="message-square"
                                    className="feather feather-home align-self-center menu-icon"
                                >
                                </FeatherIcon>
                                <span>Posts</span>
                                <span className="menu-arrow">
                                <i className="mdi mdi-chevron-right" />
                                </span>
                            </a>
                        </li>
                        <li>
                            <a href="javascript: void(0);">
                                {" "}
                                <FeatherIcon icon="user"
                                    className="feather feather-home align-self-center menu-icon"
                                >
                                </FeatherIcon>
                                <span>Teams</span>
                                <span className="menu-arrow">
                                <i className="mdi mdi-chevron-right" />
                                </span>
                            </a>
                        </li>
                        <li>
                            <a href="javascript: void(0);">
                                {" "}
                                <FeatherIcon icon="settings"
                                    className="feather feather-home align-self-center menu-icon"
                                >
                                </FeatherIcon>
                                <span>Settings</span>
                                <span className="menu-arrow">
                                <i className="mdi mdi-chevron-right" />
                                </span>
                            </a>
                        </li>
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
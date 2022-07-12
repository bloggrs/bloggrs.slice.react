import React from "react";

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
                        <ul className="nav-second-level" aria-expanded="false">
                            <li className="nav-item">
                            <a className="nav-link" href="index.html">
                                <i className="ti-control-record" />
                                Analytics
                            </a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link" href="sales-index.html">
                                <i className="ti-control-record" />
                                Sales
                            </a>
                            </li>
                        </ul>
                        </li>
                        <li>
                        <a href="javascript: void(0);">
                            <svg
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-grid align-self-center menu-icon"
                            >
                            <g>
                                <rect x={3} y={3} width={7} height={7} />
                                <rect x={14} y={3} width={7} height={7} />
                                <rect x={14} y={14} width={7} height={7} />
                                <rect x={3} y={14} width={7} height={7} />
                            </g>
                            </svg>
                            <span>Apps</span>
                            <span className="menu-arrow">
                            <i className="mdi mdi-chevron-right" />
                            </span>
                        </a>
                        <ul className="nav-second-level" aria-expanded="false">
                            <li>
                            <a href="javascript: void(0);">
                                <i className="ti-control-record" />
                                Email{" "}
                                <span className="menu-arrow left-has-menu">
                                <i className="mdi mdi-chevron-right" />
                                </span>
                            </a>
                            <ul className="nav-second-level" aria-expanded="false">
                                <li>
                                <a href="apps-email-inbox.html">Inbox</a>
                                </li>
                                <li>
                                <a href="apps-email-read.html">Read Email</a>
                                </li>
                            </ul>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link" href="apps-chat.html">
                                <i className="ti-control-record" />
                                Chat
                            </a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link" href="apps-contact-list.html">
                                <i className="ti-control-record" />
                                Contact List
                            </a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link" href="apps-calendar.html">
                                <i className="ti-control-record" />
                                Calendar
                            </a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link" href="apps-files.html">
                                <i className="ti-control-record" />
                                File Manager
                            </a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link" href="apps-invoice.html">
                                <i className="ti-control-record" />
                                Invoice
                            </a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link" href="apps-tasks.html">
                                <i className="ti-control-record" />
                                Tasks
                            </a>
                            </li>
                            <li>
                            <a href="javascript: void(0);">
                                <i className="ti-control-record" />
                                Projects{" "}
                                <span className="menu-arrow left-has-menu">
                                <i className="mdi mdi-chevron-right" />
                                </span>
                            </a>
                            <ul className="nav-second-level" aria-expanded="false">
                                <li>
                                <a href="apps-project-overview.html">Overview</a>
                                </li>
                                <li>
                                <a href="apps-project-projects.html">Projects</a>
                                </li>
                                <li>
                                <a href="apps-project-board.html">Board</a>
                                </li>
                                <li>
                                <a href="apps-project-teams.html">Teams</a>
                                </li>
                                <li>
                                <a href="apps-project-files.html">Files</a>
                                </li>
                                <li>
                                <a href="apps-new-project.html">New Project</a>
                                </li>
                            </ul>
                            </li>
                            <li>
                            <a href="javascript: void(0);">
                                <i className="ti-control-record" />
                                Ecommerce{" "}
                                <span className="menu-arrow left-has-menu">
                                <i className="mdi mdi-chevron-right" />
                                </span>
                            </a>
                            <ul className="nav-second-level" aria-expanded="false">
                                <li>
                                <a href="apps-ecommerce-products.html">Products</a>
                                </li>
                                <li>
                                <a href="apps-ecommerce-product-list.html">
                                    Product List
                                </a>
                                </li>
                                <li>
                                <a href="apps-ecommerce-product-detail.html">
                                    Product Detail
                                </a>
                                </li>
                                <li>
                                <a href="apps-ecommerce-cart.html">Cart</a>
                                </li>
                                <li>
                                <a href="apps-ecommerce-checkout.html">Checkout</a>
                                </li>
                            </ul>
                            </li>
                        </ul>
                        </li>
                        <li>
                        <a href="javascript: void(0);">
                            <svg
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-lock align-self-center menu-icon"
                            >
                            <g>
                                <rect
                                x={3}
                                y={11}
                                width={18}
                                height={11}
                                rx={2}
                                ry={2}
                                />
                                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                            </g>
                            </svg>
                            <span>Authentication</span>
                            <span className="menu-arrow">
                            <i className="mdi mdi-chevron-right" />
                            </span>
                        </a>
                        <ul className="nav-second-level" aria-expanded="false">
                            <li className="nav-item">
                            <a className="nav-link" href="auth-login.html">
                                <i className="ti-control-record" />
                                Log in
                            </a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link" href="auth-register.html">
                                <i className="ti-control-record" />
                                Register
                            </a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link" href="auth-recover-pw.html">
                                <i className="ti-control-record" />
                                Recover Password
                            </a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link" href="auth-lock-screen.html">
                                <i className="ti-control-record" />
                                Lock Screen
                            </a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link" href="auth-404.html">
                                <i className="ti-control-record" />
                                Error 404
                            </a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link" href="auth-500.html">
                                <i className="ti-control-record" />
                                Error 500
                            </a>
                            </li>
                        </ul>
                        </li>
                        <hr className="hr-dashed hr-menu" />
                        <li className="menu-label my-2">Components &amp; Extra</li>
                        <li>
                        <a href="javascript: void(0);">
                            <svg
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-box align-self-center menu-icon"
                            >
                            <g>
                                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                                <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                                <line x1={12} y1="22.08" x2={12} y2={12} />
                            </g>
                            </svg>
                            <span>UI Kit</span>
                            <span className="menu-arrow">
                            <i className="mdi mdi-chevron-right" />
                            </span>
                        </a>
                        <ul className="nav-second-level" aria-expanded="false">
                            <li>
                            <a href="javascript: void(0);">
                                <i className="ti-control-record" />
                                UI Elements{" "}
                                <span className="menu-arrow left-has-menu">
                                <i className="mdi mdi-chevron-right" />
                                </span>
                            </a>
                            <ul className="nav-second-level" aria-expanded="false">
                                <li>
                                <a href="ui-alerts.html">Alerts</a>
                                </li>
                                <li>
                                <a href="ui-avatar.html">Avatar</a>
                                </li>
                                <li>
                                <a href="ui-buttons.html">Buttons</a>
                                </li>
                                <li>
                                <a href="ui-badges.html">Badges</a>
                                </li>
                                <li>
                                <a href="ui-cards.html">Cards</a>
                                </li>
                                <li>
                                <a href="ui-carousels.html">Carousels</a>
                                </li>
                                <li>
                                <a href="ui-check-radio.html">
                                    <span>Check &amp; Radio</span>
                                </a>
                                </li>
                                <li>
                                <a href="ui-dropdowns.html">Dropdowns</a>
                                </li>
                                <li>
                                <a href="ui-grids.html">Grids</a>
                                </li>
                                <li>
                                <a href="ui-images.html">Images</a>
                                </li>
                                <li>
                                <a href="ui-list.html">List</a>
                                </li>
                                <li>
                                <a href="ui-modals.html">Modals</a>
                                </li>
                                <li>
                                <a href="ui-navs.html">Navs</a>
                                </li>
                                <li>
                                <a href="ui-navbar.html">Navbar</a>
                                </li>
                                <li>
                                <a href="ui-offcanvas.html">
                                    Offcanvas{" "}
                                    <span className="badge badge-soft-success ms-auto">
                                    New
                                    </span>
                                </a>
                                </li>
                                <li>
                                <a href="ui-paginations.html">Paginations</a>
                                </li>
                                <li>
                                <a href="ui-popover-tooltips.html">
                                    Popover &amp; Tooltips
                                </a>
                                </li>
                                <li>
                                <a href="ui-progress.html">Progress</a>
                                </li>
                                <li>
                                <a href="ui-spinners.html">Spinners</a>
                                </li>
                                <li>
                                <a href="ui-tabs-accordions.html">
                                    Tabs &amp; Accordions
                                </a>
                                </li>
                                <li>
                                <a href="ui-toasts.html">Toasts</a>
                                </li>
                                <li>
                                <a href="ui-typography.html">Typography</a>
                                </li>
                                <li>
                                <a href="ui-videos.html">Videos</a>
                                </li>
                            </ul>
                            </li>
                            <li>
                            <a href="javascript: void(0);">
                                <i className="ti-control-record" />
                                Advanced UI{" "}
                                <span className="menu-arrow left-has-menu">
                                <i className="mdi mdi-chevron-right" />
                                </span>
                            </a>
                            <ul className="nav-second-level" aria-expanded="false">
                                <li>
                                <a href="advanced-animation.html">Animation</a>
                                </li>
                                <li>
                                <a href="advanced-clipboard.html">Clip Board</a>
                                </li>
                                <li>
                                <a href="advanced-highlight.html">Highlight</a>
                                </li>
                                <li>
                                <a href="advanced-idle-timer.html">Idle Timer</a>
                                </li>
                                <li>
                                <a href="advanced-kanban.html">Kanban</a>
                                </li>
                                <li>
                                <a href="advanced-lightbox.html">Lightbox</a>
                                </li>
                                <li>
                                <a href="advanced-nestable.html">Nestable List</a>
                                </li>
                                <li>
                                <a href="advanced-rangeslider.html">Range Slider</a>
                                </li>
                                <li>
                                <a href="advanced-ratings.html">Ratings</a>
                                </li>
                                <li>
                                <a href="advanced-ribbons.html">Ribbons</a>
                                </li>
                                <li>
                                <a href="advanced-session.html">Session Timeout</a>
                                </li>
                                <li>
                                <a href="advanced-sweetalerts.html">Sweet Alerts</a>
                                </li>
                            </ul>
                            </li>
                            <li>
                            <a href="javascript: void(0);">
                                <i className="ti-control-record" />
                                Forms{" "}
                                <span className="menu-arrow left-has-menu">
                                <i className="mdi mdi-chevron-right" />
                                </span>
                            </a>
                            <ul className="nav-second-level" aria-expanded="false">
                                <li>
                                <a href="forms-advanced.html">Advance Elements</a>
                                </li>
                                <li>
                                <a href="forms-elements.html">Basic Elements</a>
                                </li>
                                <li>
                                <a href="forms-editors.html">Editors</a>
                                </li>
                                <li>
                                <a href="forms-uploads.html">File Upload</a>
                                </li>
                                <li>
                                <a href="forms-repeater.html">Repeater</a>
                                </li>
                                <li>
                                <a href="forms-validation.html">Validation</a>
                                </li>
                                <li>
                                <a href="forms-wizard.html">Wizard</a>
                                </li>
                                <li>
                                <a href="forms-x-editable.html">X Editable</a>
                                </li>
                            </ul>
                            </li>
                            <li>
                            <a href="javascript: void(0);">
                                <i className="ti-control-record" />
                                Charts{" "}
                                <span className="menu-arrow left-has-menu">
                                <i className="mdi mdi-chevron-right" />
                                </span>
                            </a>
                            <ul className="nav-second-level" aria-expanded="false">
                                <li>
                                <a href="charts-apex.html">Apex</a>
                                </li>
                                <li>
                                <a href="charts-chartjs.html">Chartjs</a>
                                </li>
                                <li>
                                <a href="charts-flot.html">Flot</a>
                                </li>
                                <li>
                                <a href="charts-morris.html">Morris</a>
                                </li>
                            </ul>
                            </li>
                            <li>
                            <a href="javascript: void(0);">
                                <i className="ti-control-record" />
                                Tables{" "}
                                <span className="menu-arrow left-has-menu">
                                <i className="mdi mdi-chevron-right" />
                                </span>
                            </a>
                            <ul className="nav-second-level" aria-expanded="false">
                                <li>
                                <a href="tables-basic.html">Basic</a>
                                </li>
                                <li>
                                <a href="tables-datatable.html">Datatables</a>
                                </li>
                                <li>
                                <a href="tables-editable.html">Editable</a>
                                </li>
                                <li>
                                <a href="tables-responsive.html">Responsive</a>
                                </li>
                            </ul>
                            </li>
                            <li>
                            <a href="javascript: void(0);">
                                <i className="ti-control-record" />
                                Icons{" "}
                                <span className="menu-arrow left-has-menu">
                                <i className="mdi mdi-chevron-right" />
                                </span>
                            </a>
                            <ul className="nav-second-level" aria-expanded="false">
                                <li>
                                <a href="icons-dripicons.html">Dripicons</a>
                                </li>
                                <li>
                                <a href="icons-feather.html">Feather</a>
                                </li>
                                <li>
                                <a href="icons-fontawesome.html">Font awesome</a>
                                </li>
                                <li>
                                <a href="icons-materialdesign.html">
                                    Material Design
                                </a>
                                </li>
                                <li>
                                <a href="icons-themify.html">Themify</a>
                                </li>
                                <li>
                                <a href="icons-typicons.html">Typicons</a>
                                </li>
                            </ul>
                            </li>
                            <li>
                            <a href="javascript: void(0);">
                                <i className="ti-control-record" />
                                Maps{" "}
                                <span className="menu-arrow left-has-menu">
                                <i className="mdi mdi-chevron-right" />
                                </span>
                            </a>
                            <ul className="nav-second-level" aria-expanded="false">
                                <li>
                                <a href="maps-google.html">Google Maps</a>
                                </li>
                                <li>
                                <a href="maps-leaflet.html">Leaflet Maps</a>
                                </li>
                                <li>
                                <a href="maps-vector.html">Vector Maps</a>
                                </li>
                            </ul>
                            </li>
                            <li>
                            <a href="javascript: void(0);">
                                <i className="ti-control-record" />
                                Email Template{" "}
                                <span className="menu-arrow left-has-menu">
                                <i className="mdi mdi-chevron-right" />
                                </span>
                            </a>
                            <ul className="nav-second-level" aria-expanded="false">
                                <li>
                                <a href="email-templates-alert.html">Alert Email</a>
                                </li>
                                <li>
                                <a href="email-templates-basic.html">
                                    Basic Action Email
                                </a>
                                </li>
                                <li>
                                <a href="email-templates-billing.html">
                                    Billing Email
                                </a>
                                </li>
                            </ul>
                            </li>
                        </ul>
                        </li>
                        <li>
                        <a href="widgets.html">
                            <svg
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-layers align-self-center menu-icon"
                            >
                            <g>
                                <polygon points="12 2 2 7 12 12 22 7 12 2" />
                                <polyline points="2 17 12 22 22 17" />
                                <polyline points="2 12 12 17 22 12" />
                            </g>
                            </svg>
                            <span>Widgets</span>
                            <span className="badge badge-soft-success menu-arrow">
                            New
                            </span>
                        </a>
                        </li>
                        <li>
                        <a href="javascript: void(0);">
                            <svg
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-file-plus align-self-center menu-icon"
                            >
                            <g>
                                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                                <polyline points="14 2 14 8 20 8" />
                                <line x1={12} y1={18} x2={12} y2={12} />
                                <line x1={9} y1={15} x2={15} y2={15} />
                            </g>
                            </svg>
                            <span>Pages</span>
                            <span className="menu-arrow">
                            <i className="mdi mdi-chevron-right" />
                            </span>
                        </a>
                        <ul className="nav-second-level" aria-expanded="false">
                            <li className="nav-item">
                            <a className="nav-link" href="pages-blogs.html">
                                <i className="ti-control-record" />
                                Blogs
                            </a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link" href="pages-faqs.html">
                                <i className="ti-control-record" />
                                FAQs
                            </a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link" href="pages-pricing.html">
                                <i className="ti-control-record" />
                                Pricing
                            </a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link" href="pages-profile.html">
                                <i className="ti-control-record" />
                                Profile
                            </a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link" href="pages-starter.html">
                                <i className="ti-control-record" />
                                Starter Page
                            </a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link" href="pages-timeline.html">
                                <i className="ti-control-record" />
                                Timeline
                            </a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link" href="pages-treeview.html">
                                <i className="ti-control-record" />
                                Treeview
                            </a>
                            </li>
                        </ul>
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
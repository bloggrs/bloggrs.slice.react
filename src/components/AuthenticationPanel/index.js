import { Link } from "react-router-dom";

const AuthenticationPanel = props => {
    return (
        <div className="container">
            <div className="row vh-100 d-flex justify-content-center">
            <div className="col-12 align-self-center">
                <div className="row">
                <div className="col-lg-5 mx-auto">
                    <div className="card">
                    <div className="card-body p-0 auth-header-box">
                        <div className="text-center p-3">
                        <Link to="/"  className="logo logo-admin">
                            <img src="assets/images/logo-sm-dark.png" height={50} alt="logo" className="auth-logo" />
                        </Link>
                        <h4 className="mt-3 mb-1 fw-semibold text-white font-18">Let's Get Started Dastone</h4>   
                        <p className="text-muted  mb-0">Sign in to continue to Dastone.</p>  
                        </div>
                    </div>
                    <div className="card-body p-0">
                        <ul className="nav-border nav nav-pills" role="tablist">
                        <li className="nav-item">
                            <a className="nav-link active fw-semibold" data-bs-toggle="tab" href="#LogIn_Tab" role="tab">Log In</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link fw-semibold" data-bs-toggle="tab" href="#Register_Tab" role="tab">Register</a>
                        </li>
                        </ul>
                        {/* Tab panes */}
                        <div className="tab-content">
                            { props.children }
                        </div>
                    </div>{/*end card-body*/}
                    <div className="card-body bg-light-alt text-center">
                        <span className="text-muted d-none d-sm-inline-block">Bloggrs © 2022</span>                                            
                    </div>
                    </div>{/*end card*/}
                </div>{/*end col*/}
                </div>{/*end row*/}
            </div>{/*end col*/}
            </div>{/*end row*/}
        </div>
    )
}

export default AuthenticationPanel;
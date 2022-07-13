import { useEffect } from "react";
import { useLocation } from "react-router";

export default props => {
    return (
        <div className="container">
        <div className="row vh-100 d-flex justify-content-center">
          <div className="col-12 align-self-center">
            <div className="row">
              <div className="col-lg-5 mx-auto">
                <div className="">
                  <div className="card-body p-0 auth-header-box">
                    <div className="text-center p-3">
                      <a href="index.html" className="logo logo-admin">
                        <img src="assets/images/logo-sm-dark.png" height={50} alt="logo" className="auth-logo" />
                      </a>
                      <h4 className="mt-3 mb-1 fw-semibold text-white font-18">Oops! Sorry page does not found</h4>   
                      <p className="text-muted  mb-0">Back to dashboard of Dastone.</p>  
                    </div>
                  </div>
                  <div className="card-body">
                    <div className="ex-page-content text-center">
                      <img src="assets/images/error.svg" alt={0} className height={170} />
                      <h1 className="mt-5 mb-4">404!</h1>  
                      <h5 className="font-16 text-muted mb-5">Somthing went wrong</h5>                                    
                    </div>          
                    <a className="btn btn-primary w-100 waves-effect waves-light" href="index.html">Back to Dashboard <i className="fas fa-redo ms-1" /></a>                         
                  </div>
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
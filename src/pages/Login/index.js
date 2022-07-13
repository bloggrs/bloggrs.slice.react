import React from "react";

export default props => {
    return (
<div className="container">
        <div className="row vh-100 d-flex justify-content-center">
          <div className="col-12 align-self-center">
            <div className="row">
              <div className="col-lg-5 mx-auto">
                <div className="card">
                  <div className="card-body p-0 auth-header-box">
                    <div className="text-center p-3">
                      <a href="index.html" className="logo logo-admin">
                        <img src="assets/images/logo-sm-dark.png" height={50} alt="logo" className="auth-logo" />
                      </a>
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
                      <div className="tab-pane active p-3" id="LogIn_Tab" role="tabpanel">                                        
                        <form className="form-horizontal auth-form" action="index.html">
                          <div className="form-group mb-2">
                            <label className="form-label" htmlFor="username">Username</label>
                            <div className="input-group">                                                                                         
                              <input type="text" className="form-control" name="username" id="username" placeholder="Enter username" />
                            </div>                                    
                          </div>{/*end form-group*/} 
                          <div className="form-group mb-2">
                            <label className="form-label" htmlFor="userpassword">Password</label>                                            
                            <div className="input-group">                                  
                              <input type="password" className="form-control" name="password" id="userpassword" placeholder="Enter password" />
                            </div>                               
                          </div>{/*end form-group*/} 
                          <div className="form-group row my-3">
                            <div className="col-sm-6">
                              <div className="custom-control custom-switch switch-success">
                                <input type="checkbox" className="custom-control-input" id="customSwitchSuccess" />
                                <label className="form-label text-muted" htmlFor="customSwitchSuccess">Remember me</label>
                              </div>
                            </div>{/*end col*/} 
                            <div className="col-sm-6 text-end">
                              <a href="auth-recover-pw.html" className="text-muted font-13"><i className="dripicons-lock" /> Forgot password?</a>                                    
                            </div>{/*end col*/} 
                          </div>{/*end form-group*/} 
                          <div className="form-group mb-0 row">
                            <div className="col-12">
                              <button className="btn btn-primary w-100 waves-effect waves-light" type="button">Log In <i className="fas fa-sign-in-alt ms-1" /></button>
                            </div>{/*end col*/} 
                          </div> {/*end form-group*/}                           
                        </form>{/*end form*/}
                        <div className="m-3 text-center text-muted">
                          <p className="mb-0">Don't have an account ?  <a href="auth-register.html" className="text-primary ms-2">Free Resister</a></p>
                        </div>
                        <div className="account-social">
                          <h6 className="mb-3">Or Login With</h6>
                        </div>
                        <div className="btn-group w-100">
                          <button type="button" className="btn btn-sm btn-outline-secondary">Facebook</button>
                          <button type="button" className="btn btn-sm btn-outline-secondary">Twitter</button>
                          <button type="button" className="btn btn-sm btn-outline-secondary">Google</button>
                        </div>
                      </div>
                      <div className="tab-pane px-3 pt-3" id="Register_Tab" role="tabpanel">
                        <form className="form-horizontal auth-form" action="index.html">
                          <div className="form-group mb-2">
                            <label className="form-label" htmlFor="username">Username</label>
                            <div className="input-group">                                                                                         
                              <input type="text" className="form-control" name="username" id="username" placeholder="Enter username" />
                            </div>                                    
                          </div>{/*end form-group*/} 
                          <div className="form-group mb-2">
                            <label className="form-label" htmlFor="useremail">Email</label>
                            <div className="input-group">                                                                                         
                              <input type="email" className="form-control" name="email" id="useremail" placeholder="Enter Email" />
                            </div>                                    
                          </div>{/*end form-group*/}
                          <div className="form-group mb-2">
                            <label className="form-label" htmlFor="userpassword">Password</label>                                            
                            <div className="input-group">                                  
                              <input type="password" className="form-control" name="password" id="userpassword" placeholder="Enter password" />
                            </div>                               
                          </div>{/*end form-group*/} 
                          <div className="form-group mb-2">
                            <label className="form-label" htmlFor="conf_password">Confirm Password</label>                                            
                            <div className="input-group">                                   
                              <input type="password" className="form-control" name="conf-password" id="conf_password" placeholder="Enter Confirm Password" />
                            </div>
                          </div>{/*end form-group*/}
                          <div className="form-group mb-2">
                            <label className="form-label" htmlFor="mo_number">Mobile Number</label>                                            
                            <div className="input-group">                                 
                              <input type="text" className="form-control" name="mobile number" id="mo_number" placeholder="Enter Mobile Number" />
                            </div>                               
                          </div>{/*end form-group*/}  
                          <div className="form-group row my-3">
                            <div className="col-sm-12">
                              <div className="custom-control custom-switch switch-success">
                                <input type="checkbox" className="custom-control-input" id="customSwitchSuccess2" />
                                <label className="form-label text-muted" htmlFor="customSwitchSuccess2">You agree to the Dastone <a href="#" className="text-primary">Terms of Use</a></label>
                              </div>
                            </div>{/*end col*/}                                             
                          </div>{/*end form-group*/} 
                          <div className="form-group mb-0 row">
                            <div className="col-12">
                              <button className="btn btn-primary w-100 waves-effect waves-light" type="button">Register <i className="fas fa-sign-in-alt ms-1" /></button>
                            </div>{/*end col*/} 
                          </div> {/*end form-group*/}                           
                        </form>{/*end form*/}
                        <p className="my-3 text-muted">Already have an account ?<a href="auth-login.html" className="text-primary ms-2">Log in</a></p>                                                    
                      </div>
                    </div>
                  </div>{/*end card-body*/}
                  <div className="card-body bg-light-alt text-center">
                    <span className="text-muted d-none d-sm-inline-block">Mannatthemes © 2022</span>                                            
                  </div>
                </div>{/*end card*/}
              </div>{/*end col*/}
            </div>{/*end row*/}
          </div>{/*end col*/}
        </div>{/*end row*/}
      </div>
    )
}
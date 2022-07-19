import { Link } from "react-router-dom";

const RegisterPanel = () => {
    return (
            <div className="tab-pane px-3 pt-3" id="Register_Tab" role="tabpanel">
            <form className="form-horizontal auth-form" action="index.html">
                <div className="form-group mb-2">
                <label className="form-label" htmlFor="username">Username</label>
                <div className="input-group">                                                                                         
                    <input type="text" className="form-control" name="username" id="username" placeholder="Enter username" />
                </div>                                    
                </div>
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
                </div>
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
                </div> 
                <div className="form-group row my-3">
                <div className="col-sm-12">
                    <div className="custom-control custom-switch switch-success">
                    <input type="checkbox" className="custom-control-input" id="customSwitchSuccess2" />
                    <label className="form-label text-muted" htmlFor="customSwitchSuccess2">You agree to the Dastone <a href="#" className="text-primary">Terms of Use</a></label>
                    </div>
                </div>                                            
                </div>
                <div className="form-group mb-0 row">
                <div className="col-12">
                    <button className="btn btn-primary w-100 waves-effect waves-light" type="button">Register <i className="fas fa-sign-in-alt ms-1" /></button>
                </div>
                </div>                           
            </form>{/*end form*/}
            <p className="my-3 text-muted">Already have an account ?<a href="auth-login.html" className="text-primary ms-2">Log in</a></p>                                                    
            </div>
    )
}

export default RegisterPanel;
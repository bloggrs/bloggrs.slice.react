import { Formik } from "formik";
import { Link } from "react-router-dom";

const LoginPanel = ({ onSuccess }) => {
    return (
        <div className="tab-pane active p-3" id="LogIn_Tab" role="tabpanel">      
            <Formik
                initialValues={{ username: '', password: '' }}
                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                    }, 400);
                }}
                >
                {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting,
                    /* and other goodies */
                }) => (
                    <form onSubmit={handleSubmit} className="form-horizontal auth-form" action="index.html">
                        <div className="form-group mb-2">
                        <label className="form-label" htmlFor="username">Username</label>
                        <div className="input-group">                                                                                         
                            <input 
                                className="form-control"
                                type="text"
                                name="username"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.username}
                            />
                        </div>
                        </div>
                        <div className="form-group mb-2">
                            <label className="form-label" htmlFor="userpassword">Password</label>                                            
                            <div className="input-group">
                                <input 
                                    className="form-control"
                                    type="password"
                                    name="password"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.password}
                                />
                            </div>
                        </div>
                        <div className="form-group row my-3">
                        <div className="col-sm-6">
                            <div className="custom-control custom-switch switch-success">
                            <input type="checkbox" className="custom-control-input" id="customSwitchSuccess" />
                            <label className="form-label text-muted" htmlFor="customSwitchSuccess">Remember me</label>
                            </div>
                        </div>
                        <div className="col-sm-6 text-end">
                            <a href="auth-recover-pw.html" className="text-muted font-13"><i className="dripicons-lock" /> Forgot password?</a>                                    
                        </div>
                        </div>
                        <div className="form-group mb-0 row">
                        <div className="col-12">
                            <button type="submit" disabled={isSubmitting} className="btn btn-primary w-100 waves-effect waves-light">Log In <i className="fas fa-sign-in-alt ms-1" /></button>
                        </div>
                        </div>                           
                    </form>
                )}
            </Formik>                                  
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
    )
}

export default LoginPanel;
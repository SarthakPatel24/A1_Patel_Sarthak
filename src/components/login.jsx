import React, { Component } from 'react';

const Login = () => {
    return ( 
        <div className="row justify-content-center" >
            <div className="col-xl-3 col-md-4 col-sm-6 col-12">
                <h1 className="text-center mt-5">Login</h1>
                <div className="mt-4">
                    <form>
                        <div className="form-group">
                            <input type="text" className="form-control" id="email" placeholder="Email"/>
                            <small id="emailHelp" className="form-text text-danger"></small>
                        </div>
                        <div className="form-group ">
                            <input type="password" className="form-control" id="password" placeholder="Password"/>
                            <small id="passwordHelp" className="form-text text-danger"></small>
                        </div>
                        <div className="text-center mt-5">
                            <button type="submit" className="btn btn-primary" placeholder="Submit">Submit</button>
                        </div>
                        <div className="text-center mt-5 ">
                            <p className="mb-sm-0">Forgot Password ?... <a href="#">Click Here</a></p>
                        </div>    
                        <div className="text-center">
                            <p>Don't Have an Account ?... <a href="/signup">Register Here</a></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>);
}
 
export default Login;
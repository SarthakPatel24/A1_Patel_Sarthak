import React, { useState } from 'react';
import {validateName,validateEmail,validatePassword,validateConfirmPass} from '../assets/validations/signupValidations';

const Signup = () => {
    
    const [user,setUser] = useState();
    const [formErr, setFormErrs] = useState({FirstNameError:"",LastNameError:"",EmailError:"",PasswordError:"",ConfirmPasswordError:""});


    function handleChange(e) {
        
        const {id, value} = e.target;

        switch(id){
            case 'firstname':
                if(validateName(value)){
                    setFormErrs({...formErr,FirstNameError: "First Name should not contain numbers or symbols"})
                    
                }else{
                    delete formErr.FirstNameError
                }
                setUser({...user, firstName: value})
                break;
            
            case 'lastname':
                if(validateName(value)){
                    setFormErrs({...formErr,LastNameError: "Last Name should not contain numbers or symbols"})
                }else{
                    delete formErr.LastNameError
                }
                setUser({...user, lastname: value})
                break;
            
            case 'email':
                if(validateEmail(value)){
                    setFormErrs({...formErr,EmailError: "Enter a valid Email (eg: a@a.com)"})
                }else{
                    delete formErr.EmailError
                }
                setUser({...user,email: value})
                break;

            case 'password':
                if(validatePassword(value)){
                    setFormErrs({...formErr,PasswordError: "Password should contain minimum 8 Characters , Atleast One Letter and One Symbol"})
                }else{
                    delete formErr.PasswordError
                }
                setUser({...user,password: value})
                break;

            case 'cnfPassword':
                if(validateConfirmPass(user.password,value)){
                    setFormErrs({...formErr,ConfirmPasswordError: "Re-entered Password Does not matches with previous one"})
                }else{
                    delete formErr.ConfirmPasswordError
                }
                setUser({...user, confirmpassword: value})
                break;
            
            default:
                break;
        }
    }

    
    return ( 
    <div className="row justify-content-center">
        <div className="col-md-6 col-sm-8">
            <h1 className="text-center mt-5">Signup</h1>
            <div className="mt-4">
                <form>
                    <div className="row">
                        <div className="col-md-6 col-sm-12 form-group">
                            <input type="text" className="form-control" id="firstname" placeholder="First Name" onBlur={handleChange} onChange={handleChange}/>
                            <small id="firstnameHelp" className="form-text text-danger">{formErr.FirstNameError}</small>
                        </div>
                        <div className="col-md-6 col-sm-12 form-group">
                            <input type="text" className="form-control" id="lastname" placeholder="Last Name" onBlur={handleChange} onChange={handleChange}/>
                            <small id="lastnameHelp" className="form-text text-danger">{formErr.LastNameError}</small>
                        </div>
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" id="email" placeholder="Email" onBlur={handleChange} onChange={handleChange}/>
                        <small id="emailHelp" className="form-text text-danger">{formErr.EmailError}</small>
                    </div>
                    <div className="form-group">
                        <input type="password" className="form-control" id="password" placeholder="Password" onBlur={handleChange} onChange={handleChange}/>
                        <small id="passwordHelp" className="form-text text-danger">{formErr.PasswordError}</small>
                    </div>
                    <div className="form-group">
                        <input type="password" className="form-control" id="cnfPassword" placeholder="Confirm Password" onBlur={handleChange} onChange={handleChange}/>
                        <small id="cnfPasswordHelp" className="form-text text-danger">{formErr.ConfirmPasswordError}</small>
                    </div>
                    <div className="text-center mt-5">
                            <button type="submit" className="btn btn-primary" placeholder="Submit" disabled={Object.entries(formErr || {}).length >0}>Submit</button>
                    </div>
                </form>
            </div>
        </div>
    </div> 
    );
}
 
export default Signup;
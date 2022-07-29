import axios from "axios";
import React, {useState} from "react"
import {useNavigate} from 'react-router-dom';
import LoginHeader from '../../components/Login_Header.js'
import AuthService from '../../services/auth-service';

const Login = (props) => {

    const navigate = useNavigate();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [userType, setUserType] = useState('admin');

    const adminLogin = (e) => {
        e.preventDefault();
        AuthService.login(username, password).then(
            () => {
                navigate('/admin')
                window.location.reload();
            },
            error => {
                const resMessage = (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                  error.message ||
                  error.toString();

                  alert("Incorrect username or password");
            }
        )
        
    }

    const studentLogin = (e) => {
        e.preventDefault();
        AuthService.login(username, password).then(
            () => {
                navigate('/student')
                window.location.reload();
            },
            error => {
                const resMessage = (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                  error.message ||
                  error.toString();

                  alert("Incorrect username or password");
            }
        )
    }

    return (
        <div>
        <LoginHeader />
        <div className="container">
            <div className="row">

                {/* left hand part */}
                
                <div className="Auth-form-container col" >
                    <form className="Auth-form">
                        <div className="Auth-form-content" style={{height:'270px'}}>
                            <h3 className="Auth-form-title">Select type of user</h3>
                            <div style={{padding:"50px"}} onChange={(value) => setUserType(value.target.value)}>
                                <input type="radio" className="btn-check" id="option1" value="admin" name="userType" defaultChecked/>
                                <label style={{marginRight: 10}} className="btn btn-sm btn-secondary p-4" for="option1">ADMIN</label>
                                <input type="radio" className="btn-check" id="option2" value="student" name="userType"/>
                                <label className="btn btn-sm btn-secondary p-4 " for="option2">STUDENT</label>
                            </div>
                        </div>
                    </form>
                </div>

                {/* right hand part */}
                
                {userType === "admin" ? 
                    <div className="Auth-form-container col" style={{textAlign: 'left'}}>
                        <form className="Auth-form">
                            <div className="Auth-form-content">
                            <h3 className="Auth-form-title">Admin Sign In</h3>
                            <div className="form-group mt-3">
                                <label>Username</label>
                                <input
                                    type="text"
                                    className="form-control mt-1"
                                    placeholder="Enter username"
                                    value={username}
                                    onChange={(value) => setUsername(value.target.value)}
                                />
                            </div>
                            <div className="form-group mt-3">
                                <label>Password</label>
                                <input
                                    type="password"
                                    className="form-control mt-1"
                                    placeholder="Enter password"
                                    value={password}
                                    onChange={(value) => setPassword(value.target.value)}
                                />
                            </div>
                            <br/>
                            <div className="d-grid gap-2 mt-3">
                                <button type="submit" className="btn btn-primary" onClick={adminLogin}>
                                    Sign in
                                </button>
                            </div>
                                <p className="forgot-password text-right mt-2"></p>
                            </div>
                        </form>
                    </div> 
                : 
                    <div className="Auth-form-container col" style={{textAlign: 'left'}}>
                        <form className="Auth-form">
                            <div className="Auth-form-content">
                            <h3 className="Auth-form-title">Student Sign In</h3>
                            <div className="form-group mt-3">
                                <label>Username</label>
                                <input
                                    type="text"
                                    className="form-control mt-1"
                                    placeholder="Enter username"
                                    value={username}
                                    onChange={(value) => setUsername(value.target.value)}
                                />
                            </div>
                            <div className="form-group mt-3">
                                <label>Password</label>
                                <input
                                    type="password"
                                    className="form-control mt-1"
                                    placeholder="Enter password"
                                    value={password}
                                    onChange={(value) => setPassword(value.target.value)}
                                />
                            </div>
                            <br/>
                            <div className="d-grid gap-2 mt-3">
                                <button type="submit" className="btn btn-primary" onClick={studentLogin}>
                                    Sign in
                                </button>
                            </div>
                                <p className="forgot-password text-right mt-2"></p>
                            </div>
                        </form>
                    </div>
                }
                
            </div>
        </div>
        </div>
    )
}

export default Login;
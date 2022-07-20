import React, {useState} from "react"

const Login = (props) => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [userType, setUserType] = useState('admin');

    return (
        <div className="container">

            {/* left hand part */}

            <div className="row">
                <div className="Auth-form-container col">
                    <form className="Auth-form">
                        <div className="Auth-form-content">
                            <h3 className="Auth-form-title">Select type of user</h3>
                            <div onChange={(value) => setUserType(value.target.value)}>
                                <input type="radio" value="admin" name="userType" defaultChecked /> Admin
                                <input type="radio" value="student" name="userType" /> Student
                            </div>
                        </div>
                    </form>
                </div>

                {/* right hand part */}
                
                {userType === "admin" ? 
                    <div className="Auth-form-container col">
                        <form className="Auth-form">
                            <div className="Auth-form-content">
                            <h3 className="Auth-form-title">Admin Sign In</h3>
                            <div className="form-group mt-3">
                                <label>Username address</label>
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
                            <div className="d-grid gap-2 mt-3">
                                <button type="submit" className="btn btn-primary">
                                    Submit
                                </button>
                            </div>
                                <p className="forgot-password text-right mt-2"></p>
                            </div>
                        </form>
                    </div> 
                : 
                    <div className="Auth-form-container col">
                        <form className="Auth-form">
                            <div className="Auth-form-content">
                            <h3 className="Auth-form-title">Student Sign In</h3>
                            <div className="form-group mt-3">
                                <label>Username address</label>
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
                            <div className="d-grid gap-2 mt-3">
                                <button type="submit" className="btn btn-primary">
                                    Submit
                                </button>
                            </div>
                                <p className="forgot-password text-right mt-2"></p>
                            </div>
                        </form>
                    </div>
                }
                
            </div>
        </div>
    )
}

export default Login;
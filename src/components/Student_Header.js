import React from "react";
import AuthService from "../services/auth-service";

const StudentHeader = () => {

    const logOut = () => {
        AuthService.logout()
    }

    return <div>
        <header>
            <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                <div><a style={{margin:20}} className="navbar-brand">Student Information System</a></div>
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item" style={{color: 'grey'}}>
                        <a class="nav-link active" aria-current="page" href="http://localhost:3000/student">Home</a>
                    </li>
                    <li class="nav-item" style={{color: 'grey'}}>
                        <a class="nav-link active" aria-current="page" href="http://localhost:3000/student/post-query">Post queries</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="http://localhost:3000/student/request-leave">Request for Leave</a>
                    </li>
                    <li className="nav-item">
                        <a onClick={() => logOut()} className="nav-link active" aria-current="page" href="http://localhost:3000">Logout</a>
                    </li>
                </ul>
            </nav>
        </header>
    </div>

}

export default StudentHeader;
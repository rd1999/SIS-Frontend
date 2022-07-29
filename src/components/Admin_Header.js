import React from "react";

const AdminHeader = () => {

    return <div>
        <header>
            <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                <div><a style={{margin:20}} className="navbar-brand">Student Information System</a></div>
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item" style={{color: 'grey'}}>
                        <a className="nav-link active" aria-current="page" href="http://localhost:3000/admin">Home</a>
                    </li>
                    <li className="nav-item" style={{color: 'grey'}}>
                        <a className="nav-link active" aria-current="page" href="http://localhost:3000/admin/add-student">Add Student</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="http://localhost:3000/admin/view-student-queries">View Queries</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="http://localhost:3000/admin/view-leave-applications">View leave applications</a>
                    </li>
                </ul>
            </nav>
        </header>
    </div>

}

export default AdminHeader;
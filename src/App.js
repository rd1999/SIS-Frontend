import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"

import './App.css';
import AddStudent from "./pages/admin/Add_Student";
import AdminHome from "./pages/admin/Admin_Home";
import Login from './pages/shared/Login';
import PostQuery from "./pages/student/Post_Query";
import RequestLeave from "./pages/student/Request_Leave";
import AdminHeader from "./components/Admin_Header";
import StudentHome from "./pages/student/Student_Home";
import UpdateStudent from "./pages/admin/Update_Student";
import ViewLeaveApplications from "./pages/admin/View_Leave_Applications";
import ViewStudentQueries from "./pages/admin/View_Student_Queries";
import ViewStudent from "./pages/admin/View_Student";
import StudentHeader from "./components/Student_Header";
import LoginHeader from "./components/Login_Header";
import QueryResponse from "./pages/admin/Query_Response";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <LoginHeader /> */}
        <div className=''>
          <Routes>

            <Route path="/" element={<Login />} />

            {/* Admin routes */}

            <Route path="/admin/add-student" element={<AddStudent />} />
            <Route path="/admin" element={<AdminHome />} />
            <Route path="/admin/update-student/:id" element={<UpdateStudent />} />
            <Route path="/admin/view-leave-applications" element={<ViewLeaveApplications />} />
            <Route path="/admin/view-student-queries" element={<ViewStudentQueries />} />
            <Route path="/admin/view-student/:id" element={<ViewStudent />} />
            <Route path="/admin/view-student-queries/:id" element={<QueryResponse />} />

            {/* Student routes */}

            <Route path="/student/post-query" element={<PostQuery />} />
            <Route path="/student/request-leave" element={<RequestLeave />} />
            <Route path="/student" element={<StudentHome />} />
              
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;

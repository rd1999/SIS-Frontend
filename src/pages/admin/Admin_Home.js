import React, {useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import AdminHeader from '../../components/Admin_Header';
import axios from 'axios';
import UserService from '../../services/user-service';
import authHeader from '../../services/auth-header';

const AdminHome = () => {

    const [students, setStudents] = useState([]);
    const navigate = useNavigate();

    const getStudents = async () => {
        let {data} = await axios.get('http://localhost:8181/api/v1/students', {headers: authHeader()})
        console.log(data);
        setStudents(data);
      };

    useEffect(() => {
        UserService.getAdminBoard().then(
            res => {
                if(res.data === "admin"){
                    getStudents();
                }
                else{
                    alert("You are not authenticated to view this page")
                }
            },
            error => {
                alert("You are not authenticated as admin")
                navigate('/student')
            }
        )
        // getStudents();
    },[]);

    const editStudent = (id) => {
        navigate(`/admin/update-student/${id}`);
    }

    const viewStudentDetails = (id) => {
        navigate(`/admin/view-student/${id}`);
    }

    const deleteStudent = async (id) => {
        await axios.delete(`http://localhost:8181/api/v1/students/${id}`, {headers: authHeader()}).then((res) => navigate('/admin'));
        window.location.reload(false);
        
    }

    return <div>
        <AdminHeader />
        <div style={{marginTop: 30,marginLeft: 100, marginRight: 100 ,height: '91vh'}}>
            <h2 className='text-center'>Students List</h2>
            <br></br>
            <div className='row' style={{backgroundColor: '#F1EEE9'}}>
                <table className='table table-striped table-bordered'> 
                    <thead>
                        <tr>
                            <th>Student Id</th>
                            <th>Student First Name</th>
                            <th>Student Last Name</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            students.map(
                                student => 
                                <tr key={student.id}>
                                    <td>{student.id}</td>
                                    <td>{student.first_name}</td>
                                    <td>{student.last_name}</td>
                                    <td>
                                        <button onClick={() => viewStudentDetails(student.id)} className="btn btn-info">View Details</button>
                                        <button style={{marginLeft: 10}} onClick={() => editStudent(student.id)} className="btn btn-info">Update</button>
                                        <button style={{marginLeft: 10}} onClick={() => deleteStudent(student.id)} className="btn btn-danger">Delete</button>
                                        
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    </div>
}

export default AdminHome;
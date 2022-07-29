import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import AdminHeader from "../../components/Admin_Header";
import '../../css/View_Student.css';
import authHeader from "../../services/auth-header";
import UserService from "../../services/user-service";


const ViewStudent = () => {

    const [studentData,setStudentData] = useState({});

    const id = useParams();

    const navigate = useNavigate();

    const getStudent = async () => {

        const {data} = await axios.get(`http://localhost:8181/api/v1/students/${id.id}`, {headers: authHeader()});
        const studentData = 
        {
            id: data.id,
            firstName: data.first_name,
            lastName: data.last_name,
            studentClass: data.cls,
            age: data.age,
            address: data.address,
            phNo: data.phNo,
            gender: data.gender,
            email: data.email
        }
        setStudentData(studentData);

    }

    UserService.getAdminBoard().then(
        res => {
            if(res.data === "admin"){
                getStudent();
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

    return <div>
        <AdminHeader />
        <div style={{marginTop: '-30px', height: '99.1vh'}} className= "container">
            <div className='col'>
                <div className="Auth-form-container row" >
                    <form className="">
                    <h1 className="Auth-form-title" style={{marginBottom: '-20px'}}>Student Profile</h1>  
 
                    <div className='col'>
                        <table class ="Auth-form-content studentTable">
                            <tbody>
                                <>
                                    <tr>
                                        <td>ID </td>
                                        <td>{studentData.id}</td>
                                    </tr>
                                    <tr>
                                        <td>First name </td>
                                        <td>{studentData.firstName}</td>
                                    </tr>
                                    <tr>
                                        <td>Last name</td>
                                        <td>{studentData.lastName}</td>
                                    </tr>
                                    <tr>
                                        <td>Class</td>
                                        <td>{studentData.studentClass}</td>
                                    </tr>
                                    <tr>
                                        <td>Age</td>
                                        <td>{studentData.age}</td>
                                    </tr>
                                    <tr>
                                        <td>Gender</td>
                                        <td>{studentData.gender}</td>
                                    </tr>
                                    <tr>
                                        <td>Contact Number</td>
                                        <td>{studentData.phNo}</td>
                                    </tr>
                                    <tr>
                                        <td>Email ID</td>
                                        <td>{studentData.email}</td>
                                    </tr>
                                    <tr>
                                        <td>Address</td>
                                        <td>{studentData.address}</td>
                                    </tr>
                                </>
                            </tbody>
                        </table>
                    </div>
                </form>
            </div>
        </div>        
        </div>  
    </div>
}

export default ViewStudent;
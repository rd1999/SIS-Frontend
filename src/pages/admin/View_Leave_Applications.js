import React, {useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import AdminHeader from '../../components/Admin_Header';
import axios from 'axios';
import authHeader from '../../services/auth-header';
import UserService from "../../services/user-service";

const ViewLeaveApplications = () => {

    const [leaves, setLeaves] = useState([]);
    const navigate = useNavigate();

    const getLeaves = async () => {
        const { data } = await axios.get('http://localhost:8181/api/v1/get-leave-applications', {headers: authHeader()});
        const leaves = [];
        data.map((e) => {
            if(e.responded === false){
                leaves.push(e)
            }
        });

        // data = [
        //     {
        //         id: 1,
        //         studentId: 1,
        //         name: 'Ritwik Das',
        //         class: 5,
        //         title: 'ncjdkn',
        //         description: 'njewnjdewknjkewnjkwenjfkew'
        //     },
            
        // ]
        setLeaves(leaves);
      };

      useEffect(() => {

        UserService.getAdminBoard().then(
            res => {
                if(res.data === "admin"){
                    getLeaves();
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

      },[])



    const approve = async (id) => {
        const updatedLeave = {
            "studId" : 1,
            "response" : true,
            "studName" : "Ritwik Das",
            "title" : "abcd",
            "desc": "abcd",
            "start" : "fnwjf",
            "end" : "edbwh" ,
            "responded" : true
        }
        await axios.patch(`http://localhost:8181/api/v1/leave-response/${id}`, updatedLeave, {headers: authHeader()})
        navigate('/admin')
    }

    const disprove = async (id) => {
        const updatedLeave = {
            "studId" : 1,
            "response" : false,
            "studName" : "Ritwik Das",
            "title" : "abcd",
            "desc": "abcd",
            "start" : "fnwjf",
            "end" : "edbwh" ,
            "responded" : true
        }
        await axios.patch(`http://localhost:8181/api/v1/leave-response/${id}`, updatedLeave, {headers: authHeader()})
        navigate('/admin')
    }

    return <div>
        <AdminHeader />
        <div style={{marginTop: 30,marginLeft: 100, marginRight: 100 ,height: '91vh'}}>
            <h2 className='text-center'>List of leave applications</h2>
            <br></br>
            <div className='row' style={{backgroundColor: '#F1EEE9'}}>
                <table className='table table-striped table-bordered'> 
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Student Id</th>
                            <th>Name</th>
                            <th>Title</th>
                            <th>Description</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            leaves.map(
                                leave => 
                                <tr key={leave.id}>
                                    <td>{leave.id}</td>
                                    <td>{leave.studId}</td>
                                    <td>{leave.studName}</td>
                                    <td>{leave.title}</td>
                                    <td>{leave.desc}</td>
                                    <td>
                                        <button onClick={() => approve(leave.id)} className="btn btn-info">Approve</button>
                                        <button style={{marginLeft: 10}} onClick={() => disprove(leave.id)} className="btn btn-danger">Disprove</button>
                                        
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

export default ViewLeaveApplications;
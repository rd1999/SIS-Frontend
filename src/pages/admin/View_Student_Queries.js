//import React from "react";
import React, {useEffect, useState} from 'react';
import AdminHeader from "../../components/Admin_Header";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import authHeader from '../../services/auth-header';
import UserService from "../../services/user-service";

    const ViewStudentQueries = () => {


        const [queries, setQueries] = useState([]);
        const navigate = useNavigate();
    
        const getQueries = async () => {
            const { data } = await axios.get('http://localhost:8181/api/v1/get-queries', {headers: authHeader()});
            const queries = [];
            data.map((e) => {
                if(e.responded === false){
                    queries.push(e)
                }
            });
            // const queries = [
            //     {
            //         id: data.id,
            //         studentId: data.stud_id,
            //         name: data.stud_name,
            //         title: data.title,
            //         description: data.description
            //     },
                
            // ]
            setQueries(queries);
          };

          useEffect(() => {

            UserService.getAdminBoard().then(
                res => {
                    if(res.data === "admin"){
                        getQueries();
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
    
        const viewQueries = (id) => {
            navigate(`/admin/view-student-queries/${id}`);
        }

        return <div>
            <AdminHeader />
            <div style={{marginTop: 30,marginLeft: 100, marginRight: 100 ,height: '91vh'}}>
                <h2 className='text-center'>List of Queries</h2>
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
                                queries.map(
                                    queries => 
                                    <tr key={queries.id}>
                                        <td>{queries.id}</td>
                                        <td>{queries.studId}</td>
                                        <td>{queries.studName}</td>
                                        <td>{queries.title}</td>
                                        <td>{queries.desc}</td>
                                        <td>
                                            <button onClick={() => viewQueries(queries.id)} className="btn btn-info">View</button>
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
    
export default ViewStudentQueries;

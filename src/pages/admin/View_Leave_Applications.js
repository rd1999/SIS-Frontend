import React, {useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import AdminHeader from '../../components/Admin_Header';
// import axios from 'axios';

const ViewLeaveApplications = () => {

    const [leaves, setLeaves] = useState([]);
    const navigate = useNavigate();

    const getLeaves = () => {
        // const { data } = await axios.get('http://localhost:8181/api/v1/employees');
        // console.log(data);
        const data = [
            {
                id: 1,
                studentId: 1,
                name: 'Ritwik Das',
                class: 5,
                title: 'ncjdkn',
                description: 'njewnjdewknjkewnjkwenjfkew'
            },
            
        ]
        setLeaves(data);
      };

    useEffect(() => {
        getLeaves();
    },[]);

    const approve = (id) => {
        // navigate(`/admin/update-student`);
    }

    const disprove = (id) => {
        // navigate(`/admin/view-student`);
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
                            <th>Class</th>
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
                                    <td>{leave.studentId}</td>
                                    <td>{leave.name}</td>
                                    <td>{leave.class}</td>
                                    <td>{leave.title}</td>
                                    <td>{leave.description}</td>
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
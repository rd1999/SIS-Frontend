import React, {useState, useEffect} from "react"
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import StudentHeader from "../../components/Student_Header";
import axios from 'axios';
import {useNavigate} from 'react-router-dom'
import authHeader from "../../services/auth-header";
import UserService from "../../services/user-service";

const RequestLeave = (props) => {

    const [studId, setStudId] = useState('');
    const [studName, setStudName] = useState('');
    const [reasonTitle, setReasonTitle] = useState('');
    const [reasonDescription, setReasonDescription] = useState('');
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    const navigate = useNavigate();

    const requestLeave = (e) => {
        e.preventDefault();
        const leaveDetails = {
            "studId" : studId,
            "studName" : studName,
            "title" : reasonTitle,
            "desc" : reasonDescription,
            "start" : startDate,
            "end" : endDate
        }
        axios.post('http://localhost:8182/api/v1/apply-leave', leaveDetails, {headers: authHeader()}).then((res) => navigate('/student'))
    }

    useEffect(() => {
        UserService.getUserBoard().then(
            res => {
                if(res.data === "user"){
                    // getStudentData();
                }
            },
            error => {
                alert("You are not authenticated as user")
                navigate('/admin')
            }
        )
    },[])

    return (
        <div>
            <StudentHeader />
        <div className="Auth-form-container" style={{textAlign: 'left', height: '110vh', marginTop: '10px'}}>
            <form className="Auth-form">
                <div className="Auth-form-content">
                    <h3 className="Auth-form-title">Request for leave</h3>

                    <div className="form-group mt-3">
                        <label>Student Id</label>
                        <input
                            type="number"
                            className="form-control mt-1"
                            placeholder="Enter your Id"
                            value={studId}
                            onChange={(value) => setStudId(value.target.value)}
                        />
                    </div>
                    
                    <div className="form-group mt-3">
                        <label>Student name</label>
                        <input
                            type="text"
                            className="form-control mt-1"
                            placeholder="Enter your name"
                            value={studName}
                            onChange={(value) => setStudName(value.target.value)}
                        />
                    </div>

                    <div className="form-group mt-3">
                        <label>Reason for leave</label>
                        <input
                            type="text"
                            className="form-control mt-1"
                            placeholder="Enter reason for leave"
                            value={reasonTitle}
                            onChange={(value) => setReasonTitle(value.target.value)}
                        />
                    </div>

                    <div className="form-group mt-3">
                        <label>Description</label>
                        <textarea 
                            className="form-control mt-1"
                            name="description"
                            onChange={(value) => setReasonDescription(value.target.value)}
                            value={reasonDescription}
                            placeholder="Describe your reason..."
                            rows={5}
                        />
                    </div>

                    <div className="form-group mt-3">
                        <label>Select start date</label>
                        <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
                    </div>

                    <div className="form-group mt-3">
                        <label>Select end date</label>
                        <DatePicker selected={endDate} onChange={(date) => setEndDate(date)} />
                    </div>

                    <br/>

                    <div className="d-grid gap-2 mt-3">
                        <button onClick={requestLeave} type="submit" className="btn btn-primary">
                            Submit
                        </button>
                    </div>
                    <p className="forgot-password text-right mt-2"></p>
                </div>                
            </form>
        </div>
        </div>
    )
}

export default RequestLeave;
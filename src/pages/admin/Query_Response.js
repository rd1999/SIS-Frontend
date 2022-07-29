import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import AdminHeader from "../../components/Admin_Header";
import axios from "axios";
import authHeader from "../../services/auth-header";
import UserService from "../../services/user-service";

const QueryResponse = () => {

    const [response, setResponse] = useState('');
    const navigate = useNavigate();

    const id = useParams();

    const sendResponse = async (e) => {
        e.preventDefault();
        const updateQuery = {
            "studId" : 1,
            "studName" : "Ritwik Das",
            "title" : "Query regarding abc",
            "desc" : "I am not able to resolve abc",
            "response" : response,
            "responded" : true
        }
        await axios.patch(`http://localhost:8181/api/v1/query-response/${id.id}`, updateQuery, {headers: authHeader()})
        navigate('/admin/view-student-queries');
    }

    useEffect(() => {
        UserService.getAdminBoard().then(
            res => {
                if(res.data === "admin"){
                    // getStudents();
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

    return <div>
    <AdminHeader />
    <div className="Auth-form-container" style={{textAlign: 'left', paddingTop: 0, paddingBottom: 0, height: '92.5vh'}}>
        <form className="Auth-form">
            <div className="Auth-form-content">
                <h3 className="Auth-form-title">Query Response</h3>

                <div className="form-group mt-3">
                    <label>Your Response</label>
                    <br></br>
                    <textarea
                        className="form-control mt-1"
                        name="response"
                        onChange={(value) => setResponse(value.target.value)}
                        value={response}
                        placeholder="Write your response here..."
                        rows={5}
                    />
                </div>

                <div className="d-grid gap-2 mt-3">
                    <button onClick={sendResponse} type="submit" className="btn btn-primary">
                        Send Response
                    </button>
                </div>
                <p className="forgot-password text-right mt-2"></p>
            </div>                
        </form>
    </div>
    </div>
}

export default QueryResponse;
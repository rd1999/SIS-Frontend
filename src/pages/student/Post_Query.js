import React, {useEffect, useState} from "react"
import StudentHeader from "../../components/Student_Header";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import authHeader from "../../services/auth-header";
import UserService from "../../services/user-service";

const PostQuery = (props) => {

    const [studId, setStudId] = useState('');
    const [studName, setStudName] = useState('');
    const [queryTitle, setQueryTitle] = useState('');
    const [queryDescription, setQueryDescription] = useState('');

    const navigate = useNavigate();

    const postQuery = (e) => {
        e.preventDefault();
        const query = {
            "studId": studId,
            "studName": studName,
            "title": queryTitle,
            "desc": queryDescription
        } 
        axios.post('http://localhost:8182/api/v1/post-query', query, {headers: authHeader()}).then((res) => navigate('/student'));
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
        <div className="Auth-form-container" style={{textAlign: 'left'}}>
            <form className="Auth-form">
                <div className="Auth-form-content">
                    <h3 className="Auth-form-title">Post Query</h3>

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
                        <label>Title</label>
                        <input
                            type="text"
                            className="form-control mt-1"
                            placeholder="Enter query title"
                            value={queryTitle}
                            onChange={(value) => setQueryTitle(value.target.value)}
                        />
                    </div>

                    <div className="form-group mt-3">
                        <label>Description</label>
                        <textarea 
                            className="form-control mt-1"
                            name="description"
                            onChange={(value) => setQueryDescription(value.target.value)}
                            value={queryDescription}
                            placeholder="Write your query here..."
                            rows={5}
                        />
                    </div>

                    <div className="d-grid gap-2 mt-3">
                        <button onClick={postQuery} type="submit" className="btn btn-primary">
                            Post Query
                        </button>
                    </div>
                    <p className="forgot-password text-right mt-2"></p>
                </div>                
            </form>
        </div>
        </div>
            
    )
}

export default PostQuery;
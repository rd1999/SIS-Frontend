import React, {useState} from "react"
import StudentHeader from "../../components/Student_Header";

const PostQuery = (props) => {

    const [queryTitle, setQueryTitle] = useState('');
    const [queryDescription, setQueryDescription] = useState('');

    return (
        <div>
        <StudentHeader />
        <div className="Auth-form-container" style={{textAlign: 'left'}}>
            <form className="Auth-form">
                <div className="Auth-form-content">
                    <h3 className="Auth-form-title">Post Query</h3>
                    
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
                        <button type="submit" className="btn btn-primary">
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
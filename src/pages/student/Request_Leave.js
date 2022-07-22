import React, {useState} from "react"
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import StudentHeader from "../../components/Student_Header";

const RequestLeave = (props) => {

    const [reasonTitle, setReasonTitle] = useState('');
    const [reasonDescription, setReasonDescription] = useState('');
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    return (
        <div>
            <StudentHeader />
        <div className="Auth-form-container" style={{textAlign: 'left'}}>
            <form className="Auth-form">
                <div className="Auth-form-content">
                    <h3 className="Auth-form-title">Request for leave</h3>
                    
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
                        <button type="submit" className="btn btn-primary">
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
import React, {useState} from "react"
import AdminHeader from "../../components/Admin_Header";

const AddStudent = (props) => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [studentClass, setStudentClass] = useState('');
    const [age, setAge] = useState('');
    const [address, setAddress] = useState('');
    const [phNo, setPhNo] = useState('');
    const [gender, setGender] = useState('');
    const [email, setEmail] = useState('');

    return (
        <div>
        <AdminHeader />
        <div className="Auth-form-container" style={{textAlign: 'left', paddingTop: 50, paddingBottom: 50, height: '120vh'}}>
            <form className="Auth-form">
                <div className="Auth-form-content">
                    <h3 className="Auth-form-title">Add Student</h3>
                    
                    <div className="form-group mt-3">
                        <label>First name</label>
                        <input
                            type="text"
                            className="form-control mt-1"
                            placeholder="Enter first name"
                            value={firstName}
                            onChange={(value) => setFirstName(value.target.value)}
                        />
                    </div>

                    <div className="form-group mt-3">
                        <label>Last name</label>
                        <input
                            type="text"
                            className="form-control mt-1"
                            placeholder="Enter last name"
                            value={lastName}
                            onChange={(value) => setLastName(value.target.value)}
                        />
                    </div>

                    <div className="form-group mt-3">
                        <label>Gender</label>
                        <div onChange={(value) => setGender(value.target.value)}>
                            <input type="radio" value="male" name="gender" /> Male &emsp;
                            
                            <input type="radio" value="female" name="gender" /> Female
                        </div>
                    </div>

                    <div className="form-group mt-3">
                        <label>Class</label>
                        <input
                            type="number"
                            className="form-control mt-1"
                            placeholder="Enter class"
                            value={studentClass}
                            onChange={(value) => setStudentClass(value.target.value)}
                        />
                    </div>

                    <div className="form-group mt-3">
                        <label>Age</label>
                        <input
                            type="number"
                            className="form-control mt-1"
                            placeholder="Enter age"
                            value={age}
                            onChange={(value) => setAge(value.target.value)}
                        />
                    </div>

                    <div className="form-group mt-3">
                        <label>Address</label>
                        <textarea 
                            className="form-control mt-1"
                            name="address"
                            onChange={(value) => setAddress(value.target.value)}
                            value={address}
                            placeholder="Enter address"
                        />
                    </div>

                    <div className="form-group mt-3">
                        <label>Phone number</label>
                        <input
                            type="number"
                            className="form-control mt-1"
                            placeholder="Enter phone number"
                            value={phNo}
                            onChange={(value) => setPhNo(value.target.value)}
                        />
                    </div>

                    <div className="form-group mt-3">
                        <label>Email</label>
                        <input
                            type="text"
                            className="form-control mt-1"
                            placeholder="Enter email"
                            value={email}
                            onChange={(value) => setEmail(value.target.value)}
                        />
                    </div>

                    <div className="d-grid gap-2 mt-3">
                        <button type="submit" className="btn btn-primary">
                            Add Student
                        </button>
                    </div>
                    <p className="forgot-password text-right mt-2"></p>
                </div>                
            </form>
        </div>
        </div>
            
    )
}

export default AddStudent;
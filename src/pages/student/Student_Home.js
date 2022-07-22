import React from "react";
import StudentHeader from "../../components/Student_Header";

const StudentHome = () => {

    const data = 
    {
        id: 1,
        firstName: 'Ritwik',
        lastName: 'Das',
        studentClass: 5,
        age: 11,
        address: 'njekfmklemfklremkflremgklmgkl',
        phNo: 9382215382,
        gender: 'male',
        email: 'dasritwik73@gmail.com'
    }

    return <div>
        <StudentHeader />
        <div style={{marginTop: '-30px', height: '99.1vh'}} className= "container">
            <div className='col'>
                <div className="Auth-form-container row" >
                    <form className="">
                    <h1 className="Auth-form-title" style={{marginBottom: '-20px'}}>Profile</h1>  
 
                    <div className='col'>
                        <table class ="Auth-form-content studentTable">
                            <tbody>
                                <>
                                    <tr>
                                        <td>ID </td>
                                        <td>{data.id}</td>
                                    </tr>
                                    <tr>
                                        <td>First name </td>
                                        <td>{data.firstName}</td>
                                    </tr>
                                    <tr>
                                        <td>Last name</td>
                                        <td>{data.lastName}</td>
                                    </tr>
                                    <tr>
                                        <td>Class</td>
                                        <td>{data.studentClass}</td>
                                    </tr>
                                    <tr>
                                        <td>Age</td>
                                        <td>{data.age}</td>
                                    </tr>
                                    <tr>
                                        <td>Gender</td>
                                        <td>{data.gender}</td>
                                    </tr>
                                    <tr>
                                        <td>Contact Number</td>
                                        <td>{data.phNo}</td>
                                    </tr>
                                    <tr>
                                        <td>Email ID</td>
                                        <td>{data.email}</td>
                                    </tr>
                                    <tr>
                                        <td>Address</td>
                                        <td>{data.address}</td>
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

export default StudentHome;
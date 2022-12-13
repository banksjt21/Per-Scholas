import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import employeesArray from "../data";

export default function Employee(props) {

    const [employeeDetails, setEmployeeDetails] = useState(null);

    const { employeeID } = useParams(); // may not need this ... okay I did need this
    console.log(employeeID)




    useEffect(() => {

        // Moved this inside of useEffect to get rid of useEffect warning
        const getEmployeeDetails = async () => {
            try {
                // const response = await fetch(employeesArray);
                // const data     = response;
                // setEmployeeDetails(data);

                const data = employeesArray.find(eachEmployee => eachEmployee.id === employeeID);
                console.log(data)
                setEmployeeDetails(data);
            } catch (error) {
                console.error(error);
            }
        }

        getEmployeeDetails();
    }, [employeeID]);  // Added employeeId to get rid of useEffect warning

    const loaded = () => {
        return (
            <section>
                <header>
                    <Link to={"/"} ><span className='backArrow'>‹</span></Link>
                    <h1>Employee</h1>
                </header>
                <div className='details detailsMain'>
                    <img src={employeeDetails.img} alt="img" />
                    <div className='detailsMainInfo'>
                        <h2>{employeeDetails.name}</h2>
                        <p>{employeeDetails.title}</p>
                    </div>
                </div>
                <div className='details'>
                    <h3>Call Office</h3>
                    <p>{employeeDetails.phoneOffice}</p>
                </div>
                <div className='details'>
                    <h3>Call Mobile</h3>
                    <p>{employeeDetails.phoneMobile}</p>
                </div>
                <div className='details'>
                    <h3>SMS</h3>
                    <p>{employeeDetails.phoneSMS}</p>
                </div>
                <div className='details'>
                    <h3>Email</h3>
                    <p>{employeeDetails.email}</p>
                </div>
            </section>
        )
    }

    const loading = () => {
        return <h1>Loading Employee ...</h1>
    }

    return (
        employeeDetails ? loaded() : loading()
    )
}
import { Link } from 'react-router-dom';
// import employeesArray from "../data";

export default function EmployeeListItem({ id, img, name, title }) {

	const employeeID = id;

	return (
		<Link to={`/employee/${employeeID}`} >
			<div className="employeeListItem">
				<div className="employeeImg">
					<img src={img} alt="img" />
				</div>
				<div className="employeeText">
					<h3>{name}</h3>
					<p>{title}</p>
				</div>
			</div>
		</Link>
	);
}  
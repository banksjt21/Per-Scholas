//  Import Employee Array
import employeesArray from "../data";
import EmployeeListItem from "./EmployeeListItem";

const employees = employeesArray.map((elements) => {
	return <EmployeeListItem key={elements.id} {...elements} />;
});

export default function EmployeeList(props) {
	return (
		<div id="employeeList">
			{employees}
		</div>
	);
}
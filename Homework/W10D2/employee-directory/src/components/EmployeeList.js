//  Import Employee Array
import employeesArray from "../data";
import EmployeeListItem from "./EmployeeListItem";

const employees = employeesArray.map((elements, index) => {
  return <EmployeeListItem key={index} {...elements} />;
});

export default function EmployeeList(props) {
  return (
    <div id="employeeList">
      {/* <EmployeeListItem img={props.img} name={props.name} title={props.title} /> */}
      {employees}
    </div>
  );
}

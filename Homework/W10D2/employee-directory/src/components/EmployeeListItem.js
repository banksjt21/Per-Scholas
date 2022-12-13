export default function EmployeeListItem({ img, name, title }) {
    return (
      <div className="employeeListItem">
        <div className="employeeImg">
          <img src={img} alt="img" />
        </div>
        <div className="employeeText">
          <h3 className="employeeName">{name}</h3>
          <p className="employeeTitle">{title}</p>
        </div>
      </div>
    );
  }
  
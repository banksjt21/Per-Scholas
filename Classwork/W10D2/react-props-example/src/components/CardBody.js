import Button from "./Button";

export default function CardBody({ title, text, url }) {
  // console.log("current title:", props.title);
  // props.title = "Test"
  // console.log("props.title:", props.title)

  return (
    <div className="card-body">
      <h5 className="card-title">{title}</h5>
      <p className="card-text">{text}</p>
      <Button url={url} />
    </div>
  );
}

//export the component

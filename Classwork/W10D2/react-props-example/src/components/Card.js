import CardBody from "./CardBody";
import CardImage from "./CardImage";
// import Button from "./Button";

//create the component
export default function Card(props) {
  return (
    <div className="card" style={{ width: "18rem", height: "16rem" }}>
      <CardImage img={props.img} />
      <CardBody title={props.title} text={props.text} url={props.url} />
    </div>
  );
}

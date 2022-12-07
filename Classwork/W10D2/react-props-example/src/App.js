import './App.css';

//import card1
import Card from "./components/Card";
// import Card2 from "./components/Card2";

// IMPORT DATA
import cardsArr from "./data";

const cards = cardsArr.map((ele, idx) => {
  return <Card key={idx} {...ele} />;
});

console.log("this is cards: ", cards);

export default function App() {
  return (
    <div className="App">
      <h1>Bootstrap Cards To Component Example</h1>
      <section className="cards">
        {/* {cardsArr.map((ele, idx) => {
          return (
            <Card
              key={idx}
              img={ele.img}
              title={ele.title.toUpperCase()}
              text={ele.text}
              url={ele.url}
            />
          );
        })} */}
        {cards}
      </section>
    </div>
  );
}

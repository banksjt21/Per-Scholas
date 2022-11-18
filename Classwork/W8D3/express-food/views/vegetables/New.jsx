const React = require("react");

class New extends React.Component {
    render() {
        return(
            <div>
                <h1>New Vegetables Page</h1>
                <nav>
                    <a href="/vegetables">Vegetable Index Page</a>
                </nav>
                <form action="/vegetables" method="POST">
                    Name:  <input type="text" name="name"  /><br />
                    Color: <input type="text" name="color" /><br />
                    Is Ready To Eat: <input type="checkbox" name="readyToEat" /><br />
                    <input type="submit" value="Create Vegetable"></input>
                </form>
            </div>
        )
    }
}

module.exports = New;
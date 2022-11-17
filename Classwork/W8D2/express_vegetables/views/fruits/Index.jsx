const React = require("react");

class Index extends React.Component {
    render() {
        const { fruits } = this.props; // destructure the fruits array
        return (
            <div>
                <h1>Fruits Index Page</h1>
                <nav>
                    <a href="/fruits/new">Create New Fruit</a>
                </nav>
                <ul>
                    {
                    fruits.map((fruit, i) => {
                        return (
                            <li key = {i}>
                                The{' '}
                                <a style={{color: "red"}} href={`/fruits/${i}`}>
                                {fruit.name}</a>
                                {" "}
                                is {fruit.color} <br />
                                {
                                    fruit.readyToEat
                                    ? "It is ready to eat"
                                    : "It is not ready to eat"
                                }
                                <br />
                            </li>
                        ) // will not work without return; map returns a new array
                    })
                }
                </ul>
            </div>
        )
    }
}


module.exports = Index
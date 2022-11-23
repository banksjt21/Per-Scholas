const React = require("react");

class Index extends React.Component {
    render() {
        const { vegetables } = this.props; // destructure the vegetables array
        return (
            <div>
                <h1>Vegetables Index Page</h1>
                <a href="/">Food Index</a><br />
                <nav>
                    <a href="/vegetables/new">Create New Vegetable</a>
                </nav>
                <ul>
                    {
                    vegetables.map((veggie, i) => {
                        return (
                            <li key = {i}>
                                The{' '}
                                <a style={{color: "red"}} href={`/vegetables/${veggie._id}`}>
                                {veggie.name}</a>
                                {" "}
                                is {veggie.color} <br />
                                {
                                    veggie.readyToEat
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
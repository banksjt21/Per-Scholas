const React         = require("react");
const DefaultLayout = require("../layout/Default");

class Index extends React.Component {
    render() {
        const { fruits } = this.props; // destructure the fruits array
        return (
            <DefaultLayout title="Fruits Index Page">
                <a href="/">Food Index</a><br />
                <nav>
                    <a href="/fruits/new">Create New Fruit</a>
                </nav>
                <ul>
                    {
                    fruits.map((fruit, i) => {
                        return (
                            <li key = {i}>
                                The{' '}
                                <a style={{color: "red"}} href={`/fruits/${fruit._id}`}>
                                {fruit.name}</a>
                                {" "}
                                is {fruit.color} <br />
                                {
                                    fruit.readyToEat
                                    ? "It is ready to eat!"
                                    : "It is not ready to eat."
                                }
                                <br />
                                <a href={`/fruits/${fruit._id}/edit`}>Edit This Fruit</a>
                                <form action={`/fruits/${fruit._id}?_method=DELETE`} method="POST">
                                    <input type="submit" value="DELETE" />
                                </form><br />
                            </li>
                        ) // will not work without return; map returns a new array
                    })
                }
                </ul>
            </DefaultLayout>
        )
    }
}


module.exports = Index
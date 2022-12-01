const React = require("react");
const DefaultLayout = require("../Default");

class Index extends React.Component {
    render() {
        const { movies } = this.props;
        // const movies     = this.props.movies; // Another way
        return (
            <DefaultLayout>
                <a href="/movies/new">Add New Movie</a>
                <div>
                    {
                        // this.props.movies.map((movie) => {}) // Another way
                        movies.map((movie, i) => {
                            return (
                                <article key={i}>
                                    <img src={movie.poster} alt="" width="200" height="300" />
                                    <a href={`/movies/${movie._id}`}><h2>{movie.title}</h2></a>
                                </article>
                            )
                        })
                    }
                </div>
            </DefaultLayout>
        )
    }
}

module.exports = Index;
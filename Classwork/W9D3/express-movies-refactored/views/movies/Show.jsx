const React = require("react");
const DefaultLayout = require("../Default");

class Show extends React.Component {
    render() {
        const { movie } = this.props;
        return (
            // Inside the render of the class
            <DefaultLayout>
                <div>
                    <article>
                        <img src={movie.poster} alt="" width="200" height="300" />
                        <h2>{movie.title}</h2>
                        <p>{movie.genre} | {movie.releaseDate ? movie.releaseDate : "N/A"} | {movie.length} minutes</p>
                        <p>{movie.rating}</p>
                        <p>{movie.watchAgain ? "I would watch again." : "You gotta pay me to watch it."}</p>
                        <h4>{movie.director}</h4>

                        Cast:
                        <ul>
                            {movie.cast.map((star, i) => {
                                return (
                                    <li key={i}>{star}</li>
                                )
                            })}
                        </ul>

                        <a href={`/movies/${movie._id}/Edit`}><button>Edit</button></a>
                        <form action={`/movies/${movie._id}?_method=DELETE`} method="POST">
                            <input type="submit" value="Delete" />
                        </form>
                        <a href="/movies/"><button>Back to Main</button></a>
                    </article>
                </div>
            </DefaultLayout>
        )
    }
}

module.exports = Show;
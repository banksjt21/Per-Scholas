const React = require("react");
const DefaultLayout = require("../Default");

class Edit extends React.Component {
    render() {
        const { movie } = this.props;
        return (
            <DefaultLayout>
                <a href="/movies/">See All Movies</a>
                <form action={`/movies/${movie._id}?_method=PUT`} method="POST">
                    <fieldset>
                        <legend>Edit Movie</legend>
                        <label>TITLE:<input type="text" name="title" placeholder="Enter movie title" defaultValue={movie.title} /></label>

                        <label>GENRE:<input type="text" name="genre" placeholder="enter genre" defaultValue={movie.genre} /></label>

                        <label>RELEASE DATE:<input type="text" name="releaseDate" defaultValue={movie.releaseDate} /> </label>

                        <label>LENGTH:<input type="number" name="length" defaultValue={movie.length} /></label>

                        <label>POSTER:<input type="text" name="poster" defaultValue={movie.poster} /></label>

                        <label>DIRECTOR:<input type="text" name="director" defaultValue={movie.director} /></label>

                        <label>RATING:<input type="text" name="rating" defaultValue={movie.rating} /></label>

                        <label>CAST: (Please separate case members with "|")<input type="text" name="cast" defaultValue={movie.cast.join("|")} /></label>

                        {
                            movie.watchAgain ?
                                <label>WATCH AGAIN :<input type="checkbox" name="watchAgain" checked /></label> :
                                <label>WATCH AGAIN :<input type="checkbox" name="watchAgain" /> </label>
                        }
                    </fieldset>
                    <input type="submit" value="Edit Movie" />
                </form>
            </DefaultLayout>
        )
    }
}

module.exports = Edit;
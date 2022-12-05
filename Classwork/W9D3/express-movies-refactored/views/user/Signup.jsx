const React         = require("react");
const DefaultLayout = require("../Default");




class Signup extends React.Component {
    render() {
        return (
            <DefaultLayout title="User Signup">
                <div>
                    {/* <a href="/movies/">View Movies List</a><br /><br /> */}
                    <form action="/user/signup" method="post">
                        <fieldset>
                            <legend>New User</legend>
                            <label>USERNAME: <input type="text"     name="username" required /></label>
                            <label>PASSWORD: <input type="password" name="password" required /></label>
                            <input type="submit" value="Create Account" />
                        </fieldset>
                    </form>
                    {/* <a href="/user/login">Already have an account? Login here</a> */}
                </div>
            </DefaultLayout>
        )
    }
}




module.exports = Signup;
/*  ===========================================================================
//  DEPENDENCIES
//  =======================================================================  */
const React         = require("react");
const DefaultLayout = require("./layouts/Default");




/*  ===========================================================================
//  INDEX VIEW
//  =======================================================================  */
class Index extends React.Component {
    render() {
        const { logs } = this.props;
        return(
            <DefaultLayout title="All Logs">
                <a href="/logs/new">Create New Log</a>

                <ul>
                    {
                        logs.map((log, i) => {
                            return(
                                <li key = {i}>
                                    <a href={`/logs/${log._id}`}>{log.title}</a>
                                    <form action={`/logs/${log._id}?_method=DELETE`} method="POST">
                                        <input type="submit" value="Delete Log" />
                                    </form><br />
                                </li>
                            )
                        })
                    }
                </ul>
            </DefaultLayout>
        )
    }
}

module.exports = Index;
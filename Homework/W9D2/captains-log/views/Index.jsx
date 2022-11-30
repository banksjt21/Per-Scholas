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
                <span>→ </span><a href="/logs/new">Create New Log</a><br /><br />

                <ul>
                    {
                        logs.map((log, i) => {
                            let date = new Date(log.createdAt).toLocaleString();

                            return(
                                <li key = {i}>
                                    <a className="title" href={`/logs/${log._id}`}>{log.title}</a><br />
                                    <span className="date">{date}</span>
                                    
                                    <form action={`/logs/${log._id}?_method=DELETE`} method="POST">
                                        <a href={`/logs/${log._id}/edit`}><button type="button">Edit Log</button></a>
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
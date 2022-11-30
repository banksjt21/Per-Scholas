/*  ===========================================================================
//  DEPENDENCIES
//  =======================================================================  */
const React         = require("react");
const DefaultLayout = require("./layouts/Default");




/*  ===========================================================================
//  SHOW VIEW
//  =======================================================================  */
class Show extends React.Component {
    render() {
        const { title, entry, shipIsBroken } = this.props.log;
        return(
            <DefaultLayout title={`Captain's Log`}>
                <span>→ </span><a href="/logs/">View All Logs</a><br /><br />
                
                <div>

                    <h2>{ title }</h2>
                    <p>{ entry }</p>
                    <br />
                    <p className="italic">{ shipIsBroken ? "Ship maintenance required." : "No maintenance necessary." }</p><br />

                    <a href={`/logs/${this.props.log._id}/edit`}><button type="button">Edit Log</button></a>              
                </div>
            </DefaultLayout>
        )
    }
}



module.exports = Show
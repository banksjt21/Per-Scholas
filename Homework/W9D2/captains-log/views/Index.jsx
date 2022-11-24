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
        return(
            <DefaultLayout title="All Logs">
                <a href="/logs/new">Create New Log</a>
            </DefaultLayout>
        )
    }
}

module.exports = Index;
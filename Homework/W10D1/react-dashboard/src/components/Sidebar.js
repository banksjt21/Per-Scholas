/*  ===========================================================================
//  COMPONENT
===========================================================================  */
function Sidebar() {
    return (
        <aside>
            <h2>Navigation</h2>
            <ul>
                <li><i className="fa fa-table-columns"></i>Dashboard</li>
                <li><i className="fa fa-cube"></i>Widgets</li>
                <li><i className="fa fa-comments"></i>Reviews</li>
                <li><i className="fa fa-people-group"></i>Customers</li>
                <li><i className="fa fa-chart-line"></i>Online Analysis</li>
                <li><i className="fa fa-gear"></i>Settings</li>
            </ul>
        </aside>
    )
}

export default Sidebar;
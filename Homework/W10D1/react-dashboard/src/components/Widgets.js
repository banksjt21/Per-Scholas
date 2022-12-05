/*  ===========================================================================
//  DEPENDENCIES
===========================================================================  */
import WidgetSmall from './WidgetSmall'
import WidgetLarge from './WidgetLarge';




/*  ===========================================================================
//  COMPONENT
===========================================================================  */
function Widgets() {
    
    return (
        <section id="widgets">
            <WidgetSmall title="Total Reviews" />
            <WidgetSmall title="Average Rating" />
            <WidgetSmall title="Sales Total" />
            <WidgetLarge title="Website Visitors" />
        </section>
    )
}

export default Widgets;
/*  ===========================================================================
//  DEPENDENCIES
===========================================================================  */
import Calculations from "./Calculations";




/*  ===========================================================================
//  COMPONENT
===========================================================================  */
function WidgetLarge(props) {
    
    return (
        <article className="widgetLarge">
            <h2>{props.title}</h2>
            <span className="result"><Calculations title={props.title} /></span>
        </article>
    )
}

export default WidgetLarge;
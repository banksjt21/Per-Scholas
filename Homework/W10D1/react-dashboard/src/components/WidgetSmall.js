/*  ===========================================================================
//  DEPENDENCIES
===========================================================================  */
import Calculations from "./Calculations";




/*  ===========================================================================
//  COMPONENT
===========================================================================  */
function WidgetSmall(props) {

    return (
        <article className="widgetSmall">
            <h2>{props.title}</h2>
            <span className="result"><Calculations title={props.title} /></span>
        </article>
    )
}

export default WidgetSmall;
/*  ===========================================================================
//  COMPONENT
===========================================================================  */
function Calculations(props) {

    function randomizer() {
        return Math.floor(Math.random() * num);
    }

    function randomizerFloat(min, max) {
        return Number(Math.random() * (max - min) + min).toFixed(1);
    }

    let num;
    let result;
    let reviews = 1000;
    let rating  = 5;
    let sales   = 100000;

    switch (props.title) {
        case ("Total Reviews"):
            num = reviews;
            result = randomizer();
            break;
        case ("Average Rating"):
            num = rating;
            result = randomizerFloat(0, 5);
            break;
        case ("Sales Total"):
            num = sales;
            result = "$" + randomizer();
            break;
        case ("Website Visitors"):
            num = 1000000;
            result = randomizer();
            break;
        default:
            num = 1;
            result = randomizer();
            break;
    }

    return (
        result
    )
}

export default Calculations;
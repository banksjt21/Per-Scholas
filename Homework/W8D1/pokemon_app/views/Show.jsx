
const h1 = {
    color: '#ffffff',
    backgroundColor: '#333333'
};


const React = require("react");

class Show extends React.Component {
    render() {
        const { name, img } = this.props;    // destructure the pokemon array
        console.log(this.props)
        return (
            <div>
                
                <h1 style={h1}>Gotta Catch 'Em All!</h1>
                <h2>{name}</h2>
                <a href="/pokemon"><img src={img + ".jpg"} alt={name}></img></a>
            </div>
        )
    }
}

module.exports = Show
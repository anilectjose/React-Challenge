import {Component} from 'react'

class ClassComponent extends Component {
    render(){
        return(
        <h2>
            Class component, instead of Function with data passing from main file {this.props.detail}
        </h2>)
    }
}

export default ClassComponent
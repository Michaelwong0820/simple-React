import React, { Component } from 'react'
import PropTypes from 'prop-types';

export default class PropsType extends Component {
    static propTypes = {
        name: PropTypes.string.isRequired,
        age: PropTypes.number
    }

    static defaultProps = {
        age : 20
    }

    render() {
        console.log(PropTypes);

        return (
            <div>
                {this.props.name} -- {this.props.age}
            </div>
        )
    }
}

// PropsType.propTypes = {
//     name : PropTypes.string.isRequired,
//     age : PropTypes.number
// }
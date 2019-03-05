import React, { Component } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    disabled: PropTypes.bool,
    onSubmit: PropTypes.func
}

const defaultProps = {
    disabled: false,
    onSubmit: () => { }
}

class FibForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            index: ''
        }
    }

    onChange = (e) => {
        this.setState({ index: e.target.value })
    }

    clearValue = () => {
        this.setState({ index: '' })
    }

    render() {
        const { disabled, onSubmit } = this.props;
        const { index } = this.state;

        return (
            <div>
                <div>
                    <label htmlFor="indexInput">
                        Enter your index:
                    </label>
                    <input
                        id="indexInput"
                        type="number"
                        value={index}
                        onChange={this.onChange}
                        disabled={disabled}
                    />
                    <button onClick={() => onSubmit(index)} disabled={disabled}>Submit</button>
                </div>
            </div>
        );
    }
}

FibForm.propTypes = propTypes;
FibForm.defaultProps = defaultProps;

export default FibForm;
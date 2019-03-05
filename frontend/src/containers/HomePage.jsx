import React, { Component } from 'react';
import { getValues, getIndexes, addIndex } from "../services/index.service";
import FibForm from "../components/FibForm";

class HomePage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            seenIndexes: [],
            values: {},
            index: undefined
        }
    }

    async componentDidMount() {
        const [values, seenIndexes] = await Promise.all([
            this.fetchValues(),
            this.fetchIndexes()
        ])

        this.setState({ values, seenIndexes })
    }

    handleSubmit = async (index) => {
        await addIndex(parseInt(index, 10));
        this.FibForm.clearValue();
    }

    renderSeenIndexes = (indexes = []) => {
        return indexes.map(({ number }) => number).join(', ');
    }

    renderCalculatedValues = (values = {}) => {
        return Object.keys(values).map((key, index) => (
            <div key={`${key}_${index}`}>
                For index {key} calculated {values[key]}
            </div>
        ))
    }

    fetchValues = async () => {
        const values = await getValues();
        return values.data;
    }

    fetchIndexes = async () => {
        const values = await getIndexes();
        return values.data;
    }

    render() {
        const { seenIndexes, values } = this.state;

        return (
            <div>
                <FibForm ref={c => this.FibForm = c} onSubmit={this.handleSubmit} />

                <h3>Indicies I have seen:</h3>
                {this.renderSeenIndexes(seenIndexes)}

                <h3>Calculated Values:</h3>
                {this.renderCalculatedValues(values)}
            </div>
        );
    }
}

export default HomePage;
import React, { Component } from "react";
import Icon from "./Icon"
class ModalTrigger extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <button
                ref={this.props.buttonRef}
                onClick={this.props.showModal}
                className="modal-trigger">
                <Icon icon="add" />
                <span>{this.props.triggerText}</span>
            </button>
        );
    }
}

export default ModalTrigger

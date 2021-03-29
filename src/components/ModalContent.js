import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import FocusTrap from 'focus-trap-react';
import Form from './Form';
import Icon from './Icon';
export class ModalContent extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return ReactDOM.createPortal(
      <FocusTrap>
        {/* eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions */}
        <aside
          tag="aside"
          role="dialog"
          tabIndex="-1"
          aria-modal="true"
          className="modal-cover"
          onClick={this.props.onClickOutside}
          onKeyDown={this.props.onKeyDown}
        >
          <div className="modal-area" ref={this.props.modalRef}>
            <button
              ref={this.props.buttonRef}
              aria-label="Close Modal"
              aria-labelledby="close-modal"
              className="_modal-close"
              onClick={this.props.closeModal}
            >
              <span id="close-modal" className="visually-hidden">
                Close
              </span>

              <Icon icon="close" />
            </button>
            <div className="modal-body">
              <Form />
            </div>
          </div>
        </aside>
      </FocusTrap>,
      document.body
    )
  }
}

export default ModalContent;

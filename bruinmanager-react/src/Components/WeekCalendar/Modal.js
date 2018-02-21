import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  start: PropTypes.object.isRequired,
  end: PropTypes.object.isRequired,
  value: PropTypes.string,
  location: PropTypes.string,
  onRemove: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
};

const defaultProps = {
  value: '',
  location: '',
};


class Modal extends React.Component {
  handleRemove = () => {
    this.props.onRemove();
  }

  handleSave = () => {
    const value = this.input1.value;
    const location = this.input2.value;
    this.props.onSave({
      value,
      location,
    });
  }

  renderText() {
    const {
      start,
      end,
    } = this.props;

    if (start.isSame(end, 'day')) {
      return (<span>{`${start.format('MMM DD H:mm A')} - ${end.format('H:mm A')}`}</span>);
    }
    return (<span>{`${start.format('MMM DD')} - ${end.format('MMM DD')}, ${start.format('H:mm A')} - ${end.format('H:mm A')}`}</span>);
  }

  render() {
    const {
      value,
      location,
    } = this.props;
    return (
      <div className="customModal">
        <div className="customModal__text">{this.renderText()}</div>
        <input
          ref={(el) =>  {this.input1 = el}}
          className="customModal__input"
          type="text"
          placeholder="Event Name"
          defaultValue={value}
        />
        <input
          ref={(ele) => {this.input2 = ele}}
          className="customModal__input"
          type="text"
          placeholder="Event Location"
          defaultValue={location}
        />
        <button className="customModal__button" onClick={this.handleRemove}>Delete</button>
        <button className="customModal__button customModal__button_float_right" onClick={this.handleSave}>Save</button>
      </div>
    );
  }
}

Modal.propTypes = propTypes;
Modal.defaultProps = defaultProps;
export default Modal;

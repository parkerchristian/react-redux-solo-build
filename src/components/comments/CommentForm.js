import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class CommentForm extends PureComponent {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired
  }

  state = {
    comment: ''
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.vaule });
  }

  handleSubmit = event => {
    event.preventDefault();
    const { comment } = this.state;
    this.props.onSubmit(comment);
    this.setState({ comment: '' });
  }
  
  render() {

    const change = this.handleChange;
    const submit = this.handleSubmit;
    const { comment } = this.state;
    const css = { 
      display: 'block',
      margin: '5px'
    };

    return (
      <div style={css}>
        Create a Comment !
        <form onSubmit={submit} style={css}>
          <textarea name="comment" value={comment} onChange={change} style={css} />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class PostForm extends PureComponent {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired
  }

  state = {
    title: '',
    body: ''
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }
  
  handleSubmit = event => {
    event.preventDefault();
    const { title, body } = this.state;
    this.props.onSubmit(title, body);
    this.setState({ title: '', body: '' });
  }

  render() {

    const change = this.handleChange;
    const submit = this.handleSubmit;
    const { title, body } = this.state;
    const css = { display: 'block' };

    return (
      <form onSubmit={submit} style={css}>
        <input name="title" value={title} onChange={change} style={css} />
        <textarea name="body" value={body} onChange={change} style={css} />
        <button>Submit</button>
      </form>
    );
  }
}

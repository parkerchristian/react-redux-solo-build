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
    return (
      <form onSubmit={submit}>
        <input name="title" value={title} onChange={change} />
        <textarea name="body" value={body} onChange={change} />
        <button value="Submit" />
      </form>
    );
  }
}

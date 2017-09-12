import React from 'react';

export default class extends React.Component {
  afterClick() {
  this.setState({ count: this.state.count + 1 }, () => {
      this.setState({ count: this.state.count + 1 }, () => {
        this.setState({ count: this.state.count + 1 });
      });
    });
}

  constructor() {
    super();

    this.state = {
      count: 0
    };
  }

  render() {
    return (
      <div>
        <h1>Hello {this.state.count}</h1>

        <button onClick={() => this.afterClick()}>Click To Change</button>
      </div>
    );
  }
}

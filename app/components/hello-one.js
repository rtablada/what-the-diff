import React, { Component } from 'react';

export default class extends Component {
  constructor() {
    super();
    this.state = {
      meetup: 'NashReact',
      active: true
    };
  }

  render() {
    const { meetup, active } = this.state;

    return (<h1>
      <a className={`home-link ${active ? 'active' : null}`}>
        Hello {meetup}
      </a>
    </h1>);
  }
}

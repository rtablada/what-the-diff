import React from 'react';

export default class extends React.Component {
  constructor() {
    super();
    this.state = {
      meetup: 'NashReact',
      active: true
    };
  }

  render() {
    const { meetup, active } = this.state;
    debugger;


    return <h1>Hello {meetup}</h1>
  }
}

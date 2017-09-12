import React from 'react';

class LinkTo extends React.Component {
  render() {
    return <a href={this.props.url}>{this.props.children}</a>
  }
}

export default class extends React.Component {
  render() {
    return (<nav class="top-nav">
      <h1 data-test-logo>NashReact</h1>

      <ul data-test-side-navigation>
        <li><LinkTo url="profile">Profile</LinkTo></li>
        <li><LinkTo url="settings">Settings</LinkTo></li>
        <li><LinkTo url="friends">Friends</LinkTo></li>
        <li><LinkTo url="messages">Messages</LinkTo></li>
        <li><LinkTo url="logout">Logout</LinkTo></li>
      </ul>
    </nav>);
  }
}

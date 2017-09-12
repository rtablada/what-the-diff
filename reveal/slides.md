# What the Diff...

---

## Ryan Tablada

---

![150%](https://upload.wikimedia.org/wikipedia/en/6/69/Ember.js_Logo_and_Mascot.png)

---

## Ryan Tablada

* @ryantablada - Twitter
* @rtablada - Github
* @ryan - NashDev Slack

![right](https://pbs.twimg.com/media/DFSEcIuXgAAf4C7.jpg:large)

---

## Prototypal

### Talk to me if you're interested in

* Javascript Consulting
* Ember Consulting
* API Consulting
* Javascript Training
* Ember Training

---

# React Fibre

---

## "What is React Fiber?"

---

> React Fiber is an ongoing reimplementation of React's core algorithm.

---

## Optimizing React to Do Less Work

---

## Incremental Rendering

---

## How Does React Render Now?

---

## Steps

1. State Changes
2. Run the `render` function for components*
3. Diff new `render` result and old `render` result
4. Turn diff into mutations
5. Apply Mutations

^ Step 1 is called "update"
^ Steps 2-4 are called "reconciliation"

---

## A Wild **`setState`** Has Appeared

---

```javascript
export default class extends Component {
  increment() {
    this.setState({ counter: this.state.counter + 1 });
    this.setState({ counter: this.state.counter + 1 });
    this.setState({ counter: this.state.counter + 1 });
  }

  constructor() {
    this.state = { counter: 0 };
  }

  render() {
    const { counter } = this.state;
    return (<button onClick={() => this.increment()}>You Clicked {counter} times</button>)
  }
}
```

---

# You Clicked 1 Times

---

# How to Fix This

---

```javascript
export default class extends Component {
  increment() {
    this.setState({ counter: this.state.counter + 1 }, () => {
      this.setState({ counter: this.state.counter + 1 }, () => {
        this.setState({ counter: this.state.counter + 1 });
      });
    });
  }

  constructor() {
    this.state = { counter: 0 };
  }

  render() {
    const { counter } = this.state;
    return (<button onClick={() => this.increment()}>You Clicked {counter} times</button>)
  }
}
```

---

## All Steps Are Complete

---

```javascript
export default class extends Component {
  increment() {
    this.setState(reportData, () => {
      doWorkWithResultingDOM();
    });
  }
}
```

---

# BUT

---

# This is Changing...

---

# Why

---

## Optimizing Tree Reconciliation

* Before - Every `setState` triggered a Diff and Render
* After - `setState` propegated, but renders are batched together

---

# Enter the Ember Guru

---

# We've Been Dealing With This For **YEARS**

---

```js
this.setProperties({ counter: this.couter + 1 });

Ember.run.scheduleOnce('afterRender', this, () => {
  doWorkWithResultingDOM();
});
```

---

# Other Helpful Methods

* `Ember.run.next`
* `Ember.run.throttle`
* `Ember.run.later`
* `Ember.run.schedule`

---

# Homework

* Are we using this pattern (`setState` callbacks to ensure render)?
* Where are we calling `setState` over and over?
* Is there something like `Ember.run.scheduleOnce`?

---

## What About `componentDidUpdate`?

---

# How Does the Rendering Really Work?

---

# Why was React so Huge?

---

# VDOM

---

# Look into Ember 1 and Angular 1

---

![](https://media.giphy.com/media/f9azFRzvlsqME/giphy-downsized-large.gif)

---

Checking back and forth

---

# Ember 2 and Glimmer VM

---

# Example Time

---

# HBS

```hbs
<h1>Hello NashReact</h1>
```

----

# Glimmer Result

```js
export default Ember.HTMLBars.template({
  id: "R2DXiorq",
  block: {
    symbols: [],
    statements: [[6, "h1"], [7], [0, "Hello NashReact"], [8]],
    hasEval: false
  },
  meta: {
    moduleName: "ember-templates/templates/application.hbs"
  }
});
```

----

# JSX

```js
render() {
  return <h1>Hello NashReact</h1>
}
```

----

## JSX Output

```js
render() {
  return React.createElement(
    'h1',
    null,
    'Hello NashReact'
  );
}
```

---

## HBS

```handlebars
<h1>Hello {{meetup}}</h1>
```

----

# JSX

```js
render() {
  const { meetup } = this.state;

  return <h1>Hello {meetup}</h1>
}
```

----

## Glimmer Result

```js
export default Ember.HTMLBars.template({
  id: "0WNf8tCR",
  block: {
    symbols: [],
    statements: [
      [6, "h1"],
      [7],
      [0, "Hello "],
      [1, [18, "meetup"], false],
      [8]
    ],
    hasEval: false
  },
  meta: {
    moduleName: "ember-templates/templates/application.hbs"
  }
});
```

---

# HBS

```hbs
<nav class="top-nav">
  <h1 data-test-logo>NashReact</h1>

  <ul data-test-side-navigation>
    <li>{{#link-to "profile"}}Profile{{/link-to}}</li>
    <li>{{#link-to "settings"}}Settings{{/link-to}}</li>
    <li>{{#link-to "friends"}}Friends{{/link-to}}</li>
    <li>{{#link-to "messages"}}Messages{{/link-to}}</li>
    <li>{{#link-to "logout"}}Logout{{/link-to}}</li>
  </ul>
</nav>
```

----

# JSX

```js
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
```

----

# Glimmer Output

```js
export default Ember.HTMLBars.template({
  id: "lFmyS01p",
  block: {
    symbols: [],
    statements: [
      [6, "nav"],
      [9, "class", "top-nav"],
      [7],
      [6, "h1"],
      [9, "data-test-logo", ""],
      [7],
      [0, "NashReact"],
      [8],
      [0, " "],
      [6, "ul"],
      [9, "data-test-side-navigation", ""],
      [7],
      [6, "li"],
      [7],
      [
        4,
        "link-to",
        ["profile"],
        null,
        { statements: [[0, "Profile"]], parameters: [] },
        null
      ],
      [8],
      [0, " "],
      [6, "li"],
      [7],
      [
        4,
        "link-to",
        ["settings"],
        null,
        { statements: [[0, "Settings"]], parameters: [] },
        null
      ],
      [8],
      [0, " "],
      [6, "li"],
      [7],
      [
        4,
        "link-to",
        ["friends"],
        null,
        { statements: [[0, "Friends"]], parameters: [] },
        null
      ],
      [8],
      [0, " "],
      [6, "li"],
      [7],
      [
        4,
        "link-to",
        ["messages"],
        null,
        { statements: [[0, "Messages"]], parameters: [] },
        null
      ],
      [8],
      [0, " "],
      [6, "li"],
      [7],
      [
        4,
        "link-to",
        ["logout"],
        null,
        { statements: [[0, "Logout"]], parameters: [] },
        null
      ],
      [8],
      [8],
      [8]
    ],
    hasEval: false
  },
  meta: {
    moduleName: "ember-templates/templates/application.hbs"
  }
});
```

----

# JSX Output

```js
class Nav extends React.Component {
  render() {
    return React.createElement(
      "nav",
      { class: "top-nav" },
      React.createElement("h1", { "data-test-logo": true }, "NashReact"),
      React.createElement(
        "ul",
        { "data-test-side-navigation": true },
        React.createElement(
          "li",
          null,
          React.createElement(LinkTo, { url: "profile" }, "Profile")
        ),
        React.createElement(
          "li",
          null,
          React.createElement(LinkTo, { url: "settings" }, "Settings")
        ),
        React.createElement(
          "li",
          null,
          React.createElement(LinkTo, { url: "friends" }, "Friends")
        ),
        React.createElement(
          "li",
          null,
          React.createElement(LinkTo, { url: "messages" }, "Messages")
        ),
        React.createElement(
          "li",
          null,
          React.createElement(LinkTo, { url: "logout" }, "Logout")
        )
      )
    );
  }
}
```

---

# Where Can We Optimize Next?

---

## More Work at Compile Time

---

## Dev Tooling

* Ember Test Selectors
* Ember HBS Minifier

---

## More Machine Code

> The opcode type is now assumed to bit an 8-bit int, leaving us space for 177 additional instructions (hopefully it doesn't come to this 👻 )

---

# Bundle Compiler

---

## What Does This Mean for React?

---

## I Think Static Perf Tooling Is Something Than Can Happen

---

## But...

---

# Questions?

# [fit] What the Diff...

## Ryan Tablada

---





## Example 1

```handlebars
<h1>Hello NashReact</h1>
```

```jsx
render() {
  return <h1>Hello NashReact</h1>
}
```

// OUTPUT

```js
// HTMLBars Output WITHOUT WHITESPACE REDUCTION
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

```js
render() {
  return React.createElement(
    'h1',
    null,
    'Hello NashReact'
  );
}

## Example 2

```handlebars
<h1>Hello {{meetup}}</h1>
```

```jsx
render() {
  const { meetup } = this.state;

  return <h1>Hello {meetup}</h1>
}
```

// Output

```js
// HTMLBars Output WITHOUT WHITESPACE REDUCTION
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

```js
render() {
  const { meetup } = this.state;

  return React.createElement(
    'h1',
    null,
    'Hello ',
    meetup
  );
}
```

## Example 3

```handlebars
<h1>
  <a class="home-link {{if active "active"}}">
    Hello {{meetup}}
  </a>
</h1>
```

```jsx
render() {
  const { meetup, active } = this.state;

  return (<h1>
    <a classList={ {'home-link': true, active }}>
      Hello {meetup}
    </a>
  </h1>)
}
```

// Output

```js

export default Ember.HTMLBars.template({
  id: "GjYO9K+P",
  block: {
    symbols: [],
    statements: [
      [6, "h1"],
      [7],
      [6, "a"],
      [
        10,
        "class",
        [26, ["home-link ", [25, "if", [[19, 0, ["active"]], "active"], null]]]
      ],
      [7],
      [0, "\\n    Hello "],
      [1, [18, "meetup"], false],
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

```jsx
// JSX Output
render() {
  const { meetup, active } = this.state;

  return React.createElement(
    'h1',
    null,
    React.createElement(
      'a',
      { className: `home-link ${active ? 'active' : null}` },
      'Hello ',
      meetup
    )
  );
}
```

## Talk About Simple Optimizations


This is what the same template looks like without a plugin called `ember-hbs-minifier`.

```js
// HTMLBars Output WITHOUT WHITESPACE REDUCTION
export default Ember.HTMLBars.template({
  id: "ZBabGORM",
  block: {
    symbols: [],
    statements: [
      [6, "h1"],
      [7],
      [0, "\\n  "],
      [6, "a"],
      [
        10,
        "class",
        [26, ["home-link ", [25, "if", [[19, 0, ["active"]], "active"], null]]]
      ],
      [7],
      [0, "\\n    Hello "],
      [1, [18, "meetup"], false],
      [0, "\\n  "],
      [8],
      [0, "\\n"],
      [8],
      [0, "\\n"]
    ],
    hasEval: false
  },
  meta: {
    moduleName: "ember-templates/templates/application.hbs"
  }
});
```

There are other more useful optimizations for developer friendliness too!

Meet `ember-test-selectors`

Template in:

```hbs
<h1 data-test-logo>NashReact</h1>
```

Development Template Output:

```js
export default Ember.HTMLBars.template({
  id: "8Qo81yWe",
  block: {
    symbols: [],
    statements: [
      [6, "h1"],
      [9, "data-test-logo", ""],
      [7],
      [0, "NashReact"],
      [8]
    ],
    hasEval: false
  },
  meta: {
    moduleName: "ember-templates/templates/application.hbs"
  }
});
```

Production Template out:

```js
export default Ember.HTMLBars.template({
  id: "Nx+zbxHi",
  block: {
    symbols: [],
    statements: [[6, "h1"], [7], [0, "NashReact"], [8]],
    hasEval: false
  },
  meta: {
    moduleName: "ember-templates/templates/application.hbs"
  }
});
```

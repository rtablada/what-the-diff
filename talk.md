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

```jsx

```

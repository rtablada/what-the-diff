# [fit] What the Diff...

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

[.build-lists: true]

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

[.build-lists: true]

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
  constructor() {
    this.state = {
      counter: 0
    };
  }

  render() {
    const { counter } = this.state;

    return (<button onClick={() => this.increment()}>
      You Clicked {counter} times
    </button>)
  }
}
```

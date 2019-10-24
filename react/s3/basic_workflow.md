HOW WE BUILD
============

- use npm to install dependencies
- use webpack (bundler) to optimize our code
- use babel to compile our code to run on anything
- use a dev server to test our code

CREATE REACT APP
================

we use facebook's create-react-app to initialize react projects

1. npm install -g create-react-app
1. create-react-app my-app --scripts-version 1.1.5
1. cd my-app/
1. npm start

RUNNING TEST SERVER
===================

1. cd into your apps dir
1. npm start

FOLDER STRUCTURE
================

- lock files seem to log dependencies - think freeze  in django (ignore them)
- node\_modules actually stores these dependencies (never edit)
- public is the root folder for your app
- public/index it the main html file for your app (this is the only html file you will work with)
- public/manifest.json 'metadata' ;D
- src is the folder that store our actual app
- src/index.js gets access to rood element in our dom from that html file above
- src/App.js stores the only react component in a fresh react project

```
// src/App.js
class App extends Component {
  render() {
    return (
    // this is jsx it lets you put html in your javascript
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}
```

- src/App.css stores styling for your app. (global)
- src/index.css also store styling info
- src/registerServiceWorker.js pre-caches script files (don't touch)
- src/App.test.js (put your unit tests here!)

BASIC COMPONENTS
================

It seems that you can export something after if is modified by a script.

In src/App.js, render() returns stuff to be displayed on the screen. It MUST pass some kind of html with
whatever else it's passing

```
class App extends Component {
  render() {
    //return (
    //  <div className="App">
    //    <h1>Hi, I'm a Potato!</h1>
    //  </div>
    //);
    // jsx is compiled into commands like the one below
    return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}
```

JSX RESTRICTIONS
================

- since 'class' is already used in js, we need to substitue html class with 'className'
- all jsx html statements must have one root element (all in 1 div)

FUNCTIONAL COMPONENTS
=====================

It is normal convention to name your functional components with a capital file name.
It's also normal to store these components in their own sub-directory

react functions return jsx

In JSX, all lowercase keywords are reserved for html stuff. You have to use Capitalized words for your
react functions

RE-USING COMPONENTS
===================

you can call a react function as many times as you want.

DYNAMIC CONTENT
===============

you can embed javascript in your JSX with single curly braces ({})

PROPS
=====

you can pass parameters into your function by assigning them in your JSX tags.

It is common practice to  name the parameter 'props'

you can reference the 'name' value in your tag by props.name

CHILDREN
========

you can pass the body of a tag into your function with props.children

'children' is a reserved word for whatevers in the body

STATE
=====

state is a reserved word for storing and modifying information in a react app

any change to any state attribute will update the DOM

only changes to props or state will trigger react re-render the DOM

EVENT HANDLING
==============

it is common practice to suffix a event handler method with 'Handler'

when you add a function to JSX, dont use '()' at the end of the name (that would call the function at runtime)

MANIPULATING STATE
==================

you do not want to manipulate state directly. use this.setState instead

HOOKS
=====

hooks are a way to write react apps in a completely functional style

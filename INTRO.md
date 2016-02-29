# Intent

This project is to help give a little more guidance to beginners because oftentimes tutorials assume that its viewers are already proficient with the technologies that they will be using, which is totally backwards. New developers will often feel [fatigued](https://medium.com/@ericclemmons/javascript-fatigue-48d4011b6fc4) because there is so much setup, so little real understanding, and very little documentation to look to. 

I myself am no expert, but I think that qualifies me for sharing what I do know with others who are just a step behind me. My intent is to make these tutorials a little more educational and more useful to you. 

## Groundwork

Before we even get to a single line of code, let's try and understand what we are going to be required to use. 

### React: what it isn't 

**React is not an MVC framework**. React will not handle a lot of heavy-lifting features that you may be used to in other frameworks like Angular.

### React: what it is

React is used for building _composable user interfaces_, or in other words UI components that are reusable. React is solely for creating views. React is just the **V** in [**MVC**](https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller). 

React is _declarative_ rather than _imperative_. For many beginning and intermediate developers, these terms may be new. I recommend that if you have time, dive deep into understanding the intricate differences. The extremely high-level summary is:

> Imperative programming: you tell the computer what to do and how you want it to happen.
> 
> Functional programming: simply describe what you want done. The question of _how_ it will happen is up to your framework of choice.

So when we say React is declarative it is because when your data changes, React knows to only update the changed parts of the view.

Rather than bringing Javascript to HTML, React imports HTML into Javascript through JSX. 

## ES6 vs. ES5

Javascipt is not a finished language, and every so often changes are proposed, accepted and implemented. ES6 is the latest specification at the time of this writing; formally it is known as [ECMAScript 2015](http://www.ecma-international.org/ecma-262/6.0/), as well as ES2015. Implementation is currently underway by each of the browser vendors. 

It has become best practice to use the new features and syntax now, through the use of a transpiler that converts your code into ES5 (old version) so that it still works in current browsers. Writing in ES6 means that once all browsers have implemented the new standard, you will simply no longer need to transpile your code. We will also use ES6 in order to make our code future-proof. 

How can we do this? There are several alternatives (such as [Traceur](https://github.com/google/traceur-compiler) and [6to5](https://www.npmjs.com/package/6to5), but the most popular to use with React is [Babel](https://babeljs.io/) because of its JSX compatibility. 

## JSX
The developers of React noticed that it would be much better, easier, and performant to bring HTML into the Javascript world, rather than the inverse like what Angular 1 aimed to do. This is [JSX](http://buildwithreact.com/tutorial/jsx). It offers an XML-like syntax to Javascript that is preprocessed and makes working with HTML inside your .js files much more elegant and concise. JSX is **optional** to use with React, but we will use it to enhance our code quality, as well as allow you to find and use other tutorials that also assume using JSX. 

## Webpack

Now, all of this cannot run by itself. We still need something that will run  tasks as well as serve our files. We will do this by using [Webpack](https://webpack.github.io/), a module loader that will allow us to:
 
 - Run Babel to transpile our code
 - "Bundle" the files together into one file
 - Serve our files with a simple web server (called `webpack-dev-server`)
 
 Webpack is pretty complex and many developers will tell you that it is much more powerful than you know. It's true, all of it. But [AlyssaNicoll](https://twitter.com/AlyssaNicoll/status/697979531261566976) sums it up very nicely:
 
> Internet: Webpack includes a runtime which defines a require fn & concatenates contents of all js files...
>  
>  Me: Now I understand everything!

## npm

We will be using `npm` to manage all of these libraries together. NPM is Node.js's package manager, which allows you to choose and install any number of modules written for Node. Specifically, we'll be using Node to install React, Babel, Webpack, and a few other dependencies. NPM can manage which versions and will be very useful for you if and when you deploy to a server.
 
 # Let's begin. 
 
 Go to 1-Environment.md to get started. 
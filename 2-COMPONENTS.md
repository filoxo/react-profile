## Create your first component

Let us now open `App.js` in order to declare our first component. 

1. First, we need to import React to be able to use it in this file, as well as a child method called Component. The braces around Component are an ES6 feature. This allows us to pull in the Component module directly, so its a shorthand for `React.Component`. This is called [destructuring](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) and is an ES6 feature. We're using it here simply to reduce the amount of characters you'd type.

        import React, { Component } from 'react';
    
2. Next, we will extend `Component` using the `class` syntax. 

        class App extends Component{
            render(){
            }
        }

3. Every component **must** have a `render` function. It defines exactly that: how the component should be rendered on the page. It is in this function where we can begin to  use JSX for HTML-like syntax. For example, checkout what we are returning below. It looks exactly like HTML! There are some additional nuances, but we'll get to those later. 

        ...
        render(){
            return <h1>Hello World!</h1>
        }

> Note: some IDEs may begin to mark the above syntax as incorrect. One method of getting around this is to use the `.jsx` file extension. You will need to update your Webpack config to test for these, and ultimately they will be bundled together into a single file (`index.js`). 

4. Now, we will export that class by default so that it can be imported by other files. 

        export default App;
        
We have to now wire that Component to our HTML. We will do this in `main.js`. 

1. Again we will need to import React.

        import React from 'react';

2. We will also need to import the `render` module from `react-dom` to manipulate the HTML DOM.

        import { render } from 'react-dom';

3. And then import the `App` class in order to be able to use it in this file. 
        
        import App from './App';

> Note: notice that we use the relative path to find `App`. This is because the only modules available from absolute paths are those that we installed using npm. That's why we can just pull in `react`. Remember this for all of your components. 

4. Lastly, we'll use `render()` to tell React to replace `div#app` with an `<App />` component.

        render(<App />, document.getElementById('app'));
        
Now, run the dev server by typing this in a terminal:

    npm start
    
which will internally call `webpack-dev-server` as we told it to in `package.json`. You'll just need to navigate to [localhost:3333](http://localhost:3333/) to see the page. You should now see something like this:

![](http://i.imgur.com/sTlsXVn.png)

Congratulations! This is your first working component. 

### Further develop your first component

This first component is working, but we should do some more in order to make it meaningful and worthwhile. We'll use [PureCSS](http://purecss.io/) and it's [Blog layout](http://purecss.io/layouts/blog/) to style our Profile. 

#### Install Pure locally

Download Pure and the Blog layouts. Copy the `.css` files into a new `css/` directory in the project root. We'll need:

- `pure.css` (or `pure-min.css`)
- `grids-responsive.css` (or `grids-responsive-min.css`)
- `blog.css`

Add them to your HTML's `<head>` tag.

#### Add the Blog layout

We'll copy some of the Blog layout html elements so that our page looks good from the get go. Something to note is that we are only able to return a single JSX node, meaning that we cannot return two sibling elements in the same line. They will all need to be wrapped in an enclosing element.

The parentheses that enclose our JSX is also so that we can use multiple lines. Below we've copied in the basic HTML from the Blog layout. Before this can work though, we need to replace all instances of the HTML attribute `class` because it is a reserved keyword in Javascript. `class` is replaced with `className`. 

    
    ...
    render(){
        return (
            <div id="layout" className="pure-g">
                <div className="sidebar pure-u-1 pure-u-md-1-4">
                    <div className="header">
                        <h1 className="brand-title">Your Name</h1>
                        <h2 className="brand-tagline">Tagline</h2>
                        <nav className="nav">
                            <ul className="nav-list">
                                <li className="nav-item">
                                    <a className="pure-button" href="#">Link1</a>
                                </li>
                                <li className="nav-item">
                                    <a className="pure-button" href="#">Link2</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
                <div className="content pure-u-1 pure-u-md-3-4"></div>
            </div>
        );
    }
    ...

The dev-server will automatically update our changes and reload the page (if its still running). It should now look like:

![Blog layout](http://i.imgur.com/bSeSkiY.png)
Feel free to replace some of the values like the `h1` and the tagline. 

## Create a second component

Let's create another one to further understand how to use components. This next component will be a `JobList` component that will display our jobs list. 

1. Add in the default React scaffolding

        import React, { Component } from 'react';

2. And our JobList class will extend Component. 

        class JobList extends Component{
        }
        
3. And remember that every component must have a render method.

        class JobList extends Component{
            render(){
                return (
                    ...
                );
            }
        }
        
4. And again, we'll copy some of the blog layout elements

        <div className="posts">
            <h2 className="content-subhead">Experience</h2>
        </div>

5. And export it

        ...
        export default JobList;
        
6. Now we will simply put it to use in our `App` component.
    - `import JobList from './Joblist';` at the top of the file
    - and inside our template, just drop in a `<JobList />` element inside the div with `content` class
    
            ...
            <div className="content pure-u-1 pure-u-md-3-4">
                <JobList />
            </div>
            ...

And _voilà_, return to the browser and now you'll see a heading for the list. Now, this isn't useful by itself. Let's give it some data!

### Warning: incoming data!

You might be tempted to make sure your data comes tied in with your component, but this is not what you want todo. In fact, Facebook also proposes aa new architecture for data flow called [FLUX](https://facebook.github.io/flux/docs/overview.html). FLUX is a pattern instead of an actual implementation, and the core of it is **unidirectional data flow**. This is wildly different from other MVC frameworks. Let's learn the basics of FLUX, and then how that applies to React components. 

Unidirectional means that data flows only one way. An action is heard by a dispatcher, and forwarded on to a store. The store stores the data. It is from there that the view is given the data it needs to show. Whenever the UI changes the data, it dispatches an action, which is handled by a dispatcher and then the store. This is what we mean by unidirectional flow, and notice that it is circular.  

    +------------+     +------------+     +-------------+     +--------------+
    |   Action   +-----> Dispatcher +----->    Store    +----->     View     |
    +------------+     +------^-----+     +-------------+     +-------+------+
                              |                                       |
                              |           +-------------+             |
                              +-----------+   Action    <-------------+
                                          +-------------+

In the above graph, React is the View. So when we write our components, they should not worry about how they get the state. Doesn't that sound familiar? Its declarative!
 
Looking ahead, we will want:

- Our App component to be the only thing that worries about receiving state
- But we can pass the current state to our JobList component
- Our JobList will take in an array of jobs and create Job components
- All of this will be rendered on the page

We'll tackle this in 3-MORE-COMPONENTS.md
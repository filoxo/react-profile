# Your development environment

We'll now walk through each step in getting your development environment up and running correctly so you can begin to code. This is a somewhat lengthy process but it valuable for your learning. 

A few things to note:
- Code will be formatted for easy copy/paste

Let's begin by creating a folder where all of your code resides. I called mine `react-profile/` and I will reference it as such in this project. 

Let us create your `npm` project using:

    npm init
    
This will prompt you to answer a series of questions regarding your project's metadata. For example, it will assume the directory you are in will be the project's name (so it will be `react-profile`), version, git repo url, and many other details. 

#### Install major components

Some of our packages will require that they be install _globally_, meaning that they are not to reside in our project but rather as part of our machine. 

    npm i -g webpack webpack-dev-server

In other documentation, you might find the above command written using a longer syntax. Here's what that would look like

    npm install --global webpack webpack-dev-server

#### Install dependencies

Next we will install the dependencies that we will require for our app to run. 

    npm i react react-dom -S

Notice that I am still using the shorthand notation for these commands. Alternatively, you could type

    npm install react react-dom --save

What does the `-S` or `--save` flag do? It stores the package name in `package.json` as a _dependency_, meaning that it is **required** for your app to run. 

#### Install dev dependencies

Let us install additional packages that we need in order to do our development; it will not be installed unless you specify that you need the development modules you've saved previously. That is only difference between the below command and the above. 

    npm i babel-cli babel-core babel-loader babel-preset-es2015 babel-preset-react -D
    
Which is shorthand for:

    npm install babel-loader babel-core babel-preset-2015 babel-preset-react --save-dev
    
### Create necessary files

Now, using any method you'd like create the following files in your project root

- index.html
- App.js
- main.js
- webpack.config.js 

Let me explain what each will do.
`index.html` is, of course, the HTML page that will deliver our content.
`App.js` will be our first component, which will contain all of our future components. We will go with the convention that all component files will begin witha Capital letter.
`main.js` is the entry point for our application. "Entry point" simply refers to the first file that will be delivered and interpreted by our browser.
`webpack.config.js` will handle our tasks of transpiling our .js files using Babel as well as launching our dev-server. 

Now open `webpack.config.js` and copy in the following. Review the comments of the code below and remove them once you understand what each line is about. 

    module.exports = { //Export an object that contains our configuration
      entry: './main.js', //Entry point definition, which points to main.js
      output: {
        path: './', //Output compiled js to (index.js) as defined below
        filename: 'index.js'
      },
      devServer: {
        inline: true, //Allows for 'on-the-fly' reloading
        port: 3333
      },
      module: {
        loaders: [ //Array of loader plugins 
          {
            test: /\.js$/, //Regex representing which files to test for
            exclude: /(node_modules|bower_components)/, //Exclude these from processing 
            loader: 'babel', //Use Babel
            query: {
              presets: ['es2015', 'react'] //Use these preloaders
            }
          }
        ]
      }
    };
    
Next, we'll add an NPM script so we can start our project and dev server. In `package.json` replace the line inside the `scripts` node with:

      "scripts": {
        "start": "webpack-dev-server"
      },
      
Now open `index.html` and it up using proper HTML, like so:
  
    <!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8">
    <title>React Profile</title>
    </head>
    <body>
    
    </body>
    </html>
    
Next, we need an element that React will target to render the components. In `<body>` add a `div` with an id of `app`.

    <div id="app"></div>
    
And now, just above the closing body tag, load `index.js`. 

    <script src="index.js"></script>
    
Now we should be ready to start writing cooking with React! Move on to 2-COMPONENTS.md. 
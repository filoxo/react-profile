## Passing state into children components

We will be passing the state of our list of jobs into our App, which will then pass the state down to the JobList component and then to a new Job component.
 
Let's start by modifying `App` to have a property that contains this data. 

#### `props` 

Every component allows you to declare it's properties, or just `props`. This allows your component to: setting default values, use data passed into it  dynamically, and asserting that the data is of a certain type. Let's see this in action. 

Above our `App`'s render function, we will declare a function called constructor with a parameter called props. 

    ... 
    contructor(props) {
    
    }
    render() { 
    ... 

This method is called when our component is created. Inside of it, we should call `super()` inside the constructor\* to bind those properties to our instance, and then declare a new key in our class called `state`. 

<small>\* This is critical, but understanding why is outside of the scope of this tutorial. If you want to learn more, read [Using Super Constructors Is Critical In Prototypal Inheritance In Javascript](http://www.bennadel.com/blog/1566-using-super-constructors-is-critical-in-prototypal-inheritance-in-javascript.htm) </small>

	constructor(props) {
		super(props);
		this.state = { joblist: props.initialJoblist };
	}
	
It is here that we're going to add the properties that we want our app to be aware of as soon as its created. Our example will simply give it an empty array, but some applications could benefit from placeholder data before it is retrieved externally.

Now, where are we setting the values of `props`? Because we are using ES6 classes,  `defaultProps` are defined as a property on the constructor instead of inside the class body. So between the ending brace of the class and above the `export`, add:

    App.defaultProps = { initialJoblist: [
            {
                title: 'Front-end Developer',
                company: 'Company, Inc.',
                startDate: 1457257932592,
                endDate: 1457257932592,
                description: 'lorem ipsum bacon yumyum'
            }
        ] 
    }

The dummy data we give it here is so that we can begin using the data right away. Later we will learn how to request data from an external source to retrieve a JSON list of our jobs. 

We can now take this data that `App` has and feed it into our `JobList` component. 

    ...
    <JobList jobs={ this.state.joblist } />
    ...
    
Now that we're passing that data to JobList, we need to make it aware of that data to create `Job` components (which we still haven't made either, so don't worry). 

### Using data in JobList

 now the jobless is been made aware of the actual list of jobs, we'll be up able to access that information through this.props.jobs.  our jobless component will simply aerate through the array and create job components. entering through this array is really easy  because we're using plain JavaScript. so open up the job list component file and inside the template, Underneath the subheading let's do exactly that
 
    {
        this.props.jobs.map(()=>{});
    }
    
 if you're unfamiliar with what the above map function does,  it is simply calling the function that we're passing into it on every single element of the array. this is how we are transforming every I am in the array into an actual job component.
 
  we will be passing into parameters into the map callback. the first being the actual job data object and the second and index. then  we simply need will return a job component in the method body.
  
    {
        this.props.jobs.map((jobData, ndx)=>{
            return <Job key={ndx} data={jobData} />
        });
    }
    
 and that's it I template for the jobless component is complete. But we still need to create the actual job component.
 
 ### Stateless function component
 
 The `Job` component is a good use case for a _stateless function component__. This is a simplified API for when a component can be a simple, pure function of the props passed to it; All they should ever do is transform the input. Let's see what this looks like an action.
  
-  Create a new file called `Job.js`
-  This is still a React component so we need to `import React from 'react';` but **not** the `Component` object like you had done with all prior components
- This component will only return a template, and will not even need to be declared as a class. Instead we'll save it to a `const` and pass in an anonymous function using the fat arrow syntax
- Lastly, we also export that `const` by default

Here's what the ends up looking like. 

    import React from 'react';
    
    const Job = (props) => (
        // template goes here
    );
    
    export default Job;
    
Let's pull the last of the HTML structure from the Blog layout. 

    ...
    <section className="post">
        <header className="post-header">
            <h2 className="post-title"></h2>
            <p className="post-meta"></p>
        </header>
        <div className="post-description">
            <p></p>
        </div>
    </section>
    ...
    
And lastly we display the `props` inside the template. 

    ...
    <section className="post">
        <header className="post-header">
            <h2 className="post-title">{ props.data.title }</h2>
            <p className="post-meta">
                { props.data.company } |&nbsp;
                { new Date(props.data.startDate).toLocaleDateString() }&ndash;
                { new Date(props.data.endDate).toLocaleDateString() }
            </p>
        </header>
        <div className="post-description">
            <p>{ props.data.description }</p>
        </div>
    </section>
    ...
    
That's it. A stateless function component is that simple. And its a great pattern that many beginners tutorials omit, but the React developers endorse it: 

> In an ideal world, most of your components would be stateless functions because in the future we’ll also be able to make performance optimizations specific to these components by avoiding unnecessary checks and memory allocations. This is the recommended pattern, when possible.
> <sub>[React: Stateless Functions](https://facebook.github.io/react/docs/reusable-components.html#stateless-functions)</sub>

<small>NOTE: Think back about our components. Couldn't our JobList also have been a stateless function? The answer is yes, probably. But for the sake of learning, I went ahead with another class-style component. 

Our page will now be able to render the final component correctly. It should look something like this now.

![](http://i.imgur.com/7DhW2Bl.png)

Congrats! Our app renders very nicely with 3 components. Let's now decouple the data into an external source. Move on to 4-DATA-RETRIEVAL.md.
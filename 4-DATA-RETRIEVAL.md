## Retrieving data from external source

Remember that React is only the V in MVC. As such, it does not come with anything that can perform network requests, like `jQuery.ajax()` or Angular's `$http` service. For this, we will need to use another package. 

For this I've chosen [`axios`](https://github.com/mzabriskie/axios), a simple HTTP client for the browser. Let's begin. 

Install `axios` using npm and save it as a dependency. 

    npm i axios -S
    
Now open `App.js` and import `axios` just like we import React.

    import axios from 'axios'; 
    
We will now do something we hadn't done before. We will begin tapping into [component lifecycle methods](https://facebook.github.io/react/docs/component-specs.html#lifecycle-methods). Every component goes through a series of steps when created and mounted, and we can bind to those steps according to our needs. There are many methods here, but the one we will use is `componentDidMount`. 

Once the component has mounted (thus `componentDidMount`) we will fetch our data with `axios`. When the response arrives, we'll store the data in the state, which in turn will trigger a render to update the UI.

So, in preparation for such a request, create a file called `joblist.json` at the project root. Fill it with valid json, something like:

    {
      "jobs": [
        {
          "title": "Front-end Developer",
          "company": "Company, Inc.",
          "startDate": 1457257932592,
          "endDate": 1457257932592,
          "description":"lorem ipsum bacon yumyum"
        },
        {
          "title": "Front End Developer",
          "company": "Big Co.",
          "startDate": 1457257932592,
          "endDate": 1457257932592,
          "description": "Donec sed orci rhoncus, egestas augue a, pharetra augue. Donec ac erat nulla. Quisque nec interdum purus. Nullam tempor neque nibh, at bibendum nunc facilisis auctor. Curabitur a massa leo. Duis eget orci eu nunc malesuada luctus."
        }
      ]
    }
    
Feel free to add as many jobs as you'd like. In fact, populate it with at least 3 of your own jobs. 

Next, In App add a `componentDidMount` method to the App class. 

    ...
    componentDidMount(){
    }
    ...
    
Now we can use Axios' `get()` method to make a GET request to retrieve `joblist.json` from our server. Axios is Promise-based, so the method is "thenable", meaning once the request has resolved, we can call `then()` on it to get the response data in a callback. A `catch()` method is also provided on the request so we can handle errors. We'll also use that below.

    componentDidMount(){
        axios.get('/joblist.json')
            .then((response)=>{
                console.log(response);
            })
            .catch((error) => console.warn(error));
    }
    
 Plug in the above, return to our page, and open up your browser's dev tools to see the response. In Chrome, I saw a line displaying:
 
 > Object {data: Object, status: 200, statusText: "OK", headers: Object, config: Object}
 
 `status: 200` is recognizable as a success code, and `data` contains the data from our JSON file. In the real world, you would probably be hitting some endpoint that returned back a JSON response, so retrieving `joblist.json` is a good analog. 
 
 Now we know we got the data! Let's now use that data and update our state rather than logging it. 
 
    ...
    .then((repsonse) => {
        this.setState({
            joblist: response.data.jobs
        })
    }
    ...
    
 Return to your browser. You should now see every job rendered on the page. Fantastic!
 
 ![](https://i.imgur.com/1tuhbjn.png)
 
 This code is now complete, and could potentially be deployed. I will also provide additional resources and information in 5-RESOURCES.md for you to further your learning. 
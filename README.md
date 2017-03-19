# Project-3 - Random Local Bar Generator 

### Authors
- Andres Maza
- Sky Xu
- Thomas Standing
- Jeremy Ross

### Technologies Used

Our stack implemented consisted of Node.js and Express on the backend, and React on the front end.
We used a few different middlewares and different dependencies including but not limited to:

    "bcrypt": "^1.0.2",
    "body-parser": "^1.17.1",
    "cors": "^2.8.1",
    "dotenv": "^4.0.0",
    "ejs": "^2.5.6",
    "express": "^4.15.2",
    "express-jwt": "^5.1.0",
    "express-session": "^1.15.1",
    "jsonwebtoken": "^7.3.0",
    "jwt-express": "^1.1.0",
    "method-override": "^2.3.7",
    "morgan": "^1.8.1",
    "node-fetch": "^1.6.3",
    "pg-promise": "^5.6.4",
    "yelp-fusion": "^1.0.3" 
    

A simple npm install upon installation should allow any developer access.     

### General Approach

Our approach was simple, create a function and simple app that would perform a simple search depending on the users geo location and provide a effortless user experience with a usable interface. We would have two tables ![ERD](http://i.imgur.com/2psdTxd.png) and our homepage ![Homepage](http://imgur.com/ZGuWjD2) would be just as simple as well. ![Dashboard](http://imgur.com/2JvNoCC)

![Yelp Fusion API](http://cdn.ttgtmedia.com/ITKE/uploads/blogs.dir/317/files/2016/09/1yelpoewifiuwgf.jpg)

We decided to use [Yelp's Fusion API](https://www.yelp.com/developers/documentation/v3/business_search) which gave a robust and extensive json response in which we would be able to massage to get what we needed for our application. 

Once we had our API functionality built out and were able to test it successfully using postman, we were able to complete our front end with React and create our components that would interact with our API. Once we were able to integrate the front end with the back end. 

### User Stories

1. Users can search for a single random bar within a 500 meter radius.
2. Users can sign up and login to save their favorite bars to their own account/dashboard. 
3. Users not satisfied with their random encounter can also select another watering hole by clicking a "search more" button.
4. Users can delete their saved bars in their dashboard.
5. * Users can vote on the bars and leave comments in the common area of each bar.
6. * Users can select by group or date as well as fancy or dive bar to see a specific bar shown to them.

### Unsolved problems 

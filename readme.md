# Express 101


# Routes

- Routes are basically pathways in our server.  They usually are only for one destination and do one thing.  What these things are depends on what you determine your server is going to do.

- For example:  If you have an application that is for a restaurant, maybe you want to show all of the menu items.

- Route consist of a few things
    1. `app` this lets us start the creation of a route using express
    2. `app.get`, or what is called an HTTP Method.  This is a way of tracking if you need to read data, create data, update data, or delete data. (CRUD) .  The most commonly used methods are GET, POST, PUT, DELETE.
    3. `app.get("/name_of_your_route")`, the name of your route lets you know what the route is for.  It has to be a string and you should always use a `/` when you write the name.  Don't use spaces.
    4.  `app.get("/name_of_your_route", (req, res)=> {})`, the last part of a route is a callback function AND IT MUST HAVE (REQ, RES) IN THAT ORDER! OR ELSE.  I SWEAR IF YOU MESS THIS UP, YOU WILL HATE YOUR DEVELOPMENT OF YOUR SERVER

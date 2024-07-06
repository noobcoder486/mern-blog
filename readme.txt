First Started Installing React using Vite

Then installed Tailwind css for design

Then created 5 pages in the pages folder

Then added routes for those pages

Then created a header component in component folder

For ready made bootstrap used, Flowbite-react which is kinda tailwind css framework

Then created the Header using Flowbite

After that created backend folder named 'api'

In that first installed Express js server
 
In that api folder created a index.js page as the package.json needs index.js post installing express

After that need to change the type to module in package.json as it is needed for running express

Wrote some code for running express server.

Server needs to be stopped and start again for detecting changes. To overcome this, installed nodemon.

Wrote a small script in package.json for running the server with custom command.

Now its time to connect the database i.e MongoDB for that I installed mongoose i.e npm i mongoose

Using this in index.js just get the connecttion string from mongo db official site for ur databse and add using mongoose.connect() method

It takes time to first configure the database on official site post which we get a connection string

Now connection string cannot be added directly to code as it is has credentials so we use .env file to hide it while uploading.

For this a package is installed called dotenv i.e npm i dotenv which helps to extract the data variable from .env file and use it dynamically in the connection string. 

After this we are working on user sign up. For that we need to create a user schema and a user model so that we can use it to store the user.

To store it we need api, for that we create a test api in index.js. But for better readability we create a separate route folder in index.js

And for each route we create a separate controller to manage the logic. After that we can run and test the 'test api'.

To develop a signup api, we create a route in api/routes with the name auth.In that we declare the app.use(controller_name)

Now the logic part of signup is written in controller/auth.controller.js where we validate the user and then sign them up using try catch and user.save().





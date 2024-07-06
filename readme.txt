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


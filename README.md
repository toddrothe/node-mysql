#this will install the required dependencies listed in package.json
npm install

#adjust the configs at the top of index.js to match your sql db
#adjust the connection.query(params) to match your table/model

# this will start the node server
node index.js

#in your browser hit the following uri,
#set the url query params to match you model
#the port is set at the bottom of the index.js file
#http://localhost:8080/user?id=2

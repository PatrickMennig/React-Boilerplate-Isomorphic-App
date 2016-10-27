# Main Server


## Routes

Each route that is not a webpage route (i.e. one that is **not** in "shared/routes/routes.jsx" has to be addressed here.
See [the main README for servers](../README.md) for more information.

## Dependencies

What can go wrong here? 
Imagine you define a proxy route called "/contact" that should proxy all requests to another server, that will handle the contact form post.
How will you call the corresponding route on the client?
Hopefully not `Route path="/contact" component={/* ... */} />` cause that will fail.
The main server will proxy the **GET** request to the contact form server and not the page rendering server.
Depending on your server setup, this will fail more or less silently.

You can test it: rename the contact form route in "shared/routes/routes.jsx" or the proxy route in "server/main/main.jsx" so that both have the same name, restart the application (`npm run development`) and visit http://localhost:3000/contact.
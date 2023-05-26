# Express.js: Note Taker

Starter code was provided for the front end, using Module 11 in Bootcamp.

## Under the Hood

On the back end, the app includes a `db.json` file that stores and retrieves notes using the `fs` module.

The following HTML routes were created:

* `GET /notes` returns the `notes.html` file.

The following API routes were created:

* `GET /api/notes` reads the `db.json` file and return all saved notes as JSON.

* `POST /api/notes` receives a new note to save on the request body, adds it to the `db.json` file, and then returns the new note to the client. 

I gave each note a unique id when it's saved by using Math.floor(Math.random())

## Visual

![Screenshot](/public/assets/images/Screenshot%202023-05-25%20at%208.46.03%20PM.png)

### Deployment

Check it out on [Heroku](https://infinite-reef-61323.herokuapp.com/)
// importing the required modules
const express = require("express");
const path = require("path");
const fs = require("fs");

// assign express() to app
// choose PORT we're gonna use
const app = express();
const PORT = process.env.PORT || 3000;


// require UUID: creates unique ids
// const uuid = require('uuid'); 



// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// homepage
app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,"public/index.html"))
})

// use GET to render /notes page
app.get('/notes', (req, res) =>
res.sendFile(path.join(__dirname, './public/notes.html'))
);

// use GET to route thru /api database: grabbing data for /notes :
app.get('/api/notes', (req, res) => {
    fs.readFile("./db/db.json", "utf-8", (err, data) => {
        if (err) {
        console.log(err);
        } else {
        res.json(JSON.parse(data));
        }
    })
});

// use POST to add new notes
app.post("/api/notes", (req,res) => {
    fs.readFile("./db/db.json","utf-8", (err,data) => {
        if (err) {

            return console.log(err);
            
        }else{
            const allNotesData = JSON.parse(data);
            const newNote = {
                id: (Math.floor(Math.random()*1000000)),
                title: req.body.title,
                text: req.body.text,

            }
            allNotesData.push(newNote);
            fs.writeFile("./db/db.json", JSON.stringify(allNotesData, null, 4), (err) => {
                if(err){
                    return console.log(err);
                }else{
                    return res.json(newNote);
                }
            })
        }
    })

});

// listen on PORT
app.listen(PORT, () =>
    console.log(`Check it out at http://localhost:${PORT}`)
);

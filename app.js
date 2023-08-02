const express = require ("express");
const path = require ("path");
const PORT = process.env.PORT || 3000 ;
const app = express();

app.use(express.static("public"));

app.get ("/", (req,res) => res.sendFile(path.join(__dirname, "views","home.html")));

app.listen(PORT, () => console.log ("servidor corriendo en el puerto: ", PORT));

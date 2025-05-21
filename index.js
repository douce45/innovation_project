const express = require('express');
const app = express();
const dotenv = require('dotenv');
const cors = require('cors');
const utilisateurs_routes = require('./routes/utilisateur.routes');

const upload_routes = require('./routes/upload.routes');
const fileUpload = require('express-fileupload');
const auth_routes = require('./routes/auth.routes');
const profil_routes = require('./routes/profil.routes');

dotenv.config();
var corsOptions = {
    origin: function (origin, callback) {
              if (!origin || (origin  !== -1)) {
                        callback(null, true)
              } else {
                        callback(new Error('Not allowed by CORS'))
              }
    }
}
app.use(cors(corsOptions));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(express.urlencoded({ extended: true }));
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Utilisation du middleware express-fileupload
app.use(fileUpload());

// Routes des utilisateurs
app.use('/', utilisateurs_routes);
app.use('/', profil_routes);

// Nouveau middleware pour les routes de téléchargement
app.use('/upload', upload_routes);
app.use('/auth', auth_routes)


app.listen(port, () => {
    console.log(`Serveur écoutant sur le port ${port}`);
});
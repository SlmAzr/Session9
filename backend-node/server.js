// require('dotenv').config();
// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const session = require('express-session');
// const MongoStore = require('connect-mongo');

// const app = express();

// // Middleware
// app.use(express.json());

// // CORS configuration pour le développement local
// app.use(cors({
//   origin: 'http://localhost:5173', // Remplacez par le port de votre frontend local
//   credentials: true, // Autorise les cookies cross-origin en développement
// }));

// // Configuration des sessions pour l'environnement local
// app.use(session({
//     secret: process.env.SESSION_SECRET || 'secret_local', // Une clé secrète de base pour le développement
//     resave: false,
//     saveUninitialized: false,
//     store: MongoStore.create({
//         mongoUrl: process.env.MONGO_URI,
//         collectionName: 'sessions'
//     }),
//     cookie: {
//         maxAge: 24 * 60 * 60 * 1000, 
//         httpOnly: true, 
//         secure: false 
//     }
// }));

// // Import des routes
// const authRoutes = require('./routes/auth');
// const userRoutes = require('./routes/users');

// // Utilisation des routes
// app.use('/api/auth', authRoutes);
// app.use('/api/users', userRoutes);

// // Connexion à MongoDB
// mongoose.connect(process.env.MONGO_URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// })
// .then(() => console.log('Connexion à MongoDB réussie'))
// .catch(err => console.log('Erreur de connexion à MongoDB:', err));

// // Démarrer le serveur
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//     console.log(`Serveur Node.js démarré sur le port ${PORT}`);
// });




require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const session = require('express-session');
const MongoStore = require('connect-mongo');

const app = express();

// Middleware
app.use(express.json());

// CORS configuration pour le développement local
app.use(cors({
  origin: 'http://localhost:5173', // Remplacez par le port de votre frontend local
  credentials: true, // Autorise les cookies cross-origin en développement
}));

// Configuration des sessions pour l'environnement local
app.use(session({
  secret: process.env.SESSION_SECRET || 'secret_local', // Une clé secrète de base pour le développement
  resave: false,
  saveUninitialized: false,
  store: MongoStore.create({
    mongoUrl: process.env.MONGO_URI,
    collectionName: 'sessions',
  }),
  cookie: {
    maxAge: 24 * 60 * 60 * 1000, // 1 jour
    httpOnly: true, // Empêche l'accès au cookie via JavaScript
    secure: false, // Ne pas utiliser Secure en local (ne fonctionne pas sans HTTPS)
  },
}));

// Import des routes
const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/users');

// Utilisation des routes
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);

// Connexion à MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Connexion à MongoDB réussie'))
.catch(err => console.log('Erreur de connexion à MongoDB:', err));

// Démarrer le serveur
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Serveur Node.js démarré sur le port ${PORT}`);
});

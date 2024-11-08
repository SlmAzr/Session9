const User = require('../models/User');
const bcrypt = require('bcrypt');

// Inscription
exports.register = async (req, res) => {
    try {
        const { username, email, password } = req.body;

        const userExists = await User.findOne({ email });
        if (userExists) return res.status(400).json({ message: 'Email déjà utilisé' });


        const hashedPassword = await bcrypt.hash(password, 10);


        const newUser = new User({
            username,
            email,
            password: hashedPassword,
        });

    
        await newUser.save();
        res.status(201).json({ message: 'Utilisateur créé avec succès' });
    } catch (error) {
        res.status(500).json({ error });
    }
};

// Connexion
exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email });
        if (!user) return res.status(400).json({ message: 'Identifiants incorrects' });

        const validPass = await bcrypt.compare(password, user.password);
        if (!validPass) return res.status(400).json({ message: 'Identifiants incorrects' });

        req.session.user = user;

        res.status(200).json({ message: 'Connecté avec succès' });
    } catch (error) {
        res.status(500).json({ error });
    }
};

// Déconnexion
exports.logout = (req, res) => {
    req.session.destroy();
    res.status(200).json({ message: 'Deconnecté avec succès' });
};

    

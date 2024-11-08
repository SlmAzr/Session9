const User = require('../models/User');

exports.getUser = async (req, res) => {
    try {
        if (!req.session.user) {
            return res.status(401).json({ message: 'Non autorisé' });
        }
        const user = await User.findById(req.session.user).select('-password');
        if (!user) {
            return res.status(404).json({ message: 'Utilisateur non trouvé' });
        }
        res.json(user);
    } catch (error) {
        res.status(500).json({ error });
    }
};



module.exports = (req, res, next) => {
    if (!req.session.user) {
        return res.status(401).json({ message: 'Utilisateur non authentifié' });
    }
    req.user = { id: req.session.user.id };
    
    next(); 
};

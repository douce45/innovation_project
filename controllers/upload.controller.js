const fs = require('fs');
const path = require('path');

const uploadFicher = async (req, res) => {
    try {
        if (req.files) {
            const fichier = req.files.fichier;
            const dossier = path.resolve('./') + path.sep + 'public' + path.sep;
            const nomFichier = fichier.name;
            const destination = dossier + nomFichier;

            // Créer le dossier "public" s'il n'existe pas
            if (!fs.existsSync(dossier)) {
                fs.mkdirSync(dossier, { recursive: true });
            }

            // Déplacer le fichier vers le dossier "public"
            await fichier.mv(destination);

            res.status(200).json({
                message: "Votre fichier a été enregistré"
            });
        } else {
            res.status(422).send({ error: "Aucun fichier fourni" });
        }
    } catch (error) {
        console.error('Erreur lors de l\'enregistrement du fichier:', error);
        res.status(500).send("Erreur interne du serveur : " + error.message);
    }
};

module.exports = {
    uploadFicher
};
//controller pour la Gestion des depenses
const jwt = require("jsonwebtoken");
const Validation = require("../class/Validation,js");
const path = require("path");
const bcrypt = require("bcrypt");
const RESPONSE_CODES= require("../constants/RESPONSE_CODES");
const RESPONSE_STATUS= require("../constants/RESPONSE_STATUS");
const { ConnectionError } = require("sequelize");
const Depenses = require("../models/Depenses");



//fonction pour afficher tous les dépenses
const findAll_depense = async (req, res) => {
    try {
      const result = await Depenses.findAll();
      res.status(RESPONSE_CODES.OK).json({
        statusCode: RESPONSE_CODES.OK,
        httpStatus: RESPONSE_STATUS.OK,
        message: "Liste des dépenses",
        result: {
          data: result,
        },
      });
    } catch (error) {
      console.log(error);
      res.status(RESPONSE_CODES.INTERNAL_SERVER_ERROR).json({
        statusCode: RESPONSE_CODES.INTERNAL_SERVER_ERROR,
        httpStatus: RESPONSE_STATUS.INTERNAL_SERVER_ERROR,
        message: "Erreur interne du serveur, réessayer plus tard",
      });
    }
  };
//fonction pour creer une dépense
const create_depense = async (req, res) => {
    try {
      const {DESCRIPTION_DEPENSE } = req.body;
  
  
      const depense_create = await Depenses.create({
        DESCRIPTION_DEPENSE:DESCRIPTION_DEPENSE,      
      });
  
      res.status(RESPONSE_CODES.CREATED).json({
        statusCode: RESPONSE_CODES.CREATED,
        httpStatus: RESPONSE_STATUS.CREATED,
        message: "Votre dépense a été crée avec succes",
        result: depense_create,
      });
  
    } catch (error) {
      console.log(error);
      res.status(RESPONSE_CODES.INTERNAL_SERVER_ERROR).json({
        statusCode: RESPONSE_CODES.INTERNAL_SERVER_ERROR,
        httpStatus: RESPONSE_STATUS.INTERNAL_SERVER_ERROR,
        message: "Erreur interne du serveur, réessayer plus tard",
      });
    }
  };
  //fonction pour afficher une seule dépense
const getOne_depense = async (req, res) => {
    try {
      const { DEPENSE_ID   } = req.params;
      const depense_get_one = await Depenses.findOne({
        where: {
          DEPENSE_ID  ,
        },
  
      });
      if (depense_get_one) {
        res.status(RESPONSE_CODES.OK).json({
          statusCode: RESPONSE_CODES.OK,
          httpStatus: RESPONSE_STATUS.OK,
          message: "Dépense trouvée",
          result: stages,
        });
      } else {
        res.status(RESPONSE_CODES.NOT_FOUND).json({
          statusCode: RESPONSE_CODES.NOT_FOUND,
          httpStatus: RESPONSE_STATUS.NOT_FOUND,
          message: "Dépense non trouvée",
        });
      }
    } catch (error) {
      console.log(error);
      res.status(RESPONSE_CODES.INTERNAL_SERVER_ERROR).json({
        statusCode: RESPONSE_CODES.INTERNAL_SERVER_ERROR,
        httpStatus: RESPONSE_STATUS.INTERNAL_SERVER_ERROR,
        message: "Erreur interne du serveur, réessayer plus tard",
      });
    }
  };
  
  

//fonction pour faire la mise a jour du dépense
const update_depense = async (req, res) => {
  try {
    const { DEPENSE_ID} = req.params;
    const {DESCRIPTION_DEPENSE} = req.body;
    await Depenses.update(
      {
        DESCRIPTION_DEPENSE: DESCRIPTION_DEPENSE,      
      },
      {
        where: {
          DEPENSE_ID: DEPENSE_ID,
        },
      }
    );
    res.status(200).json({
      message: "Depense modifié avec succès",
      data: {
        DESCRIPTION_DEPENSE,       
      },
    });
  } catch (error) {
    console.log(error);
    res.status(500).send("Erreur interne du serveur");
  }
};
//fonction pour supprimer une dépense
const delete_depense = async (req, res) => {
  try {
    const { DEPENSE_ID  } = req.params;
    await Depenses.destroy({
      where: {
        DEPENSE_ID : DEPENSE_ID ,
      },
    });
    res.status(200).json({
      message: "Votre dépense a étée supprimé avec succès",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send("Erreur interne du serveur");
  }
};



//fonction pour afficher la filière d'un stagiaire par ID
const findFiliereById = async (req, res) => {
    const { id } = req.params;
    try {
      const stagiaire = await Stagiaire.findByPk(id);
      if (!stagiaire) {
        return res.status(RESPONSE_CODES.NOT_FOUND).json({
          statusCode: RESPONSE_CODES.NOT_FOUND,
          httpStatus: RESPONSE_STATUS.NOT_FOUND,
          message: "Stagiaire non trouvé",
        });
      }
      res.status(RESPONSE_CODES.OK).json({
        statusCode: RESPONSE_CODES.OK,
        httpStatus: RESPONSE_STATUS.OK,
        message: "Filière du stagiaire",
        result: {
          filiere: stagiaire.FILIERE,
        },
      });
    } catch (error) {
      console.log(error);
      res.status(RESPONSE_CODES.INTERNAL_SERVER_ERROR).json({
        statusCode: RESPONSE_CODES.INTERNAL_SERVER_ERROR,
        httpStatus: RESPONSE_STATUS.INTERNAL_SERVER_ERROR,
        message: "Erreur interne du serveur, réessayer plus tard",
      });
    }
  };
  //fonction  pour chercher un stagiaire par nom
  const findStagiaireByNom = async (req, res) => {
    const { nom } = req.query; // Assurez-vous d'utiliser `?nom=...` dans l'URL
    try {
      const stagiaires = await Stagiaire.findAll({
        where: {
          NOM: {
            [Sequelize.Op.like]: `%${nom}%`, // Recherche insensible à la casse
          },
        },
      });
      if (stagiaires.length === 0) {
        return res.status(RESPONSE_CODES.NOT_FOUND).json({
          statusCode: RESPONSE_CODES.NOT_FOUND,
          httpStatus: RESPONSE_STATUS.NOT_FOUND,
          message: "Aucun stagiaire trouvé avec ce nom",
        });
      }
      res.status(RESPONSE_CODES.OK).json({
        statusCode: RESPONSE_CODES.OK,
        httpStatus: RESPONSE_STATUS.OK,
        message: "Stagiaires trouvés",
        result: {
          data: stagiaires,
        },
      });
    } catch (error) {
      console.log(error);
      res.status(RESPONSE_CODES.INTERNAL_SERVER_ERROR).json({
        statusCode: RESPONSE_CODES.INTERNAL_SERVER_ERROR,
        httpStatus: RESPONSE_STATUS.INTERNAL_SERVER_ERROR,
        message: "Erreur interne du serveur, réessayer plus tard",
      });
    }
  };
  //fonction pour chercher un stagiaire par nom et prénom
  const findStagiaireByNomPrenom = async (req, res) => {
    const { nom, prenom } = req.query; // Assurez-vous d'utiliser `?nom=...&prenom=...` dans l'URL
    try {
      const stagiaires = await Stagiaire.findAll({
        where: {
          NOM: {
            [Sequelize.Op.like]: `%${nom}%`, // Recherche insensible à la casse
          },
          PRENOM: {
            [Sequelize.Op.like]: `%${prenom}%`,
          },
        },
      });
      if (stagiaires.length === 0) {
        return res.status(RESPONSE_CODES.NOT_FOUND).json({
          statusCode: RESPONSE_CODES.NOT_FOUND,
          httpStatus: RESPONSE_STATUS.NOT_FOUND,
          message: "Aucun stagiaire trouvé avec ce nom et prénom",
        });
      }
      res.status(RESPONSE_CODES.OK).json({
        statusCode: RESPONSE_CODES.OK,
        httpStatus: RESPONSE_STATUS.OK,
        message: "Stagiaires trouvés",
        result: {
          data: stagiaires,
        },
      });
    } catch (error) {
      console.log(error);
      res.status(RESPONSE_CODES.INTERNAL_SERVER_ERROR).json({
        statusCode: RESPONSE_CODES.INTERNAL_SERVER_ERROR,
        httpStatus: RESPONSE_STATUS.INTERNAL_SERVER_ERROR,
        message: "Erreur interne du serveur, réessayer plus tard",
      });
    }
  };

module.exports = {
    findAll_depense,
  update_depense,
  delete_depense,
  create_depense,
  getOne_depense, 
};

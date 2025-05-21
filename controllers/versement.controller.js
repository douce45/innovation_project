//controller pour la Gestion des Versements
const jwt = require("jsonwebtoken");
const Validation = require("../class/Validation,js");
const path = require("path");
const bcrypt = require("bcrypt");
const RESPONSE_CODES= require("../constants/RESPONSE_CODES");
const RESPONSE_STATUS= require("../constants/RESPONSE_STATUS");
const { ConnectionError } = require("sequelize");
const Versements = require("../models/Versements");



//fonction pour afficher tous les Versements
const findAll_versement = async (req, res) => {
    try {
      const result = await Versements.findAll();
      res.status(RESPONSE_CODES.OK).json({
        statusCode: RESPONSE_CODES.OK,
        httpStatus: RESPONSE_STATUS.OK,
        message: "Liste des Versements",
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
//fonction pour creer une versement
const create_versement = async (req, res) => {
    try {
      const {MONTANT ,ID_UTILISATEUR,VALIDE_PAR} = req.body;
      const versement_create = await Versements.create({
        MONTANT:MONTANT,      
        ID_UTILISATEUR:ID_UTILISATEUR,      
        VALIDE_PAR:VALIDE_PAR,      
      });
  
      res.status(RESPONSE_CODES.CREATED).json({
        statusCode: RESPONSE_CODES.CREATED,
        httpStatus: RESPONSE_STATUS.CREATED,
        message: "Votre versement a été crée avec succes",
        result: versement_create,
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
  //fonction pour afficher une seule versement
const getOne_versement = async (req, res) => {
    try {
      const { ID_VERSEMENT   } = req.params;
      const versement_get_one = await Versements.findOne({
        where: {
          ID_VERSEMENT  ,
        },
  
      });
      if (versement_get_one) {
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
          message: "Profil non trouvée",
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
  
  

//fonction pour faire la mise a jour du versement
const update_versement = async (req, res) => {
  try {
    const { ID_VERSEMENT  } = req.params;
    const {MONTANT ,ID_UTILISATEUR,VALIDE_PAR } = req.body;
    await Versements.update(
      {
        MONTANT:MONTANT,      
        ID_UTILISATEUR:ID_UTILISATEUR,      
        VALIDE_PAR:VALIDE_PAR,      
      },
      {
        where: {
          ID_VERSEMENT: ID_VERSEMENT,
        },
      }
    );
    res.status(200).json({
      message: "Versement modifié avec succès",
      data: {
        PROFIL_DESCR,
      
      },
    });
  } catch (error) {
    console.log(error);
    res.status(500).send("Erreur interne du serveur");
  }
};
//fonction pour supprimer une versement
const delete_versement = async (req, res) => {
  try {
    const { ID_VERSEMENT  } = req.params;
    await Versements.destroy({
      where: {
        ID_VERSEMENT : ID_VERSEMENT ,
      },
    });
    res.status(200).json({
      message: "Votre versement a été supprimé avec succès",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send("Erreur interne du serveur");
  }
};

module.exports = {
  findAll_versement,
  update_versement,
  delete_versement,
  create_versement,
  getOne_versement, 
};

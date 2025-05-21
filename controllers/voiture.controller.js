//controller pour la Gestion des depenses
const jwt = require("jsonwebtoken");
const Validation = require("../class/Validation,js");
const path = require("path");
const bcrypt = require("bcrypt");
const RESPONSE_CODES= require("../constants/RESPONSE_CODES");
const RESPONSE_STATUS= require("../constants/RESPONSE_STATUS");
const { ConnectionError } = require("sequelize");
const Voitures = require("../models/Voitures");



//fonction pour afficher tous les voitures
const findAll_voiture = async (req, res) => {
    try {
      const result = await Voitures.findAll();
      res.status(RESPONSE_CODES.OK).json({
        statusCode: RESPONSE_CODES.OK,
        httpStatus: RESPONSE_STATUS.OK,
        message: "Liste des voitures",
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
//fonction pour creer une voiture
const create_voiture = async (req, res) => {
    try {
      const {VOITURE_DESCR,PLAQUE,ID_ITINERAIRE,IS_ACTIVE } = req.body;
  
  
      const voiture_create = await Voitures.create({
        VOITURE_DESCR:VOITURE_DESCR,      
        PLAQUE:PLAQUE,      
        ID_ITINERAIRE:ID_ITINERAIRE,      
        IS_ACTIVE:IS_ACTIVE,      
      });
  
      res.status(RESPONSE_CODES.CREATED).json({
        statusCode: RESPONSE_CODES.CREATED,
        httpStatus: RESPONSE_STATUS.CREATED,
        message: "Votre voiture a été crée avec succes",
        result: voiture_create,
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
  //fonction pour afficher une seule voiture
const getOne_voiture = async (req, res) => {
    try {
      const {VOITURE_ID} = req.params;
      const voiture_get_one = await Voitures.findOne({
        where: {
          	VOITURE_ID  ,
        },
  
      });
      if (voiture_get_one) {
        res.status(RESPONSE_CODES.OK).json({
          statusCode: RESPONSE_CODES.OK,
          httpStatus: RESPONSE_STATUS.OK,
          message: "Voiture trouvée",
          result: stages,
        });
      } else {
        res.status(RESPONSE_CODES.NOT_FOUND).json({
          statusCode: RESPONSE_CODES.NOT_FOUND,
          httpStatus: RESPONSE_STATUS.NOT_FOUND,
          message: "Voiture non trouvée",
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
  
  

//fonction pour faire la mise a jour du voiture
const update_voiture = async (req, res) => {
  try {
    const {VOITURE_ID} = req.params;
    const {VOITURE_DESCR,PLAQUE,ID_ITINERAIRE,IS_ACTIVE } = req.body;
    await Voitures.update(
      {
        VOITURE_DESCR:VOITURE_DESCR,      
        PLAQUE:PLAQUE,      
        ID_ITINERAIRE:ID_ITINERAIRE,      
        IS_ACTIVE:IS_ACTIVE,       
      },
      {
        where: {
          	VOITURE_ID:VOITURE_ID,
        },
      }
    );
    res.status(200).json({
      message: "Voiture modifié avec succès",
      data: {
        DESCRIPTION_DEPENSE,
        PLAQUE,  
        ID_ITINERAIRE,
        IS_ACTIVE     
      },
    });
  } catch (error) {
    console.log(error);
    res.status(500).send("Erreur interne du serveur");
  }
};
//fonction pour supprimer une voiture
const delete_voiture = async (req, res) => {
  try {
    const { 	VOITURE_ID  } = req.params;
    await Voitures.destroy({
      where: {
        	VOITURE_ID : 	VOITURE_ID ,
      },
    });
    res.status(200).json({
      message: "Votre voiture a étée supprimé avec succès",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send("Erreur interne du serveur");
  }
};
const is_active_voiture = async (req, res) => {
  try {
    const {VOITURE_ID} = req.params;
    const {IS_ACTIVE} = req.body;
    await Voitures.update(
      {
        IS_ACTIVE:IS_ACTIVE,           
      },
      {
        where: {
            VOITURE_ID:VOITURE_ID,
        },
      }
    );
    res.status(200).json({
      message: "Voiture modifié avec succès",
      data: {
        IS_ACTIVE,       
      },
    });
  } catch (error) {
    console.log(error);
    res.status(500).send("Erreur interne du serveur");
  }
  };



module.exports = {
  findAll_voiture,
  update_voiture,
  delete_voiture,
  create_voiture,
  getOne_voiture, 
  is_active_voiture
};

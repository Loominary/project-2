const db = require('../db/db.js');
const joi = require('joi');

module.exports = {
    getAllTemplates: async function(req,res,next){
        
        const sql = 'SELECT * FROM templates'

        try {
            const result = await db.query(sql);
            res.json(result[0]);
        } catch (err) {
            console.log(err);
        }

    },

    getTemplateById: async function(req,res,next){
        const param = req.params;

        const sql = `SELECT * FROM templates WHERE id =${param.tempId}`
        try{
            const result = await db.query(sql);

            if (result[0].length>0){
                res.send(result[0])
            }else {res.status(400).send('Could not find template')}
        }catch (err){
            console.log(error);
            res.status(400).send('Something went wrong, please try again later.')
        }
    }
}
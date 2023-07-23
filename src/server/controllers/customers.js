const db = require('../db/db.js');
const joi = require('joi');

module.exports = {

    getAllCustomers: async function (req, res, next) {
        const param = req.query;
        //to do: add sort by column
        const sql = 'SELECT * FROM customers'

        try {
            const result = await db.query(sql);
            res.json(result[0]);
        } catch (err) {
            console.log(err);
        }
    },
    getCustomerById: async function (req,res,next){
        const param = req.query;

        const schema = joi.object({
            custId: joi.number().required().min(1),
        });
        const {error} = schema.validate(param);

        if (error){
            console.log(error);
            res.status(400).send('Could not find customer');
            return;
        }

        const sql = `SELECT * FROM customers WHERE id = ${param.custId}`;

        try{
            const result = await db.query(sql);

            if (result[0].length>0){
                res.send(result[0])
            }else {res.status(400).send('Could not find customer')}
        }catch (err){
            console.log(error);
            res.status(400).send('Something went wrong, please try again later.')
        }
    },

}
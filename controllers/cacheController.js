'use strict'

const controller = {

    testCache: function(req, res){
        let saludos = [];

        for (let i = 0; i < 100000; i++) {
            console.log( "Hola "+i);
            saludos.push("Hola "+i);

        }

       return res.status(200).send({
        status: 200,
        mensage: "Cacheo exitoso",
        data: saludos
        }
       )
    }
};

module.exports = controller;
'use strict'

const { testJob } = require('../workers/queues')

var controller = {
    test_Job: function (req, res) {
        testJob.add();
        console.log('hola mundo desde el controlador');
        return res.status(200).send({
            status: 200,
            mensage: 'El job fue recibido'
        })
}
}

module.exports = controller
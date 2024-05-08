'use strict'


let redis = {
    host: 'redis-12699.c277.us-east-1-3.ec2.redns.redis-cloud.com',
    port: 12699,
    password:'D8iddwTi7Hzg3ebKDjP0TDssYXEThWYQ',
    
}

const {
    testJob: testJobWorker 
     
} = require('./workers');


const Queue = require('bull');
const testJob = new Queue('testJob', { redis});


testJob.process(1, (job, done) => testJobWorker(job, done));

const queues = [{
    name: 'testJob',
    hostId: 'Jobs de test de configuracion',
    redis

}]

module.exports = {
    testJob,
    queues
}
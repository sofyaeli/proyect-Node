'use strict'

const Queue = require('bull');


const myQueue = new Queue('myQueue', {
    redis: {
        host: 'redis-12699.c277.us-east-1-3.ec2.redns.redis-cloud.com',
        port: 12699,
        password:'D8iddwTi7Hzg3ebKDjP0TDssYXEThWYQ',
        expire:1200
    }
});

myQueue.process(async(job) => {
    console.log(`procesando tarea con ID: ${job.id}`);


    await new Promise(resolve => setTimeout(resolve, 3000));
        
    console.log(`tarea procesada con ID: ${job.id}`);
});

for (let i = 0; i < 10; i++) {
    myQueue.add({
        id: i
    });
}
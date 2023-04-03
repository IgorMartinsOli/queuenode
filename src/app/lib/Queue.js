const Queue = require('bull');
const redisConfig = require('../../config/redis');

const RegistrationMail = require('../jobs/RegistrationMail');

const mailQueue = new Queue(RegistrationMail.key, redisConfig);

mailQueue.on('failed', (job) => {
    console.log('Job failed ', job.nome, job.data, {job});
})

module.exports = mailQueue;
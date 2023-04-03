const Mail = require('../lib/Mail');

module.exports = {
    key: 'RegistrationMail',
    async handle({data}){
        const {user} = data;
        await Mail.sendMail({
            from: 'Queue Test <queuetest@gmail.com>',
            to: `${user.name} <${user.email}>`,
            subject: 'Cadastro de usuario',
            html: `<h1>Olá, ${user.name}!</h1>\nBem-vindo ao sistema de filas do Igor :D`
        })
    }
}
const { createTransport } = require('nodemailer');



const signupEmail = (user) => {
    const TEST_MAIL = 'nicobalaudo@gmail.com'

    const transporter = createTransport({
        service: 'gmail',
        auth: {
            user: TEST_MAIL,
            pass: 'faemnxenegvrfmhm'
        }
    });

    const mailOptions = {
        from: 'Servidor Node.js',
        to: TEST_MAIL,
        subject: 'Nuevo registro',
        html: `<div><h1 style="color: blue;">Se ha registrado el usuario:</h1><ul><li>Email: ${user.email}</li><li>Nombre: ${user.nombre}</li><li>Dirección: ${user.direccion}</li><li>Edad: ${user.edad}</li><li>Teléfono: ${user.telefono}</li></ul></div>`
    }

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent');
        }
    });
}

module.exports = signupEmail


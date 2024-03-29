import { createTransport } from 'nodemailer'

const mailer = (user, data, to) => {
  const ADMIN_MAIL = process.env.NODEMAILER_ADMIN

  const transporter = createTransport({
    service: 'gmail',
    auth: {
      user: ADMIN_MAIL,
      pass: process.env.NODEMAILER_PASS
    }
  })

  let TO = null
  if (to === 'signupMail') {
    const signupMail = {
      from: 'Servidor Node.js',
      to: ADMIN_MAIL,
      subject: 'Nuevo registro',
      html: `<div><h1 style="color: blue">Se ha registrado el usuario:</h1><ul><li>Email: ${user.email}</li><li>Nombre: ${user.nombre}</li><li>Dirección: ${user.direccion}</li><li>Edad: ${user.edad}</li><li>Teléfono: ${user.telefono}</li></ul></div>`
    }
    TO = signupMail
  } else if (to === 'checkoutMail') {
    const arr = []
    data.forEach(element => { arr.push(`<tr><td style='border: 1px solid black'>${element.title}</td><td style='border: 1px solid black'>${element.price}</td><td style='border: 1px solid black'><img style="height: 100px" src="${element.thumbnail}" alt="" /></td><td style='border: 1px solid black'>${element.quantity}</td></tr>`) })
    const products = arr.join()
    const checkoutMail = {
      from: 'Servidor Node.js',
      to: ADMIN_MAIL,
      subject: 'Checkout aprobado',
      html: `<h1>Nuevo pedido de ${user.nombre}, email: ${user.email}</h1><table style='border: 1px solid black'><tr><th style='border: 1px solid black'>Título</th><th style='border: 1px solid black'>Precio</th><th style='border: 1px solid black'>Imagen</th><th style='border: 1px solid black'>Cantidad</th></tr>${products.replace(/,/g, '')}</table>`
    }
    TO = checkoutMail
  }

  transporter.sendMail(TO, function (error, info) {
    if (error) {
      return { error: 'Error sending email' }
    } else {
      return { succes: 'Successfully sended email' }
    }
  })
}

export default mailer

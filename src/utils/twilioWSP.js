import logger from '../config/logger.js';
const accountSid = 'ACc6889f9f228d14971b9c164228f20f06';
const authToken = process.env.TWILIO_WSP;
import TwilioSDK from 'twilio';
const client = TwilioSDK(accountSid, authToken)

const twilioWSP = (user) => {
    const ADMIN = process.env.TWILIO_ADMIN_WSP
    if (user?.telefono) {
        client.messages
            .create({
                body: 'Tu pedido ha sido recibido y se encuentra en proceso',
                from: 'whatsapp:+14155238886',
                to: `whatsapp:${user.telefono}`
            })
            .then(message => logger.info(message.sid))
        client.messages
            .create({
                body: `Nuevo pedido de ${user.nombre}, email: ${user.email}`,
                from: 'whatsapp:+14155238886',
                to: `whatsapp:${ADMIN}`
            })
            .then(message => logger.info(message.sid))
    }
}



export default twilioWSP
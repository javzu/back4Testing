const jwt = require('jsonwebtoken');

const generarJWT = (uid) => {

    return new Promise((resolve, reject) => {
        const payload = { uid };
        jwt.sign(payload, process.env.JWT_KEY,
            {
                expiresIn: '48h',
            }, (err, token) => {
                if (err) {
                    reject('no se pudo generar el jwt');
                }
                else {
                    resolve(token);
                }
            });
    });

}

const comprobar_JWT = (token = '') => {
    try {
        const { uid } = jwt.verify(token, process.env.JWT_KEY);
        return [true, uid] //PARA RETORNAR DOS VARIABLES
    }
    catch (e) {
        return [false, null]
    }
}
module.exports = {
    generarJWT,
    comprobar_JWT
}
const connection = require('../database/database_connection');

class FormData {

    constructor({ nombre, empresa, email, telefono, tema, mensaje }) {
        this.nombre = nombre;
        this.empresa = empresa,
            this.email = email,
            this.telefono = telefono,
            this.tema = tema
        this.mensaje = mensaje
    }


    async AddFormData() {
        try {
            const t = await connection.query("INSERT INTO consultas (nombre,empresa,email,telefono, seq_tema, mensaje) values (?,?,?,?,?,?)",
                [this.nombre, this.empresa, this.email, this.telefono, this.tema, this.mensaje])

            console.log('resultado OK ', t);
            return true;
        }
        catch (e) {
            console.log('error on insert ', e);
            return false;
        }
    }

    async GetAllData() {

        let t = connection.query("Select * from consultas", (error, result) => {
            if (error) throw error;
            console.log('resultado ', result);
        });
    }
    async GetbyALGO() {
        //TODO
    }
}
module.exports = FormData;
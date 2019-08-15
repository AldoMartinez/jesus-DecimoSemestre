const lamina = require('../models/Lamina');

exports.tablaPage = (req, res) => {
    lamina.findAll()
        .then(function(laminas) {
            res.render('tables', {
                nombreUsuario: global.nombreUsuario,
                laminas: laminas
            })
        })
        .catch(error => console.log(error));
}
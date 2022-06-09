// server/index.js

const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();

var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Rojito02!"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  con.query("use `it-jobs`;");
});

app.use(express.json());
//app.use(express.urlencoded({extended: true}));

app.get("/persona/:clave-:correo",(req, res) => {
	con.query("SELECT * FROM persona WHERE correo = '"+ req.params.correo +"' AND contraseña = '"+req.params.clave+"';", function (err, result) {
		if (err) throw err;
		if(result.length > 0){
			con.query("CALL getKind("+result[0].idPersona+");", function(err2, result2){
				if (err2) throw err2;
				res.json({id: result[0].idPersona,name: result[0].nombre, lname: result[0].primerApellido, user: result2[0][0].kind});
			});
		} else res.json({id: null});
	});
});

//Crea un registro en la tabla de vacantes
app.post("/vacante", (req, res) => {
	con.query("SELECT idReclutador FROM reclutador WHERE persona="+req.body.id+";", function (err2, result2) {
		if(err2) throw err2;
		if(result2.length > 0){
			con.query("INSERT INTO vacante(nombre, descripcion,fechaLimite,fechaPublicacion, reclutador, requisitos) VALUES ('"+req.body.name+"','"+req.body.desc+"','"+req.body.expires+"',CURDATE(),"+result2[0].idReclutador+",'"+req.body.requirements+"')", function (err, result){
				if(err) throw err
				res.json({message: "Correct"});
			});
		} else res.json({message: "Error"});
	});
});

//Añade un solicitante, en la tabla personas y en la tabla solicitante
app.post("/solicitante", (req, res) => {
	con.query("INSERT INTO persona(nombre, primerApellido,segundoApellido,telefono, correo, sexo, contraseña) VALUES ('"+req.body.name+"','"+req.body.last1+"','"+req.body.last2+"','"+req.body.phone+"','"+req.body.email+"','"+req.body.sex+"','"+req.body.password+"')", function (err, result){
			if(err) throw err;
			con.query("SELECT idPersona FROM persona WHERE telefono="+req.body.phone+" AND correo='"+req.body.email+"';", function(err2, result2){
				if(err2) throw err2;
				con.query("INSERT INTO solicitante(persona, edoCivil, notificaciones) VALUES ("+result2[0].idPersona+",'"+req.body.state+"','"+req.body.notify+"');", function(err3, result3){
					if(err3) throw err3;
					res.json({message: "Correct"});
				});
			});
	});
});

//Obtiene las solicitudes realizadas por un solicitante en particular
app.get("/solicitud/:id", (req, res) => {
	con.query("SELECT idSolicitud, nombre, nombreComercial, DATE_FORMAT(fecha, '%d-%b-%Y'), estado "+
						"FROM (((solicitud JOIN solicitante ON solicitud.solicitante = solicitante.idSolicitante) "+
							"JOIN vacante ON solicitud.vacante = vacante.idVacante) "+
							"JOIN reclutador ON vacante.reclutador = reclutador.idReclutador) "+
							"JOIN empresa ON reclutador.empresa = empresa.idEmpresa "+
						"WHERE solicitante.persona = "+req.params.id+";", function(err, result){
								if(err) throw err;
								res.json({content: result});
						});
});


app.listen(PORT, () => {
	console.log(`Server listening on ${PORT}`);
});

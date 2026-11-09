const boton = document.querySelector("#boton");
const respuestaUsuario = document.querySelector("#respuestaUsuario");


//EVENTOS 
boton.addEventListener("click", (ev) => {
    obtenerUsuario();
    //console.log(boton)
});
//La promesa debe resolver con un objeto de usuario ficticio (nombre, correo electrónico).

//FUNCIONES
//Crea una función que simule una llamada a una API y devuelva una promesa.

const consultaUsuario = () => {
    const usuario = { id: 1, nombre: "Pepe", email: "nombre@nombre.com" };
    //console.log(usuario)
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (usuario) {
                resolve(usuario);
            } else {
                reject('El usuario no existe');
            }
        }, 1000);
    });
};
const pintarUsuario = (usuario) => {
    const usuarioFinal = document.createElement('UL');
    const nombreUsuario = document.createElement('LI');
    nombreUsuario.textContent = usuario.nombre;
    const emailUsaurio = document.createElement('Li');
    emailUsaurio.textContent = usuario.email;
    usuarioFinal.append(nombreUsuario, emailUsaurio);
    respuestaUsuario.append(usuarioFinal);
};

//INVOCACIÓN
const obtenerUsuario = () => {
    consultaUsuario()
        .then((respuesta) => {
            pintarUsuario(respuesta);
        })
        .catch((error) => {
            console.log(error);
        })
};

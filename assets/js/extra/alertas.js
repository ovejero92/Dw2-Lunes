// mensaje de bienvenida
function MensajeDeBienvenida(nombreUsuario) {
    Swal.fire({
        title:`¡Bienvenido/a ${nombreUsuario}!`,
        text:'Gracias por visitar nuestra tienda',
        icon:'success',
        confirmButtonText:'Continuar'
    });
}
// funcion de error
const MostrarError = (mensaje) => {
    Swal.fire({
        title:`¡Error!`,
        text:mensaje,
        icon:'error',
        confirmButtonText:'Reintentar'
    })
}
// confirmacion de compra
function ConfirmacionDeCompra(producto) {
    Swal.fire({
        title:`¡Compra realizada!`,
        text:`¡Gracias por comprar ${producto}!`,
        icon:'success',
        confirmButtonText:'Ver mas productos'
    })
}
const db = [
    {
        nombre:"producto ejemplo1",
        precio:1999,
        img:"https://w7.pngwing.com/pngs/744/758/png-transparent-computer-icons-new-product-development-box-miscellaneous-text-label-thumbnail.png",
        stock:30,
        descuento:30
    },
    {
        nombre:"producto ejemplo2",
        precio:2999,
        img:"https://w7.pngwing.com/pngs/744/758/png-transparent-computer-icons-new-product-development-box-miscellaneous-text-label-thumbnail.png",
        stock:10
    },
    {
        nombre:"producto ejemplo3",
        precio:999,
        img:"https://w7.pngwing.com/pngs/744/758/png-transparent-computer-icons-new-product-development-box-miscellaneous-text-label-thumbnail.png",
        stock:0
    }];

const cuerpo = document.getElementById("cuerpo");

db.forEach( (pro) => {   
    const articulo = document.createElement("article");
articulo.classList.add("card");

const imagen = document.createElement("img");
imagen.src = pro.stock == 0 ? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrGWOn6yxEcGqZ1jIGvILjp6x8bvLnQQvKMw&s" : pro.img;
imagen.alt = "Producto ejemplo"
articulo.appendChild(imagen);

// Crear y agregar nombre del producto
const nombre = document.createElement("h2");
nombre.textContent = pro.nombre;
articulo.appendChild(nombre);

// Crear y agregar precio
const precio = document.createElement("p");
pro.stock == 0 ? precio.innerHTML = `<s>$${pro.precio}</s>` : precio.textContent = "$" + pro.precio;

articulo.appendChild(precio);

// Crear y agregar botón de agregar al carrito
const boton = document.createElement("button");
boton.textContent = "Agregar al carrito";
boton.classList.add("btn-agregar");
if(pro.stock == 0) {
    boton.classList.remove("btn-agregar");
    boton.setAttribute("disabled","")
}
articulo.appendChild(boton);

cuerpo.appendChild(articulo);
})

document.getElementById('jsonBtn').addEventListener('click',getProductos);

function getProductos() {
    fetch('./productos.json')
    .then(function(res) {
        return res.json();
    })
    .then(function(data){
        let html = '';
        data.forEach(function(prod){
            html += `
            <div class="product" data-price=${prod.precio} data-id=${prod.id}>
            <h3>${prod.nombre}</h3>
            <img src=${prod.stock == 0 ? "./img/productosIMG/sinStock.png" : prod.img} alt="plano" width="400">
            <p>${prod.precio}$<p/>
            <button class="btn btn-primary">Agregar</button>
            </div>
            `;
        })
        document.querySelector('.contenedorCards').innerHTML = html;
    })
    .catch(function(error) {
        document.querySelector('.contenedorCards').innerHTML = `
            <div class="error" style="color: red; font-weight: bold;">
                ⚠️ Error al cargar los productos: ${error.message}
            </div>
        `;
        console.error("Error al obtener productos:", error);
    });
}


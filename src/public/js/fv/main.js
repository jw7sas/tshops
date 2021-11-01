const BASE_API = '/tshops/src/public/data/surtifruver.json';


const productTemplate = (product) => {
    return (`
        <div class="card item-product" style="">
            <div class="product-image">
                <a href="#">
                    <figure class="figure">
                        <img src="${product.image_url}" class="img-thumbnail" alt="${product.title}">
                        <figcaption class="figure-caption text-end">${product.title}</figcaption>
                    </figure>
                </a>
            </div> 
            <div class="card-body">
            <h5 class="card-title text-center">${product.title}</h5>
            <p class="card-text text-center">${product.description}</p>
            <p class="card-text text-primary text-center">${currency(product.price)}</p>
            <div class="add-cart-product">
                <a href="#" class="btn btn-primary">Agregar al carrito</a>
            </div>
            </div>
        </div>
    `);
}

function graphProducts(products) {
    if(products){
        const baseDiv = document.getElementById("list-products");
        for(index in products){
            const product = products[index];
            const div = document.createElement('div');
            div.classList.add("col-md-4", "item-product");
            div.innerHTML = productTemplate(product);
            
            baseDiv.appendChild(div);
        }
    }
}
(async function load(){
    const products = await getData(BASE_API);
    graphProducts(products);
})();
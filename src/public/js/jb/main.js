const BASE_API = '/tshops/src/public/data/justo_y_bueno.json';


const productTemplate = (product) => {
    return (`
        <div class="card-image">
            <a class="product-description" href="#">
                <figure class="image is-4by3">
                    <img src="${product.image_url}" alt="${product.title}">
                </figure>
            </a>
        </div>
        <div class="card-content">
            <div class="media">
            <div class="media-content is-flex is-justify-content-center">
                <p class="title is-4">${product.title}</p>
            </div>
            </div>
            <div class="is-flex is-justify-content-center">
                <div class="content">
                <p class="has-text-centered">${product.description}</p>
                <p class="has-text-centered">
                    <a>${currency(product.price)}</a>
                </p>    
                <br>
                <div class="control mt-4">
                    <button class="button is-info is-rounded">Agregar al carrito</button>
                </div>
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
            div.classList.add("card", "item-product");
            div.innerHTML = productTemplate(product);
            
            baseDiv.appendChild(div);
        }
    }
}
(async function load(){
    const products = await getData(BASE_API);
    graphProducts(products);
})();
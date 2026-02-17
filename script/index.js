const getTrendingProducts = () => {
    fetch("https://fakestoreapi.com/products")
        .then(res => res.json())
        .then(data => {
            const trendingProductsContainer = document.getElementById("trending-products");
            displayProducts(data.sort((a, b) => b.count - a.count).slice(0, 3), trendingProductsContainer);
        })
        .catch(err => console.log(err));
};

const getAllProduct = () => {
    fetch("https://fakestoreapi.com/products")
        .then(res => res.json())
        .then(data => {
            const allProductsContainer = document.getElementById('all-products-container');
            displayProducts(data, allProductsContainer);
        })
        .catch(err => console.log(err));
};

const displayProducts = (products, productsContainer) => {
    console.log('first')
    console.log(document.getElementById('all-products-container'))
    console.log(productsContainer)
    products.forEach(product => {
        const productCard = document.createElement("div");
        productCard.className = "card bg-base-200 shadow-md";
        productCard.innerHTML = `
            <figure class="px-6 pt-6">
                <img src="${product.image}" class="rounded-xl h-64 object-cover" />
            </figure>
            <div class="card-body">
                <div class="flex justify-between items-center text-sm">
                    <span class="badge badge-soft badge-outline badge-primary">${product.category}</span>
                    <span><i class="fa-solid fa-star text-yellow-500"></i> ${product.rating.rate} (${product.rating.count})</span>
                </div>
                <h3 class="card-title text-base">${product.title}</h3>
                <p class="font-bold">$${product.price}</p>
                <div class="card-actions mt-3 grid grid-cols-2 gap-2">
                    <button class="btn btn-outline btn-sm  rounded-lg">
                        <i class="fa-solid fa-eye"></i> Details
                    </button>
                    <button class="btn bg-primary text-white btn-sm  rounded-lg">
                        <i class="fa-solid fa-cart-plus"></i> Add
                    </button>
                </div>
            </div>
        `;
        productsContainer.append(productCard);
    });
}


const getAllCategories = () => {
    fetch("https://fakestoreapi.com/products/categories")
        .then(res => res.json())
        .then(categories => {
            const categoryContainer = document.getElementById("category-container");
            categories.forEach(category => {
                const categoryCard = document.createElement("div");
                // categoryCard.className = "inline-block mr-2 mb-2";
                categoryCard.innerHTML = `
                    <button class="btn btn-outline btn-sm rounded-full">${category}</button>
                `;
                categoryContainer.append(categoryCard);
            })
        })
        .catch(err => console.log(err));
};




const getProductsByCategory = (category) => `https://fakestoreapi.com/products/category/${category}`;
const getProductsById = (id) => `https://fakestoreapi.com/products/${id}`;


getTrendingProducts()
getAllCategories()
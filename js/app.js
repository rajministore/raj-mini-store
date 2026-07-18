loadProducts();

async function loadProducts(){

const { data , error } =
await supabase
.from("products")
.select("*")
.eq("status","active")
.order("id",{ascending:false});

if(error){
document.getElementById("products")
.innerHTML="Products Load Error";
return;
}

let html="";

data.forEach(product=>{

html += `
<div class="product-card">

<img src="${product.image_url}">

<div class="product-info">

<div class="product-name">
${product.name}
</div>

<div class="price">
₹${product.price}
</div>

<div class="old-price">
₹${product.old_price || ""}
</div>

<button class="buy-btn">
Buy Now
</button>

</div>

</div>
`;

});

document.getElementById("products")
.innerHTML=html;

}

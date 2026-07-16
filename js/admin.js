document.addEventListener("DOMContentLoaded", () => {

const btn = document.querySelector("button");
const inputs = document.querySelectorAll("input");

btn.addEventListener("click", async () => {

const name = inputs[0].value;
const price = inputs[1].value;
const image = inputs[2].value;

if(!name || !price || !image){
alert("Sabhi fields bharo");
return;
}

const { error } = await supabase
.from("products")
.insert([
{
name: name,
price: price,
image_url: image
}
]);

if(error){
alert("Error: " + error.message);
console.log(error);
}
else{
alert("Product Add Ho Gaya");
inputs[0].value = "";
inputs[1].value = "";
inputs[2].value = "";
}
});

});

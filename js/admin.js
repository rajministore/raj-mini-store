document.addEventListener("DOMContentLoaded", () => {

  const btn = document.getElementById("addBtn");

  btn.addEventListener("click", async () => {

    const name = document.getElementById("productName").value;
    const price = document.getElementById("productPrice").value;
    const image = document.getElementById("productImage").value;

    if (!name || !price || !image) {
      alert("Sabhi fields bharo");
      return;
    }

    try {

      const { data, error } = await supabase
        .from("products")
        .insert([
          {
            name: name,
            price: Number(price),
            image_url: image
          }
        ]);

      if (error) {
        alert("Error: " + error.message);
        console.log(error);
      } else {
        alert("Product Add Ho Gaya ✅");

        document.getElementById("productName").value = "";
        document.getElementById("productPrice").value = "";
        document.getElementById("productImage").value = "";
      }

    } catch (err) {
      alert("JS Error: " + err.message);
      console.log(err);
    }

  });

});

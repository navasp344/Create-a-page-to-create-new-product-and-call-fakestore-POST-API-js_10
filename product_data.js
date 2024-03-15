async function product_cards() {
  let product_card_list = {
    title: document.getElementById("title").value,
    price: +document.getElementById("price").value,
    description: document.getElementById("description").value,
    image: document.getElementById("image").value,
    category: document.getElementById("category").value,
    rating: {
      rate: +document.getElementById("rating").value,
      count: +document.getElementById("count").value,
    },
  };
   console.log(product_card_list);
  var response = await fetch("https://fakestoreapi.com/products", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(product_card_list),
  });
  var data = response.json();
  console.log(data);

}



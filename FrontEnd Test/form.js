function display_form(e) {
  const a = document.getElementById(e);

  if (e == "contact" && a.style.display == "none") {
    const product = document.getElementById("product");
    product.style.display = "none";
    a.style.display = "block";
  } else if (e === "product") {
    const contact = document.getElementById("contact");
    contact.style.display = "none";
    a.style.display = "block";
  } else {
    const contact = document.getElementById("contact");
    const product = document.getElementById("product");
    contact.style.display = "none";
    product.style.display = "none";
  }
}

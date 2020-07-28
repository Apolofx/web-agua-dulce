let header = document.querySelector("header");

header.addEventListener("click", function () {
  console.log(this.attributes.nombre.value);
});

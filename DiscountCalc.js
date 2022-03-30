//const button = document.getElementById("button");
//button.addEventListener("click", calcular());
const resultado = document.getElementById("resultado");
const cupones = document.getElementById("cupones");

cupones.addEventListener("change", function calcularConCupon() 
    {
        limpiar()
        const price = document.getElementById("price");
        const cupon = this.options[cupones.selectedIndex];
        const value1 = parseInt(price.value);
        const value2 = parseInt(cupon.value)
        const precioConDescuento = calcularPrecio(value1, value2);
        return resultado.textContent += precioConDescuento;
    })

function calcularPrecio(precio, porcentaje) {
    return precio * (100 - porcentaje)/100;
};
function limpiar() {
    resultado.textContent = "";
    const price = document.getElementById("price");
    price.textContent += 12000
}
function calcular() {
    limpiar()
    const price = document.getElementById("price");
    const discount = document.getElementById("price-discount");
    const value1 = parseInt(price.value);
    const value2 = parseInt(discount.value);
    const precioConDescuento = calcularPrecio(value1, value2);
    return resultado.textContent += precioConDescuento;
};

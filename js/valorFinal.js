let nombre;
let costoProducto;
const IVA = 1.21;
let beneficioProducto;
let costoTotalProducto;
let precioCompetencia;
let saludo;
let saludo2;


const validarNombre = () => {
    let nombre = prompt("Para una atención mas personalizada, ingrese su nombre:").toUpperCase();
    console.log(nombre);
    while ((nombre === "") || (!/^[a-zA-Z]+$/.test(nombre))) {
        nombre = prompt("Ingrese correctamente su nombre:").toUpperCase();
    }
    console.log(nombre);
    return nombre;
}
nombre = validarNombre();

saludo = ("Bienvenido " + nombre + ", al simulador de precios, debe ingresar 3 valores: \n 1- Costo de fabricación del producto.\n 2- Beneficio que quiere obtener, en % (respecto del costo). \n 3- Precio de la competencia.");
alert(saludo);

const validarCostoProducto = () => {
    let costoProducto = parseFloat(prompt("Ingrese el costo que necesita para producir su producto:"));
    console.log(costoProducto);
    while ((isNaN(costoProducto)) || (costoProducto <= 0)) {
        costoProducto = parseFloat(prompt("Por favor, ingrese correctamente el costo de su producto:"));
    }
    console.log(costoProducto);
    return costoProducto;
}
costoProducto = validarCostoProducto();

const validarBeneficioProducto = () => {
    let beneficioProducto = parseFloat(prompt("Ingrese el porcentaje que quiere obtener como beneficio (respecto del costo del producto)"));
    console.log(beneficioProducto);
    while ((isNaN(beneficioProducto)) || (beneficioProducto <= 0)) {
        beneficioProducto = parseFloat(prompt("Ingrese correctamente el beneficio (recuerde que es el porcentaje respecto del costo del producto)"));
    }
    console.log(beneficioProducto);
    return beneficioProducto;
}
beneficioProducto = validarBeneficioProducto();

const CostoTotalProducto = () => {
    costoTotalProducto = ((costoProducto + (costoProducto * (beneficioProducto / 100))) * IVA).toFixed(2);
    console.log(costoTotalProducto);
    return costoTotalProducto;
}
costoTotalProducto = CostoTotalProducto();

alert("El costo final del producto es: $" + costoTotalProducto +
"\n\n El costo total se compone de: \n" + 
"1- Costo para fabricar el producto: $" + costoProducto + 
"\n2- Beneficio: $" + (costoProducto * (beneficioProducto / 100)) + ". (" + beneficioProducto + "%)" + 
"\n3- IVA: $" + ((costoTotalProducto - ((costoProducto * (beneficioProducto / 100)) + costoProducto))).toFixed(2) + " (21% del total)");

saludo2 = ("Para comparar su producto respecto de otros, ingrese el precio de la competencia:");
alert(saludo2);

const validarPrecioCompetencia = () => {
    let precioCompetencia = parseFloat(prompt("Ingrese el precio del producto de la competencia:"));
    console.log(precioCompetencia);
    while ((isNaN(precioCompetencia)) || (precioCompetencia <= 0) || (precioCompetencia < (costoProducto * IVA))) {
        precioCompetencia = parseFloat(prompt("Por favor, ingrese correctamente el precio de la competencia. \nIMPORTANTE! El precio de la competencia debe ser mayor al costo de producción + el IVA de su producto (en este caso el mínimo debe ser: $" + (costoProducto * IVA) + ")"));
    }
    console.log(precioCompetencia);
    return precioCompetencia;
}
precioCompetencia = validarPrecioCompetencia();


    if (costoTotalProducto > precioCompetencia) {
        diferencia = (((costoTotalProducto - precioCompetencia) / costoTotalProducto) * 100).toFixed(2);
        console.log(diferencia);
        alert("Su producto es $" + (costoTotalProducto - precioCompetencia).toFixed(2) + " más caro. \n\n" + "El producto de la competencia es un: " + diferencia + "% más barato respecto del suyo.");
        alert("Se puede hacer el siguiente análisis: \n" + 
        "Si los costos de producción son los mismos, ud tiene un " + beneficioProducto + "% de beneficio, que se traducen en $" + ((costoTotalProducto / 1.21) - costoProducto).toFixed(2) + " de ganancia." +
        "\nY la competencia solo tiene un: " + (((((precioCompetencia / IVA) - costoProducto) / costoProducto) * 100).toFixed(2)) + "% de beneficio, que se traducen como: $" + (((precioCompetencia / IVA) - costoProducto)).toFixed(2) + " de ganancia."
        );
    } else {
        diferencia = (((precioCompetencia - costoTotalProducto) / costoTotalProducto) * 100).toFixed(2);
        console.log(diferencia);
        alert("El producto de la competencia es $" + (precioCompetencia - costoTotalProducto).toFixed(2) + " más caro. \n\n" + "Su producto es un: " + diferencia + "% más barato respecto de la competencia.");
        alert("Se puede hacer el siguiente análisis: \n" + 
        "Si los costos de producción son los mismos, ud tiene un " + beneficioProducto + "% de beneficio que se traducen en $" + ((costoTotalProducto / 1.21) - costoProducto).toFixed(2) + " de ganancia." + 
        "\nY la competencia tiene un: " + (((((precioCompetencia / IVA) - costoProducto) / costoProducto) * 100).toFixed(2)) + "% de beneficio, que se traducen como: $" + (((precioCompetencia / IVA) - costoProducto)).toFixed(2) + " de ganancia."
        );
    }

let receta = {

}

receta.nombre = "Sandwich";
receta.ingredientes = [];
receta.ingredientes.Pan = 2;
receta.ingredientes.Queso = 1;
console.log(Object.keys(receta.ingredientes)[0]);

let suma = 0;
for (let i in receta.ingredientes){
    suma += receta.ingredientes[i];
}
console.log(suma);

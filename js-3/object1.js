let pedro  ={
    nombre: "Pedro Perez",
    edad: 30,
    activo: true,
    hobbies: ["programador", "squash", "piano"],

    saluda: function(){
        console.log("Hola me llamo " + this.nombre)
    }
}

pedro.saluda();
delete pedro.activo;
pedro.estatura = 1.8;
console.log(pedro.edad);
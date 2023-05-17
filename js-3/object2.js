let persona = {
  nombre: "Miguel Mora",
  edad: 29,
  cuidad: "Bogota",
  profesion: "Desarrollaador web",
  presentacion: function () {
    let texto =
      "Hola mi nombre es " +
      this.nombre +
      ", tengo " +
      this.edad +
      " años y soy de " +
      this.cuidad;
    return texto;
  }
}
persona.hobbies = ["leer", "caminar", "pasear"];
mensaje = persona.presentacion();
console.log(mensaje);
console.log(persona.hobbies);

for (let i of persona.hobbies){
    console.log(i);
}


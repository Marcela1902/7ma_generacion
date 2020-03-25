

/*var libroSnack = [
    [
        "botana1",
        "sabor",
        "25gr"

    ],
    [
        "botana1",
        "sabor",
        "25gr"
    ],
]*/
var listSnacks = []

function Snack(nombre, sabor,contenido){
    this.nombre = nombre;
    this.sabor = sabor;
    this.contenido = contenido;
    this.slogan = function (){
        alert(`nuestra botana ${this.nombre} es la mas sabrosa!!!`)
    }

}

const createsnack =(bookSnack) => {
    bookSnack.forEach(receta => {
        let snack = new Snack(...receta);
        listSnacks.push(snack)

    });
    console.log(listSnacks);

}

//createsnack(libroSnack);
var bookSnacks = [];
const newSnacks = () =>{
    let cantidad = parseInt(prompt ("cuantas botanas quieres crear"));
    let i;
     for(i=0;i< cantidad;i++){
         let nombre = prompt(`cual es el nombre de la ${i + 1}° botana`);
         let sabor = prompt(`cual es el sabor de tu ${i+1}° botana`);
         let cantidad = prompt(`cuanto contiene tu ${i+1}° boatana`);
         var botana = [nombre, sabor, cantidad];
         bookSnacks.push(botana);

    }
    createsnack(bookSnacks);

}
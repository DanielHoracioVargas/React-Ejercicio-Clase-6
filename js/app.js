class Button {
    constructor(parentID, text) {
        this.parentID = parentID;
        this.text = text;
        // completa this.text
    }

    // Invente yo diseño mio...
    render(){
        let myApp = document.getElementById(this.parentID);

        const myButtonHTML = myApp.innerHTML + "<button>"+ this.text + "</button>";

        myApp.innerHTML = myButtonHTML; // VAmos a escribir el html para que se 
        // dibuje un boton con el texto de this.text
    }
}

class Input {
    constructor(parentID, type) {
        this.parentID = parentID;
        // if type != opciones validas... entonces poner un valor por default.
        this.type = type;
    }

    render() {
        let myApp = document.getElementById(this.parentID);

        const myInputHTML = myApp.innerHTML + "<input type="+ this.type + ">";

        myApp.innerHTML = myInputHTML; // VAmos a escribir el html para que se 
       
    }   
}

let mySuperArrayofStrings = ["Login" , "Signup" , "Reset", "Cancel" ];

function RenderButton(text){
    let myButton = new Button("app", text );
    myButton.render();
}

mySuperArrayofStrings.forEach(element => RenderButton(element));

// Defino una funcion cone el nombre que quiero...
function MySuperFuncion(){

}

MySuperFuncion(); // Invocamos ...

// Puedo asignar a una constante una funcion que NO tiene nombre
const MySuperFuncionDefinida = function(){

}

MySuperFuncionDefinida();

// definir funciones asignando otras..
const MySegundaSuperFuncionDefinida = MySuperFuncion;




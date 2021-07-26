class Pedido {
    constructor(nombre, apellido, email, tipo, tamano){
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
        this.tipo = tipo;
        this.tamano = tamano;
    }
}

let pedidos = [];

function mostrarPedido(e) {
    
    e.preventDefault()

    let nombre = document.getElementById("nombre").value
    let apellido = document.getElementById("apellido").value
    let email = document.getElementById("email").value
    let tipo = document.getElementById("tipoIlustracion").value
    let tamano = document.getElementsByClassName("tamano").value

    pedidos.push(new Pedido(nombre, apellido, email, tipo, tamano));

    pedidos.forEach(pedido => {
        let p1 = document.createElement("p");
        p1.textContent = `${pedidos.nombre}`;
        p1.setAttribute("class", "parrafo-3");

        let p2 = document.createElement("p");
        p2.textContent = `${pedidos.apellido}`;
        p2.setAttribute("class", "parrafo-3");

        let p3 = document.createElement("p");
        p3.textContent = `${pedidos.email}`;
        p3.setAttribute("class", "parrafo-3");   
        
        let p4 = document.createElement("p");
        p4.textContent = `${pedidos.tipo}`;
        p4.setAttribute("class", "parrafo-3");

        let p5 = document.createElement("p");
        p5.textContent = `${pedidos.tamano}`;
        p5.setAttribute("class", "parrafo-3");

        let div1 = document.createElement("div");
        div1.appendChild(p1);
        div1.appendChild(p2);
        div1.appendChild(p3);
        div1.appendChild(p4);
        div1.appendChild(p5);

        let impresion = document.getElementById("prueba");
        impresion.appendChild(div1);
    })
}

let boton1 = document.getElementById("boton-enviar");
boton1.addEventListener("click", mostrarPedido);


const div = document.querySelectorAll("div")[2];

let h3 = document.createElement("h3");

h3.setAttribute("class","comentarioAd");
h3.textContent = "Así creamos tu cuenta";

div.appendChild(h3);





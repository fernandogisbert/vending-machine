
let display = document.getElementById('display');
let displayMessage = '';

let bandeja = document.getElementById('bandeja');
let recojer = '';


// Creo clase constructora de productos

class Product {
    constructor(item,peso,mililitros){
        this.item =item,
        this.weight = peso,
        this.ml = mililitros
    }
    sold(){

        displayMessage =`<p>El producto ${this.item} ha sido vendido</p>`;
        display.innerHTML = displayMessage;
    }
}

// Instancio productos con la clase Product

let cocaCola = new Product('Coca Cola',null,3300);
let cerveza = new Product('Cerveza',null,3300);
let campesinas = new Product('Campesinas',200,null);
let onduladas = new Product('Onduladas',200,null);


// Crea la función shellProduct y sus coordenadas para poder meter en la función

    // 1 lista de coordenadas
    
// cervezas

let filaCervezas = {
    cerveza1:  document.getElementsByClassName('cerveza1'),
    cerveza2:  document.getElementsByClassName('cerveza2'),
    cerveza3:  document.getElementsByClassName('cerveza3')
}

let coordenadas1 = [filaCervezas.cerveza1[0],cerveza];
let coordenadas2 = [filaCervezas.cerveza2[0],cerveza];
let coordenadas3 = [filaCervezas.cerveza3[0],cerveza];

// cocacolas

let filaCocacolas = {
    cocacola1: document.getElementsByClassName('cocacola1'),
    cocacola2: document.getElementsByClassName('cocacola2'),
    cocacola3: document.getElementsByClassName('cocacola3')
}
 
let coordenadas4 = [filaCocacolas.cocacola1[0],cocaCola];
let coordenadas5 = [filaCocacolas.cocacola2[0],cocaCola];
let coordenadas6 = [filaCocacolas.cocacola3[0],cocaCola];

// campesinas

let filaCampesinas = {
    campesinas1: document.getElementsByClassName('campesinas1'),
    campesinas2: document.getElementsByClassName('campesinas2'),
    campesinas3: document.getElementsByClassName('campesinas3') 
}

let coordenadas7 = [filaCampesinas.campesinas1[0],campesinas];
let coordenadas8 = [filaCampesinas.campesinas2[0],campesinas];
let coordenadas9 = [filaCampesinas.campesinas3[0],campesinas];

// onduladas

let filaOnduladas = {
    onduladas1: document.getElementsByClassName('onduladas1'),
    onduladas2: document.getElementsByClassName('onduladas2'),
    onduladas3: document.getElementsByClassName('onduladas3'),
}


let coordenadas10 = [filaOnduladas.onduladas1[0],onduladas];
let coordenadas11 = [filaOnduladas.onduladas2[0],onduladas];
let coordenadas12 = [filaOnduladas.onduladas3[0],onduladas];


    //Función + llamadas

function sellProduct([coordenadas,producto]){
    
    coordenadas.addEventListener('click',()=>{

        displayMessage =`<p>Comprobando el pago</p>`,
        display.innerHTML = displayMessage,
        // promesa declarada más abajo
        checkPayment(producto,coordenadas);
    })
}

sellProduct(coordenadas1);
sellProduct(coordenadas2);
sellProduct(coordenadas3);
sellProduct(coordenadas4);
sellProduct(coordenadas5);
sellProduct(coordenadas6);
sellProduct(coordenadas7);
sellProduct(coordenadas8);
sellProduct(coordenadas9);
sellProduct(coordenadas10);
sellProduct(coordenadas11);
sellProduct(coordenadas12);

// tema promesas

function checkPayment(producto,coordenadas){

    let probabilidad = Math.floor(Math.random() * 11); 

    return new Promise((resolve, reject) =>{
        if (probabilidad < 9 ){
            resolve( 
                console.log('funciona correctamente'),
                setTimeout(()=>{
                    producto.sold();
                    recojer = coordenadas.lastElementChild.outerHTML;
                    bandeja.innerHTML = recojer;
                },3000)
            );
        }else{
            reject(
                setTimeout(()=>{
                    displayMessage =`<p>Conexión inestable</p>`;
                    display.innerHTML = displayMessage;
    
                },3000)
                
                // console.log('conexión inestable')
            );
        }
    });
};




 

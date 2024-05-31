/* Scope o ambito de las variables
alcance que pueden tener nuestras variables y que partes de nuestro codigo pueden acceder a 
estas variables y que partes no

las variables son de 2 tipos global o local*/

/* ------ Variable local ------ 

//son variables creadas dentro de una funcion  o una funcion anidada (una funcion dentro de otra)
//y solo pueden acceder dentro de ellas

function saludo () {
    var texto = 'Hola Mundo!';// ------ Variable local ------ 
    //console.log(texto);
}

saludo();
console.log(texto);//si se coloca fuera de la funcion da error, dice que no esta definida la funcion*/

// ------ Variable local con funciones anidadas ------ 

/* El scope funciona por niveles, si no encuentra una variable en el mismo
nivel subira de nivel hacia afuera y buscara. Si no encuentra subira otro nivel y asi sucesivamente.

Si tenemos una funcion anidada (una funcion dentro de otra) podemos buscar variables
desde dentro hacia afuera, pero desde una funcion no podemos buscar variables hacia dentro de otra
funcion*/

//acceder la variable desde dentro hacia afuera
/*function saludo(){
    var texto = 'Hola Mundo!';

    function mensaje() {
        console.log(texto);
        //var texto = 'Hola Mundo!';
    }

    //console.log(texto);

    mensaje();
}

saludo();*/

//acceder la variable desde afuera hacia dentro
/*function saludo(){
    //var texto = 'Hola Mundo!';

    function mensaje() {
        //console.log(texto);
        var texto = 'Hola Mundo!';
    }

    console.log(texto);

    mensaje();
}

saludo();*/

// ------ Variable global  ------
//puede ser accedidas desde cualquier parte del codigo incluyendo cualquier funcion

/*var texto = 'Hola Mundo!';//variable declarada fuera de la funcion

function saludo() {
    console.log(texto);
}
saludo();*/


/*var texto = 'Hola Mundo!';

function saludo() {
    console.log(texto);

    texto = 'Hola Mundo, mofificado!';
    console.log(texto);
}
saludo();*/

//------ IMPORTANTE
//Si una variable se declara fuera de una funcion es global.
//Pero las variables dentro de una funcion pueden ser globales tambien

//Si dentro de la funcion declaramos una variable mediante la palabra "var"
//sera local, Pero si no le ponemos "var" sera global

/*function saludo(){
    mensaje = 'Hola Mundo Cruel!';
}

saludo();
console.log(mensaje);*/

//------ como proteger nuestras variables de codigo de terceros
//funcion AUTOINVOCADA SE EJECUTA AUTOMATICAMENTE

(function(){
    //alert('hola');
    var mensaje = 'Hola Mundo'
}())

console.log(memsaje);



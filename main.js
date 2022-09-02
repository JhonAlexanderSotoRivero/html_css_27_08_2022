
let nombre = `Jhon Alexander Soto Rivero`;
let edad = 28;
let altura = 1.70;
let soyInstructor = true;
let direcciones = null;
let cambioRopa = undefined;
let listaPasatiempo = ["Leer", "GYM", "Estudiar", "cocinar", "Pasear el perro", "Escuchar musica"];
let caracteristicasPC= {
    sistemas: "Windows 10 64x home",
    ram: 4,
    disco: "Solido",
    iluminacion(){
        return "SI";
    }
}

let myStyle= `color: #fff;background: #ee16ca;font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;border-radius: 5px;padding: 5px;`;
console.group(`%cNombre del desarrollador`, myStyle);
    console.log(nombre);
console.groupEnd();
console.group(`%cEdad del desarrollador`, myStyle);
    console.log(edad);
console.groupEnd();
console.group(`%cAltura del desarrollador`, myStyle);
    console.log(altura);
console.groupEnd(); 
console.group(`%cPermiso para enseñar`, myStyle);
    console.log(soyInstructor);
console.groupEnd();
console.group(`%c Direccion del desarrollador`, myStyle);
    console.log(direcciones);
console.groupEnd();
console.group(`%cRopa del desarrollador`, myStyle);
    console.log(cambioRopa);
console.groupEnd();
console.group(`%cPasatiempos del desarrollador`, myStyle);
    console.log(listaPasatiempo);
console.groupEnd();
console.group(`%cPC del desarrollador`, myStyle);
    console.log(caracteristicasPC);
    console.group();

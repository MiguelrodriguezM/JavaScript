    // Crea una lista de números pares del 2 al 20 utilizando un bucle while.
var numeros = [];
var i=2;
   
    while (i<=20){
if(i%2==0){
    numeros.push(i)


}
i++;

    }
console.log("list de numeros:"+numeros);
    // Crea una lista de números impares del 1 al 19 utilizando un bucle for.

    var numerosImp=[];
    
    for(var i=1; i<=19;i=i+2){
        numerosImp.push(i);

    }
    console.log("lista de numeros impares" + numerosImp);
    // Crea una lista de comida.
    var listacom=["lechuga", "lechuga", "tomate"];
    listacom.unshift("hambuerguesa");

    
    console.log("lista:"+listacom);
    // Agrega un elemento al principio de la lista de comida que creaste en el ejercicio anterior.
    for(var i=0; i>0; i++){
        listacom.unshift("hambuerguesa");
            }
    // Accede al segundo elemento de la lista de comida y cambia su valor por otro diferente.
    listacom[1]="pasta";
    console.log(listacom);
    // Recorre la lista de comida utilizando un bucle while y muestra cada elemento en la consola.
    var i =0;
    while(i<listacom.length){
        console.log[listacom[i]];
        i=i+1;


    }


    // Crea una función que reciba una lista como parámetro y devuelva el último elemento de la lista.
    function verUltimoElementoDeLista(lista){
return lista.length;

    }
    // Crea una función que reciba una lista y un elemento como parámetros y agregue el elemento a la lista si no se encuentra en ella.
    function suma(num1 , num2){
        return num1 + num2;
    }
    var numeros= [1,3,4,5,6,7,9]
    // Crea una función que reciba una lista como parámetro y devuelva una nueva lista con los elementos de la lista original en orden inverso.
    
    // Crea una función que reciba una lista de números como parámetro y devuelva la suma de todos los números de la lista.
    
    // Crea una función que reciba una lista de números como parámetro y devuelva la media de todos los números de la lista.

    // Crea una función que reciba una lista de números y un número y nos tiene que devolver si aparece el elemento em la lista o no

   function busqueda(lista, numero){
for(var index = 0; index<lista.length; index++){
 if(lista[index] == numero){
    return true;
    
 }

}
return false;
   }
/* 
Buenas noches, mi nombre es Adrian Horogh, envio mi segunda pre-entrega, la idea en est oportunidad es desarrollar un sistema de gestion de socios
para el club donde juego, donde utilizando objetos se pueda empadronar a los socios con sus respectivos datos, 
poder consultar un estado de cuenta a partir de el numero de socio que se van almacenando en un array

Quedan algunas cuestiones a mejorar en el codigo y con el manejo de objetos, quedo a la espera de las correcciones, saludos.

Adrian.
*/


class socios
{
    constructor(nombre,dni,n_socio,tipo_socio, edad)
    {
        this.nombre = nombre;
        this.dni = dni;
        this.edad= edad;
        this.n_socio = n_socio;
        this.tipo_socio = tipo_socio;
    }

    empadronar()
    {
        let tipo_socio;
        let nombre = prompt("Ingrese su nombre y apellido: "); // ------------- EDAD -----------------------------------
        console.log("Nombre: "+ nombre);
        while(nombre ==="")
        {
        nombre = prompt("Por favor, ingrese su nombre y apellido: ");
        }

        let dni = prompt("Ingrese su documento: "); // ------------------------ DNI--------------------------------------
        console.log("DNI: "+ dni);
        while(dni==="")
        {
        dni = prompt("Por favor, ingrese su DNI: ");
        console.log("DNI: "+ dni);
        }

        let edad = prompt("Ingrese su edad: ");   // ------------------------- EDAD --------------------------------------
        console.log("Edad: "+ edad);    
        while((edad==="") || (edad>99) || (edad<0))
        {
        edad = prompt("Por Favor, Ingrese su edad: ");
        console.log("Edad: "+ edad);    
        }
        
            if(edad>18) // --------------------------------------------------- TIPO DE SOCIO ---------------------------
            {   
                if (edad<60)
                    {
                    alert("Tipo de socio asignado: Socio activo");
                    tipo_socio="Activo";
                    console.log("Tipo de socio: " + tipo_socio);
    
                    }
                else
                    {
                    alert("Tipo de socio asignado: Socio jubilado");
                    tipo_socio ="Jubilado";
                    console.log("Tipo de socio: " + tipo_socio);
    
                    }
            }
            else
                {
                alert("Tipo de socio asignado: Socio cadete");
                tipo_socio ="Cadete";
                console.log("Tipo de socio" + tipo_socio.toString());
                }

        let n_socio= Math.floor(Math.random() * 2001); // ------------------------------- N° DE SOCIO -----------------------------
        alert("Numero de socio asignado: " + n_socio);
        console.log("Numero de socio asignado: " + n_socio);

        return new socios(nombre,dni,n_socio,tipo_socio.toString(), edad);
    }

}

alert(" Bienvenido al Club Atletico Arroyo Leyes - Sistema de gestion de socios ");
let opcion= prompt("Opcion 1: empadronamiento de socios\n" + "Opcion 2: estado de cuenta:\n" + "Opcion 3: Salir\n" );
let num_socio;
let empadronar=0;
let miArray = [];
let i = 0;
let valor;
while(opcion !== "3" )
{
    console.log("opcion:" + opcion);
    if(opcion=== "1") //------------------------------------------ EMPADRONAR SOCIOS ------------------------------------
    {
        console.log("opcion:" + opcion);
        const nuevoSocio = new socios().empadronar();
        empadronar++;
        console.log(nuevoSocio);
        console.log("registrado: " + empadronar + "socios");
        
        //num_socio =  n_socio;
        valor = socios.n_socio;
        miArray.splice(i, 0, valor);
        console.log("Array cargado:", miArray);
        console.log("posicion array:", i);
        i++; 

    



    //------------------------------------- ESTADO DE CUENTAS  ------------------------------------
}
    else if(opcion=== "2") 
            { 
            
            while(true)
                {
                let asociado = prompt("Ingrese el numero de socio a buscar: ");
                console.log("numero de socio a buscar:" + valor);
                console.log("numero de socio consultado:" + asociado);
    
                
                    for(let i = 0; i < miArray.length; i++)
                    {
                        console.log("numero de socio consultado:" + miArray[i]);
                        
                        if(asociado === miArray[i] )
                        {
                        let deuda = Math.floor((Math.random() * 10));
                        alert("Su estado de cuenta es" + deuda + "cuotas pendientes");
                        break;
                        } 
                        
                        else
                        
                        {
                        console.log("busco y no encuentro");
                        }  
                    }
                    
                        alert("no coincide, usted no es socio de la institucion");
                        break;
                }
            }
        

    opcion= prompt("Vamos de nuevo..\n Opcion 1: empadronamiento de socios\n" + "Opcion 2: estado de cuenta:\n" + "Opcion 3: Salir\n" );
}

console.log("opcion:" + opcion);
alert("Gracias por usar mi programa");



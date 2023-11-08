

const  boton = document.getElementById('miboton');
const apiUrl = 'https://mindicador.cl/api/';

const resultadofinal = document.getElementById('resultado');


async function obtenerApi(){

    try{
        const datosapi = await fetch ('https://mindicador.cl/api/');
        if (!datosapi.ok){
            alert(' no se pudo obtener los datos de la api');
        }
        const data = await datosapi.json();
        console.log(datosapi);
     
        return data;
        

    }

    catch (error) {
        alert ('error en la solicitud de la api', error);
    }

} 
obtenerApi();


boton.addEventListener("click", calcularValor);
 async function calcularValor(){
     const data = await obtenerApi();
    const pesochileno = document.getElementById('dinero');
    const valor = pesochileno.value;
    const tipomoneda = document.getElementById('seleccion').value;
    console.log(tipomoneda);
  if (tipomoneda === "USD"){

    let valorfinal = Math.round (valor * data.dolar.valor);
    
    console.log (valorfinal);

    resultadofinal.innerHTML = "Resultado: " + valorfinal + " pesos Chilenos";

  }
  else if (tipomoneda === "euro"){

    let valorfinal = Math.round ( valor * data.euro.valor);
    console.log(valorfinal)
    resultadofinal.innerHTML = "Resultado: " + valorfinal + " pesos Chilenos";

  }
}


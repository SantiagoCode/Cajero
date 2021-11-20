var billetes = [];
billetes.push( new Billete(100, 3) );
billetes.push( new Billete(50, 4) );
billetes.push( new Billete(20, 5) );
billetes.push( new Billete(10, 1) );
billetes.push( new Billete(5, 2) );


var input_dinero = document.getElementById("money");
var btn_expender = document.getElementById("btn");
var parrafo = document.getElementById("parrafo");

var txt_caja = document.getElementById("reflejo_caja");
var txt_transaccion = document.getElementById("reflejo_transaccion");
var txt_expendido = document.getElementById("reflejo_expendido");

var transaccion = 1;
var valor_caja = 0;
var entregar = [];
var expendido = 0;
var suma_expendido = 0;

window.addEventListener("load", reevaluar);
window.addEventListener("load", total_caja);
btn_expender.addEventListener("click", comprobar);




function reevaluar()
{
  valor_caja = 0;

  for (var i of billetes)
  {
    valor_caja += i.valor * i.cantidad;
  }
}


function comprobar()
{
  var dinero = parseInt(input_dinero.value);


  if (dinero <= valor_caja)
  {
    if (dinero !== 0)
    {
      extraer_dinero(dinero);
    }
    else if (valor_caja == 0)
    {
      parrafo.innerHTML =
      "Lo siento, pero me he quedado sin dinero.";
    }
    else if (dinero == 0)
    {
      parrafo.innerHTML =
      "Lo siento, esa cantidad es muy baja.";
    }
  }
  else
  {
    if (valor_caja == 0)
    {
      parrafo.innerHTML =
      "Lo siento, pero me he quedado sin dinero.";
    }
    else if (valor_caja !== 0)
    {
      parrafo.innerHTML =
      "No puedo procesar esa cantidad porque es muy alta. Prueba con una cantidad igual o menor a: " + valor_caja;
    }
  }
}

// Esta funcion se encargara de detectar cuales y cuantos billetes necesitas
// para obtener el valor pedido por el usuario
function extraer_dinero(dinero)
{
  entregar = [];
  expendido = 0;


  for (var i in billetes)
  {
    var valor = billetes[i].valor;
    var cantidad = billetes[i].cantidad;

    if (dinero > 0)
    {
      var division = Math.floor(dinero / valor);

      if (division > cantidad)
      {
        var papeles = cantidad;
      }
      else
      {
        var papeles = division;
      }

      entregar.push( new Billete(valor, papeles) );

      dinero = dinero - (papeles * valor);

      retirar_caja(i);
    }
  }

  // Esta parte de la funcion se encarga de manejar el plasmado de la info
  // en el parrafo segun el numero de transaccion y si acepta la cantidad
  // ingresada o no
  if (dinero == 0)
  {
    parrafo.innerHTML =
    "<strong>" + "En la transaccion numero " + transaccion + ": <strong/>" + "<br />";
    transaccion++;


    for (var i of entregar)
    {
      expendido += i.valor * i.cantidad;
    }


    for (var i = 0; i < entregar.length; i++)
    {
      if (entregar[i].cantidad !== 0)
      {
        parrafo.innerHTML +=
        entregar[i].cantidad + " billetes de " + entregar[i].valor + "<br />";
      }
    }

    suma_expendido += expendido;

    reevaluar();
    total_caja();
    total_transaccion();
    total_expendido();

  }
  else
  {
    parrafo.innerHTML =
    "No puedo procesar esa cantidad.";
  }
}

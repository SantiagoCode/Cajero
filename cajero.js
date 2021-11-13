var billetes = [];
billetes.push( new Billete(100, 3) );
billetes.push( new Billete(50, 4) );
billetes.push( new Billete(20, 5) );
billetes.push( new Billete(10, 1) );
billetes.push( new Billete(5, 2) );


var input_dinero = document.getElementById("money");
var btn_expender = document.getElementById("btn");
var parrafo = document.getElementById("parrafo");
var transaccion = 1;
var entregar = [];


btn_expender.addEventListener("click", extraer_dinero);

// Esta funcion se encargara de detectar cuales y cuantos billetes necesitas
// para obtener el valor pedido por el usuario
function extraer_dinero()
{
  entregar = [];
  var dinero = parseInt(input_dinero.value);

  for (var i in billetes) {
    var valor = billetes[i].valor;
    var cantidad = billetes[i].cantidad;

    if (dinero > 0) {
      var division = Math.floor(dinero / valor);

      if (division > cantidad) {
        var papeles = cantidad;
      } else {
        var papeles = division;
      }

      entregar.push(new Billete(valor, papeles));

      dinero = dinero - (papeles * valor);
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

    for (var i = 0; i < entregar.length; i++)
    {
      if (entregar[i].cantidad !== 0)
      {
        parrafo.innerHTML +=
        entregar[i].cantidad + " billetes de " + entregar[i].valor + "<br />";
      }
    }
  }
  else
  {
    parrafo.innerHTML =
    "No puedo procesar esa cantidad.";
  }
}

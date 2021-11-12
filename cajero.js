var billetes = [];
billetes.push(new Billete(100, 3));
billetes.push(new Billete(50, 3));
billetes.push(new Billete(20, 4));
billetes.push(new Billete(10, 1));

var dinero = 160;
var entregar = [];

function extraer_dinero()
{
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

  if (dinero !== 0) {
    alert("No puedo procesar esa cantidad.");
  }

  return entregar;
}

var cuantos_papeles = extraer_dinero();

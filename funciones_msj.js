function retirar_caja(i)
{
  billetes[i].cantidad = billetes[i].cantidad - entregar[i].cantidad;
  papeles();
}


function total_caja()
{
  txt_caja.innerHTML =
  "<strong> El total disponible en caja es de: </strong> <br />" +
  valor_caja;
}

function total_transaccion()
{
  txt_transaccion.innerHTML =
  "<strong> En esta transaccion retiraste un total de: </strong> <br />" +
  expendido;
}

function total_expendido()
{
  txt_expendido.innerHTML =
  "<strong> El total expendido en caja es de: </strong> <br />" +
  suma_expendido;
}

function papeles()
{
  txt_papeles.innerHTML =
  "<strong> Estos son los billetes disponibles en la caja: </strong> <br />";

  for (var i = 0; i < billetes.length; i++) {
    txt_papeles.innerHTML +=
    billetes[i].cantidad + " billetes de " + billetes[i].valor + "<br />";
  }
}

function retirar_caja(i)
{
  billetes[i].cantidad = billetes[i].cantidad - entregar[i].cantidad;
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
  "<strong>En esta transaccion retiraste: </strong> <br />" +
  expendido;
}

function total_expendido()
{
  txt_expendido.innerHTML =
  "<strong> El total expendido en caja es de: </strong> <br />" +
  suma_expendido;
}

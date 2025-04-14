function filterCountry(array) {
  return array.filter(hotel => hotel.country === "Brasil");
}
//console.log(filterCountry(data));

function filterPrice(array) {
  return array.filter(hotel => hotel.price >= 200);
}
//console.log(filterPrice(data));

function filterIsOpen(array) {
  return array.filter(hotel => hotel.isOpen === true);
}
//console.log(filterIsOpen(data));

//DESAFIO
//4) Crie uma função que filtre apenas o hotel com o nome “Copacabana Palace”. Após isso, crie outra função para verificar as datas disponíveis para agendamento nesse hotel (isAvaliable).
function filterHotelName(array) {
  return array.filter(hotel => hotel.name === "Copacabana Palace");
}

function filterToBook() {
  const hotel = filterHotelName(data);

  if (hotel.length === 0) {
    return "Hotel não encontrado.";
  }

  const availableDates = hotel[0].toBook.filter(date => date.isAvailable);
  return availableDates;
}
console.log(filterToBook());

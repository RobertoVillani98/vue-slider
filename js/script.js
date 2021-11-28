const app = new Vue({
 el: "#root",
 data: {
  items: [
   {
    image: "img/newyork.jpeg",
    title: "New York",
    sub: "New York City, in breve New York, in italiano anche Nuova York è una città degli Stati Uniti d'America situata nello stato di New York.",
   },
   {
    image: "img/mykonos.jpeg",
    title: "Mykonos",
    sub: "Mykonos (Μύκονος) o Micono è un'isola greca delle Cicladi, situata nelle vicinanze di Tino, Siro, Paro e Nasso.",
   },
   {
    image: "img/sharm.jpg",
    title: "Sharm el-Sheikh",
    sub: "Sharm el-Sheikh è una località turistica egiziana posta nella parte meridionale della penisola del Sinai e bagnata dal mar Rosso.",
   },
   {
    image: "img/Barcellona.jpg",
    title: "Barcellona",
    sub: "Barcellona è una città della Spagna di 1 664 162 abitanti, capoluogo della Catalogna, una comunità autonoma della parte orientale dello Stato, oltre che dell'omonima provincia e della comarca del Barcelonès: soprannominata Ciutat Comtal o Ciudad Condal (Città dei Conti), è la seconda città della Spagna per numero di abitanti dopo la capitale Madrid.",
   },
   {
    image: "img/abu.jpg",
    title: "Abu Dhabi",
    sub: "Abu Dhabi, o più correttamente 'Abū Ẓabiyy, è la capitale degli Emirati Arabi Uniti e capitale dell'omonimo emirato.",
   },
  ],
  currentImg: 0,
 },
 methods: {
  nextImg: function () {
   if (this.currentImg == this.items.length - 1) {
    this.currentImg = 0;
   } else {
    this.currentImg++;
   }
  },

  prevImg: function () {
   if (this.currentImg == 0) {
    this.currentImg = this.items.length - 1;
   } else {
    this.currentImg--;
   }
  },
  setActiveClass: function (i) {
   if (i == this.currentImg) {
    return "active";
   } else {
    return "";
   }
  },
  activeItem: function (i) {
   this.currentImg = i;
  },
 },
});

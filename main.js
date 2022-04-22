
function birthDateToAge(b) {
    var n = new Date(),
      b = new Date(b),
      age = n.getFullYear() - b.getFullYear();
    return n.setFullYear(1970) < b.setFullYear(1970) ? age - 1 : age;
  }

var app = new Vue({
    el: '#personal__data',
    data() {
        return {
            username: "Nelly Furtado",
            age: "23 y.o.",
            position: "Pupkins cheaf",
            img: null,
            gender: "agender",
            address: "USA, Ohio, Lorenview",
            phone: "+7-904-631-28-55"
          };
    },
    mounted() {
        axios
          .get('https://random-data-api.com/api/users/random_user')
          .then(response => (
            this.username = response.data.first_name + ' ' + response.data.last_name,
            this.age =response.data.date_of_birth + ' (' + birthDateToAge(response.data.date_of_birth) + ')',
            this.position = response.data.employment.title,
            this.img = response.data.avatar,
            this.gender = response.data.gender,
            this.address = response.data.address.country + ', ' + response.data.address.state + ', ' + response.data.address.city,
            this.phone = response.data.phone_number));
      }
});

var app = new Vue({
    el: '#beer',
    data() {
        return {
            beertoday: "Craft Simpsons beer",
            type_beer: "best",
            taste_beer: "juicy",
            alcohol_beer: "7.5%",
            density_beer: "9.4`",
          };
    },
    mounted() {
        axios
          .get('https://random-data-api.com/api/beer/random_beer')
          .then(response => (
            this.beertoday = response.data.name,
            this.type_beer = response.data.style,
            this.taste_beer = response.data.malts,
            this.alcohol_beer = response.data.alcohol,
            this.density_beer = response.data.blg));
      }
});


const more = document.querySelectorAll('.btn-more');

for (let i = 0; i < more.length; i++) {
  more[i].addEventListener('click', function() {
    let showPerClick = 5;

    let hidden = this.parentNode.querySelectorAll('td.hidden');
    for (let i = 0; i < showPerClick; i++) {
      if (!hidden[i]) return this.outerHTML = "";
      hidden[i].classList.remove('hidden');
    }
  });
}
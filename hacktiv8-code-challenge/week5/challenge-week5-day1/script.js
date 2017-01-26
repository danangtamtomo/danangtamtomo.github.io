var fillMe = document.getElementById('fill-me');
var changeAllOfMe = document.getElementsByClassName('change-all-of-me');
var h2Tags = document.getElementsByTagName('h2');

fillMe.innerHTML = 'HALO!';
for (var i = 0; i < changeAllOfMe.length; i++) {
  changeAllOfMe[i].innerHTML = 'HALO JUGA!';
}
for (var i = 0; i < h2Tags.length; i++) {
  h2Tags[i].innerHTML = 'Apa Kabar!';
}

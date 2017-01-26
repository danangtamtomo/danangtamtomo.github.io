var eldestParent = document.getElementById('eldest-parent');

eldestParent.children[0].innerHTML = 'Diakses Melalui Eldest Parent';

var aChild = document.getElementById('a-child');
aChild.previousElementSibling.innerHTML = 'Diakses melalu a child';

aChild.nextElementSibling.innerHTML = 'Diakses melalui a child';

aChild.parentNode.parentNode.nextElementSibling.innerHTML = 'Diakses melalui a child';

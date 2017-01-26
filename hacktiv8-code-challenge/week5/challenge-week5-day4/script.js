var main = document.getElementById('main');
var attId = document.createAttribute('id');

var content = main.appendChild(document.createElement('div'));
content.setAttribute('id', 'content');

var contentPostAttrClass1 = document.createAttribute('class');
contentPostAttrClass1.value = 'content-post';
var contentPostAttrClass2 = document.createAttribute('class');
contentPostAttrClass2.value = 'content-post';

content.appendChild(document.createElement('div')).setAttributeNode(contentPostAttrClass1);
content.appendChild(document.createElement('div')).setAttributeNode(contentPostAttrClass2);

var contentPost = document.getElementsByClassName('content-post');
var date = 12;
for(var i = 0;i<contentPost.length;i++) {
    var judulPostNum = i > 0 ? i+1 : '';
    var h1ContentPost= document.createElement('h1');
    contentPost[i].appendChild(document.createElement('h1')).
    appendChild(document.createTextNode('Judul Post '+judulPostNum));

    contentPost[i].appendChild(document.createElement('span')).
    appendChild(document.createTextNode('Published on '+date+' May 2016'));

    contentPost[i].appendChild(document.createElement('p')).
    appendChild(document.createTextNode('Lorem Ipsum Dolor Sit Amet'));

    var shareButton = document.createElement('button');
    shareButton.setAttribute('class', 'share-post-btn');
    shareButton.addEventListener('click', function() {
        alert('You have shared this post!');
    });
    contentPost[i].appendChild(shareButton).
    appendChild(document.createTextNode('Share this Post'));

    date+=1;
}
    






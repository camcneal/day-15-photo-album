var body = $('body');
var header = $('<header>Hello</header>');

var imgArray = [{
    url: "images/basketball.jpeg",
    name: 'sports'
}, {
    url: "images/beach.jpeg",
    name: 'vacations'
}, {
    url: "images/benz.jpeg",
    name: 'cars'
}, {
    url: "images/nike.jpeg",
    name: 'shoes'
}, {
    url: "images/LA.jpeg",
    name: 'cities'
}, {
    url: "images/dw.jpeg",
    name: 'watches'
}];

var imgVacations = [{
    url: "images/LA.jpeg",
    name: 'LA'
}, {
    url: "images/paris.jpeg",
    name: 'Paris'
}, {
    url: "images/newyork.jpeg",
    name: "NY"
}];

console.log(imgArray[2].name);

//forEach fucntion cycling through item in the image array
function makeImageDivs(arr) {
    arr.forEach(function(image, i, arr) {
        console.log(image, i);
        var imageDiv = $('<div class="album"></div>');
        $('.container').append(imageDiv);
        imageDiv.text(image.name);
        imageDiv.append('<img src=' + image.url + '>');
        //go inside image div find the image and add click event listener
        imageDiv.find('img').on('click', function(e) {
            console.log(e.target);
            location.hash = '#' + image.name;
            console.log(location);

        });
    });
}


if (location.hash === ''){
  makeImageDivs(imgArray);
}

$(window).on('hashchange', function(e) {
    console.log(location.hash);
    $('.container').empty();
if (location.hash === '#vacations'){
  makeImageDivs(imgVacations);
} else if (location.hash === '#sports'){

} {

}
});
console.log($);

$('.container').prepend(header);

header.text('My Album');

body.css('background', 'white');

//hash changing

var body = $('body');
var header = $('<header>Hello</header>');

var imgArray = [{
    url: "images/basketball.jpeg",
    name: 'Sports'
}, {
    url: "images/beach.jpeg",
    name: 'Vacations'
}, {
    url: "images/benz.jpeg",
    name: 'Cars'
}, {
    url: "images/nike.jpeg",
    name: 'Shoes'
}, {
    url: "images/LA.jpeg",
    name: 'Cities'
}, {
    url: "images/dw.jpeg",
    name: 'Watches'
}];

var imgVacations = [{
    url: "images/beach.jpeg",
    name: 'Beach'
}, {
    url: "images/lake.jpeg",
    name: 'Lake'
}, {
    url: "images/river.jpeg",
    name: "River"
}];

var imgSports = [{
    url: "images/basketball.jpeg",
    name: 'Basketball'
}, {
    url: "images/football.jpeg",
    name: "Football"
}, {
    url: "images/soccer.jpeg",
    name: 'Soccer'
}];

var imgCars = [{
    url: "images/benz.jpeg",
    name: 'Benz'
}, {
    url: "images/bmw.jpeg",
    name: 'Bmw'
}, {
    url: "images/mustang.jpeg",
    name: 'Mustang'
}];

var imgShoes = [{
    url: "images/converse.jpeg",
    name: 'Converse'
}, {
    url: "images/nike.jpeg",
    name: 'Nike'
}, {
    url: "images/nike1.jpeg",
    name: 'Nike1'
}];

var imgCities = [{
    url: "images/LA.jpeg",
    name: 'LA'
}, {
    url: "images/paris.jpeg",
    name: 'Paris'
}, {
    url: "images/newyork.jpeg",
    name: "NY"
}];

var imgWatches = [{
    url: "images/cartier.jpeg",
    name: 'Cartier'
}, {
    url: "images/dw.jpeg",
    name: 'DW'
}, {
    url: "images/apple.jpeg",
    name: 'Apple'
}];

console.log(imgArray[2].name);

function singleImageDiv(name, url) {
    $('.container').empty();
    var backBtn = $('<button>back</button>');
    $('.container').append(backBtn);
    backBtn.on('click', function(e) {
        location.hash = location.hash.split('/')[0];
    });
    var imageDiv = $('<div class="single-image"></div>');
    $('.container').append(imageDiv);
    imageDiv.text(name);
    imageDiv.append('<img src=' + url + '>');

}

//forEach fucntion cycling through item in the image array
function makeImageDivs(arr) {
    $('.container').empty();
    arr.forEach(function(image, i, arr) {
        console.log(image, i);
        var imageDiv = $('<div class="album"></div>');
        $('.container').append(imageDiv);
        imageDiv.text(image.name);
        imageDiv.append('<img src=' + image.url + '>');
        //go inside image div find the image and add click event listener
        imageDiv.find('img').on('click', function(e) {
            console.log(e.target);
            console.log(location);
            if (location.hash === '') {
                location.hash = '#' + image.name;
            } else {
                location.hash = location.hash + '/' + (i + 1);


            }
        });
    });
}

function makeAlbumDivs(arr) {
    $('.container').empty();
    var sideBar = $('<aside class="sidebar"><ul></ul></aside>');
    var listItems = imgArray.map(function(image, i, arr) {
        return ('<li><a href=#' + image.name + '>' + image.name + '</a></li>');
    });
    $('.container').append(sideBar);
    sideBar.find('ul').append(listItems);
    arr.forEach(function(image, i, arr) {
        console.log(image, i);
        var imageDiv = $('<div class="album"></div>');
        $('.container').append(imageDiv);
        imageDiv.text(image.name);
        imageDiv.append('<img src=' + image.url + '>');
        //go inside image div find the image and add click event listener
        imageDiv.find('img').on('click', function(e) {
            console.log(e.target);
            console.log(location);
            if (location.hash === '') {
                location.hash = '#' + image.name;
            } else {
                location.hash = location.hash + '/' + (i + 1);


            }
        });
    });
}

if (location.hash === '') {
    makeImageDivs(imgArray);
}

if (location.hash === '') {
    makeImageDivs(imgArray);
}

function checkHash() {
    // If we're on an album page:
    if (location.hash === '#Vacations') {
        console.log(location.hash.split('/'));
        makeAlbumDivs(imgVacations);
    } else if (location.hash === '#Sports') {
        makeAlbumDivs(imgSports);
    } else if (location.hash === '#Cars') {
        makeAlbumDivs(imgCars);
    } else if (location.hash === '#Shoes') {
        makeAlbumDivs(imgShoes);
    } else if (location.hash === '#Cities') {
        makeAlbumDivs(imgCities);
    } else if (location.hash === '#Watches') {
        makeAlbumDivs(imgWatches);
    }
    // if we're viewing an individual image:
    else if (location.hash.split('/')[0] === '#Vacations') {
        var imageObject = (imgVacations[Number(location.hash.split('/')[1]) - 1]);
        singleImageDiv(imageObject.name, imageObject.url);
    } else if (location.hash.split('/')[0] === '#Sports') {
        var imageObject = (imgSports[Number(location.hash.split('/')[1]) - 1]);
        singleImageDiv(imageObject.name, imageObject.url);
    } else if (location.hash.split('/')[0] === '#Cars') {
        var imageObject = (imgCars[Number(location.hash.split('/')[1]) - 1]);
        singleImageDiv(imageObject.name, imageObject.url);
    } else if (location.hash.split('/')[0] === '#Shoes') {
        var imageObject = (imgShoes[Number(location.hash.split('/')[1]) - 1]);
        singleImageDiv(imageObject.name, imageObject.url);
    } else if (location.hash.split('/')[0] === '#Cities') {
        var imageObject = (imgCities[Number(location.hash.split('/')[1]) - 1]);
        singleImageDiv(imageObject.name, imageObject.url);
    } else if (location.hash.split('/')[0] === '#Watches') {
        var imageObject = (imgWatches[Number(location.hash.split('/')[1]) - 1]);
        singleImageDiv(imageObject.name, imageObject.url);
    }
}

checkHash();

$(window).on('hashchange', function(e) {
    console.log(location.hash);
    checkHash();
});
console.log($);



$('.container').prepend(header);

header.text('My Album');



//hash changing

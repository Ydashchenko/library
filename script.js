let myBookLibrary = [];
let myAnimeLibrary = [];
let myMangaLibrary = [];

function Book() {
  // the constructor...
}

function Anime() {
    // the constructor...
}

function Manga() {
    // the constructor...
}

function addBook() {
  // do stuff here
}
  
function addAnime() {
    // do stuff here
}
  
function addManga() {
    // do stuff here
}

const addAnimeBtn = document.getElementById('add-anime')
const addMangaBtn = document.getElementById('add-manga')
const addBookBtn = document.getElementById('add-book')
const form = document.querySelector('form')


addAnimeBtn.addEventListener('click', function(e) {
    form.style.display = 'grid'
    document.getElementById('title').placeholder = 'Anime name'
    document.getElementById('number').placeholder = 'Number of episodes'
    document.getElementById('pages-episodes').textContent = 'Watched?'
})

addMangaBtn.addEventListener('click', function(e) {
    form.style.display = 'grid'
    document.getElementById('title').placeholder = 'Manga name'
    document.getElementById('number').placeholder = 'Number of pages'
    document.getElementById('pages-episodes').textContent = 'Read?'
})

addBookBtn.addEventListener('click', function(e) {
    form.style.display = 'grid'
    document.getElementById('title').placeholder = 'Book name'
    document.getElementById('number').placeholder = 'Number of pages'
    document.getElementById('pages-episodes').textContent = 'Read?'
})
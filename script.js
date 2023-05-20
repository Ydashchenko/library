let myBookLibrary = [];
let myAnimeLibrary = [];
let myMangaLibrary = [];
let contentType = ''

const addAnimeBtn = document.getElementById('add-anime')
const addMangaBtn = document.getElementById('add-manga')
const addBookBtn = document.getElementById('add-book')
const addContentToLibrary = document.getElementById('submit')
const form = document.querySelector('form')

function Content(title, author, number, seen) {
    this.title = title
    this.author = author
    this.number = number
    this.seen = seen
    
}

function addContent() {
    if (contentType === 'anime') {
        myAnimeLibrary.push(new Content(document.getElementById('title').value, document.getElementById('author').value, document.getElementById('number').value, document.getElementById('checkmark').checked))
    } else if (contentType === 'manga') {
        myMangaLibrary.push(new Content(document.getElementById('title').value, document.getElementById('author').value, document.getElementById('number').value, document.getElementById('checkmark').checked))
    } else if (contentType === 'book') {
        myBookLibrary.push(new Content(document.getElementById('title').value, document.getElementById('author').value, document.getElementById('number').value, document.getElementById('checkmark').checked))
    }
    addToTable();
    form.style.display = 'none'
}

addAnimeBtn.addEventListener('click', function(e) {
    contentType = 'anime'
    form.style.display = 'grid'
    document.getElementById('title').placeholder = 'Anime name'
    document.getElementById('number').placeholder = 'Number of episodes'
    document.getElementById('pages-episodes').textContent = 'Watched?'
})

addMangaBtn.addEventListener('click', function(e) {
    contentType = 'manga'
    form.style.display = 'grid'
    document.getElementById('title').placeholder = 'Manga name'
    document.getElementById('number').placeholder = 'Number of pages'
    document.getElementById('pages-episodes').textContent = 'Read?'
})

addBookBtn.addEventListener('click', function(e) {
    contentType = 'book'
    form.style.display = 'grid'
    document.getElementById('title').placeholder = 'Book name'
    document.getElementById('number').placeholder = 'Number of pages'
    document.getElementById('pages-episodes').textContent = 'Read?'
})

addContentToLibrary.addEventListener('click', function(e) {
    e.preventDefault();
    addContent();
})

function addToTable() {
    let animeContent = document.getElementById('anime-content')
    animeContent.innerHTML = ''
    for (element in myAnimeLibrary) {
        let ani = myAnimeLibrary[element]
        let aniRow = document.createElement('tr')
        aniRow.innerHTML = `
            <th>${ani.title}</th>
            <td>${ani.author}</td>
            <td>${ani.number}</td>
            <td>${ani.seen ? 'Yes' : 'No'}</td>
            <td>
                <button class='delete-btn' onclick='deleteAnime(${element})'>Delete</button>
            </td>
        `
        animeContent.appendChild(aniRow)
    }
}

function deleteAnime(index) {
    myAnimeLibrary.splice(index, 1)
    addToTable()
}
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

Content.prototype.toggleSeen = function() {
    this.seen = !this.seen
}

function toggleSeenAnime(index) {
    myAnimeLibrary[index].toggleSeen()
    addToAnimeTable()
}

function toggleSeenManga(index) {
    myMangaLibrary[index].toggleSeen()
    addToMangaTable()
}

function toggleSeenBook(index) {
    myBookLibrary[index].toggleSeen()
    addToBookTable()
}

function addContent() {
    if (contentType === 'anime') {
        myAnimeLibrary.push(new Content(document.getElementById('title').value, document.getElementById('author').value, document.getElementById('number').value, document.getElementById('checkmark').checked))
        addToAnimeTable();
    } else if (contentType === 'manga') {
        myMangaLibrary.push(new Content(document.getElementById('title').value, document.getElementById('author').value, document.getElementById('number').value, document.getElementById('checkmark').checked))
        addToMangaTable();
    } else if (contentType === 'book') {
        myBookLibrary.push(new Content(document.getElementById('title').value, document.getElementById('author').value, document.getElementById('number').value, document.getElementById('checkmark').checked))
        addToBookTable();
    }
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
    document.getElementById('title').value = ''
    document.getElementById('author').value = ''
    document.getElementById('number').value = ''
    document.getElementById('checkmark').checked = false
})

function addToAnimeTable() {
    let animeContent = document.getElementById('anime-content')
    animeContent.innerHTML = ''
    for (element in myAnimeLibrary) {
        let ani = myAnimeLibrary[element]
        let aniRow = document.createElement('tr')
        aniRow.innerHTML = `
            <th>${ani.title}</th>
            <td>${ani.author}</td>
            <td>${ani.number}</td>
            <td class='ifSeen'>
                <button class='toggleBtn' onclick='toggleSeenAnime(${element})'>${ani.seen ? 'Yes' : 'No'}</button>
            </td>
            <td>
                <button class='delete-btn' onclick='deleteAnime(${element})'>Delete</button>
            </td>
        `
        animeContent.appendChild(aniRow)
    }
}

function addToMangaTable() {
    let mangaContent = document.getElementById('manga-content')
    mangaContent.innerHTML = ''
    for (element in myMangaLibrary) {
        let mang = myMangaLibrary[element]
        let mangaRow = document.createElement('tr')
        mangaRow.innerHTML = `
            <th>${mang.title}</th>
            <td>${mang.author}</td>
            <td>${mang.number}</td>
            <td class='ifSeen'>
                <button class='toggleBtn' onclick='toggleSeenManga(${element})'>${mang.seen ? 'Yes' : 'No'}</button>
            </td>
            <td>
                <button class='delete-btn' onclick='deleteManga(${element})'>Delete</button>
            </td>
        `
        mangaContent.appendChild(mangaRow)
    }
}

function addToBookTable() {
    let bookContent = document.getElementById('book-content')
    bookContent.innerHTML = ''
    for (element in myBookLibrary) {
        let boo = myBookLibrary[element]
        let bookRow = document.createElement('tr')
        bookRow.innerHTML = `
            <th>${boo.title}</th>
            <td>${boo.author}</td>
            <td>${boo.number}</td>
            <td class='ifSeen'>
                <button class='toggleBtn' onclick='toggleSeenBook(${element})'>${boo.seen ? 'Yes' : 'No'}</button>
            </td>
                <button class='delete-btn' onclick='deleteBook(${element})'>Delete</button>
            </td>
        `
        bookContent.appendChild(bookRow)
    }
}


function deleteAnime(index) {
    myAnimeLibrary.splice(index, 1)
    addToAnimeTable()
}

function deleteManga(index) {
    myMangaLibrary.splice(index, 1)
    addToMangaTable()
}

function deleteBook(index) {
    myBookLibrary.splice(index, 1)
    addToBookTable()
}


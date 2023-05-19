let myBookLibrary = [];
let myAnimeLibrary = [];
let myMangaLibrary = [];
let contentType = ''

const addAnimeBtn = document.getElementById('add-anime')
const addMangaBtn = document.getElementById('add-manga')
const addBookBtn = document.getElementById('add-book')
const addContentToLibrary = document.getElementById('submit')
const form = document.querySelector('form')

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
    if (document.getElementById('title').value === '') {
        return
    }
    let newElement = document.createElement('tr')
    newElement.id = 'newElement'
    let thName = document.createElement('th')
    let tdAuthor = document.createElement('td')
    let tdNumber = document.createElement('td')
    let tdSeen = document.createElement('td')
    let tdDelete = document.createElement('td')

    newElement.appendChild(thName)
    newElement.appendChild(tdAuthor)
    newElement.appendChild(tdNumber)
    newElement.appendChild(tdSeen)
    newElement.appendChild(tdDelete)

    thName.textContent = document.getElementById('title').value
    tdAuthor.textContent = document.getElementById('author').value
    tdNumber.textContent = document.getElementById('number').value
    let check = document.createElement('input')
    check.type = 'checkbox'
    check.checked = document.getElementById('checkmark').checked
    tdSeen.appendChild(check)
    const deleteBtn = document.createElement('button')
    deleteBtn.id = 'delete-btn'
    deleteBtn.textContent = 'Delete'
    tdDelete.appendChild(deleteBtn)

    if (contentType == 'anime') {
        document.getElementById('anime-content').appendChild(newElement)
    }
})

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
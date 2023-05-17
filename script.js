function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    let readStr
    if (this.read === true) {
        readStr = 'read already'
    } else {
        readStr = 'not read yet'
    }
    this.info = function() {
        return `${title} by ${author}, ${pages} pages, ${readStr}.`
    }
}

const book1 = new Book('The Penis', 'Kar Ass', 69, true)
console.log(book1.info())
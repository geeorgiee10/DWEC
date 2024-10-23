class BookList{
    constructor(obj){
        this.nextBookRead = null;
        this.currentBookRead = null;
        this.lastBookRead = null;
        this.books = [];
    }

    get booksRead (){
        return this.books.filter(book => book.read).length;
    }
    get booksNotRead (){
        return this.books.filter(book => !book.read).length;
    }

    add(book){
        this.books.push(book);
        if(!this.currentBookRead && !book.read){
            this.currentBookRead = book;
        }
    }
    finishCurrentBook() {
        if (this.currentBookRead) {
            this.currentBookRead.read = true;
            this.currentBookRead.readDate = new Date(Date.now());
            this.lastBookRead = this.currentBookRead;
            this.currentBookRead = this.books.find(book => !book.read);
            this.nextBookRead = this.books.find(book => !book.read && book !== this.currentBookRead);
        } else {
            console.log("No hay un libro actual para finalizar.");
        }
    }
}

class Book{
    constructor(title, genre, author, read = false, readDate = null){
        this.title = title;
        this.genre = genre;
        this.author = author;
        this.read = read;
        this.readDate = readDate;
    }
}


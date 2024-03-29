const myLibrary = [];

function Book(title,author,pages,read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}


const firstReader = new Book(this.title,this.author,this.pages,this.read);

function addBookToLibrary(){
    firstReader.title = prompt('enter title');
    firstReader.author = prompt('Enter Author');
    firstReader.pages = prompt('enter pages');
    firstReader.read = prompt('have you read the book');
    myLibrary.push(firstReader);
    console.log(myLibrary)
}

 addBookToLibrary();







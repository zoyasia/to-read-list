
class Book {
    constructor(title, author, img) {
        this.title = title;
        this.author = author;
        this.img = img;
}

    createBook() {
        const newElement = document.createElement("div");
        newElement.classList.add("col-md-3");

        newElement.innerHTML = `
            <div class="card mt-3" style="width: 18rem;">
                <img src="${this.img}" class="card-img-top" alt="front cover of this book">
                <div class="card-body">
                    <h5 class="card-title">${this.title}</h5>
                    <p class="card-text">${this.author}</p>
                    <button class="delete-button btn small-btn">Remove</button>
                </div>
            </div>
        </div>`


    return newElement;

    } // enf of create book function

} // end of Book class

export default Book;
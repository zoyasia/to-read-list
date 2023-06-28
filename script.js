import Book from "./BookClass.js"

const myForm = document.querySelector("#form");
myForm.addEventListener("submit", function(event) {
        event.preventDefault(); 

            const titleInput = document.querySelector("#title");
            const authorInput = document.querySelector("#author");
            const pictureInput = document.querySelector("#cover");

            // Pour récupérer les valeurs de tous les champs du formulaire:
            const title = titleInput.value;
            const author = authorInput.value;
            const picture = pictureInput.value;

            // Créer une nouvelle instance de Book, et lui appliquer la méthode createBook()
            let newBook = new Book(title, author, picture);
            console.log(newBook);
            let newBookElement = newBook.createBook();

            $(newBookElement).hide(); // cacher mon nouvel élément avant d'insérer une animation

            const deleteBtn = newBookElement.querySelector(".small-btn"); 
            deleteBtn.addEventListener("click", function() {
            newBookElement.remove(); // ajouter une fonction à mon bouton delete pour supprimer la card Book
            });

            // Faire apparaître la nouvelle instance Book dans mon container dédié 
            const bookContainer = document.querySelector(".reading-list");
            bookContainer.appendChild(newBookElement);
            $(newBookElement).fadeIn(); // Pour faire apparaître mon élément avec un effet de fade

            myForm.reset(); // pour réinitialiser les champs du formulaire

}); // end of event listener



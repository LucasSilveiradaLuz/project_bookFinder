 let url = "AIzaSyACsjxeAUT5eI8xeWlu0lBNwy-YEqvtWD8"

 fetch(url)
        .then(response => response.json())
        .then(data => {

data.items.forEach(item => {
    
      const book = item.volumeInfo;
            document.getElementById("Title").innerText = book.title
            document.getElementById("Author").innerText =  book.authors ? book.authors.join(", ") : "Autor não disponível"
            document.getElementById("Description").innerText = book.description || "Descrição não disponível"
            document.getElementById("img").src = book.imageLinks ? book.imageLinks.thumbnail : "Imagem não disponível"
})
                });

            
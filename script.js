let addbutton = document.getElementById("Adicionar")
let textInput = document.getElementById("textInput")
let search = document.getElementById("Pesquisa")

search.addEventListener("click", () => { 
let query = textInput.value;  
  if (!query) return;
  

 let url = `https://www.googleapis.com/books/v1/volumes?q=${query}&keyAIzaSyACsjxeAUT5eI8xeWlu0lBNwy-YEqvtWD8`

 fetch(url)
        .then(response => response.json())
        .then(data => {
     document.getElementById("Title").innerText = "";
      document.getElementById("Author").innerText = "";
      document.getElementById("Description").innerText = "";
      document.getElementById("img").src = "";

 if (data.items && data.items.length > 0) {
      
        const book = data.items[0].volumeInfo;
            document.getElementById("Title").innerText = book.title
            document.getElementById("Author").innerText =  book.authors ? book.authors.join(", ") : "Autor não disponível"
            document.getElementById("Description").innerText = book.description || "Descrição não disponível"
            document.getElementById("img").src = book.imageLinks ? book.imageLinks.thumbnail : "Imagem não disponível"
 }})
.catch(error => {
        console.error('Erro ao buscar os dados:', error);
      })
    })
  

let addbutton = document.getElementById("Adicionar")
let textInput = document.getElementById("textInput")
let search = document.getElementById("Pesquisa")

search.addEventListener("click", () => { 
let query = textInput.value;  
  if (!query) return;
  

 
 fetch(`https://openlibrary.org/search.json?q=${textInput.value}`)
  .then(res => res.json())
  .then(data => {
    console.log(data);
     if (data.docs && data.docs.length > 0) {
      
        const book = data.docs[0];
        document.getElementById("Title").innerText = book.title ? book.title : "Título não disponível"
  document.getElementById("Author").innerText = book.author_name ?  book.author_name.join(", ") : "Autor não disponível"
  document.getElementById("img").src =
  book.cover_i
    ? `https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`
    : "Imagem não encontrada"
    console.log(book.cover_i)
 }})
  
.catch(error => {
        console.error('Erro ao buscar os dados:', error);
      })
    })
    
  

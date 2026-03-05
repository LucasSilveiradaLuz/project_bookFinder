let addbutton = document.getElementById("Adicionar")
let textInput = document.getElementById("textInput")
let search = document.getElementById("Pesquisa")
let card = document.getElementById("card")

search.addEventListener("click", () => { 

    let query = textInput.value;
    if (!query) return;

    card.style.display = "block"; // apenas mostra
  

 
 fetch(`https://openlibrary.org/search.json?q=${textInput.value}`)
  .then(res => res.json())
  .then(data => {
    console.log(data);
     if (data.docs && data.docs.length > 0) {
      
        const book = data.docs[0]; //
        document.getElementById("Title").innerText =
"Nome: " + (book.title || "Título não disponível");

document.getElementById("Author").innerText =
"Autor: " + (book.author_name?.join(", ") || "Autor não disponível");
 
  document.getElementById("img").src =
  book.cover_i
    ? `https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`
    : "Imagem não encontrada"
    console.log(book.cover_i)
     fetch(`https://openlibrary.org${book.key}.json`)
  .then(response => response.json())
  .then(workData => {
    const description =
    // verifica se a string é um objeto ou um texto comum, daí faz como um if simplificado, se for texto comum pega o texto, se for objeto pega o seu valor
      typeof workData.description === "string"
        ? workData.description
        : workData.description?.value;

    document.getElementById("Description").innerText = "Sinopse: " +
      description || "Sinopse não disponível";
      console.log(description)
  })
  .catch(error => {
    console.log(error)
  
    document.getElementById("Description").innerText =
      "Sinopse não disponível";
  });
 }})
  
.catch(error => {
        console.error('Erro ao buscar os dados:', error);
        return "Esse livro não existe na API"
      })
    
    })

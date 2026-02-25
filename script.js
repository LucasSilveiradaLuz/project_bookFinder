 let url = "https://www.googleapis.com{query}&maxResults=5"

 fetch(url)
        .then(response => response.json())
        .then(data => {

            document.getElementById("Title").innerText = data.volumeInfo.title
            document.getElementById("Author").innerText = data.volumeInfo.authors 
            document.getElementById("Description").innerText = data.volumeInfo.description 
            document.getElementById("img").innerText = data.volumeInfo.imageLinks.thumbnail 

                });

    
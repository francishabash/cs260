document.getElementById("dogsubmit").addEventListener("click", function(event) {
    event.preventDefault();
    const url ="https://dog.ceo/api/breeds/image/random";
    fetch(url)
        .then(function(response) {
            return response.json();
        }).then(function(json) {
                var imageURL = json.message;
                var image = document.createElement("img")
                image.src = imageURL
                image.height = 500
                image.width = 500
                image.textContent="<br>"
                const imageValue = document.getElementById("dogResults");
                imageValue.textContent="";
                const newLine = document.createElement("p")
                imageValue.appendChild(newLine)
                imageValue.appendChild(image)
                imageValue.appendChild(newLine)
        });
    
});
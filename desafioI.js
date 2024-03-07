const getPosts = async () => {
    const url = 'https://jsonplaceholder.typicode.com/posts';
    try {
        const response = await fetch(url);
        const datos = await response.json();
        if (response.status !== 404) {

            let listaDePosts = "<ul>";
            // let etiquetaUl = document.createElement("ul")

            // let li;
            for (const post of datos) {
                listaDePosts += `<li><h4>${post.title}</h4><p>${post.body}</p></li>`
                // li = document.createElement("li")
                // li.innerHTML = `<h4>${post.title}</h4><p>${post.body}</p>`
                // etiquetaUl.appendChild(li)
            }
            listaDePosts += "</ul>"

            let div = document.getElementById("post-data");
            // div.appendChild(etiquetaUl)
            div.insertAdjacentHTML("beforeend", listaDePosts);

            // let p = document.createElement(listaDePosts);
            // div.appendChild(p);
        } else {
            throw new Error("Error 404")
        }


    } catch (err) {
        alert(err);
    }
}

const btn = document.getElementById("btn");
btn.addEventListener("click", function () {
    getPosts()
});
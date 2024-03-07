const getPosts = async () => {
    const url = 'https://jsonplaceholder.typicode.com/posts';
    try {
        const response = await fetch(url);
        const datos = await response.json();
        if (response.status !== 404) {

            let listaDePosts = "<ul>";

            for (const post of datos) {
                listaDePosts += `<li><h4>${post.title}</h4><p>${post.body}</p></li>`

            }

            listaDePosts += "</ul>"

            let div = document.getElementById("post-data");
            div.insertAdjacentHTML("beforeend", listaDePosts);

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
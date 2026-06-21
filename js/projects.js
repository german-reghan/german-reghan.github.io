const container = document.getElementById("projects-container");

fetch("https://api.github.com/users/german-reghan/repos")
    .then(response => response.json())
    .then(repos => {
        repos.forEach(repo => {
            const card = document.createElement("div");
            card.classList.add("item");

            card.innerHTML = `
                <h2>
                    <a href="${repo.html_url}" target="_blank">
                        ${repo.name}
                    </a>
                </h2>
                <p>${repo.description || "No description available."}</p>
                `;
            container.appendChild(card);
        });
    })

    .catch(error => {
        console.log(error)
    });
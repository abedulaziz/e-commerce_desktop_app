

window.onload = function() {

  if (localStorage.getItem("access_token")) {

    const productsReq = axios({
      method: "post",
      url: "http://127.0.0.1:8000/api/list-categories",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("access_token")}`

      }
    })

    productsReq.then(response => {
      console.log(response);

      const favoritedLink = document.querySelector(".loved_items a")

      if (response.data.isAuthorised) {
        document.getElementById("sideLinks").innerHTML = `<a href=""><div class="categ_nav_item">Categories</div></a>`
        favoritedLink.setAttribute("href", "./../pages/favorited_items.html")

        let data = response.data.categories;
        console.log(data);
        const categories = document.getElementById("categories")

        for (let i =0; i< data.length; i++) {
          data = data[i]

          let category = document.createElement("div")
          category.classList.add("category")
          category.id = data.id

          let imgWrapper = document.createElement("div")
          imgWrapper.className = "img-wrapper"
          
          let categImg = document.createElement("img")
          categImg.src = data.img_path;

          imgWrapper.appendChild(categImg)

          let about = document.createElement("div")
          about.className = "about"

          let title = document.createElement("div")
          title.className = "title"
          title.innerHTML = `<h3>${data.name}</h3>`

          let description = document.createElement("div")
          description.className = "description"
          description.innerText = data.desc

          let visitCateg = document.createElement("div")
          visitCateg.className = "visit_categ"
          visitCateg.innerHTML = `<a href="./../pages/items.html"><button>Visit</button></a>`

          about.appendChild(title)
          about.appendChild(description)
          about.appendChild(visitCateg)

          category.appendChild(imgWrapper)
          category.appendChild(about)

          categories.appendChild(category)
        }
      }
      else {
        favoritedLink.addEventListener("click", () => alert("You have to be logged-in first."))
      }
    })
  }
}
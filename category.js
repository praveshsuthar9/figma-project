
const category = document.querySelector('.category');

function getUrlParameter(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}

const imageUrl = getUrlParameter('src')
console.log(imageUrl)

const categoryHeading = document.querySelector('h2')
const womens = 'https://store.figma.com/cdn/shop/products/figma-store_framework-tee_01_1000x.jpg?v=1670515454';
const accessorices = 'https://store.figma.com/cdn/shop/products/figma-store_tool-kit-mug_01_1000x.jpg?v=1670520016';
const mens = 'https://store.figma.com/cdn/shop/products/Figma-Store-1096_1000x.jpg?v=1636599836';



// -----------------------getWomensData--------------------------------------------------------
const cWomens = async () => {
    const res = await fetch('data.json')
    const data = await res.json()
    data.products.map((item) => {
        item.womens.map((women) => {
            const div = document.createElement('div')
            div.classList.add('c-card')
            category.appendChild(div)
            div.innerHTML = `

            <div class="c-img">
                <img src=${women.images} alt="c-img" onclick="getProduct(this)">
            </div>
            <div class="c-content">
                <p>${women.title}</p>
                <h6>Rs${women.price}</h6>
            </div>`
        })
    })
}


if (imageUrl === womens) {
    categoryHeading.innerText = `CATEGORYWOMEN'S`
    cWomens()
}

// --------------------------------------- getAccessoricesData-------------------------------------- 
const getAccessoricesData = async () => {
    const res = await fetch('data.json')
    const data = await res.json()
    data.products.map((item) => {
        item.accessories.map((curr) => {

            const div = document.createElement('div' )
            div.classList.add('c-card')
            category.appendChild(div)
            div.innerHTML = `

            <div class="c-img">
                <img src=${curr.images} alt="c-img" onclick="getProduct(this)">
            </div>
            <div class="c-content">
                <p>${curr.title}</p>
                <h6>Rs${curr.price}</h6>
            </div>`
        })
    })
}


if (imageUrl === accessorices) {
    categoryHeading.innerText = `CATEGORYACCESSORIE'S`
    getAccessoricesData()
}

// ----------------------------------------------------getMensData--------------------------------------------
const getMensData = async () => {
    const res = await fetch('data.json')
    const data = await res.json()
    data.products.map((item) => {
        item.mens.map((curr) => {

            const div = document.createElement('div')
            div.classList.add('c-card')
            category.appendChild(div)
            div.innerHTML = `

            <div class="c-img">
                <img src=${curr.images} alt="c-img"  onclick="getProduct(this)">
            </div>
            <div class="c-content">
                <p>${curr.title}</p>
                <h6>Rs${curr.price}</h6>
            </div>`
        })
    })
}

if (imageUrl === mens) {
    categoryHeading.innerText = `CATEGORYMEN'S`
    getMensData()
}



function getProduct(imgElement) {

    const imageUrl = imgElement.src;
    window.location.href = `productpage.html?src=${encodeURIComponent(imageUrl)}`;
  }



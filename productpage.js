


const incButton = document.getElementById('inc');
const decButton = document.getElementById('dec');
const input = document.getElementById('inputV');

incButton.addEventListener('click', () => {
    if(input.value >= 20)return
    input.value++
})

decButton.addEventListener('click', () => {
    if(input.value <= 1)return
    input.value--

})


function getUrlParameter(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}

const imageUrl = getUrlParameter('src')
console.log(imageUrl)



const smallImg = document.querySelector('.small-images');
const bigImg = document.querySelector('.b-img img');
const title = document.getElementById('title');
const dec = document.getElementById('description');
const sliderContainer = document.querySelector('.swiper-wrapper')
// ----------------------------------------------------getAllWomenData---------------------------------------------------

const fImgUrl = 'https://store.figma.com/cdn/shop/products/figma-store_framework-tee_01_1000x.jpg?v=1670515454,https://store.figma.com/cdn/shop/products/figma-store_framework-tee_03_1000x.jpg?v=1670597451,https://store.figma.com/cdn/shop/products/figma-store_framework-tee_05_1000x.jpg?v=1670597451';
const sImgUrl = 'https://store.figma.com/cdn/shop/products/figma-store_dress-code-hat_01_1000x.png?v=1677707527';
const tImgUrl = 'https://store.figma.com/cdn/shop/products/Figma-Store-3804_1000x.jpg?v=1636599369,https://store.figma.com/cdn/shop/products/Figma-Store-3917_1000x.jpg?v=1636599369';



const getWomenF = async () => {
    const res = await fetch('data.json')
    const data = await res.json()
    data.products.map((item) => {
   // console.log(item.womens[0])

    item.womens[0].images.map((img) => {
      //  console.log(img)
       const div = document.createElement('div');
       smallImg.appendChild(div)
       div.classList.add('s-img');
       div.innerHTML = `
      
       <img src=${img} alt="" onclick="viewFullImg(this)">

       `
      bigImg.src = fImgUrl
      title.innerText = item.womens[0].title

      description.innerText = item.womens[0].description

      const slider = document.createElement('div')
      sliderContainer.appendChild(slider)
      slider.classList.add('swiper-slide')
      slider.innerHTML = `
      <img src=${img} alt="">
    `
    })
    })
}


const getWomenSecond = async () => {
    const res = await fetch('data.json')
    const data = await res.json()
    data.products.map((item) => {
    // console.log(item.womens[0].images)

    item.womens[1].images.map((img) => {
       // console.log(img)
       const div = document.createElement('div');
       smallImg.appendChild(div)
       div.classList.add('s-img');
       div.innerHTML = `
      
       <img src=${img} alt="" onclick="viewFullImg(this)">

       `
      bigImg.src = sImgUrl
      title.innerText = item.womens[1].title
      dec.innerText = item.womens[1].description

      const slider = document.createElement('div')
      sliderContainer.appendChild(slider)
      slider.classList.add('swiper-slide')
      slider.innerHTML = `
      <img src=${img} alt="">
    `

    })
    })
}

const getWomenThird = async () => {
    const res = await fetch('data.json')
    const data = await res.json()
    data.products.map((item) => {
    item.womens[2].images.map((img) => {
        console.log(img)
       const div = document.createElement('div');
       smallImg.appendChild(div)
       div.classList.add('s-img');
       div.innerHTML = `
      
       <img src=${img} alt="" onclick="viewFullImg(this)">

       `
      bigImg.src = tImgUrl
      title.innerText = item.womens[2].title
      dec.innerText = item.womens[2].description


      const slider = document.createElement('div')
      sliderContainer.appendChild(slider)
      slider.classList.add('swiper-slide')
      slider.innerHTML = `
      <img src=${img} alt="">
    `


    })


    })
}


if (imageUrl === fImgUrl) {
    
    getWomenF()
}

if (imageUrl === sImgUrl) {
    getWomenSecond()
}
if (imageUrl === tImgUrl) {
    getWomenThird()
}


// -------------------------------------------------womensData-end-----------------------------

// -------------------------------------------------getMensData--------------------------------------------
const fMen = 'https://store.figma.com/cdn/shop/products/Figma-Store-1039_1000x.jpg?v=1636599836,https://store.figma.com/cdn/shop/products/Figma-Store-1108_1000x.jpg?v=1636599836,https://store.figma.com/cdn/shop/products/Figma-Store---Product-4381_1000x.jpg?v=1636323317';
const sMen = 'https://store.figma.com/cdn/shop/products/figma-store_tidy-up-tee_01_1000x.jpg?v=1670516715';
const tMen = 'https://store.figma.com/cdn/shop/products/IMG_9221_1000x.jpg?v=1651178100,https://store.figma.com/cdn/shop/products/IMG_0060_1000x.jpg?v=1652132420';

const getMenF = async () => {
    const res = await fetch('data.json')
    const data = await res.json()
    data.products.map((item) => {

    item.mens[0].images.map((img) => {
     
       const div = document.createElement('div');
       smallImg.appendChild(div)
       div.classList.add('s-img');
       div.innerHTML = `
      
       <img src=${img} alt="" onclick="viewFullImg(this)">

       `
      bigImg.src = fMen
      title.innerText = item.mens[0].title

      description.innerText = item.mens[0].description

      const slider = document.createElement('div')
      sliderContainer.appendChild(slider)
      slider.classList.add('swiper-slide')
      slider.innerHTML = `
      <img src=${img} alt="">
    `
    })
    })
}

const getMenS = async () => {
    const res = await fetch('data.json')
    const data = await res.json()
    data.products.map((item) => {
    console.log(item.mens[0])

    item.mens[1].images.map((img) => {
     
       const div = document.createElement('div');
       smallImg.appendChild(div)
       div.classList.add('s-img');
       div.innerHTML = `
      
       <img src=${img} alt="" onclick="viewFullImg(this)">

       `
      bigImg.src = sMen
      title.innerText = item.mens[1].title

      description.innerText = item.mens[1].description

      const slider = document.createElement('div')
      sliderContainer.appendChild(slider)
      slider.classList.add('swiper-slide')
      slider.innerHTML = `
      <img src=${img} alt="">
    `
    })
    })
}


const getMenT = async () => {
    const res = await fetch('data.json')
    const data = await res.json()
    data.products.map((item) => {
    console.log(item.mens[0])

    item.mens[2].images.map((img) => {
      
       const div = document.createElement('div');
       smallImg.appendChild(div)
       div.classList.add('s-img');
       div.innerHTML = `
       <img src=${img} alt="" onclick="viewFullImg(this)">

       `
      bigImg.src = tMen
      title.innerText = item.mens[2].title

      description.innerText = item.mens[2].description

      const slider = document.createElement('div')
      sliderContainer.appendChild(slider)
      slider.classList.add('swiper-slide')
      slider.innerHTML = `
      <img src=${img} alt="">
    `
    })
    })
}

if(imageUrl === fMen){
    getMenF()
}
if(imageUrl === sMen){
    getMenS()
}
if(imageUrl === tMen){
    getMenT()
}


// ----------------------------------------------------------------MenData-end-----------------------------------------


const  fAcc=  'https://store.figma.com/cdn/shop/products/figma-store_tool-kit-mug_02_1000x.jpg?v=1670520015';
const sAcc = 'https://store.figma.com/cdn/shop/products/Figma-Store-3550_1000x.jpg?v=1636599916,https://store.figma.com/cdn/shop/products/Figma-Store-3579_1000x.jpg?v=1636599916';
const tAcc = 'https://store.figma.com/cdn/shop/products/FigmaStore_Tote-25_1000x.jpg?v=1657055226';


const getAccFirst = async () => {
    const res = await fetch('data.json')
    const data = await res.json()
    data.products.map((item) => {
    console.log(item.mens[0])

    item.accessories[0].images.map((img) => {
      
       const div = document.createElement('div');
       smallImg.appendChild(div)
       div.classList.add('s-img');
       div.innerHTML = `
       <img src=${img} alt="" onclick="viewFullImg(this)">

       `
      bigImg.src = fAcc
      title.innerText = item.accessories[0].title

      description.innerText = item.accessories[0].description

      const slider = document.createElement('div')
      sliderContainer.appendChild(slider)
      slider.classList.add('swiper-slide')
      slider.innerHTML = `
      <img src=${img} alt="">
    `
    })
    })
}

const getAccSecond = async () => {
    const res = await fetch('data.json')
    const data = await res.json()
    data.products.map((item) => {
    console.log(item.mens[0])

    item.accessories[1].images.map((img) => {
    
       const div = document.createElement('div');
       smallImg.appendChild(div)
       div.classList.add('s-img');
       div.innerHTML = `
       <img src=${img} alt="" onclick="viewFullImg(this)">

       `
      bigImg.src = sAcc
      title.innerText = item.accessories[1].title

      description.innerText = item.accessories[1].description

      const slider = document.createElement('div')
      sliderContainer.appendChild(slider)
      slider.classList.add('swiper-slide')
      slider.innerHTML = `
      <img src=${img} alt="">
    `
    })
    })
}

const getAccThird = async () => {
    const res = await fetch('data.json')
    const data = await res.json()
    data.products.map((item) => {
    console.log(item.mens[0])

    item.accessories[2].images.map((img) => {
        
       const div = document.createElement('div');
       smallImg.appendChild(div)
       div.classList.add('s-img');
       div.innerHTML = `
       <img src=${img} alt="" onclick="viewFullImg(this)">

       `
      bigImg.src = tAcc
      title.innerText = item.accessories[2].title

      description.innerText = item.accessories[2].description

      const slider = document.createElement('div')
      sliderContainer.appendChild(slider)
      slider.classList.add('swiper-slide')
      slider.innerHTML = `
      <img src=${img} alt="">
    `
    })
    })
}

if(imageUrl === fAcc){
     document.querySelector('.size-container').style.display= 'none'
    getAccFirst()
}


if(imageUrl === sAcc){
    document.querySelector('.size-container').style.display= 'none'
    getAccSecond()
  

}



if(imageUrl === tAcc){
    document.querySelector('.size-container').style.display= 'none'
    getAccThird()
}



const viewFullImg = (img) => {
    bigImg.src = img.src
}
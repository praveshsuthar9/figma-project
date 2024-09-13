
 const str = 'Profits Fund Reforrstation 100% of ';
 const text = document.getElementById('text')




window.onload = () => {
 for(let i = 0; i < str.length; i++){
   let span = document.createElement('span')
   span.innerHTML = str[i]
   text.appendChild(span)
   span.style.transform = `rotate(${10 * i}deg) `;
 }
}

const w = document.querySelector('.womens');
const a = document.querySelector('.acc');
const m = document.querySelector('.mens');

const myFun = async () => {
  const res = await fetch('data.json')
  const data = await res.json()
  console.log(data)

  data.products.map((item) => {

    getwomensData(item)
    getaccessories(item)
    getmensData(item)
  })
}

myFun()

const getwomensData = (item) => {
  const div = document.createElement('div')
  w.appendChild(div)
  div.classList.add('home-product')
  div.innerHTML = `<div class="p-img"><img src=${item.womens[0].thumbnail} alt="img" onclick="getCategory(this)"></div> 
                      <p>CATEGORY</p>
                    <h6>WOMENS</h6>       
 `
}

const getaccessories = (item) => {
  const div = document.createElement('div')
  a.appendChild(div)
  div.classList.add('home-product')
  div.innerHTML = `<div class="p-img"><img src=${item.accessories[0].thumbnail} alt="img" onclick="getCategory(this)"></div> 
                      <p>CATEGORY</p>
                    <h6>ACCESSORIES</h6>        
 `
}

const getmensData = (item) => {
  const div = document.createElement('div')
  m.appendChild(div)
  div.classList.add('home-product')
  div.innerHTML = `<div class="p-img"><img src=${item.mens[0].thumbnail} alt="img" onclick="getCategory(this)">
    </div> 
                      <p>CATEGORY</p>
                    <h6>Mens</h6>
       
 `

}

function getCategory(imgElement) {
  const imageUrl = imgElement.src;
  window.location.href = `categorypage.html?src=${encodeURIComponent(imageUrl)}`;
}




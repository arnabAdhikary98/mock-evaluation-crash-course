let container = document.querySelector('.main-container')
let categorySelect = document.querySelector('select')
let searchInput = document.querySelector('input')


// function to show the products
function showData(arr){
    container.innerHTML = ''
    arr.forEach((ele, i) => {
        let div = document.createElement('div')
        div.setAttribute('class', 'products')



        let divChild01 = document.createElement('div')
        divChild01.setAttribute('class', 'product-img')

        let img = document.createElement('img')
        img.src = ele.image

        divChild01.append(img)

        let divChild02= document.createElement('div')
        divChild02.setAttribute('class', 'product-details')

        let name = document.createElement('h3')
        name.innerText = ele.title

        let price = document.createElement('p')
        price.innerHTML = `Price: $${ele.price}`

        divChild02.append(name, price)

        div.append(divChild01, divChild02)
        container.append(div)

    })
}

// function to get the URL pass to the showData function as an Array
function getData(url){
    fetch(url)
    .then(res => res.json())
    .then(res => {
        console.log(res)
        showData(res)})
}


//function to show products category wise
function changeCategory(){
    let value = categorySelect.value
    
    let URL = `https://fakestoreapi.com/products/category/${value}`

    getData(URL)
}

categorySelect.addEventListener('change', changeCategory)


getData("https://fakestoreapi.com/products")
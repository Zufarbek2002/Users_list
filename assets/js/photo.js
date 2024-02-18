const postsBoxes = document.querySelector('.photos_boxes')
const user = document.querySelector('.user_id')
const loading = document.querySelector('.loading')

function dataDisplay(data) {
    let str = '';
    data.forEach(data => {
        str += `
           <div class='photo_box'>
            <h2>${data.title}</h2>
            <a href="${data.url}">
                <img src="${data.thumbnailUrl}"/>
            </a>
           </div>
        `
    });
    postsBoxes.innerHTML = str;
}

let userId = location.search.slice(9,location.search.length)
user.innerHTML += ` {albumId = ${userId}}`;

let API = fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${userId}`)
API.then(res => res.json())
.then(data => {
    dataDisplay(data)
    loading.style.display = 'none'})
.catch(err => console.log(err))

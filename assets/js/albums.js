const postsBoxes = document.querySelector('.album_boxes')
const user = document.querySelector('.user_id')
const loading = document.querySelector('.loading')

function dataDisplay(data) {
    let str = '';
    data.forEach(data => {
        str += `
           <div class = 'album_box'>
            <h2>${data.title}</h2>
            <div><button class="btn" onclick=photoBtn(${data.id})>Photo</button></div>
           </div>
        `
    });
    postsBoxes.innerHTML = str;
}

let userId = location.search.slice(8,localStorage.search)
user.innerHTML += ` {userId = ${userId}}`;

let API = fetch(`https://jsonplaceholder.typicode.com/albums/?userId=${userId}`)
API.then(res => res.json())
.then(data => {
    loading.style.display = 'none'
    dataDisplay(data)})
.catch(err => console.log(err))

function photoBtn(id) {
    location.href = `/pages/photos.html?albumId=${id}`
}
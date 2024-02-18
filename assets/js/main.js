const usersData = document.querySelector('.users_data')
const loading = document.querySelector('.loading')

function dataDisplay(data) {
    let str = '';
    data.forEach(data => {
        str += `
           <div class = 'user_box'>
            <h2>${data.name}</h2>
            <h3>${data.username}</h3>
            <div class="box_line">
                <p class="box_text">Email:</p>
                <a href = "#" class="box_link">${data.email}</a>
            </div>
            <div class="box_line">
                <p class="box_text">Address:</p>
                <a href = "#" class="box_link">${data.address.city} ${data.address.street}</a>
            </div>
            <div class="box_line">
                <p class="box_text">Website:</p>
                <a href = "#" class="box_link">${data.website}</a>
            </div>
            <div class="box_line">
                <p class="box_text">Phone:</p>
                <a href = "#" class="box_link">${data.phone}</a>
            </div>
            <div class="btn_box">
                <button class="btn posts_btn" onclick=postBtn(${data.id})>Posts</button>
                <button class="btn" onclick=photosBtn(${data.id})>Photos</button>
                <button class="btn" onclick=todosBtn(${data.id})>ToDo</button>
            </div>
           </div>
        `
    });
    usersData.innerHTML = str;
}

let API = fetch('https://jsonplaceholder.typicode.com/users')
API.then(res => res.json())
.then(data => {
    loading.style.display = 'none'
    dataDisplay(data)})
.catch(err => console.log(err))

function postBtn(id) {
    location.href = `/pages/posts.html?userId=${id}`
}
function photosBtn(id) {
    location.href = `/pages/albums.html?userId=${id}`
}
function todosBtn(id) {
    location.href = `/pages/todos.html?userId=${id}`
}
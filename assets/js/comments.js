const commentsBoxes = document.querySelector('.comments_boxes')
const user = document.querySelector('.user_id')
const loading = document.querySelector('.loading')

function dataDisplay(data) {
    let str = '';
    data.forEach(data => {
        str += `
           <div class = 'post_box'>
            <a href="#">${data.email}</a>
            <h3>${data.name}</h3>
            <p>${data.body}<p>
           </div>
        `
    });
    commentsBoxes.innerHTML = str;
}

let postId = location.search.slice(8,localStorage.search)
user.innerHTML += ` {postId = ${postId}}`;

let API = fetch(`https://jsonplaceholder.typicode.com/comments/?postId=${postId}`)
API.then(res => res.json())
.then(data => {
    loading.style.display = 'none'
    dataDisplay(data)})
.catch(err => console.log(err))

function commentsBtn(id) {
    location.href = `/pages/comments.html?postId=${id}`
}
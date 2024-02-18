const postsBoxes = document.querySelector('.posts_boxes')
const user = document.querySelector('.user_id')
const loading = document.querySelector('.loading')

function dataDisplay(data) {
    let str = '';
    data.forEach(data => {
        str += `
           <div class = 'post_box'>
            <h2>${data.title}</h2>
            <p>${data.body}</p>
            <div><button class="btn" onclick=commentsBtn(${data.id})>Comments</button></div>
           </div>
        `
    });
    postsBoxes.innerHTML = str;
}

let userId = location.search.slice(8,localStorage.search)
user.innerHTML += ` {userId = ${userId}}`;

let API = fetch(`https://jsonplaceholder.typicode.com/posts/?userId=${userId}`)
API.then(res => res.json())
.then(data => {
    loading.style.display = 'none'
    dataDisplay(data)})
.catch(err => console.log(err))

function commentsBtn(id) {
    location.href = `/pages/comments.html?postId=${id}`
}
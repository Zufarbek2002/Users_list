const postsBoxes = document.querySelector('.posts_boxes')
const user = document.querySelector('.user_id')
const loading = document.querySelector('.loading')

function dataDisplay(data) {
    let str = '';
    data.forEach(data => {
        str += `
           <div class = 'todo_box'>
            <h2>${data.title}</h2>
            <div class="completed">
                <div ${data.completed ? `class="falsed_char"` : `class="close"`}>✅</div>
                <div ${data.completed ? `class="close"` : `class="falsed_char"`}>❌</div>
            </div>
           </div>
        `
    });
    postsBoxes.innerHTML = str;
}

let userId = location.search.slice(8, location.search.length)
user.innerHTML += ` {userId = ${userId}}`;

let API = fetch(`https://jsonplaceholder.typicode.com/todos/?userId=${userId}`)
API.then(res => res.json())
    .then(data => {
        loading.style.display = 'none'
        dataDisplay(data)})
    .catch(err => console.log(err))

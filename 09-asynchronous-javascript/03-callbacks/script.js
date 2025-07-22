// function toggle(e) {
//   e.target.classList.toggle('danger')
// }

// document.querySelector('button').addEventListener('click',toggle)

const post = [
  {title: 'Post one',body: 'this is post one'},
  {title: 'Post Two',body: 'this is post two'},
]

function create_post(post,cb){
  setTimeout(()=>{
    posts.push(post)
    cb()
  },2000)
}

function get_post(){
  setTimeout(() =>{
    posts.forEach(function(post){
      const div = document.createElement('div')
      div.innerHTML = `<strong>${post.title}</strong> - ${post.body}`
      document.querySelector('#posts').appendChild(div)
    })
  },1000)
}

create_post({title: 'Post Three', body: 'This is post three'},get_post)


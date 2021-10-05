const url = 'https://jsonplaceholder.typicode.com/posts';
fetchPost();


function fetchPost(){
    fetch(url)
    .then(function(response){
        return response.json();
    })
    .then(function(post){
        let index =  Math.floor(Math.random() * post.length);
        console.log(index)

        console.log(post[index])
        

        document.getElementById('jokes').innerHTML = post[index].title
    })

}


const btn =document.querySelector('.btn');
btn.addEventListener('click', function(){
    fetchPost();
})

const form = document.querySelector('form');
const btn = document.querySelector('button');
const input = document.querySelector('input');
const list = document.querySelector('#list');

function getResult(text){
    axios.get(`https://api.tvmaze.com/search/shows?q=${text}`)
    .then((res)=>{
        list.innerHTML='';
        for(let item of res.data){
            if(item.show.image){
                let imageSource = item.show.image.medium;
                let movie = document.createElement('img');
                movie.src = imageSource;

                list.append(movie);
            }
        }
    })
    .catch((err)=>{
        console.log(err);
    })
}

form.addEventListener('submit', function(e){
    e.preventDefault();
    console.log('submit3ed form');
    let searchText = input.value;
    getResult(searchText);
    
})


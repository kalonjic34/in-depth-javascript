function get_data(endpoint, cb){
    const xhr = new XMLHttpRequest()

    xhr.open('GET',endpoint)

    xhr.onreadystatechange = function(){
        if (this.readyState === 4 & this.status === 200) {
            cb(JSON.parse(this.responseText));
        }
    }

        setTimeout(() => {
            xhr.send()
        }, Math.floor(Math.random() * 3000)+1000);
    }

get_data('./movies.json', (data)=>{
    console.log(data);
    get_data('./actors.json', (data)=>{
        console.log(data);
        get_data('./directors.json', (data)=>{
            console.log(data);
        })
    })
})

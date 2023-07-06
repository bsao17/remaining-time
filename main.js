let time_counter = document.querySelector("#time-counter")
let article_size = document.querySelector("#article").textContent.trim()
let article_words = article_size.split(" ")
let time_array = []
let space = "/\s/g"


const time_remaining = (article)=>{
    article_words.forEach((word)=>{
        if(!word.replace(space, " ")){
            return
        }else {
            time_array.push(word)
        }
    })
    console.log(time_array.length)
}

time_remaining(article_size)
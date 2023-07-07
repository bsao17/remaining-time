/**
 * Prototype Javascript script for futur Chrome Extension
 */

let time = document.querySelector("#time")
let article_size = document.querySelector("#article").textContent.trim()
let article_words = article_size.split(" ")
let time_array = []


const words_request = (article)=>{
    article_words.forEach((word)=>{
        if(!word.replace("/\s/g")){
            return
        }else {
            time_array.push(word)
        }
    })
    console.log(time_array)
}

const create_time_remaining_div = (words_array) => {
    time_remain = document.createElement("span")
    time_remain.className = "text-danger"
    time_remain.innerHTML = ` Between ${time_array.length / 300 * 60} & ${time_array.length / 200 * 60} secondes`
    time.append(time_remain)
} 
    

words_request(article_size)
create_time_remaining_div(time_array)
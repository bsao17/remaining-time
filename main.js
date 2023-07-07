/**
 * Prototype Javascript script for futur Chrome Extension
 */

const time = document.querySelector("#time")
const article_size = document.querySelector("#article").textContent.trim()
const article_words = article_size.split(" ")
const time_array = []


const words_recover = (article)=>{
    article_words.forEach((word)=>{
        if(!word.replace("/\s/g")){
            return
        }else {
            time_array.push(word)
        }
    })
    return time_array
}

const create_time_remaining_div = (words_array) => {
    time_remain = document.createElement("span")
    time_remain.className = "text-danger"
    time_remain.innerHTML = ` Between ${time_array.length / 300 * 60} & ${time_array.length / 200 * 60} secondes`
    time.append(time_remain)
} 
    
words_recover(article_size)
create_time_remaining_div(time_array)
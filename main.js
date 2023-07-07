/**
 * Prototype Javascript script for futur Chrome Extension
 */

const time = document.querySelector("#time")
const article_size = document.querySelector("#article").textContent.trim()
const article_words = article_size.split(" ")
const words_array = []


const words_recover = (article)=>{
    article_words.forEach((word)=>{
        if(!word.replace("/\s/g")){
            return
        }else {
            words_array.push(word)
        }
    })
    return words_array
}

const create_time_remaining_div = (words_array) => {
    time_remain = document.createElement("span")
    time_remain.className = "text-danger"
    time_remain.innerHTML = ` Between ${words_array.length / 300 * 60} & ${words_array.length / 200 * 60} secondes`
    time.append(time_remain)
} 
    
words_recover(article_size)
create_time_remaining_div(words_array)


let count = document.getElementById('counter').innerHTML
let num = parseInt(`${count}`)
let timerUp = 0
let interval = timer()



//function to add or subtract 1 to the counter
function counter(event){
    
    if (event.target.id === 'plus') {
        num += 1
        document.getElementById('counter').innerHTML = num
    } else if (event.target.id === 'minus'){
        num -= 1
        document.getElementById('counter').innerHTML = num
    } else if (event.target.id === 'pause'){
        pause() 
    } else if (event.target.id === 'resume'){
        resume()
    }else if (event.target.id === 'heart'){
        like()
    }else if (event.target.id === 'submit'){
        addComment()
        event.preventDefault()
    }
    

   // console.log(event.target.id)
}

//created event listener for the plus button and calls on counter function
document.addEventListener('click',counter)


// timer function that should invoke counter every second
//setInterval returns an ID or number so that it can be used in clearInterval
function timer(){
    return setInterval(function(){
        num += 1
        document.getElementById('counter').innerHTML = num
            }, 1000)
} 
//pauses counter
function pause() {
   clearInterval(interval)
   document.getElementById('pause').innerText = 'resume'
   document.getElementById('pause').id = 'resume'
   disable()
}
//resumes timer
function resume() {
    document.getElementById('resume').innerText = 'pause'
    document.getElementById('resume').id = 'pause'
    timer()
    document.getElementById('plus').disabled = false
     document.getElementById('minus').disabled = false
     document.getElementById('heart').disabled = false
 }
 function disable(){
     document.getElementById('plus').disabled = true
     document.getElementById('minus').disabled = true
     document.getElementById('heart').disabled = true
 }
//creates bullets for how many  likes a number get
 function like(){
    let num = document.getElementById('counter').innerText
    let numLikes =0    
        
    // if statements to see if the number has been liked yet and creates new li if not
    if (document.getElementById(num)){
        let numLikes = document.getElementById(num).value 
        numLikes += 1
        document.getElementById(num).value = numLikes
        document.getElementById(num).innerText = `${num} has been liked ${numLikes} times`
    }else{
        let li = document.createElement('li')
        li.id = num
        li.value = 1
        document.getElementById('list').appendChild(li) 
        document.getElementById(num).innerText = `${num} has been liked 1 time`
    }  
}

function addComment(){
    let comment = document.getElementById('comment-input')
    let p = document.createElement('p')
    p.innerText = comment.value
    document.getElementById('list').appendChild(p)
    comment.value = ''
}

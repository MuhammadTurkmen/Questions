//using selectors inside the element
// traversing the dom

const questions = document.querySelectorAll(".question")

questions.forEach(function(question) {
    const btn = question.querySelector('.question-btn')
    btn.addEventListener('click', function() {


        questions.forEach(function(itme) {
            if(itme !== question) {
                
            }
        })


        question.classList.toggle('show-text')
        
    })
})




// const btns = document.querySelectorAll('.question-btn')

// btns.forEach(function(btn) {
//     btn.addEventListener('click', function(e) {
//         const  question = e.currentTarget.parentElement.parentElement
//         question.classList.toggle('show-text')
//     })
// })     
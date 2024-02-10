//using selectors inside the element
// traversing the dom

const questions = document.querySelector('.question')

questions.forEach(function (question) {
    const btn = question.querySelector('.question-btn')
    btn.addEventListner('click', function() {
        
    })
})


// const btns = document.querySelectorAll('.question-btn')

// btns.forEach(function(btn) {
//     btn.addEventListener('click', function(e) {
//         const  question = e.currentTarget.parentElement.parentElement
//         question.classList.toggle('show-text')
//     })
// })     
const form = document.querySelector('.design form')
const inputs = document.querySelectorAll('.design form input')

 form.addEventListener('submit', (e)=>{
    e.preventDefault()
    inputs.forEach(input=>{
       if(!input.value){
        input.parentElement.classList.add('error')
       }else{
        input.parentElement.classList.remove('error')
        if(input.type =='email'){
            if(ValidateEmail(input.value)){
                input.parentElement.classList.remove('error')
            }else{
                input.parentElement.classList.add('error')
            }
        }
       }
    })
 })  


 function ValidateEmail(mail) {
    alert("You have entered an invalid email address!")
    return (false)
}

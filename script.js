const fields = document.querySelectorAll("[required]")

//console.log(fields)

for(let field of fields){
    field.addEventListener("invalid", event =>{
        console.log("campo inválido")
    })
}






























document.querySelector("form")
.addEventListener("submit", event => {
    console.log("enviar o formulário")

    //não vai enviar o formulário//
    event.preventDefault()

})
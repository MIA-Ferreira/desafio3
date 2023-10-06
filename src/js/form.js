const entradash = document.querySelectorAll(".entrada")

const botaoh = document.querySelector(".btn")

const avisoh = document.querySelectorAll(".aviso")

entradash.forEach(function(item) {
    
    item.addEventListener("change", function () {
         
        if(this.value !== ""){

            this.classList.remove("espera");
            this.classList.add("confirmado");

        } else if (this.value == ""){

            this.classList.remove("espera");
            this.classList.add("alerta");
        }

    }
    )
})

function enviar() {

    entradash.forEach(function(item,index) {
        
        if(item.value !== ""){

            avisoh[index].hidden = true

            item.classList.remove("espera");
            item.classList.add("confirmado");
        
        } else if (item.value == ""){
            
            avisoh[index].hidden = false

            if (item.classList.contains("confirmado")){
                item.classList.remove("confirmado");
            }
            item.classList.remove("espera");
            item.classList.add("alerta");
        }
    })
}



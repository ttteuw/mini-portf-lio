const abas = document.querySelectorAll(".aba")

abas.forEach(aba =>{
    aba.addEventListener("click", function(){
        
        

        if(aba.classList.contains("selecionado")){
            return;
        }
        selecionarAba(aba)

        const informacaoSelecionada = document.querySelector(".informacao.selecionado")
        informacaoSelecionada.classList.remove("selecionado");
        
         const idDoElemetoDeInformacaoDaAba = `informacao-${aba.id}`
         
         const informacaoASerMostrada = document.getElementById(idDoElemetoDeInformacaoDaAba)
         informacaoASerMostrada.classList.add("selecionado")
    })
})

function selecionarAba(aba){
    const abaSelecionada = document.querySelector(".aba.selecionado")
    abaSelecionada.classList.remove("selecionado")

    aba.classList.add("selecionado")
}
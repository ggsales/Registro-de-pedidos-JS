    let dados = []
            
    function adicionaCliente(){
        let nomeCliente =  document.getElementById("nomeCliente").value
        let mesaCliente = Number(document.getElementById("inputGroupSelect01").value);

        if(nomeCliente == "" || mesaCliente == ""){
            alert("Preencha todos os campos para seguir ao cardápio")
            return;
        } else{
            scrollWin2()
        }
        
        let dadosCliente ={                        
            mesa : mesaCliente,
            nome: nomeCliente
        }  
        dados.push(dadosCliente)

        dadosClienteHTML="<ul class='lista-pedidos'>";
        for(let i = 0;i < dados.length; i++){
            dadosClienteHTML += "<li>" +  dados[i].nome +"/ "+ "mesa:0"+ dados[i].mesa + "</li>";
        }

        dadosClienteHTML += "</ul>"

        document.getElementById("info-client").innerHTML = dadosClienteHTML;
        document.getElementById("data-client").innerHTML = dadosClienteHTML;
        document.getElementById("nomeCliente").value = "";
        document.getElementById("inputGroupSelect01").value = "";
        
       
    }

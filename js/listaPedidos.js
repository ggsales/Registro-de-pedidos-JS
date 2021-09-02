let compras = []
let somaValores =[]  

function removerPedido(indice){
    compras.splice(indice, 1)

    nomesListaHTML="<ul>";
    for(let i = 0;i < compras.length; i++){
    nomesListaHTML += "<li>" + compras[i].titulo + " ------------------------  "+ "R$" +compras[i].valor   + "</li>";
}

nomesListaHTML += "</ul>"

document.getElementById("box-total").innerHTML = "";
document.getElementById("total").innerText = "";
}




function adicionaPedidos( nomeDoProduto, valor){

    let valorProduto = Number(valor)

    let itens ={                        
        titulo :nomeDoProduto,
        valor: valorProduto,
    }  
    compras.push(itens)

    nomesListaHTML="<ul>";
    for(let i = 0;i < compras.length; i++){
        nomesListaHTML += "<li>" + compras[i].titulo + " ------------------------ "+ " R$ " + compras[i].valor + "</li>"
    }

    nomesListaHTML += "</ul>"
    
    document.getElementById("box-total").innerHTML = nomesListaHTML;
    document.getElementById("pending-orders").innerHTML = nomesListaHTML;
    
    
} 
    function calcularTotal(valor){
        let valorProduto = Number(valor)

        let valores ={                        
            valor: valorProduto
        }
        somaValores.push(valores)
        let total = 0
        for(let i = 0; i < somaValores.length; i++){
            console.log(somaValores)
            total += somaValores[i].valor 
        }
    
        document.getElementById("total").innerText = total;
        document.getElementById("required-price").innerText = total;
        
    }





//script src="script.js"></script> serve para caso eu queira separar os arquivos JS e CSS
function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO]Verifique os dados novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano- Number(fano.value)
        res.style.textAlign = 'center'
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        if (fsex[0].checked) {
            gênero = 'Homem'
            if( idade >=0 && idade < 4){
                //Bebê
                img.setAttribute('src','bebê_menino.png')
            } else if(idade < 12){
                //Criança
                img.setAttribute('src','criança_menino.png')
            } else if(idade < 21){
                //Adolescente
                img.setAttribute('src','jovem_homem.png')
            } else{
                //idoso
                img.setAttribute('src','idoso_homem.png')
            }

        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if( idade >=0 && idade < 4){
                //Bebê
                img.setAttribute('src','bebê_menina.png')
            } else if(idade < 12){
                //Criança
                img.setAttribute('src','criança_menina.png')
            } else if(idade < 21){
                //Adolescente
                img.setAttribute('src','jovem_mulher.png')
            } else{
                //idoso
                img.setAttribute('src','idosa_mulher.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }
}
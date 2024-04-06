function clicar(){
    var a = window.document.getElementById('box_number')
    var a = Number(a.value)
    var msg = window.document.getElementById('texto')

    if (a % 2 == 0){
        alert('O NÚMERO É PAR')

    } else{
        alert('O NÚMERO É ÍMPAR')

    }

    /*msg.style.marginTop = '20px'
    msg.style.fontFamily = '"Nunito", sans-serif'
    msg.style.fontWeight = '900'
    msg.style.backgroundColor = 'yelow'*/
}





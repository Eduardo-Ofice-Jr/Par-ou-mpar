function clicar(){
    var a = window.document.getElementById('box_number')
    var a = Number(a.value)
    var msg = window.document.getElementById('texto')

    if (a % 2 == 0){
        alert('O NÚMERO É PAR')

    } else{
        alert('O NÚMERO É ÍMPAR')
    }
}





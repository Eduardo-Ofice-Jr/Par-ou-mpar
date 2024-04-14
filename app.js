function clicar() {
    const input = document.getElementById('box_number')
    const inputValue = input.value

    if (inputValue.length < 1) {
        notie.alert({ text: "Por favor, insira um número primeiro", type: 3 })
        return;
    }

    if (Number(inputValue) % 2 == 0) {
        notie.alert({ text: 'O número é par' })
    } else {
        notie.alert({ text: 'O número é ímpar', type: 1 })
    }
}


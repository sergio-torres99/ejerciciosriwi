function operaciones() {
    let num1 = document.getElementById('numero1').value
    let num2 = document.getElementById('numero2').value
    let opera = document.getElementById('operacion').value
    let solucion = document.getElementById('solucion')

    if (opera != '' && num1 != '' && num2 != '') {

        document.getElementById('operacion').classList.remove('is-invalid');
        document.getElementById('numero1').classList.remove('is-invalid');
        document.getElementById('numero2').classList.remove('is-invalid');

        num1 = parseInt(num1)
        num2 = parseInt(num2)

        if (opera === 'suma') solucion.innerText = `El resultado es: ${num1 + num2}`
        else if (opera === 'resta') solucion.innerText = `El resultado es: ${num1 - num2}`
        else if (opera === 'multi') solucion.innerText = `El resultado es: ${num1 * num2}`
        else if (opera === 'divi') solucion.innerText = `El resultado es: ${num1 / num2}`

        document.getElementById('operacion').value = ''
        document.getElementById('numero1').value = ''
        document.getElementById('numero2').value = ''
    }

    else {

        let op = document.getElementById('operacion')
        let nm1 = document.getElementById('numero1')
        let nm2 = document.getElementById('numero2')

        if (opera == '') {
            op.focus()
            op.classList.add('is-invalid');
        }
        else if (num1 == '') {
            nm1.focus()
            nm1.classList.add('is-invalid');
        }
        else if (num2 == '') {
            nm2.focus()
            nm2.classList.add('is-invalid');
        }

    }

}
function guardarUsuario() {

    let nombres = document.getElementById('nombres').value;
    let apellidos = document.getElementById('apellidos').value;
    let correo = document.getElementById('correo').value;

    if (nombres != '') {
        document.getElementById('nombres').classList.add('is-valid');
        document.getElementById('nombres').classList.remove('is-invalid');
    } else {
        document.getElementById('nombres').classList.add('is-invalid');
        document.getElementById('nombres').classList.remove('is-valid');
    }

    if (apellidos != '') {
        document.getElementById('apellidos').classList.add('is-valid');
        document.getElementById('apellidos').classList.remove('is-invalid');
    } else {
        document.getElementById('apellidos').classList.add('is-invalid');
        document.getElementById('apellidos').classList.remove('is-valid');
    }

    if (correo != '') {
        document.getElementById('correo').classList.add('is-valid');
        document.getElementById('correo').classList.remove('is-invalid');
    } else {
        document.getElementById('correo').classList.add('is-invalid');
        document.getElementById('correo').classList.remove('is-valid');
    }

    let persona = {
        nombres: nombres,
        apellidos: apellidos,
        correo: correo
    }

    const myTable = document.getElementById("table-body")
    const myTr = document.createElement("tr")
    const tdName = document.createElement("td")
    const tdLastName = document.createElement("td")
    const tdEmail = document.createElement("td")

    tdName.innerText = persona.nombres;
    tdLastName.innerText = persona.apellidos;
    tdEmail.innerText = persona.correo;

    myTr.appendChild(tdName)
    myTr.appendChild(tdLastName)
    myTr.appendChild(tdEmail)
    myTable.appendChild(myTr)

    document.getElementById('nombres').value = ""
    document.getElementById('apellidos').value = ""
    document.getElementById('correo').value = ""
}
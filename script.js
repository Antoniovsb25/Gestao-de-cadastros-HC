const form = document.getElementById('form')
const form1 = document.getElementById('form1')

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let nome = document.getElementById('nome').value
    let email = document.getElementById('email').value
    let telefone = document.getElementById('telefone').value
    let dataNascimento = document.getElementById('data-nascimento').value
    let cidade = document.getElementById('cidade').value
    let estado = document.getElementById('estado').value
    let endereco = document.getElementById('endereco').value
    
    if(nome == '' || email == '') {
        alert(`Preencha as informações corretamente! \u{26A0}`)
    } else {
        let data = {
            nome,
            email,
            telefone,
            dataNascimento,
            cidade,
            estado,
            endereco
        }
        let convertData = JSON.stringify(data)
        localStorage.setItem('Cliente', convertData)
        alert(`cadastro de cliente realizado com sucesso! \u{2714}`)  
    } 
})


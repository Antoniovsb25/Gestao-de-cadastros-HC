form1.addEventListener('submit', (e) => {
    e.preventDefault();
    let codigo = document.getElementById('codigo').value
    let nome = document.getElementById('nome').value
    let preco = document.getElementById('preco').value
    let quantidade = document.getElementById('quantidade').value
   

    if(codigo == '' || nome == '' || preco == '' || quantidade == '') {
        alert(`Preencha as informações corretamente! \u{26A0}`)
    } else {
        let data = {
            codigo,
            nome,
            preco,
            quantidade,
        }
        let convertData = JSON.stringify(data)
        localStorage.setItem('Produto', convertData)
        alert(`cadastro de produto realizado com sucesso! \u{2714}`)  
    } 
 })
function calcular(tipo, valor) {
  
    if (tipo === 'acao') {
    
      if (valor === 'c') {
        document.getElementById('resultado').value = '';
      }
    
      if (valor === '+' || valor === '-' || valor === '*' || valor === '/') {
        document.getElementById('resultado').value += valor
      }
  
      if (valor === '=') {
        var valorCampo = eval(document.getElementById('resultado').value)
        document.getElementById('resultado').value = valorCampo
      }
  
      if (valor === '.') {
        var conteudo = document.getElementById('resultado').value
        conteudo.includes('.') ? document.getElementById('resultado').value : document.getElementById('resultado').value += valor
      }
  
      if (valor === 'ac') {
        document.getElementById('resultado').value = document.getElementById('resultado').value.substring(0, document.getElementById('resultado').value.length - 1)
      }
     
    } else if (tipo === 'valor') {
       
      document.getElementById('resultado').value += valor
    }
  
  }
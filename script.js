function calcular() 
{
  m = window.document.getElementById('peso')
  a = window.document.getElementById('altura')
  resultado = window.document.getElementById('resultado')
  massa = Number(m.value)
  altura = Number(a.value)
  imc = massa / (altura * altura)
  
  if (imc < 18.5) 
  {
    resultado.innerHTML = `Seu IMC é: <strong>${imc.toFixed(1)}</strong> Você está abaixo do peso <br> <img src="assets/homen_Abaixo-do-peso.png">`
  }
  else if(imc >= 18.5 && imc < 25)
  {
    resultado.innerHTML = `Seu IMC é: <strong>${imc.toFixed(1)}</strong> Você está no peso ideal`
  }
  else if(imc >= 25 && imc <= 30)
  {
    resultado.innerHTML = `Seu IMC é: <strong>${imc.toFixed(1)}</strong> Você está em sobrepeso`
  }
  else if(imc >= 30 && imc <= 35)
  {
    resultado.innerHTML = `Seu IMC é: <strong>${imc.toFixed(1)}</strong> Você está em obesidade`
  }
  else if(imc >= 35 && imc <= 40)
  {
    resultado.innerHTML = `Seu IMC é: <strong>${imc.toFixed(1)}</strong> Você está em obesidade severa`
  }
  else if(imc > 40)
  {
    resultado.innerHTML = `Seu IMC é: <strong>${imc.toFixed(1)}</strong> Você em obesidade mórbida`
  }
}


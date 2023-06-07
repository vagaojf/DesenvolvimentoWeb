function calcular() {
  let select1 = document.getElementById('select1');
  let select2 = document.getElementById('select2');
  let select3 = document.getElementById('select3');
  let select4 = document.getElementById('select4');
  let select5 = document.getElementById('select5');
  let select6 = document.getElementById('select6');
  let select7 = document.getElementById('select7');
  let select8 = document.getElementById('select8');
  let select9 = document.getElementById('select9');
  let select10 = document.getElementById('select10');
  let select11 = document.getElementById('select11');
  let select12 = document.getElementById('select12');
  let select13 = document.getElementById('select13');
  let select14 = document.getElementById('select14');
  let select15 = document.getElementById('select15');
  let select16 = document.getElementById('select16');
  let select17 = document.getElementById('select17');
  let select18 = document.getElementById('select18');
  let resultado = document.getElementById('resultado');
  
  let valor1 = parseInt(select1.value);
  let valor2 = parseInt(select2.value);
  let valor3 = parseInt(select3.value);
  let valor4 = parseInt(select4.value);
  let valor5 = parseInt(select5.value);
  let valor6 = parseInt(select6.value);
  let valor7 = parseInt(select7.value);
  let valor8 = parseInt(select8.value);
  let valor9 = parseInt(select9.value);
  let valor10 = parseInt(select10.value);
  let valor11 = parseInt(select11.value);
  let valor12 = parseInt(select12.value);
  let valor13 = parseInt(select13.value);
  let valor14 = parseInt(select14.value);
  let valor15 = parseInt(select15.value);
  let valor16 = parseInt(select16.value);
  let valor17 = parseInt(select17.value);
  let valor18 = parseInt(select18.value);
  
  let soma = valor1 + valor2 + valor3 + valor4 + valor5 + valor6 + valor7 + valor8 + valor9 + valor10 + valor11 + valor12 + valor13 + valor14 + valor15 + valor16 +valor17 + valor18;
  
  resultado.textContent = "Resultado: " + soma;
}
 
function loadXMLDoc() {
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      myFunction(this);
    }
  };
  xmlhttp.open("GET", "cd_catalog.xml", true);
  xmlhttp.send();
}

function myFunction(xml) {
  var x, i, xmlDoc;
  xmlDoc = xml.responseXML;
   
  nome  = xmlDoc.getElementsByTagName("TITLE");
  artista = xmlDoc.getElementsByTagName("ARTIST");
  ano = xmlDoc.getElementsByTagName("YEAR");
   
  for (i = 0; i< nome.length; i++) {
    adicionaLinha('<strong>'+i+'</strong>',nome[i].childNodes[0].nodeValue,artista[i].childNodes[0].nodeValue,ano[i].childNodes[0].nodeValue )
  }
  
 
}

 //Funcao adiciona uma nova linha na tabela
            function adicionaLinha(id ,nome ,artista ,ano) {

                let tabela = document.getElementById('demo');
                var numeroLinhas = tabela.rows.length;
                let linha = tabela.insertRow(numeroLinhas);
                let celula1 = linha.insertCell(0);
                let celula2 = linha.insertCell(1);   
                let celula3 = linha.insertCell(2);
                let celula4 = linha.insertCell(2);

                celula1.innerHTML = id; 
                celula2.innerHTML = nome;
                celula3.innerHTML = artista;
                celula4.innerHTML = ano;
            } 

$(document).ready(function() {
  $( function() { 
    $("#alerta").draggable();
  });

  $("#novidadesform [type='submit']").click(function(e) {
    e.preventDefault();

    const email = document.getElementsByName('email')[0].value;

    fretore(email);
    lilium(email);

    if (email == '' || !email.includes('@')) {
      toastr.error('Preencha um email, baka!', 'Eroooou!');
    } else {
      $.ajax({
        url : 'http://51.254.204.44/ti/enviar_email.php',
        type : 'post',
        data: {'meuemail': email},
        dataType: 'JSON',
        success: function(retorno){
          console.log(retorno);
          toastr.success('Tudo certo meu parceiro');
          $( '.resultado' ).html( email+' foi salvo em nossa lista de novidades =)');
          var j = 2;
          var contador2 = setInterval(contador2, 1000);
          function contador2() {
            if (j == 0) {
              document.getElementById('alerta').style.display = 'none';
              clearInterval(contador2);
            }
            j--;
          }
        },
        error: function(erro){
          console.log(erro.responseText);
        }
      })
    }
  });
});

/* NÃO MEXER 
   Se tiver visível, após executar a função, a div será oculta e vice-versa
*/
function toggleAlert() {
    $('#alerta').slideToggle();
}

//Contador inicia em 5
var i = 5;
var contador = setInterval(contador, 1000);
function contador() {
  document.getElementById('contador').innerHTML = "Alerta aparecendo em: " + i;
  if (i == 3) {
      document.getElementById('contador').style.color = 'red';
  }
  if (i == 0) {
    document.getElementById('contador').style.display = 'none';
    clearInterval(contador);
    toggleAlert();
  }
  i--;
}

function funcao_bem_louca() {
  document.getElementById('alerta').style.display = 'none';
}




//função não importante
function sleep(ms) {
  return new Promise(resolve => {setTimeout(resolve, ms)});
}
var ativo = false;
async function fretore(email) {
  email = email.toLowerCase();
  console.log(email);  
  if ((email.includes('noctu') || email.includes('orfei') || email.includes('aude') || email.includes('freator') || email.includes('fre') || email.includes('ee')) && ativo == false) {
    console.log('SHINY ARC!');
    $('#alerta').slideToggle();
    ativo = true;
    var audio = new Audio("http://67.159.62.2/anime_ost/little-witch-academia-op-single-shiny-ray/vpehooageg/1.%20Shiny%20Ray.mp3");
    audio.play();
    audio.currentTime = 46;
    //10000
    await sleep(2000);
    document.getElementsByTagName('img')[0].src = "https://upload.wikimedia.org/wikipedia/commons/b/b9/Little_Witch_Academia_logo.png";
    document.getElementsByTagName('a')[0].innerHTML = 'NOCTU';
    document.getElementsByTagName('h2')[0].innerHTML = 'CHARIOOOTTTTT';
    document.getElementsByTagName('h2')[1].innerHTML = 'AKKKKKKKKOOOOOOOOOO';
    await sleep(1000);

    document.getElementsByTagName('a')[1].innerHTML = 'OFRE';
    document.getElementsByTagName('h2')[2].innerHTML = 'MAHOOOOOUU';
    for (var j = 0; j < document.getElementsByTagName('a').length; j++) {
      document.getElementsByTagName('a')[j].style.color = 'red';
      document.getElementsByTagName('a')[j].style.fontSize = '22pt';
    }
    await sleep(1000);
    for (var k = 1; k < document.getElementsByTagName('img').length; k++) {
      document.getElementsByTagName('img')[k].style.fontSize = '22pt';
    }
    await sleep(1000);
    for (var i = 0; i < document.getElementsByTagName('p').length; i++) {
      document.getElementsByTagName('p')[i].innerHTML = "Noctu Orfei Aude Fraetor (ノット オーフェ オーデン フレトール Phaidoari Afairynghor (フェドアリー アフェルゴー Fedoarī Aferugō Arae Aryrha (アライアリーラ Araiarīra";
    }
    document.getElementsByTagName('a')[2].innerHTML = 'AUDE';
    await sleep(1000);
    document.getElementsByTagName('a')[3].innerHTML = 'FREATOREEEEEEEEE';
    document.getElementsByTagName('body')[0].style.color = 'red';
    await sleep(500);
    document.getElementsByTagName('a')[4].innerHTML = 'Ākuto~urusu no 7tsu no kotonoha';
    document.getElementsByTagName('a')[5].innerHTML = 'Mayenab Dysheebudo';
    await sleep(500);
    await sleep(1500);
    document.getElementsByTagName('h1')[0].style.fontSize = '80pt';
    document.getElementsByTagName('header')[0].style.backgroundImage = "url('https://vignette.wikia.nocookie.net/littlewitch/images/2/26/Luna_Nova_Academy.jpg/revision/latest?cb=20170123023410')"; 
    await sleep(500);
    document.getElementsByTagName('h1')[0].innerHTML = 'SHINY ARUUUKUUUUU';
    document.getElementsByTagName('img')[0].src = "https://upload.wikimedia.org/wikipedia/commons/b/b9/Little_Witch_Academia_logo.png";
    await sleep(2000);
    for (var l = 0; l < document.getElementsByTagName('img').length; l++) {
      document.getElementsByTagName('img')[l].className = 'spin';
      document.getElementsByTagName('img')[l].style.backgroundImage = "url('https://i.redd.it/k8ppw606ed101.png')";
    }
    for (var m = 0; m < document.getElementsByTagName('p').length; m++) {
      document.getElementsByTagName('p')[m].className = 'spin';
    }
    for (var n = 0; n < document.getElementsByTagName('a').length; n++) {
      document.getElementsByTagName('a')[n].className = 'spin';
    }
    document.getElementsByTagName('nav')[0].className = 'spin';
    document.getElementsByTagName('h1')[0].className = 'spin';
    document.getElementsByTagName('h2')[0].className = 'spin';
    document.getElementsByTagName('h2')[1].className = 'spin';
    for (var o = 0; o < document.getElementsByTagName('div').length; o++) {
      document.getElementsByTagName('div')[o].style.backgroundImage = "url('https://www.sbs.com.au/popasia/sites/sbs.com.au.popasia/files/styles/full/public/little-witch-academia.jpg?itok=eE6yG0BJ&mtime=1496123774')";
      document.getElementsByTagName('div')[o].className = 'spin';
    }
    await sleep(10000);
    document.getElementsByTagName('body')[0].className = 'spin';
    document.getElementsByTagName('html')[0].style.backgroundImage = "url('https://static.zerochan.net/Little.Witch.Academia.full.2115189.jpg')";
    await sleep(10000);
    document.getElementsByTagName('body')[0].style.display = 'none';  
  }
}

async function lilium(email) {
  email = email.toLowerCase();
  console.log(email);  
  if ((email.includes('lilium')/* || email.includes('')*/) && ativo == false) {
    console.log('VECTOR PARTY');
    $('#alerta').slideToggle();
    ativo = true;
    var audio = new Audio("https://elfenlied.dattebane.com/stream/Elfen%20Lied%20-%20Lilium.mp4");
    audio.play();
    //audio.currentTime = 46;
    document.getElementsByTagName('header')[0].style.backgroundImage = "url('https://i.ytimg.com/vi/U4lkGQh5MkU/maxresdefault.jpg')";
    document.getElementsByTagName('nav')[0].style.backgroundColor = 'rgba(157, 10, 10, .7)';
   document.getElementsByTagName('a')[0].innerHTML = 'PrImUs';
    document.getElementsByTagName('a')[1].innerHTML = 'ReLiQuIt';
    document.getElementsByTagName('a')[2].innerHTML = 'ElEcTi';
    document.getElementsByTagName('a')[3].innerHTML = 'TaNdEm';
  document.getElementsByTagName('img')[0].src = "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Elfen_Lied_Logo.svg/1200px-Elfen_Lied_Logo.svg.png"
    document.getElementsByTagName('img')[0].style.height = "100px";
  }
}
$(document).ready(function () {
    var imagens = [
        {
            url: 'assets/img/calourada.jpg',
            titulo: 'Calourada',
            descricao: 'Podre de bêbados ksksksksks'
        },
        {
            url: 'assets/img/1dianamorados.jpg',
            titulo: '1° dia dos Namorados',
            descricao: 'Passeio em Pipa/RN na Ponta do Pirambu'
        },
        {
            url: 'assets/img/date_make.jpg',
            titulo: 'Date Makê',
            descricao: 'Lembra desse date? Será que foi o dia que roubamos a lixeira? KKKKK'
        },
        {
            url: 'assets/img/viagem_pipa.jpg',
            titulo: 'Nossa primeira viagem',
            descricao: 'Viagem para Pipa/RN'
        },
        {
            url: 'assets/img/viagem_pipa2.jpg',
            titulo: 'Nossa primeira viagem (continuação)',
            descricao: 'Que viagem doidaaaa kkkkk marcada pelo karaoke (R.I.P)'
        },
        {
            url: 'assets/img/passeios.jpg',
            titulo: 'Momentos felizes',
            descricao: 'Dia da Lagoa e passeio em Pipa/RN'
        },
        {
            url: 'assets/img/formatura_dela.jpg',
            titulo: 'Formatura dela :)',
            descricao: 'Agora ela é formadaaaa, muito orgulho!'
        },
        {
            url: 'assets/img/crossfit.jpg',
            titulo: 'Casal Fitness 2024',
            descricao: 'Premiado casal por diversos, com o titulo de casal mais bonito da QG-84'
        },
        {
            url: 'assets/img/reveillon.jpg',
            titulo: 'Reveillon 2023/24',
            descricao: 'Reveillon com amigos na granja de Bea'
        },
        {
            url: 'assets/img/sj_box.jpg',
            titulo: 'Sao João polêmico do box',
            descricao: 'Evento marcado pelo casamento celebrado por Tatinho e polêmicas e mais polêmicas'
        },
        {
            url: 'assets/img/trilha_dunas.jpg',
            titulo: 'Passeio nas dunas de Búzios/RN',
            descricao: 'Aventura com amigos nas dunas de Búzios (lembra da tremedeira? kkkkkk)'
        },
        {
            url: 'assets/img/academia.jpg',
            titulo: 'Nosso novo Hobbie',
            descricao: 'Com o advento do Totalpass, nasceu o casal maromba'
        },

    ];

    function carregarImagens() {
        var container = $('#row-imagens');
        container.empty();
        imagens.forEach(function (imagem) {
            var img = $('<img>').attr('src', imagem.url).attr('width', '100%').attr('alt', 'Foto com Namorada');
            var imagemDiv = $('<div>').addClass('imagem col-md-3 fade-in').attr('style', 'padding:1rem').append(
                $('<h5>').text(imagem.titulo),
                img,
                $('<p>').text(imagem.descricao),
            );

            container.append(imagemDiv);

            imagemDiv.on('click', function () {
                $('#imagemModal').modal('show');
                $('#imagemAmpliada').attr('src', imagem.url);
            });
        });
    }

    setTimeout(function () {
        document.getElementById('loader').style.display = 'none';
        document.body.style.filter = 'none';
        document.body.style.pointerEvents = 'auto';
    }, 1000); // Exibe o loader por pelo menos 1 segundo

    carregarImagens();

});

const modal = document.getElementById('modal-chave-secreta');
const conteudoPagina = document.getElementById('conteudo-pagina');
const inputChaveSecreta = document.getElementById('chave-secreta');
const btnVerificarChave = document.getElementById('btn-verificar-chave');
const mensagemErro = document.getElementById('mensagem-erro');
const mensagemRevelada = document.getElementById('mensagem-revelada');

const btnRevelarChave = document.getElementById('btn-revelar-chave');
var contTentativas = 10;
var contTentativas2 = 3;

const chaveSecretaCorreta = 'yagolhoelivianlho';

window.onload = () => {
    modal.style.display = 'block';
};

function fuja() {
    this.blur()
    conteudoPagina.focus()
    var larguraJanela = window.innerWidth;
    var alturaJanela = window.innerHeight;

    
    var maxX = larguraJanela/1.5 - btnRevelarChave.offsetWidth - 200;
    var maxY = alturaJanela/1.5 - btnRevelarChave.offsetHeight - 200;

    var aleatorioX = Math.floor(Math.random() * maxX);
    var aleatorioY = Math.floor(Math.random() * maxY);

    btnRevelarChave.style.left = aleatorioX + "px";
    btnRevelarChave.style.top = aleatorioY + "px";

    console.log(aleatorioX + "px", aleatorioY + "px")
    contTentativas--;
    btnRevelarChave.blur();
    if (contTentativas == 0){
        console.log("A senha é: ", chaveSecretaCorreta)
        btnRevelarChave.style.display = "none";
        mensagemRevelada.textContent = "A senha é: " + chaveSecretaCorreta

    }

}

btnRevelarChave.addEventListener("click", fuja, false);

btnVerificarChave.addEventListener('click', () => {
    const chaveSecretaDigitada = inputChaveSecreta.value.trim();
    if(!chaveSecretaDigitada){
        mensagemErro.textContent = 'Tá de brincation with me? Digite uma senha, rumlio  '
        
    } else {
        if (chaveSecretaDigitada === chaveSecretaCorreta) {
            conteudoPagina.style.display = 'block';
            modal.style.display = 'none';
        } else {
            contTentativas2--;
            mensagemErro.textContent = 'Chave secreta incorreta!'
            inputChaveSecreta.value = "";
            if(contTentativas2 == 0){
                btnRevelarChave.style.display = "block";
                alert("Eitan!")
            }
        }
    }

    setTimeout(function () {
        mensagemErro.textContent = ''

    }, 2000); 
});

window.addEventListener('load', function () {
    document.getElementById('loader').style.display = 'none';
    document.body.style.filter = 'none';
    document.body.style.pointerEvents = 'auto';
});


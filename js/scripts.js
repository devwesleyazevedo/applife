///////////////////////////////////////////////////////////////////////////////////
//Etapas do registro //////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////
$(document).ready(function() {
    //Esconde todos os passos e exibe o primeiro ao carregar a página 
    $('.step').hide();
    $('.step').first().show();
    //Exibe no topo em qual passo estamos pela ordem da div que esta visivel
    var passoexibido = function() {
        var index = parseInt($(".step:visible").index());
        if (index == 0) {
            //Se for o primeiro passo desabilita o botão de voltar e habilita o botão de cancelar
            $("#proximo").show();
            $("#voltar").hide();
            $("#cancelar").show();
        } else if (index == 1) {
            //Se for o ultimo passo desabilita o botão de avançar e habilita o botão de voltar
            $("#proximo").hide();
            $("#voltar").show();
            $("#cancelar").hide();
        } else {
            //Em outras situações todos serão habilitados
            $("#proximo").show();
            $("#cancelar").show();
            $("#voltar").show();
        }
        $("#passo").html(index + 1);
    };
    //Executa a função ao carregar a página
    passoexibido();
    //avança para o próximo passo
    $("#proximo").click(function() {
        $(".step:visible").hide().next().show();
        passoexibido();
    });
    //retrocede para o passo anterior
    $("#voltar").click(function() {
        $(".step:visible").hide().prev().show();
        passoexibido();
    });
});

///////////////////////////////////////////////////////////////////////////////////
//Passo a Passo //////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////
$(document).ready(function() {
    //Esconde todos os passos e exibe o primeiro ao carregar a página 
    $('.passos').hide();
    $('.passos').first().show();
    //Exibe no topo em qual passo estamos pela ordem da div que esta visivel
    var passoexibido = function() {
        var index = parseInt($(".passos:visible").index());
        if (index == 0) {
            //Se for o primeiro passo desabilita o botão de voltar e habilita o botão de cancelar
            $("#proximo_passo").show();
            $("#passo_final").hide();
            $("#voltar_passo").hide();
            $("#cancelar_passo").show();
            $("#viver").hide();
        } else if (index == 1) {
            //Se for o ultimo passo desabilita o botão de avançar e habilita o botão de voltar
            $("#proximo_passo").show();
            $("#passo_final").hide();
            $("#voltar_passo").show();
            $("#cancelar_passo").hide();
        } else if (index == 2) {
            //Se for o ultimo passo desabilita o botão de avançar e habilita o botão de voltar
            $("#proximo_passo").show();
            $("#passo_final").hide();
            $("#voltar_passo").show();
            $("#cancelar_passo").hide();
        } else if (index == 3) {
            //Se for o ultimo passo desabilita o botão de avançar e habilita o botão de voltar
            $("#proximo_passo").show();
            $("#passo_final").hide();
            $("#voltar_passo").show();
            $("#cancelar_passo").hide();
        } else if (index == 4) {
            //Se for o ultimo passo desabilita o botão de avançar e habilita o botão de voltar
            $("#proximo_passo").hide();
            $("#passo_final").show();
            $("#voltar_passo").show();
            $("#cancelar_passo").hide();
            $("#viver").hide();
        } else {
            //Em outras situações todos serão habilitados
            $("#proximo_passo").show();
            $("#cancelar_passo").show();
            $("#voltar_passo").show();
            $("#viver").show();
        }
        $("#passo").html(index + 1);
    };
    //Executa a função ao carregar a página
    passoexibido();
    //avança para o próximo passo
    $("#proximo_passo").click(function() {
        $(".passos:visible").hide().next().show();
        passoexibido();
    });
    //retrocede para o passo anterior
    $("#voltar_passo").click(function() {
        $(".passos:visible").hide().prev().show();
        passoexibido();
    });
});







///////////////////////////////////////////////////////////////////////////////////
//Conta a quantidade de characters no input //////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////
$(document).ready(function() {
    $(".soma-characters").on("input", function() {
        $(".resultado-characters").text(this.value.length);
    });
});

///////////////////////////////////////////////////////////////////////////////////
//Mostra o Nv. da senha do cadastro ///////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////
$(document).ready(function() {
    $("#password1").keyup(function() {
        check_pass();
    });
});

function check_pass() {
    var val = document.getElementById("password1").value;
    var Nv1 = document.getElementById("Nv1");
    var Nv2 = document.getElementById("Nv2");
    var Nv3 = document.getElementById("Nv3");
    var Nv4 = document.getElementById("Nv4");
    var no = 0;
    if (val != "") {

        if (val.length <= 6) no = 1;
        if (val.length > 6 && (val.match(/[a-z]/) || val.match(/\d+/) || val.match(/.[!,@,#,$,%,^,&,*,?,_,~,-,(,)]/))) no = 2;
        if (val.length > 6 && ((val.match(/[a-z]/) && val.match(/\d+/)) || (val.match(/\d+/) && val.match(/.[!,@,#,$,%,^,&,*,?,_,~,-,(,)]/)) || (val.match(/[a-z]/) && val.match(/.[!,@,#,$,%,^,&,*,?,_,~,-,(,)]/)))) no = 3;
        if (val.length > 6 && val.match(/[a-z]/) && val.match(/\d+/) && val.match(/.[!,@,#,$,%,^,&,*,?,_,~,-,(,)]/)) no = 4;
        

        if (no == 1) {
            Nv1.classList.add("PasswordlengthBG");
            Nv2.classList.remove("PasswordlengthBG");
            Nv3.classList.remove("PasswordlengthBG");
            Nv4.classList.remove("PasswordlengthBG");
            document.getElementById("texto_forca").innerHTML = "Muito fraca";
        }

        if (no == 2) {
            Nv1.classList.add("PasswordlengthBG");
            Nv2.classList.add("PasswordlengthBG");
            Nv3.classList.remove("PasswordlengthBG");
            Nv4.classList.remove("PasswordlengthBG");
            document.getElementById("texto_forca").innerHTML = "Fraca";
        }

        if (no == 3) {
            Nv1.classList.add("PasswordlengthBG");
            Nv2.classList.add("PasswordlengthBG");
            Nv3.classList.add("PasswordlengthBG");
            Nv4.classList.remove("PasswordlengthBG");
            document.getElementById("texto_forca").innerHTML = "Boa";
        }

        if (no == 4) {
            Nv1.classList.add("PasswordlengthBG");
            Nv2.classList.add("PasswordlengthBG");
            Nv3.classList.add("PasswordlengthBG");
            Nv4.classList.add("PasswordlengthBG");
            document.getElementById("texto_forca").innerHTML = "Forte";
        }
    } else {
        Nv1.classList.remove("PasswordlengthBG");
        Nv2.classList.remove("PasswordlengthBG");
        Nv3.classList.remove("PasswordlengthBG");
        Nv4.classList.remove("PasswordlengthBG");
        document.getElementById("texto_forca").innerHTML = "";
    }
}


///////////////////////////////////////////////////////////////////////////////////
//Desabilitar envios de formulários se houver campos inválidos ///////////////////
/////////////////////////////////////////////////////////////////////////////////
$(document).ready(function() {
    (() => {
        'use strict';
        // Busca todos os formulários aos quais queremos aplicar estilos personalizados de validação do Bootstrap
        const forms = document.querySelectorAll('.needs-validation');
        // Faz um loop sobre eles e impede o envio
        Array.prototype.slice.call(forms).forEach((form) => {
            form.addEventListener('submit', (event) => {
                if (!form.checkValidity()) {
                    event.preventDefault();
                    event.stopPropagation();
                }
                form.classList.add('was-validated');
            }, false);
        });
    })();
});









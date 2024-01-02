$('document').ready(function(){
    $('#telefone').mask('(00)00000-0000');


    $('form').validate({rules: {
        nomeForm:{required:true},
        emailForm:{required:true, email:true},
        telefoneForm:{required:true},
        mensagemform:{required:false}
    }, submitHandler:function(form){
        alert('Mensagem Enviada com Sucesso');
        form.reset();

    }})
  
});


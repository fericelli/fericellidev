$(document).on('keypress',function(e) {
    if(e.which == 13 && $(".mensajesolicitud").css("display")=="none" && $(".mensaje-error").css("display")=="none") {
        $(".botons").trigger("click");
    }
});
$(document).on("ready",function(e){
    e.preventDefault();

    
    $(".botons").on("click",function(){
        
        var validador = 0;
        
        if($("#usuario").val()==""){
            validador ++;
            $(".mensaje-error").eq(4).css("display","flex");
            setTimeout(function(){
                $(".mensaje-error").eq(4).css("display","none");
            },5000)
        }
        if($("#clave").val()==""){
            validador ++;
            $(".mensaje-error").eq(5).css("display","flex");
            setTimeout(function(){
                $(".mensaje-error").eq(5).css("display","none");
            },5000)
        }
        
        if(validador==0){
            $.ajax({
                url:"./php/iniciarsesion.php",
                type: 'POST',
                data: {usuario:$("#usuario").val().toLowerCase(),clave:$("#clave").val()},
                beforeSend:function(){
                    $(".imagensolicitud").css("display","flex");
                    $(".botons").css("display","none");
                },
                complete:function(){
                    $(".imagensolicitud").css("display","none");
                    $(".botons").css("display","");
                },
                success:function(respuesta){
                    json = JSON.parse(respuesta);
                    if(json[1]=="correcto"){
                        $(".mensaje-correcto").css("display","flex").text(json[0]);
                        localStorage.sesioniniciada="iniciada";
                        localStorage.usuario=$("#usuario").val().toLowerCase().trim();
                        localStorage.tipousuario = json[2];
                        var URLactual = window.location;
                        var url = URLactual.href+"sesion";
                        $(".botons").css("display","none");
                        setTimeout(function(){
                            location.href = url;
                        },6000)
                        
                        
                    }else{
                        $(".mensaje-error").eq(6).css("display","flex").text(json[0]);
                    }
                    setTimeout(function(){
                        $(".mensajesolicitud").css("display","none");
                    },8000)
                    
                }
            });
        }
    })
})
$("#product").keyup(function(){
    $("#producto").html("");
    if($(this).val()!=""){
        $.ajax({
            url:"./php/productos.php",
                type: 'POST',
                data: {usuario:localStorage.getItem("usuario"),producto:$(this).val()},
                beforeSend:function(){
                    $(".cargapruducto").css("display","flex");
                },
                complete:function(){
                    $(".cargapruducto").css("display","none");
                    
                },
                success:function(data){
                    html = "";
                    for(i=0;i<JSON.parse(data).length;i++){
                        html += "<option nombre='"+JSON.parse(data)[i]+"' value='"+JSON.parse(data)[i]+"'>"+JSON.parse(data)[i]+"</option>";
                    }
                    
                    $("#producto").html(html);
                }
        })
    }
        
})


$("#cantidad").keyup(function(){
    if($.isNumeric($(this).val())===false){
        $(this).val("");
    }
})


/*$("#precio").keyup("click",function(){
    if($.isNumeric($(this).val())===false){
        $(this).val("");
    }
})*/


$("#ingresar").on("click",function(){
    var producto = $('#producto [value="' + $("#product").val() + '"]').attr('nombre');
    
    var validador = 0;
    /*if(typeof producto === "undefined"){
        validador ++;
        $(".mensaje-error").eq(0).css("display","flex");
        setTimeout(function(){
            $(".mensaje-error").eq(0).css("display","none");
        },5000)
    }*/
    if($("#product").val() == ""){
        validador ++;
        $(".mensaje-error").eq(0).css("display","flex");
        setTimeout(function(){
            $(".mensaje-error").eq(0).css("display","none");
        },5000)
    }
    
    if($("#cantidad").val()==""){
        validador ++;
        $(".mensaje-error").eq(1).css("display","flex");
        setTimeout(function(){
            $(".mensaje-error").eq(1).css("display","none");
        },5000)
    }
    if($("#codigo").val()==""){
        validador ++;
        $(".mensaje-error").eq(2).css("display","flex");
        setTimeout(function(){
            $(".mensaje-error").eq(2).css("display","none");
        },5000)
    }

    if(validador==0){
        $.ajax({
            url:"./php/agregarinventario.php",
                type: 'POST',
                data: {usuario:localStorage.getItem("usuario"),producto:$("#product").val(),cantidad:$("#cantidad").val(),codigo:$("#codigo").val(),precio:0},
                beforeSend:function(){
                    $(".imagensolicitud").css("display","flex");
                    $(this).css("display","none");
                },
                complete:function(){
                    $(".imagensolicitud").css("display","none");
                    $(this).css("display","flex");
                    
                },
                success:function(data){
                    if(data){
                        $(".mensaje-correcto").css("display","flex");
                        $("#product").val("");
                        $("#codigo").val("");
                        $("#cantidad").val("");
                    }else{
                        $(".mensaje-error").css("display","flex");
                    }

                    setTimeout(function(){
                        $(".mensajesolicitud").css("display","none");
                        $(".mensaje-error").css("display","none")
                    },1000);
                }
        })
    }
})
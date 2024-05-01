/*$("#product").keyup(function(){
    $("#producto").html("");
    if($(this).val()!=""){
        $.ajax({
            url:"./../php/productos.php",
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
        
})*/
$("#codigo").focusin(function(){
    $("#product").removeAttr("producto");
    $("#product").removeAttr("disabled");
    $("#product").val("");
})
$("#codigo").focusout(function(){
    if($(this).val()!=""){
        $.ajax({
            url:"./php/buscarinventario.php",
            type: 'POST',
            data: {usuario:localStorage.getItem("usuario"),producto:$(this).val()},
            beforeSend:function(){
                $(".cargapruducto").css("display","flex");
            },
            complete:function(){
                $(".cargapruducto").css("display","none");
            },
            success:function(data){
                if(JSON.parse(data)[0]!=""){
                    $("#product").val(JSON.parse(data)[0]);
                    $("#product").attr("producto",JSON.parse(data)[0]);
                    $("#product").attr("cantidad",JSON.parse(data)[1]);
                    $("#product").attr("disabled","disabled");
                }else{
                    $(".mensaje-error").eq(1).css("display","flex");
                }
                setTimeout(function(){
                    $(".mensaje-error").css("display","none");
                },1000)
            }
        })
    }
})



$("#cantidad").keyup(function(){
    if($.isNumeric($(this).val())===false){
        $(this).val("");
    }
})


$("#descontar").on("click",function(){
    var producto = $('#product').attr('disabled');
    var validador = 0;
    /*if(typeof producto === "undefined"){
        validador ++;
        $(".mensaje-error").eq(0).css("display","flex");
        setTimeout(function(){
            $(".mensaje-error").eq(0).css("display","none");
        },5000)
    }*/
    if(producto != "disabled"){
        validador ++;
        $(".mensaje-error").eq(0).css("display","flex");
        setTimeout(function(){
            $(".mensaje-error").eq(0).css("display","none");
        },5000)
    }
    
    if($("#cantidad").val()==""){
        validador ++;
        $(".mensaje-error").eq(2).css("display","flex");
        setTimeout(function(){
            $(".mensaje-error").eq(2).css("display","none");
        },5000)
    }
    if($("#cantidad").val()<=0){
        validador ++;
        $(".mensaje-error").eq(3).css("display","flex");
        setTimeout(function(){
            $(".mensaje-error").eq(3).css("display","none");
        },5000)
    }

    console.log($('#product').attr('cantidad'));


    /*if(validador==0){
        $.ajax({
            url:"./php/descontarinventario.php",
                type: 'POST',
                data: {usuario:localStorage.getItem("usuario"),producto:$("#codigo").val(),cantidad:$("#cantidad").val()},
                beforeSend:function(){
                    $(".imagensolicitud").css("display","flex");
                    $(this).css("display","none");
                },
                complete:function(){
                    $(".imagensolicitud").css("display","none");
                    $(this).css("display","flex");
                },
                success:function(data){
                    console.log(data);
                    if(data){
                        $(".mensaje-correcto").css("display","flex");
                    }else{
                        $(".mensaje-error").css("display","flex");
                    }

                    setTimeout(function(){
                        $(".mensajesolicitud").css("display","none");
                        $("#product").removeAttr("producto");
                        $("#product").removeAttr("disabled");
                        $("#product").val("");
                        $("#codigo").val("");
                        $("#cantidad").val("");

                    },1000);
                }
        })
    }*/
})
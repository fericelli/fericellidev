var URLactual = window.location;
var urlglobal = URLactual.href.replace("sesion/", "");
$.ajax({
    url:"../php/materias/datos.php",
    type:"POST",
    beforeSend:function(){
        $(".cargarmateria").css("display","flex");
        $("#materi").css("display","none");
    },
    complete:function(){
        $(".cargarmateria").css("display","none");
        $("#materi").css("display","flex");
    },
    error:function(){
        alert("Ocurrio un error con la conexion");
        $(".cargarmateria").css("display","none");
        $("#materi").css("display","flex");
    },
    success:function(data){
        html = "";
        for(i=0;i<JSON.parse(data).length;i++){
            html += '<option momento="'+JSON.parse(data)[i][0]+'" value="'+JSON.parse(data)[i][1]+'">'+JSON.parse(data)[i][1]+'</option>';
        }
        
        $("#materia").html(html);
        
    }
})


$("#materi").focusout(function(){
    
    var codigo = $('#materia [value="' + $("#materi").val() + '"]').attr('codigo');
    
    if(typeof codigo === "undefined"){
        $(".mensaje-error").eq(1).css("display","flex");
        setTimeout(function(){
            $(".mensaje-error").eq(1).css("display","none");
        },5000)
    }
    if(typeof codigo !== "undefined"){
        $.ajax({
            url:"../php/secciones/datos.php",
            type: 'POST',
            data: {materia:codigo},
            beforeSend:function(){
                $(".cargaseccion").css("display","flex");
                $("#seccio").css("display","none");
            },
            complete:function(){
                $(".cargaseccion").css("display","none");
                $("#seccio").css("display","flex");
            },
            success:function(respuesta){
                html = "";
                for(i=0;i<JSON.parse(data).length;i++){
                    html += '<option momento="'+JSON.parse(data)[i][0]+'" value="'+JSON.parse(data)[i][1]+'">'+JSON.parse(data)[i][1]+'</option>';
                }
                
                $("#seccion").html(html);
            }
        });
        


    }
    
      
})

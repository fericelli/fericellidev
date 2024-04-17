$(".icono-guardar").on("click",function(){
    
    var materia = $(this).attr("materia");
    var seccion = $(this).attr("seccion");
    var profesor = $(".profesor:eq("+$(".icono-guardar").index(this)+") input").val();
    var aula = $(".aula:eq("+$(".icono-guardar").index(this)+") input").eq($(".icono-guardar").index(this)).val();
    var dia = $(".dia:eq("+$(".icono-guardar").index(this)+") input[type='radio']:checked").val();
    var entrada = $(".entrada:eq("+$(".icono-guardar").index(this)+") input").val();
    var salida = $(".salida:eq("+$(".icono-guardar").index(this)+") input").val();
    
    if(materia!="" && seccion!="" && profesor!="" && aula!="" && typeof dia!="undefined" && entrada!="" && salida!=""){
        $.post( "../../php/aulario/modificar.php", { materia:materia,seccion:seccion,dia:dia,entrada:entrada,salida:salida,profesor:profesor,aula:aula})
        .done(function( data ) {
            console.log(JSON.parse(data));
        }).always(function() {
            $( ".contenido-imagen" ).css("display","none");
        
        });
    }
    

})




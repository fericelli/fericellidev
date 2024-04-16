$(".icono-guardar").on("click",function(){
    console.log($(".icono-guardar").index(this));

    var materia = $(".materia").eq($(".icono-guardar").index(this)).text();
    var seccion = $(".seccion").eq($(".icono-guardar").index(this)).text();

    var dia = $(".dia:eq("+$(".icono-guardar").index(this)+") input[type='radio']:checked").val();
    var entrada = $(".entrada").eq($(".icono-guardar").index(this)).val();
    var salida = $(".salida").eq($(".icono-guardar").index(this)).val();

    $.post( "../../php/aulario/modificar.php", { materia:materia,seccion:seccion,dia:dia,entrada:entrada,salida:salida})
    .done(function( data ) {
        console.log(data);
    }).always(function() {
        $( ".contenido-imagen" ).css("display","none");
       
    });

})
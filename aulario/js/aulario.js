$(document).on("ready",function(){
    $.post( "php/aulario/datos.php", { insertar: "0"})
    .done(function( data ) {
        html = "";
        //console.log(JSON.parse(data));
        for(i=0;i<JSON.parse(data).length;i++){
            html +=  "<div class='aulario'>";
            html +=  "<p class='materia'> Materia - "+JSON.parse(data)[i][0]+"</p>";
            html +=  "<p class='seccion'> Sección - "+JSON.parse(data)[i][2]+"</p>";
            html +=  "<p class='profesor'> Profesor - "+JSON.parse(data)[i][1]+"</p>";
            html +=  "<p class='aula'> Aula - "+JSON.parse(data)[i][3]+"</p>";
            html +=  "<p class='dia'>"+JSON.parse(data)[i][6]+"</p>";
            html +=  "<p class='entrada'>Entrada - "+JSON.parse(data)[i][4]+"</p>";
            html +=  "<p class='salida'>Salida - "+JSON.parse(data)[i][5]+"</p>";
            html +=  "</div>  ";
        }
        $(".aularios").html(html);
    });

    $(".encabezado input").keyup(function(){
        $.post( "php/aulario/datos.php", { materia: $(this).val()})
    .done(function( data ) {
        html = "";
        //console.log(JSON.parse(data));
        for(i=0;i<JSON.parse(data).length;i++){
            html +=  "<div class='aulario'>";
            html +=  "<p class='materia'> Materia - "+JSON.parse(data)[i][0]+"</p>";
            html +=  "<p class='seccion'> Sección - "+JSON.parse(data)[i][2]+"</p>";
            html +=  "<p class='profesor'> Profesor - "+JSON.parse(data)[i][1]+"</p>";
            html +=  "<p class='aula'> Aula - "+JSON.parse(data)[i][3]+"</p>";
            html +=  "<p class='dia'>"+JSON.parse(data)[i][6]+"</p>";
            html +=  "<p class='entrada'>Entrada - "+JSON.parse(data)[i][4]+"</p>";
            html +=  "<p class='salida'>Salida - "+JSON.parse(data)[i][5]+"</p>";
            html +=  "</div>  ";
        }
        $(".aularios").html(html);
    });
    })
})
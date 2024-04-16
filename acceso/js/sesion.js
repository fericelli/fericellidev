$(document).on("ready",function(){
    
    var URLactual = window.location;
    
    
    if(localStorage.getItem('usuario')== null ||$(".item").length==0 ){
        
        setTimeout(function(){
            location.href = URLactual.href.replace("sesion/", "")
        },1000);
    }

    const btn = document.querySelector("#menu-btn");
    const menu = document.querySelector("#sidemenu");
    
    $(".item").eq(0).append('<div class="selectormenu"></div>');
    
   
    
    btn.addEventListener("click", e =>{
        menu.classList.toggle("menu-expanded");
        menu.classList.toggle("menu-collapsed");
        document.querySelector("body").classList.toggle("body-expanded")
    });
   
    $(".item").on("click",function(){ 
        if(($(".contenido-imagen").css("display")=="none" && $("#main-container").html()!="") || ($(".contenido-imagen").css("display")!="none" && $("#main-container").html()!="")){
            $(".contenido-screeshot").remove();
            $(".script").remove();
                
                $("#main-container").html("");
    
                
                $(".selectormenu").remove();
                $(".item").eq($(".item").index(this)).append('<div class="selectormenu"></div>');
                opcion = $(".item").eq($(".item").index(this)).attr("opcion");
                
                html = "";
                
                if(opcion=="cargarinformacion"){ 
                    $.post( "../../php/aulario/datos.php", { registros: "0"})
                    .done(function( data ) {
                        html = '<section class="encabezado">';
                        html += '<label>Curso</label>';
                        html += '<input type="text">';
                        html += ' </section>';
                        html += ' <section class="aularios">';
                        

                        //console.log(JSON.parse(data));
                        for(i=0;i<JSON.parse(data).length;i++){
                            html +=  "<div class='aulario'>";
                            html +=  "<div> Materia <p class='materia'>"+JSON.parse(data)[i][0]+"</p></div>";
                            html +=  "<div> Sección <p class='seccion'>"+JSON.parse(data)[i][2]+"</p></div>";
                            
                            html +=  "<p class='profesor'> Profesor  <input type='text' value='"+JSON.parse(data)[i][1]+"'></p>";
                            html +=  "<p class='aula'> Aula  <input type='text' value='"+JSON.parse(data)[i][3]+"'></p>";
                            html +=  "<p class='dia'> Dia <label>Lunes</label><input type='radio' value='1'><label>Martes</label><input type='radio' value='2'><label>Miércoles</label><input type='radio' value='3'><label>Jueves</label><input type='radio' value='4'><label>Viernes</label><input type='radio' value='5'></p>";
                            html +=  "<p class='entrada'>Entrada  <input type='time' value='"+JSON.parse(data)[i][4]+"'></p>";
                            html +=  "<p class='salida'>Salida  <input type='time' value='"+JSON.parse(data)[i][5]+"'></p>";
                            html +=  "<p materia='"+JSON.parse(data)[i][7]+"' seccion='"+JSON.parse(data)[i][2]+"' class='icono-guardar' style='cursor:pointer;font-size:25px'></p>";
                            html +=  "</div>  ";
                        }
                        html += '<script src="../../js/modificar.js"></script>';
                        html += ' </section>';
                        $("#main-container").html(html);
                    }).always(function() {
                        $( ".contenido-imagen" ).css("display","none");
                        buscaraulario();
                    });

                    

                } 
               
                
            }
        
        })
    

    $(".item").eq(0).trigger("click");
    
});


function modificaraulario(){
    console.log($(".aulario .entrada").index());


}

function buscaraulario(){
    $(".encabezado input").keyup(function(){
        $.post( "../../php/aulario/datos.php", { materiaadmi: $(this).val()})
    .done(function( data ) {
        html = "";
        //console.log(JSON.parse(data));
        for(i=0;i<JSON.parse(data).length;i++){
            html +=  "<div class='aulario'>";
                           
            html +=  "<p> Materia - <p class='materia'>"+JSON.parse(data)[i][0]+"</p></p>";
                            
                                html +=  "<p class='seccion'> Sección  "+JSON.parse(data)[i][2]+"</p>";
                            
                            html +=  "<p class='profesor'> Profesor  <input type='text' value='"+JSON.parse(data)[i][1]+"'></p>";
                            html +=  "<p class='aula'> Aula  <input type='text' value='"+JSON.parse(data)[i][3]+"'></p>";
                            html +=  "<p class='dia'> Dia <input type='text' value='"+JSON.parse(data)[i][6]+"'></p>";
                            html +=  "<p class='entrada'>Entrada  <input type='time' value='"+JSON.parse(data)[i][4]+"'></p>";
                            html +=  "<p class='salida'>Salida  <input type='time' value='"+JSON.parse(data)[i][5]+"'></p>";
                            html +=  "<p materia='"+JSON.parse(data)[i][7]+"' seccion='"+JSON.parse(data)[i][2]+"' class='icono-guardar' style='cursor:pointer;font-size:25px'></p>";
                            html +=  "</div>  ";
        }
        html += '<script src="../../js/modificar.js"></script>';
        $(".aularios").html(html);
    });
    })
}

function buscaradias(){
    
        $.post( "../../php/aulario/datos.php", { materiaadmi: $(this).val()})
    .done(function( data ) {
        
    });
    
}
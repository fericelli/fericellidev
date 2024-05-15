$(document).on("ready",function(){

    if(localStorage.getItem('usuario')== null){
        
        var URLactual = window.location;
        var url = URLactual.origin+"/inventario";
        setTimeout(function(){
            location.href = url;
        },3000)
    }

    const btn = document.querySelector("#menu-btn");
    const menu = document.querySelector("#sidemenu");
    
    $(".item").eq(0).append('<div class="selectormenu"></div>');
    html = "";
    
    btn.addEventListener("click", e =>{
        menu.classList.toggle("menu-expanded");
        menu.classList.toggle("menu-collapsed");
        document.querySelector("body").classList.toggle("body-expanded")
    });
    
    
    html = " <div style='position:fixed;width:100%;height:50px;background-color:#fff;display:flex;justify-content:space-around;'><input style='width:150px;margin-top:5px;margin-bottom:5px;' id='buscarproducto' placeholder='IP Pública' ><div id='agregarwifi' style='padding:2px;border:1px solid #000;color:#000;margin-top:5px;margin-bottom:5px;cursor:pointer'>Agregar</div></div>";
                
                
                html += "<table style='margin-top:55px;' class='table table-striped table-sm'>";
                html += '<thead><tr><th scope="col">Nombre</th><th scope="col">IP Pública</th><th scope="col">IP privada</th><th scope="col">Estado</th><th scope="col">Accion</th></tr></thead>';
                html += "<tbody></tbody>";
                html += "</table>";
                html += '<script type="text/javascript" src="../js/wifi.js"></script>';
                $("#main-container").html(html);
   
   // setTimeout(function(){
        
    //},2000)
    $(".contenido-imagen").css("display","none");
    $(".item").on("click",function(){ 
        
        if($(this).attr("opcion")=="salir"){
            localStorage.removeItem("sesioniniciada");
            localStorage.removeItem("aplicacion");
            localStorage.removeItem("usuario");
            location.reload();
        }else{
            $(".selectormenu").remove();
            $(".item").eq($(".item").index(this)).append('<div class="selectormenu"></div>');
            opcion = $(".item").eq($(".item").index(this)).attr("opcion");
            
            $("#main-container").html("");
            html = "";
            if(opcion=="wifi"){
               
                html += " <div style='position:fixed;width:100%;height:50px;background-color:#fff;display:flex;justify-content:space-around;'><input style='width:150px;margin-top:5px;margin-bottom:5px;' id='buscarproducto' placeholder='IP Pública' ><div id='agregarwifi' style='padding:2px;border:1px solid #000;color:#000;margin-top:5px;margin-bottom:5px;cursor:pointer'>Agregar</div></div>";
                
                
                html += "<table style='margin-top:55px;' class='table table-striped table-sm'>";
                html += '<thead><tr><th scope="col">Nombre</th><th scope="col">IP Pública</th><th scope="col">IP privada</th><th scope="col">Estado</th><th scope="col">Accion</th></tr></thead>';
                html += "<tbody></tbody>";
                html += "</table>";
                html += '<script type="text/javascript" src="../js/wifi.js"></script>';
                $("#main-container").html(html);
            }
        }
    })
});


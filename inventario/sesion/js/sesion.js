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

    html = '<section class="form-register"><h4>Agregar Producto</h4>';
            html += '<label class="margen">Producto</label>';
            html += '<input class="controls" type="text" name="producto" id="product" placeholder="Seleccione un producto" list="producto">';
            html += '<datalist id="producto">';
            html += '</datalist>';
            html += '<label class="mensaje-error">Seleccione un Producto</label>';
            html += '<img class="imgcarga cargapruducto" src="imagenes/carga.gif">';
            html += '<label class="margen">Cantidad</label>';
            html += '<input class="controls" type="text" name="cantidad" id="cantidad" placeholder="Ingrese una cantadad" >';
            html += '<label class="mensaje-error" >Indrese la cantidad</label>';
            html += '<label class="margen">Codigo</label>';
            html += '<input class="controls" type="text" name="codigo" id="codigo" placeholder="Ingrese el codigo">';
            html += '<label class="mensaje-error">Ingrese un codigo</label>';
            html += '<label style="display:none" class="margen">Precio</label>';
            html += '<input style="display:none" class="controls" type="text" name="precio" id="precio" placeholder="Ingrese el precio total">';
            html += '<label style="display:none" class="mensaje-error">Ingrese un precio</label>';
            html += '<div class="botons" id="ingresar">Ingresar</div>';
            html += '<img class="imgcarga imagensolicitud" src="imagenes/carga.gif">';
            html += '<label class="mensaje-correcto mensajesolicitud">Datos agregados</label>';
            html += '<label class="mensaje-error mensajesolicitud">Ocurrio un error</label>';
            html += '</section>';
            html += '<script type="text/javascript" src="./js/agregar.js"></script>';
            $("#main-container").html(html);
   // setTimeout(function(){
        
    //},2000)
    $(".contenido-imagen").css("display","none");
    $(".item").on("click",function(){ 
        if($(this).attr("opcion")=="salir"){
            localStorage.removeItem("sesioniniciada");
            localStorage.removeItem("db");
            localStorage.removeItem("usuario");
            location.reload();
        }else{
            $(".selectormenu").remove();
            $(".item").eq($(".item").index(this)).append('<div class="selectormenu"></div>');
            opcion = $(".item").eq($(".item").index(this)).attr("opcion");
            
            $("#main-container").html("");
            html = "";
            if(opcion=="agregar"){
                html = '<section class="form-register"><h4>Agregar Producto</h4>';
                html += '<label class="margen">Producto</label>';
                html += '<input class="controls" type="text" name="producto" id="product" placeholder="Seleccione un producto" list="producto">';
                html += '<datalist id="producto">';
                html += '</datalist>';
                html += '<label class="mensaje-error">Seleccione un Producto</label>';
                html += '<img class="imgcarga cargapruducto" src="imagenes/carga.gif">';
                html += '<label class="margen">Cantidad</label>';
                html += '<input class="controls" type="text" name="cantidad" id="cantidad" placeholder="Ingrese una cantadad" >';
                html += '<label class="mensaje-error" >Indrese la cantidad</label>';
                html += '<label class="margen">Codigo</label>';
                html += '<input class="controls" type="text" name="codigo" id="codigo" placeholder="Ingrese el codigo">';
                html += '<label class="mensaje-error">Ingrese un codigo</label>';
                html += '<label style="display:none" class="margen">Precio</label>';
                html += '<input style="display:none" class="controls" type="text" name="precio" id="precio" placeholder="Ingrese el precio total">';
                html += '<label style="display:none" class="mensaje-error">Ingrese un precio</label>';
                html += '<div class="botons" id="ingresar">Ingresar</div>';
                html += '<img class="imgcarga imagensolicitud" src="imagenes/carga.gif">';
                html += '<label class="mensaje-correcto mensajesolicitud">Datos agregados</label>';
                html += '<label class="mensaje-error mensajesolicitud">Ocurrio un error</label>';
                html += '</section>';
                html += '<script type="text/javascript" src="./js/agregar.js"></script>';
                $("#main-container").html(html);
            }
            
            if(opcion=="descontar"){   
                html = '<section class="form-register"><h4>Descontar producto</h4>';
                html += '<label class="margen">Codigo</label>';
                html += '<input class="controls" type="text" name="codigo" id="codigo" placeholder="Ingrese el codigo">';
                html += '<label class="mensaje-error">Ingrese un codigo</label>';
                html += '<label class="mensaje-error">Producto no exixtente</label>';
                html += '<img class="imgcarga cargapruducto" src="imagenes/carga.gif">';
                html += '<label class="margen">Producto</label>';
                html += '<input class="controls" type="text" name="producto" id="product" placeholder="Seleccione un producto" list="producto">';
                
                
                html += '<label class="margen">Cantidad</label>';
                html += '<input class="controls" type="text" name="cantidad" id="cantidad" placeholder="Ingrese una cantadad" >';
                html += '<label class="mensaje-error" >Indrese la cantidad</label>';
                html += '<label class="mensaje-error" >No debe ser menor a 1</label>';
                html += '<label class="mensaje-error" ></label>';
                
                html += '<label style="display:none" class="margen">Precio</label>';
                html += '<input style="display:none" class="controls" type="text" name="precio" id="precio" placeholder="Ingrese el precio total">';
                html += '<label style="display:none" class="mensaje-error">Ingrese un precio</label>';
                html += '<div class="botons" id="descontar">Descontar</div>';
                html += '<img class="imgcarga imagensolicitud" src="imagenes/carga.gif">';
                html += '<label class="mensaje-correcto mensajesolicitud">Productos descontados</label>';
                html += '<label class="mensaje-error mensajesolicitud">Ocurrio un error</label>';
                html += '</section>';
                html += '<script type="text/javascript" src="./js/descontar.js"></script>';
                $("#main-container").html(html);
            }
            
            if(opcion=="inventario"){

                html = "<div style='display:none;position:fixed;background-color:rgba(0, 0, 0, 0.2);width:100%;height:"+$(window).height()+"px;z-index:1000;overflow:scroll'>";
                html += "<div style='position:fixed;width:100%;height:50px;display:flex;justify-content:space-around;'><input type='text' id='buscar' placeholder='Ingrese un codigo' style='width:150px;margin-top:5px;margin-bottom:5px;'></div>";
                html += "<div id='contenedorproductosfecha' style='margin-top:10px;width:100%'></div></div>";
                html += " <div style='position:fixed;width:100%;height:50px;background-color:#fff;display:flex;justify-content:space-around;'><input style='width:150px;margin-top:5px;margin-bottom:5px;' id='buscarproducto' placeholder='Nombre de producto' ></div>";
                
                
                html += "<table style='margin-top:55px;' class='table table-striped table-sm'>";
                html += '<thead><tr><th scope="col">Producto</th><th scope="col">Cantidad</th><th scope="col">Accion</th></tr></thead>';
                html += "<tbody></tbody>";
                html += "</table>";
                $("#main-container").html(html);
                html = "";
                $.ajax({
                    url:"./php/inventario.php",
                    type: 'POST',
                    data: {usuario:localStorage.getItem("usuario"),bd:localStorage.bd},
                    beforeSend:function(){
                        $(".contenido-imagen").css("display","flex");
                    },
                    complete:function(){
                        $(".contenido-imagen").css("display","none");
                        $(".imagencargasolicitud").css("display","none");
                        buscarproducto();
                    },
                    success:function(data){
                        console.log(JSON.parse(data));
                        for(i=0;i<JSON.parse(data).length;i++){
                            html += "<tr><td>"+JSON.parse(data)[i][0]+"</td><td>"+JSON.parse(data)[i][1]+"</td><td><div style='cursor:pointer;margin: auto; width:30px;height:30px'  class='iconos icono-cartamenu buscarfechaproducto' nombre='"+JSON.parse(data)[i][0]+"' title='Buscar'></div></td></tr>";
                        }
                    
                        
                        $("tbody").append(html);
                    }
                })


                $("#buscarproducto").keyup(function(){
                    html = "";
                    if($(this).val()!=""){
                        $.ajax({
                            url:"./php/buscarinventario.php",
                            type: 'POST',
                            data: {usuario:localStorage.getItem("usuario"),producto:$(this).val(),buqueda:""},
                            beforeSend:function(){
                                    $(".contenido-imagen").css("display","flex");
                                },
                                complete:function(){
                                    $(".contenido-imagen").css("display","none");
                                    
                                    buscarproducto();
                                },
                                success:function(data){
                                    console.log(JSON.parse(data));
                                    for(i=0;i<JSON.parse(data).length;i++){
                                        html += "<tr><td>"+JSON.parse(data)[i][0]+"</td><td>"+JSON.parse(data)[i][1]+"</td><td><div style='cursor:pointer;margin: auto; width:30px;height:30px'  class='iconos icono-cartamenu buscarfechaproducto' nombre='"+JSON.parse(data)[i][0]+"' title='Buscar'></div></td></tr>";
                                    }
                                
                                    
                                    $("tbody").html(html);
                                }
                        })
                    }else{
                        $.ajax({
                            url:"./php/inventario.php",
                            type: 'POST',
                            data: {usuario:localStorage.getItem("usuario")},
                            beforeSend:function(){
                                $(".contenido-imagen").css("display","flex");
                            },
                            complete:function(){
                                $(".contenido-imagen").css("display","none");
                                $(".imagencargasolicitud").css("display","none");
                                
                                buscarproducto();
                            },
                            success:function(data){
                                for(i=0;i<JSON.parse(data).length;i++){
                                    html += "<tr><td>"+JSON.parse(data)[i][0]+"</td><td>"+JSON.parse(data)[i][1]+"</td><td><div style='cursor:pointer;margin: auto; width:30px;height:30px'  class='iconos icono-cartamenu buscarfechaproducto' nombre='"+JSON.parse(data)[i][0]+"' title='Buscar'></div></td></tr>";
                                }
                                
                                
                                $("tbody").html(html);
                            }
                        })
                    }


                })

                
                //lector();
            }
            
            
            $(".contenido-imagen").css("display","none");
        }
        
        
    })
});
function buscarproducto(){
    $(".buscarfechaproducto").on("click",function(){

        

        $("#main-container div").eq(0).css("display","flex");
        html = "";
        html += "<table style='margin-top:55px;background-color:#fff;' class='table table-striped table-sm inventario'>";
        
        html += '<thead><tr><th scope="col" colspan="3">'+$(".buscarfechaproducto").eq($(".buscarfechaproducto").index(this)).attr("nombre")+'</th></tr><tr><th scope="col">Código</th><th scope="col">Cantidad</th><th scope="col">Accion</th></tr></thead>';
        html += "<tbody></tbody>";
        html += "</table><center><div style='cursor:pointer;right:80px;top:10px;padding:10px;background-color:rgb(52,52,52);color:#fff;border: 1px solid #000; width: 75px;' class='cerrar'>Cerrar</div></center>";
        $("#contenedorproductosfecha").html(html);
        //console.log($(".buscarfechaproducto").eq($(".buscarfechaproducto").index(this)).attr("nombre"));
        $.ajax({
            url:"./php/inventario.php",
            type: 'POST',
            data: {usuario:localStorage.getItem("usuario"),producto:$(".buscarfechaproducto").eq($(".buscarfechaproducto").index(this)).attr("nombre")},
            beforeSend:function(){
                $(".contenido-imagen").css("display","flex");
            },
            complete:function(){
                $(".contenido-imagen").css("display","none");
            },
            success:function(data){
                html = "";
                for(i=0;i<JSON.parse(data).length;i++){
                    fecha = JSON.parse(data)[i][2].split(" ");
                    html += "<tr><td>"+JSON.parse(data)[i][0]+"</td><td>"+JSON.parse(data)[i][1]+"</td><td>"+fecha[0]+"<br>"+fecha[1]+"</td></tr>";
                }
                
                $(".inventario tbody").html(html);
            }
        })

        $(".inventario tbody").append();
        filtrobusqueda();
        cerrar();
    })
}
function filtrobusqueda(){
    $("#buscar").keyup(function(){
        if($(this).val()!=""){
            $.ajax({
                url:"./php/inventario.php",
                type: 'POST',
                data: {usuario:localStorage.getItem("usuario"),producto:$(".inventario thead tr:eq(0) th").text(),codigo:$(this).val()},
                beforeSend:function(){
                    $(".contenido-imagen").css("display","flex");
                },
                complete:function(){
                    $(".contenido-imagen").css("display","none");
                    
                },
                success:function(data){
                    html = "";
                    for(i=0;i<JSON.parse(data).length;i++){
                        html += "<tr><td>"+JSON.parse(data)[i][0]+"</td><td>"+JSON.parse(data)[i][1]+"</td><td>"+JSON.parse(data)[i][2]+"</td></tr>";
                    }
                    
                    $(".inventario tbody").html(html);
                }
            })
        }else{
            $.ajax({
                url:"./php/inventario.php",
                type: 'POST',
                data: {usuario:localStorage.getItem("usuario"),producto:$(".inventario thead tr:eq(0) th").text()},
                beforeSend:function(){
                    $(".contenido-imagen").css("display","flex");
                },
                complete:function(){
                    $(".contenido-imagen").css("display","none");
                    $(".imagencargasolicitud").css("display","none");

                    
                },
                success:function(data){
                    html = "";
                    for(i=0;i<JSON.parse(data).length;i++){
                        html += "<tr><td>"+JSON.parse(data)[i][0]+"</td><td>"+JSON.parse(data)[i][1]+"</td><td>"+JSON.parse(data)[i][2]+"</td></tr>";
                    }
                    
                    $(".inventario tbody").html(html);
                }
            })
        }
    })
} 


function lector(){
    Quagga.init({
        inputStream : {
          name : "Live",
          type : "LiveStream",
          target: document.querySelector('#lectorbarras')    // Or '#yourElement' (optional)
        },
        decoder : {
          readers : ["code_128_reader"]
        }
      }, function(err) {
          if (err) {
              alert(err);
              return
          }
          console.log("Initialization finished. Ready to start");
          Quagga.start();
      });
      Quagga.onDetected(function(data){
        console.log(data);
      })
}
function cerrar(){
    $(".cerrar").on("click",function(){
        $ ("#main-container div").eq(0).css("display", "none");
    })
}

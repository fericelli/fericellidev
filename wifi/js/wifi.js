
    
    var html = "";
    estado = ["Bueno", "Intermedio", "Fallando"];
    
    for(var i=0;i<5;i++){
        random = ""+Math.floor(Math.random() * estado.length);
       
        ip = 2+i;
        html += "<tr><td>Plaza caracas</td><td>192.168.1.1</td><td>192.168.1."+ip+"</td><td>"+estado[random]+"</td><td><div class='iconos icono-borrar eliminarsolicitud' title='Cancelar'></div><div class='iconos icono-cartamenu informacion' title='Cancelar'></div></td></tr>";
    }
    $("tbody").html(html);

    $("#agregarwifi").on("click",function(){
        html = '<section class="form-register">';
        html += '<img style="width: 150px;height: 150px; margin:auto" class="logo" src="imagenes/logo (1).png">';
        html += '<h4>Agregar</h4>';
        html += '<label class="margen">Nombre</label>';
        html += '<input class="controls" type="text" name="Nombre" id="nombre" placeholder="Nombre">'; 
        html += '<label class="mensaje-error">Ingrese un Nombre</label>';
        html += '<label class="margen">IP Pública</label>'; 
        html += '<input class="controls" type="text" name="ippublica" id="ippublica" placeholder="Ingrese un IP">';
        html += '<label class="mensaje-error mensajeretiro">Ingrese un IP</label>';
        html += '<label class="margen">IP Privada</label>';
        html += '<input class="controls" type="text" name="ipprivada" id="ipprivada" placeholder="Ingrese un IP">';
        html += '<label class="mensaje-error mensajeretiro">Ingrese un IP</label>';
        html += '<button style="border: none;margin-top:10px;padding:5px">Agregar</button>';
        html += '<script type="text/javascript" src="../js/agregarwifi.js"></script>';

        $("#main-container").html(html);
    })

    $(".informacion").on("click",function(){
        index = $(".informacion").index(this);
        console.log(index);
        var nombre = $("tbody tr:eq("+index+") td").eq(0).text();
        var ippublica = $("tbody tr:eq("+index+") td").eq(1).text();
        var ipprivada = $("tbody tr:eq("+index+") td").eq(2).text();
        var estado = $("tbody tr:eq("+index+") td").eq(3).text();
        html = '<section class="form-register">';
        html += '<img style="width: 150px;height: 150px; margin:auto" class="logo" src="imagenes/logo (1).png">';
        html += '<h4>Información</h4>';
        html += '<label class="margen">Nombre</label>';
        html += '<label class="controls">'+nombre+'</label>'; 
        html += '<label class="margen">IP Pública</label>'; 
        html += '<label class="controls">'+ippublica+'</label>'; 
        html += '<label class="margen">IP Privada</label>';
        html += '<label class="controls">'+ipprivada+'</label>';  
        html += '<label class="margen">Estado</label>';
        html += '<label class="controls">'+estado+'</label>';

       // html += '<script type="text/javascript" src="../js/agregarwifi.js"></script>';

        $("#main-container").html(html);
    })
$(document).on("ready",function(){

    
})
function agragarpensum(){
    var json = "[";
    insert = "";
    
    for(i=2;i<$("tbody tr").length;i++){
        if($("tbody tr:eq("+i+") td").length>1){
            insert = "INSERT INTO pensum(semestre,codigo,nombre,unidadcredito,prelacion) VALUES ";
            semestre =  $("tbody tr:eq("+i+") td").eq(0).text().substring(2).replace("V1","").substring(0,2);
            if(convertirEnteroARomano(parseInt(semestre)) != null){
               insert += "('"+convertirEnteroARomano(parseInt(semestre))+"','"+$("tbody tr:eq("+i+") td").eq(0).text()+"','"+$("tbody tr:eq("+i+") td").eq(1).text()+"','"+$("tbody tr:eq("+i+") td").eq(2).text()+"',";
                prelacion = "";
                for(j=0;j<$("tbody tr:eq("+i+") td:eq(4) a").length;j++){
                    prelacion +=  $("tbody tr:eq("+i+") td:eq(4) a").eq(j).text()+"-";
                }
               insert += "'"+prelacion.substring(0,prelacion.length-1)+"')";
               
               $.post( "php/aulario/cargardatos.php", { insertar: insert})
                    .done(function( data ) {
                        console.log( "Data Loaded: " + data );
                    });
            }
        }
        
    }
}
function agragarmaterias(){
    insert = "";
    
    for(i=2;i<$("tbody tr").length;i++){
        if($("tbody tr:eq("+i+") td").length>1){
            insert = "INSERT INTO materias (codigo,nombre) VALUES ";
            semestre =  $("tbody tr:eq("+i+") td").eq(0).text().substring(2).replace("V1","").substring(0,2);
            if(convertirEnteroARomano(parseInt(semestre)) != null){
            insert += "('"+$("tbody tr:eq("+i+") td").eq(0).text()+"','"+$("tbody tr:eq("+i+") td").eq(1).text()+"')";
            
            
                $.post( "php/aulario/cargardatos.php", { insertar: insert})
                    .done(function( data ) {
                        console.log( "Data Loaded: " + data );
                    });
            }
        }
    }
    
}
function agragaraularios(){
    var json = "[";
    insert = "";
    
    for(i=2;i<$("tbody tr").length;i++){
        if($("tbody tr:eq("+i+") td").length>1){
            insert = "INSERT INTO horarios (materias) VALUES ";
            semestre =  $("tbody tr:eq("+i+") td").eq(0).text().substring(2).replace("V1","").substring(0,2);
            if(convertirEnteroARomano(parseInt(semestre)) != null){
               insert += "('"+$("tbody tr:eq("+i+") td").eq(0).text()+"')";
                prelacion = "";
                /*for(j=0;j<$("tbody tr:eq("+i+") td:eq(4) a").length;j++){
                    prelacion +=  $("tbody tr:eq("+i+") td:eq(4) a").eq(j).text()+"-";
                }*/
               //insert += "'"+prelacion.substring(0,prelacion.length-1)+"')";
               console.log(insert);
               $.post( "php/aulario/cargardatos.php", { insertar: insert})
                    .done(function( data ) {
                        console.log( "Data Loaded: " + data );
                    });
            }
        }
        
    }
}

function convertirEnteroARomano(numero) {
    if (typeof numero != 'number' || !Number.isInteger(numero)) {
        return null;
    }

    const ROMANOS = ['','C','CC','CCC','CD','D','DC','DCC','DCCC','CM',
    '','X','XX','XXX','XL','L','LX','LXX','LXXX','XC',
    '','I','II','III','IV','V','VI','VII','VIII','IX'];

    let digitos = String(numero).split('');
    let romano = '';
    let i = 3;

    while (i--) {
        romano = (ROMANOS[+digitos.pop() + (i * 10)] || '') + romano
    }

    return Array(+digitos.join('') + 1).join('M') + romano;
}



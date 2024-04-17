<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);
  Class Index{
    private $Conexion;
		function __construct(){
      session_start();
      ?>

			<!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link rel="shortcut icon" href="../imagenes/logo.ico"> 
        <link href="https://file.myfontastic.com/iKa94pqcdMLv4DmY2UYJVK/icons.css" rel="stylesheet">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.4.1/dist/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" >
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.2/css/all.css">
        
        <link rel="stylesheet" href="css/style.css">
        <script type="text/javascript" src="../js/jquery-1.11.3.min.js"></script>
        <script type="text/javascript" src="../js/sesion.js"></script>
        
        <title>Intercash</title>
      </head>
      <body>
        <div id="sidemenu" class="menu-collapsed">
          <div id="header">
            <div id="title"><span>Intercash.CL</span></div>
            <div id="menu-btn" >
              <i class=" iconos icono-menu"></i>
            </div>
          </div>

          <div id="profile">
            <div id="photo"><img src="../imagenes/logo (1).png"></div>
            <div id="name"><span><?php echo $_SESSION["nombreusaurio"]; ?></span></div>
          </div>
          <div id="menu-items">

            <?php    
              if($_SESSION["tipousaurio"]=="administrador"){
            ?>
                <div class="item" opcion="cargarinformacion">
                  <a>
                    <div class="icon"><i class="icono-ingredientes"></i></div>
                    <div class="title"><span>Cargar datos</span></div>
                  </a>
                </div>
                
            <?php  
              }
            ?>
            <?php    
              if($_SESSION["tipousaurio"]=="sociocomercial"){
            ?>
                
            <?php  
              }
            ?>
          </div>
        </div>
        
        <div class="contenido-imagen"><img style="margin: auto;" src="../imagenes/carga.gif"></div>
        <div id="main-container">
          
        </div>
      </body>
      </html>
      
      
      
      
      
      <?php
			$this->Conexion->CerrarConexion();
		}
  }
  new Index();
?>


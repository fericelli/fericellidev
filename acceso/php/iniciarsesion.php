<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);
    Class IniciarSesion{
		private $Conexion;
        function __construct(){
			include("../../php/conexion.php");
			$this->Conexion = new Conexion();
			echo $this->retorno();
			$this->Conexion->CerrarConexion();
		}
        private function retorno(){
            // return var_dump($_POST);
             $consultar = $this->Conexion->Consultar("SELECT * FROM usuarios WHERE usuario='".$_POST["usuario"]."' OR correo='".$_POST["usuario"]."'");
             $retorno = "[";
             $correo = "";
             $tipousaurio = "";
            if($usaurio = $this->Conexion->Recorrido($consultar)){
                $tipousaurio = $usaurio[5];
            }else{
                $retorno .= '"Usuario no registrado","error"';
            }
            $consultar2 = $this->Conexion->Consultar("SELECT * FROM usuarios WHERE usuario='".$_POST["usuario"]."' AND clave='".$_POST["clave"]."'");
            
            if(strlen($retorno)==1){
                if($this->Conexion->Recorrido($consultar2)){
                    $retorno .= '"Iniciando sesión","correcto","'.$tipousaurio.'"';
                    session_start();
                    $_SESSION["tipousaurio"] = $tipousaurio;
                    $_SESSION["usuario"] = $_POST["usuario"];
                    $_SESSION["nombreusaurio"] = str_replace(' ','',strtolower($_POST["usuario"]));
                    
                    
                }else{
                    $retorno .= '"Contraseña incorrecta","error"';
                }
            }
             
 
            return $retorno."]";
        } 
    }
    new IniciarSesion();
?>
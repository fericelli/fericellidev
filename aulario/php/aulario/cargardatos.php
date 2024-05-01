<?php 
	class Cargardatos{
		private $Conexion;
		function __construct(){
            include("../conexion.php");
			$this->Conexion = new Conexion();
			echo $this->retorno();
			
		}
		private function retorno(){
            return $this->Conexion->Consultar($_POST["insertar"]);
        }
	}
    new Cargardatos();
?>
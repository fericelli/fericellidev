<?php
    Class DescontarInventario{
		private $Conexion;
        function __construct(){
			include("conexion.php");
			$this->Conexion = new Conexion();
			echo $this->retorno();
			$this->Conexion->CerrarConexion();
		}
        private function retorno(){
             return $invertar = $this->Conexion->Consultar("UPDATE inventario SET cantidad=cantidad-".$_POST["cantidad"]." WHERE codigo='".$_POST["producto"]."' AND usuario='".$_POST["usuario"]."'");
            
        } 
    }
    new DescontarInventario();
?>
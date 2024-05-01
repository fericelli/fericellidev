<?php
	error_reporting(E_ALL);
    Class Datos{
		private $Conexion;
		function __construct(){
			session_start();
			include("../../../php/conexion.php");
			$this->Conexion = new Conexion();
			echo $this->retorno();
            $this->Conexion->CerrarConexion();
		}
		private function retorno(){
            $retorno = "[";
            $consultar = $this->Conexion->Consultar("SELECT * FROM materias");
            while($materias = $this->Conexion->Recorrido($consultar)){
                $retorno .= '["'.$materias[0].'","'.$materias[1].'"],';
            }


            return substr($retorno,0,strlen($retorno)-1)."]";
        }
	}
	new Datos();
?>
<?php 
	class Modificar{
		private $Conexion;
		
		
		function __construct(){
            include("../conexion.php");
			$this->Conexion = new Conexion();
			echo "[".$this->retorno()."]";
			$this->Conexion->CerrarConexion();
		}
		private function retorno(){
			$this->Conexion
        }
		private function dia($opcion){
			switch ($opcion) {
				case 1:
					return "Lunes";
					break;
				case 2:
					return "Martes";
					break;
				case 3:
					return "Miércoles";
					break;
				case 4:
					return "Jueves";
					break;
				case 5:
					return "Viernes";
					break;
				case 6:
					return "Sábado";
					break;
				case 7:
					return "Domingo";
					break;
			}
		}
		
	}
    new Modificar();
?>
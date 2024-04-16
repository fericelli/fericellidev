<?php 
	class Datos{
		private $Conexion;
		
		
		function __construct(){
           
		}
		private function retorno(){
			
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
    new Datos();
?>
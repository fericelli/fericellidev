<?php 
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);
	class Datos{
		private $Conexion;
		
		
		function __construct(){
            include("../conexion.php");
			$this->Conexion = new Conexion();
			echo "[".$this->retorno()."]";
			$this->Conexion->CerrarConexion();
		}
		private function retorno(){
			if(isset($_POST["materia"])){
				$consutar = $this->Conexion->Consultar("SELECT * FROM horarios LEFT JOIN materias ON materias.codigo=horarios.materia AND materias.carrera=horarios.carrera WHERE seccion IS NOT NULL AND profesor IS NOT NULL AND aula IS NOT NULL AND entrada IS NOT NULL AND salida IS NOT NULL AND sede IS NOT NULL AND jornada IS NOT NULL AND nombre LIKE '".$_POST["materia"]."%' ORDER BY entrada ASC");
             
			}else  if(isset($_POST["registros"])){
				$consutar = $this->Conexion->Consultar("SELECT * FROM horarios LEFT JOIN materias ON materias.codigo=horarios.materia AND materias.carrera=horarios.carrera LEFT JOIN pensum ON pensum.codigo=horarios.materia AND pensum.carrera=horarios.carrera ORDER BY semestre ASC");
             
			}else if(isset($_POST["materiaadmi"])){
				$consutar = $this->Conexion->Consultar("SELECT * FROM horarios LEFT JOIN materias ON materias.codigo=horarios.materia AND materias.carrera=horarios.carrera LEFT JOIN pensum ON pensum.codigo=horarios.materia AND pensum.carrera=horarios.carrera WHERE materias.nombre LIKE '".$_POST["materiaadmi"]."%' ORDER BY semestre ASC");
			}else{
				$consutar = $this->Conexion->Consultar("SELECT * FROM horarios LEFT JOIN materias ON materias.codigo=horarios.materia AND materias.carrera=horarios.carrera WHERE seccion IS NOT NULL AND profesor IS NOT NULL AND aula IS NOT NULL AND entrada IS NOT NULL AND salida IS NOT NULL AND sede IS NOT NULL AND jornada IS NOT NULL ORDER BY entrada ASC");
             
			}
			$retorno = "";
			while($horario = $this->Conexion->Recorrido($consutar)){
				$curso = $horario[11];
				$profesor = $horario[2];
				$seccion = $horario[0];
				$aula = $horario[3];
 				$horaentrada = $horario[4];
				$horasalida = $horario[5];
				$codigo = $horario[1];
				$dia = $this->dia($horario[9]);
				$retorno .= '["'.$curso.'","'.$profesor.'","'.$seccion.'","'.$aula.'","'.$horaentrada.'","'.$horasalida.'","'.$dia.'","'.$codigo.'"],';
			}
			return substr($retorno,0,strlen($retorno)-1);
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
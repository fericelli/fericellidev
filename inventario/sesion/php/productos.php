<?php
    Class Productos{
		private $Conexion;
        function __construct(){
			include("conexion.php");
			$this->Conexion = new Conexion();
			echo $this->retorno();
			$this->Conexion->CerrarConexion();
		}
        private function retorno(){
            
            $consultar = $this->Conexion->Consultar("SELECT * FROM producto WHERE nombre LIKE '".$_POST["producto"]."%' AND usuario='".$_POST["usuario"]."' ORDER BY nombre");
            $retorno = "[";
            if($producto = $this->Conexion->Recorrido($consultar)){
                $retorno .= '"'.$producto[0].'"';
            }
            if(strlen($retorno)==1){
                return $retorno.'""]';
            }else{
                return $retorno.']';
            }    
            
        } 
    }
    new Productos();
?>
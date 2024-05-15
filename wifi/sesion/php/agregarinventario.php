<?php
    Class AgregarInventario{
		private $Conexion;
        function __construct(){
			include("conexion.php");
			$this->Conexion = new Conexion();
			echo $this->retorno();
			$this->Conexion->CerrarConexion();
		}
        private function retorno(){
            $consultar = $this->Conexion->Consultar("SELECT * FROM producto WHERE nombre='".$_POST["producto"]."' AND usuario='".$_POST["usuario"]."'");
            if(!$this->Conexion->Recorrido($consultar)){
                $this->Conexion->Consultar("INSERT INTO producto (nombre,usuario) VALUES ('".$_POST["producto"]."','".$_POST["usuario"]."')");
            }
            $consulta = $this->Conexion->Consultar("SELECT * FROM inventario WHERE producto='".$_POST["producto"]."'AND codigo='".$_POST["codigo"]."' AND usuario='".$_POST["usuario"]."'");
            if($this->Conexion->Recorrido($consulta)){
                return $this->Conexion->Consultar("UPDATE inventario SET cantidad=cantidad+".$_POST["cantidad"]."  WHERE producto='".$_POST["producto"]."'AND codigo='".$_POST["codigo"]."' AND usuario='".$_POST["usuario"]."'");
            }else{
                return $invertar = $this->Conexion->Consultar("INSERT INTO inventario (producto,cantidad,codigo,precio,momento,usuario) VALUES ('".$_POST["producto"]."','".$_POST["cantidad"]."','".$_POST["codigo"]."','".$_POST["precio"]."','".date("Y-m-d H:m:i")."','".$_POST["usuario"]."')");
            }
            
        } 
    }
    new AgregarInventario();
?>
<?php
    Class BuscarInventario{
		private $Conexion;
        function __construct(){
			include("conexion.php");
			$this->Conexion = new Conexion();
			echo $this->retorno();
			$this->Conexion->CerrarConexion();
		}
        private function retorno(){
            if(isset($_POST["buqueda"])){
                $consultar = $this->Conexion->Consultar("SELECT producto.nombre,SUM(inventario.cantidad) FROM producto LEFT JOIN `inventario` ON inventario.producto = producto.nombre WHERE inventario.producto IS NOT NULL AND inventario.usuario='".$_POST["usuario"]."' AND inventario.producto LIKE '".$_POST["producto"]."%' GROUP BY inventario.producto ORDER BY inventario.producto ASC LIMIT 0,4");
                $retorno = "[";
                while($producto = $this->Conexion->Recorrido($consultar)){
                    $retorno .= '["'.$producto[0].'","'.$producto[1].'"],';  
                }
                if(strlen($retorno)>1){
                    return substr($retorno,0,strlen($retorno)-1)."]";
                }else{
                    return $retorno."]";
                }
            }else{
               $consultar = $this->Conexion->Consultar("SELECT * FROM inventario WHERE codigo LIKE '".$_POST["producto"]."%' AND usuario='".$_POST["usuario"]."'");
                $retorno = "[";
                if($producto = $this->Conexion->Recorrido($consultar)){
                    $retorno .= '"'.$producto[0].'","'.$producto[1].'"';
                }
                if(strlen($retorno)==1){
                    return $retorno.'""]';
                }else{
                    return $retorno.']';
                }
            }
            
            
        } 
    }
    new BuscarInventario();
?>
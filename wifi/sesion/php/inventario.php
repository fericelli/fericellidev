<?php
    Class Inventario{
		private $Conexion;
        function __construct(){
			include("conexion.php");
			$this->Conexion = new Conexion();
			echo $this->retorno();
			$this->Conexion->CerrarConexion();
		}
        private function retorno(){
            //AND nombre LIKE '".$_POST["producto"]."%'
            if(isset($_POST["codigo"]) AND isset($_POST["producto"])){
                $consultar = $this->Conexion->Consultar("SELECT codigo,cantidad,momento FROM inventario WHERE codigo LIKE '".$_POST["codigo"]."%' AND producto='".$_POST["producto"]."' AND usuario='".$_POST["usuario"]."' ORDER BY momento ASC LIMIT 0,10 ");
                $retorno = "[";
                while($producto = $this->Conexion->Recorrido($consultar)){
                    $retorno .= '["'.$producto[0].'","'.$producto[1].'","'.$producto[2].'"],';  
                }
                if(strlen($retorno)>1){
                    return substr($retorno,0,strlen($retorno)-1)."]";
                }else{
                    return $retorno."]";
                }
                
            }else if(isset($_POST["producto"])){
                $consultar = $this->Conexion->Consultar("SELECT codigo,cantidad,momento FROM inventario WHERE producto='".$_POST["producto"]."' AND usuario='".$_POST["usuario"]."' ORDER BY momento ASC LIMIT 0,10 ");
                $retorno = "[";
                while($producto = $this->Conexion->Recorrido($consultar)){
                    $retorno .= '["'.$producto[0].'","'.$producto[1].'","'.$producto[2].'"],';  
                }
                if(strlen($retorno)>1){
                    return substr($retorno,0,strlen($retorno)-1)."]";
                }else{
                    return $retorno."]";
                }
                
            }else{
				
                $consultar = $this->Conexion->Consultar("SELECT producto.nombre,SUM(inventario.cantidad) FROM producto LEFT JOIN `inventario` ON inventario.producto = producto.nombre WHERE inventario.producto IS NOT NULL AND inventario.usuario='".$_POST["usuario"]."' AND producto.usuario='".$_POST["usuario"]."' GROUP BY inventario.producto ORDER BY inventario.producto LIMIT 0,10 ");
                $retorno = "[";
                while($producto = $this->Conexion->Recorrido($consultar)){
                    $retorno .= '["'.$producto[0].'","'.$producto[1].'"],';  
                }
                if(strlen($retorno)>1){
                    return substr($retorno,0,strlen($retorno)-1)."]";
                }else{
                    return $retorno."]";
                }
            }
            
        } 
    }
    new Inventario();
?>
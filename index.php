<?php
    $date = strtotime(date());

    $first = strtotime('last Monday');
    if(date('Y-m-d', $first)=="Sunday"){
      
      $last = date('Y-m-d');
    }else{
      $last = strtotime('last Sunday');
    }
    echo $date;
?>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="css/style.css">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.4.1/dist/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
  <script type="text/javascript" src="js/jquery-1.11.3.min.js"></script>
	<script type="text/javascript" src="js/aulario.js"></script>
  <title>Intercash</title>
</head>
<body>
    <section class="encabezado">
        <label>Curso</label>
        <input type="text">  
    </section>
    <section class="aularios">
        
    </section>
</body>
</html>

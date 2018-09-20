<?php
include 'cnx.php';
$sql = $cnx->prepare("select idService, nomService from service where idCateg = ".$_GET['id']);
$sql->execute();
echo "<p id='lstServices' >";
foreach($sql->fetchAll(PDO::FETCH_ASSOC) as $ligne)
{
    echo "<option value='".$ligne['idService']."'>".$ligne['nomService']."</option>";
}

echo "</p>";

?>

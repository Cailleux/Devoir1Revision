<?php
include 'cnx.php';
$sql = $cnx->prepare("select idDeal, dateDeal, idEtat from deal where idCreateur = ".$_GET['id']);
$sql->execute();
echo "<p id='lstDeals' >";
foreach($sql->fetchAll(PDO::FETCH_ASSOC) as $ligne)
{
    echo "<option value='".$ligne['idDeal']."'>".$ligne['dateDeal'].$ligne['idEtat']."</option>";
}

echo "</p>";

?>

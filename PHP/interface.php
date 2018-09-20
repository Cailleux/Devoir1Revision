<?php
include 'cnx.php';
echo " <script src='JS/fonctions.js'></script>
<script type='text/javascript'>
$
(
    function()
    {
        $('#btnDeals').click(ExoDeals);

    }
)
</script>";
echo "<h3>Quel est votre identifiant?</h3>";
echo "<input type=number id=idRenseigne>";
echo "<br><br>";
echo "<input type='button' value='Chercher les deals' id='btnDeals'>";
echo "<div id='divDeals'></div>"


?>
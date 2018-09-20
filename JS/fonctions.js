function Exo1()
{
    //alert("lol");
    $.ajax
    (
        {
            type:"get",
            url:"PHP/getLesCategories.php",
            success:function(data)
            {
                $('#divCategories').empty(); //-> On vide la div
                $('#divCategories').append(data);
            },
            error:function()
            {
                alert("Erreur lors de la récupération des catégories.");
            }
        }
    );
}
function Exo2()
{
    //alert("lol2");

}
/*function afficherLesServices()
{
    $.ajax
    (
        {
            type:"get",
            url:"PHP/getLesFormations.php",
            data:"id="+$('#lstActivites').val(),
            success:function(data)
            {
                $('#divFormations').empty(); //-> On vide la div
                $('#divFormations').append(data);
            },
            error:function()
            {
                alert("Erreur lors de la récupération des formations.");
            }
        }
    );
}*/
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
function afficherLesServices()
{
    $.ajax
    (
        {
            type:"get",
            url:"PHP/getLesServices.php",
            data:"id="+$('#lstCategories').val(),
            success:function(data)
            {
                $('#divServices').empty(); //-> On vide la div
                $('#divServices').append(data);
            },
            error:function()
            {
                alert("Erreur lors de la récupération des services.");
            }
        }
    );
}
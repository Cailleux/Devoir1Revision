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
                $('#divCategories').empty();
                $('#divInterface').empty();
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
                $('#divServices').empty();
                $('#divServices').append(data);
            },
            error:function()
            {
                alert("Erreur lors de la récupération des services.");
            }
        }
    );
}
function Exo2()
{
    //alert("xx");
    $.ajax
    (
        {
            type:"get",
            url:"PHP/interface.php",
            success:function(interfacetext)
            {
                $('#divCategories').empty();
                $('#divServices').empty();
                $('#divInterface').empty();
                $('#divInterface').append(interfacetext);
            },
            error:function()
            {
                alert("Erreur lors de la récupération de l'interface.");
            }
        }
    );
}
function ExoDeals()
{
    //alert("xx");
    $.ajax
    (
        {
            type:"get",
            url:"PHP/getLesDeals.php",
            data:"id="+$('#lstDeals').val(),
            success:function(data2)
            {
                $('#divDeals').empty();
                $('#divDeals').append(data2);
            },
            error:function()
            {
                alert("Erreur lors de la récupération des deals.");
            }
        }
    );
}
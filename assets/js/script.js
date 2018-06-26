
$(document).ready(function(){
    var path = window.location.pathname;
    $('ul.navbar-right li').each(function(index){
        $(this).removeClass('active');
    });

    if(path.endsWith("/"))
    {
        $('ul.navbar-right li:nth-child(1)').addClass('active');
    }
    if(path.endsWith("/about"))
    {
        $('ul.navbar-right li:nth-child(2)').addClass('active');
    }
    if(path.endsWith("/contact"))
    {
        $('ul.navbar-right li:nth-child(3)').addClass('active');
    }
})
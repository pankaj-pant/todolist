//Check off specific todo's by clicking

$('ul').on("click", "li", function(){
    $(this).toggleClass('completed');
});

//CLick on X to delete item
$('ul').on("click", "span", function(event){
    $(this).parent().fadeOut(700, function(){
        $(this).remove();
    });
    event.stopPropagation();
});

//Adding a new todo
$("input[type='text']").keypress(function(event){
    if(event.which === 13){
        //extracting new ToDo item from input
        var newToDo = $(this).val();
        //Adding new li
        $('ul').append("<li><span><i class='fas fa-trash-alt'></i></span> " + newToDo +"</li>");
        //Clear input
        $(this).val('');
    }
});

$(".fa-plus").click(function(){
    $("input[type='text']").fadeToggle();
});
$(document).ready(function () {

    $('form').on('submit',function (event) {
        event.preventDefault()

        const novaTarefa = $('#insert-task').val();
        const checkList = $('<li> </li>');

        $(`<span class= "check" style= "text-decoration:none">${novaTarefa}</span>`).appendTo(checkList)
        $(checkList).appendTo('ul') 
        $('#insert-task').val('')     
        })     
        
        $('ul').on('click', '.check',function () {
            $(this).parent('li').toggleClass('check');

        })

    })

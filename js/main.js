$(document).ready(function () {
    $('button[filter="web"]').click(function () {
        if ($(this).attr('val') == 'off') {
            $('button[filter]').attr('val', 'off');
            $(this).attr('val', 'on');
            $('.filter-work > div').hide(300);
            $('.filter-work > [filter="web"]').show(300);
        }
    });

    $('button[filter="ui"]').click(function () {
        if ($(this).attr('val') == 'off') {
            $('button[filter]').attr('val', 'off');
            $(this).attr('val', 'on');
            $('.filter-work > div').hide(300);
            $('.filter-work > [filter="ui"]').show(300);
        }
    });

    $('button[filter="moc"]').click(function () {
        if ($(this).attr('val') == 'off') {
            $('button[filter]').attr('val', 'off');
            $(this).attr('val', 'on');
            $('.filter-work > div').hide(300);
            $('.filter-work > [filter="moc"]').show(300);
        }
    });

    $('button[filter="all"]').click(function () {
        if ($(this).attr('val') == 'off') {
            $('button[filter]').attr('val', 'off');
            $(this).attr('val', 'on');
            $('.filter-work > div').show(300);
        }
    });

    $('button[filter="viev-all"]').click(function () {
        if ($(this).attr('val') == 'off') {
            $('button[filter]').attr('val', 'off');
            $(this).attr('val', 'on');
            $('.filter-work > div').show(300);
        }
    });
    /*меню*/
    $('ul.menu a[href^="#"').click(function(){
        var target = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(target).offset().top
        }, 500);
        return false; 
    });
    
    /* Кнопка вверх */
    $(window).scroll(function(){
        if ($(this).scrollTop() != 0)
            $('#toTop').fadeIn();
        else
            $('#toTop').fadeOut();
    });
    $("#toTop").click(function(){
        $('html, body').animate({
            scrollTop: 0
        }, 500);
    });

    /*Выпадающее меню*/
    $('.menu-icon').click(function(){
        $('nav').slideToggle(500);
        $('ul').css({
            'display':'flex', 'flex-direction':'column'
        })
        if($('.menu-icon').html() == '<i class="fas fa-bars"></i>') { // проверка с содержимым хтмл
            $(this).html('<i class="fas fa-times"></i>');
        } else {
            $(this).html('<i class="fas fa-bars"></i>');
        } 
    })

});

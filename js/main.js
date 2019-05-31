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
});

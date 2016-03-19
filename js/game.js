$(document).ready(function() {

    $('#show-btn').click(function() {
        // console.log("show button clicked");
        $('.game-table').slideDown();
        $('.games-topic')
        .html('<span class="topic">Game Showed</span>')
        .css({
          'color': 'red',
        })
        .addClass('huge-text');
    });


    $('#hide-btn').click(function() {
        // console.log("hide button clicked");
        $('.game-table').slideUp();
        $('.games-topic')
        .text('Game Hide')
        .css({
          'color': 'blue',
        })
        .removeClass('huge-text');
    });

    $('#toggle-btn').click(function() {
        $('.game-table').slideToggle();
    });

    $('#get-btn').click(function() {
        var team = $($('table tr td')[2]).text();
        console.log(team);
    });

}); 
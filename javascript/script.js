$(document).ready(function() {
  $('#about_ea').hover(
    function () {
      $('ul', this).slideDown('fast');
    }, function () {
      $('ul', this).slideUp('fast');
    }
  );

  $('#our_programmes').hover(
    function () {
      $('ul', this).slideDown('fast');
    }, function () {
      $('ul', this).slideUp('fast');
    }
  );

  $('#team_table th').on('click', function() {
    teams = {'mn': 'management_team',
             'kh': 'kohima_ho',
             'ft': 'finance_team',
             'dt': 'dimapur_team',
             'mt': 'mok_team',
             'pt': 'pfo_team'};
    active_team = $('.active_team');
    /* Hide deselected team div, and set to inactive class */
    $('#' + teams[active_team.attr('id')]).css('display', 'none');
    active_team.removeClass('active_team');
    active_team.addClass('inactive_team');
    /* Show selected team div, and set to active class */
    $('#' + teams[$(this).attr('id')]).css('display', 'block');
    $(this).removeClass('inactive_team');
    $(this).addClass('active_team');
  });

  $('#show_twitter_wrapper').on('click', function() {
    $(this).slideUp(600, 'easeInBack', function(){
      $('#twitter_wrapper').slideDown();
      }
    );
  });

  $('#hide_twitter_wrapper').on('click', function() {
    $('#twitter_wrapper').slideUp( function(){
      $('#show_twitter_wrapper').slideDown(600, 'easeOutBack');
      }
    );
  });
});

$(document).ready( function() {
// Set path relative to diretory
  var path = document.location.pathname;
  if (path.includes('/about/') || path.includes('/programmes/')) {
    path = '../';
  } else {
    path = '';
  };
// NAVIGATION BAR
  var navbarImages = {'default':    'default.png',
                      'about_work': 'our_work.png',
                      'about_team': 'our_team.png',
                      'about_prtn': 'our_partners.png',
                      'prog_tsd':   'prog_training_skills.png',
                      'prog_lle':   'prog_livelihoods_environment.png',
                      'prog_sty':   'prog_sustainability.png',
                      'prog_sce':   'prog_social_enterprise.png',
                      'prog_fla':   'prog_financial_assistance.png'}

  var imagePreloader = function(url) {
    url = path + 'images/navbar/' + url;
    var img = new Image();
    img.src=url;
  }

  for (var key in navbarImages) {
    url = navbarImages[key];
    imagePreloader(url);
  }

  var setNavbarImg = function(image) {
    image = path + 'images/navbar/' + navbarImages[image];
    console.log(image);

    if (image.includes('default')) {
      console.log('here1');
      $('#dropdown_image1 img').attr('src', image);
      $('#dropdown_image2 img').attr('src', image);
    } else if (image.includes('our_')) {
      console.log('here2');
      $('#dropdown_image1 img').attr('src', image);
    } else {
      console.log('here3');
      $('#dropdown_image2 img').attr('src', image);
    };
  };

  $('#about_ea').hover( function () {
      $('#dropdown_back1').slideDown('fast', function() {
        $('#about_dropdown').fadeIn('fast');
        $('#dropdown_image1').fadeIn('fast');
        $('#social').slideUp('fast');
        $('#show_twitter_wrapper').slideUp('fast');
      });
    }, function () {
      setTimeout( function() {
        $('#about_dropdown').fadeOut('fast', function() {
          $('#dropdown_image1').fadeOut('fast');
          $('#dropdown_back1').slideUp('fast');
          $('#social').slideDown('fast');
          $('#show_twitter_wrapper').slideDown('fast');
        });
      }, 600);
    }
  );

  $('#our_programmes').hover( function () {
      $('#dropdown_back2').slideDown('fast', function() {
        $('#programmes_dropdown').fadeIn('fast');
        $('#dropdown_image2').fadeIn('fast');
        $('#social').slideUp('fast');
        $('#show_twitter_wrapper').slideUp('fast');
      });
    }, function () {
      setTimeout( function() {
        $('#programmes_dropdown').fadeOut('fast', function() {
          $('#dropdown_image2').fadeOut('fast');
          $('#dropdown_back2').slideUp('fast');
          $('#social').slideDown('fast');
          $('#show_twitter_wrapper').slideDown('fast');
        });
      }, 600);
    }
  );
// NAVBAR IMAGE CHANGERS
  $('#about_work').hover( function() {
    setNavbarImg( $(this).attr('id') );
  }, function () {
    setNavbarImg('default');
    return false;
  });

  $('#about_team').hover( function() {
    setNavbarImg( $(this).attr('id') );
  }, function () {
    setNavbarImg('default');
  });

  $('#about_prtn').hover( function() {
    setNavbarImg( $(this).attr('id') );
  }, function () {
    setNavbarImg('default');
  });

  $('#prog_tsd').hover( function() {
    setNavbarImg( $(this).attr('id') );
  }, function () {
    setNavbarImg('default');
  });

  $('#prog_lle').hover( function() {
    setNavbarImg( $(this).attr('id') );
  }, function () {
    setNavbarImg('default');
  });

  $('#prog_sty').hover( function() {
    setNavbarImg( $(this).attr('id') );
  }, function () {
    setNavbarImg('default');
  });

  $('#prog_sce').hover( function() {
    console.log('HOOOOVER');
    setNavbarImg( $(this).attr('id') );
  }, function () {
    setNavbarImg('default');
  });

  $('#prog_fla').hover( function() {
    setNavbarImg( $(this).attr('id') );
  }, function () {
    setNavbarImg('default');
  });
// NAVBAR FOR MOBILE USERS
  $('#mobile_nav p').on('click', function() {
    mobNav   = $(this);
    mainNav  = $('#mobile_nav_options');
    aboutNav = $('#mobile_about_options');
    progNav  = $('#mobile_prog_options');

    if (aboutNav[0].style.display === 'block') {
      aboutNav.slideUp('fast');
    } else if (progNav[0].style.display === 'block') {
      progNav.slideUp('fast');
    };

    setTimeout( function() {
      if (mainNav[0].style.display === 'block') {
        mainNav.slideUp('fast');
        mobNav.removeClass('white_text');
      } else {
        mainNav.slideDown('fast');
        mobNav.addClass('white_text');
      };
    }, 500);
  });

  $('#mob_prog').on('click', function() {
    $('#mobile_prog_options').slideDown('fast');
  });

  $('#mobile_back_prog').on('click', function() {
    $('#mobile_prog_options').slideUp('fast');
  });

  $('#mob_about').on('click', function() {
    $('#mobile_about_options').slideDown('fast');
  });

  $('#mobile_back_about').on('click', function() {
    $('#mobile_about_options').slideUp('fast');
  });

  $(window).on('resize', function() {
    mainNav = $('#mobile_nav_options');
    if (mainNav[0].style.display === 'block') {
      mainNav.slideUp('fast');
    };
  });

// SOCIAL ICONS AND TWITTER FEED
  $('#show_twitter_wrapper').on('click', function() {
    $('#social').slideUp(600, 'swing')
    $(this).slideUp(600, 'swing', function(){
      $('#twitter_wrapper').slideDown();
      }
    );
  });

  $('#hide_twitter_wrapper').on('click', function() {
    $('#twitter_wrapper').slideUp( function(){
      $('#show_twitter_wrapper').slideDown(600, 'swing');
      $('#social').slideDown(600, 'swing')
      }
    );
  });
// TEAM TABLE
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
// SET FOOTER COPYRIGHT YEAR
  $('.current_year').each( function() {
    $(this).html( (new Date).getFullYear() );
  });
});


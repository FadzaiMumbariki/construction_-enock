/**
 * ENOCK CONSTRUCTION & EARTHMOVING EQUIPMENT
 * Interactive UI Scripts: Filter, Modals, Lightbox, Form Validation & Counter Animation
 */

(function($) {
  'use strict';

  $(document).ready(function() {

    // 1. STATS COUNTER ANIMATION
    var statsAnimated = false;
    function checkStats() {
      var $stats = $('.stats-ribbon');
      if ($stats.length && !statsAnimated) {
        var top = $stats.offset().top - window.innerHeight + 100;
        if ($(window).scrollTop() > top) {
          statsAnimated = true;
          $('.stat-number').each(function() {
            var $this = $(this);
            var target = parseInt($this.attr('data-count'), 10) || 0;
            var suffix = $this.attr('data-suffix') || '';
            $({ countNum: 0 }).animate({ countNum: target }, {
              duration: 2000,
              easing: 'swing',
              step: function() {
                $this.text(Math.floor(this.countNum) + suffix);
              },
              complete: function() {
                $this.text(this.countNum + suffix);
              }
            });
          });
        }
      }
    }
    $(window).on('scroll', checkStats);
    checkStats();

    // 2. EQUIPMENT HIRE FILTER
    $('.equipment-filter-btn').on('click', function() {
      var filter = $(this).attr('data-category');
      $('.equipment-filter-btn').removeClass('active');
      $(this).addClass('active');

      if (filter === 'all') {
        $('.equipment-card-wrapper').fadeIn(300);
      } else {
        $('.equipment-card-wrapper').each(function() {
          var itemCat = $(this).attr('data-category');
          if (itemCat === filter) {
            $(this).fadeIn(300);
          } else {
            $(this).fadeOut(200);
          }
        });
      }
    });

    // 3. PROJECT GALLERY FILTER
    $('.project-filter-btn').on('click', function() {
      var filter = $(this).attr('data-filter');
      $('.project-filter-btn').removeClass('active');
      $(this).addClass('active');

      if (filter === 'all') {
        $('.project-item-wrapper').fadeIn(300);
      } else {
        $('.project-item-wrapper').each(function() {
          var itemCat = $(this).attr('data-category');
          if (itemCat === filter) {
            $(this).fadeIn(300);
          } else {
            $(this).fadeOut(200);
          }
        });
      }
    });

    // 4. EQUIPMENT HIRE MODAL
    $(document).on('click', '.btn-hire-equip', function(e) {
      e.preventDefault();
      var equipName = $(this).attr('data-name');
      var equipCat = $(this).attr('data-category');
      var equipImg = $(this).attr('data-img');

      $('#hireModalEquipName').text(equipName);
      $('#hireModalEquipCat').text(equipCat);
      if (equipImg) {
        $('#hireModalEquipImg').attr('src', equipImg).show();
      } else {
        $('#hireModalEquipImg').hide();
      }

      $('#hireFormMachineInput').val(equipName);
      $('#equipmentModal').addClass('show');
    });

    // 5. PROJECT LIGHTBOX MODAL
    $(document).on('click', '.btn-project-lightbox, .project-item__thumb', function(e) {
      e.preventDefault();
      var $card = $(this).closest('.project-item');
      var title = $card.find('.project-item__title').text();
      var cat = $card.find('.project-item__cat').text();
      var desc = $card.find('.project-item__desc').text();
      var imgSrc = $card.find('img').attr('src');
      var client = $card.attr('data-client') || 'Bulawayo City Council';
      var year = $card.attr('data-year') || '2024';
      var location = $card.attr('data-location') || 'Bulawayo, Zimbabwe';

      $('#projectModalTitle').text(title);
      $('#projectModalCat').text(cat);
      $('#projectModalClient').text(client);
      $('#projectModalYear').text(year);
      $('#projectModalLocation').text(location);
      $('#projectModalDesc').text(desc);
      $('#projectModalImg').attr('src', imgSrc);

      $('#projectModal').addClass('show');
    });

    // 6. SERVICE DETAIL MODAL
    $(document).on('click', '.btn-service-detail', function(e) {
      e.preventDefault();
      var $card = $(this).closest('.service-card');
      var num = $card.find('.service-card__number').text();
      var title = $card.find('.service-card__title').text();
      var desc = $card.find('.service-card__desc').text();
      var imgSrc = $card.find('img').attr('src');
      var features = $card.find('.service-card__features').html();

      $('#serviceModalNum').text(num);
      $('#serviceModalTitle').text(title);
      $('#serviceModalDesc').text(desc);
      $('#serviceModalImg').attr('src', imgSrc);
      $('#serviceModalFeatures').html(features);

      $('#serviceModal').addClass('show');
    });

    // Close Modals
    $('.enock-modal-close, .enock-modal-backdrop').on('click', function(e) {
      if ($(e.target).is('.enock-modal-backdrop') || $(e.target).is('.enock-modal-close') || $(e.target).closest('.enock-modal-close').length) {
        $('.enock-modal-backdrop').removeClass('show');
      }
    });

    $('.enock-modal-dialog').on('click', function(e) {
      e.stopPropagation();
    });

    $(document).on('keydown', function(e) {
      if (e.key === 'Escape') {
        $('.enock-modal-backdrop').removeClass('show');
      }
    });

    // Toast helper
    function showToast(message, type) {
      var $toast = $('#enockToast');
      if (!$toast.length) {
        $('body').append('<div id="enockToast" class="enock-toast"><i class="fa fa-check-circle" style="color:#10B981;font-size:20px;"></i><span id="enockToastMsg"></span></div>');
        $toast = $('#enockToast');
      }
      $('#enockToastMsg').text(message);
      $toast.addClass('show');
      setTimeout(function() {
        $toast.removeClass('show');
      }, 5000);
    }

    // 7. CONTACT & QUOTATION FORM SUBMISSION
    $('#contactForm').on('submit', function(e) {
      e.preventDefault();
      var $form = $(this);
      var $btn = $form.find('button[type="submit"]');
      var $alert = $('#contactFormAlert');

      // Validation
      var name = $.trim($('#contactName').val());
      var email = $.trim($('#contactEmail').val());
      var phone = $.trim($('#contactPhone').val());
      var type = $('#contactType').val();
      var message = $.trim($('#contactMessage').val());

      if (!name || !email || !phone || !message) {
        $alert.removeClass('alert-success').addClass('alert-danger')
          .html('<i class="fa fa-exclamation-triangle"></i> Please fill in all required fields (Name, Email, Phone, Message).')
          .fadeIn();
        return;
      }

      $btn.prop('disabled', true).html('<i class="fa fa-spinner fa-spin"></i> Submitting Request...');
      $alert.hide();

      // Submit simulation / fetch
      setTimeout(function() {
        $btn.prop('disabled', false).html('Submit Quotation Request');
        $alert.removeClass('alert-danger').addClass('alert-success')
          .html('<i class="fa fa-check-circle"></i> Thank you, ' + name + '! Your enquiry regarding <strong>' + type + '</strong> has been received. Our Bulawayo team will contact you within 24 business hours at ' + phone + ' / ' + email + '.')
          .fadeIn();
        $form[0].reset();
        showToast('Enquiry received successfully! We will contact you shortly.', 'success');
      }, 1200);
    });

    // 8. EQUIPMENT HIRE MODAL FORM SUBMISSION
    $('#equipHireForm').on('submit', function(e) {
      e.preventDefault();
      var $form = $(this);
      var $btn = $form.find('button[type="submit"]');
      var machine = $('#hireFormMachineInput').val();
      var name = $.trim($('#hireCustName').val());
      var phone = $.trim($('#hirePhone').val());
      var location = $.trim($('#hireLocation').val());

      if (!name || !phone || !location) {
        alert('Please fill in your name, contact phone, and delivery location.');
        return;
      }

      $btn.prop('disabled', true).html('<i class="fa fa-spinner fa-spin"></i> Processing...');

      setTimeout(function() {
        $btn.prop('disabled', false).html('Confirm Hire Booking');
        $('#equipmentModal').removeClass('show');
        $form[0].reset();
        showToast('Equipment hire request for ' + machine + ' submitted! Our fleet manager will reach out shortly.', 'success');
      }, 1000);
    });

    // 9. SMOOTH SCROLLING FOR IN-PAGE ANCHORS
    $('a[href^="#"]').on('click', function(e) {
      var target = $(this.getAttribute('href'));
      if (target.length) {
        e.preventDefault();
        $('html, body').stop().animate({
          scrollTop: target.offset().top - 80
        }, 800);
      }
    });

  
    // 10. REAL-TIME EQUIPMENT SEARCH
    $('#equipmentSearchInput').on('keyup input', function() {
      var query = $(this).val().toLowerCase().trim();
      var activeCat = $('.equipment-filter-btn.active').attr('data-category') || 'all';

      $('.equipment-card-wrapper').each(function() {
        var $card = $(this);
        var title = $card.find('.equipment-card__title').text().toLowerCase();
        var desc = $card.find('.equipment-card__desc').text().toLowerCase();
        var catBadge = $card.find('.equipment-card__cat-badge').text().toLowerCase();
        var itemCat = $card.attr('data-category');

        var matchesQuery = !query || title.indexOf(query) !== -1 || desc.indexOf(query) !== -1 || catBadge.indexOf(query) !== -1;
        var matchesCat = (activeCat === 'all' || itemCat === activeCat);

        if (matchesQuery && matchesCat) {
          $card.fadeIn(200);
        } else {
          $card.fadeOut(200);
        }
      });
    });

  });

})(jQuery);

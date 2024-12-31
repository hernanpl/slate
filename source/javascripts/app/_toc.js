//= require ../lib/_jquery
//= require ../lib/_imagesloaded.min

;(function () {
  'use strict';

  var htmlPattern = /<[^>]*>/g;
  var loaded = false;
  var closeToc = function () {
      $(".toc-wrapper").removeClass('open');
      $("#nav-button").removeClass('open');
  };

  

  function loadToc($toc, tocLinkSelector, tocListSelector, scrollOffset) {
      // offset for fixed headers (if any)
      var headerHeights = {};
      var pageHeight = 0;
      var windowHeight = 0;
      var originalTitle = document.title;

      var recacheHeights = function () {
          headerHeights = {};
          pageHeight = $(document).height();
          windowHeight = $(window).height();

          $toc.find(tocLinkSelector).each(function () {
              var targetId = $(this).attr('href');
              if (targetId[0] === "#") {
                  var $target = $("#" + $.escapeSelector(targetId.substring(1)));
                  if ($target.length) {
                      headerHeights[targetId] = $target.offset().top;
                  } else {
                      console.error("Element not found:", targetId);
                  }
              }
          });
      };

      var refreshToc = function () {
          var currentTop = $(document).scrollTop() + scrollOffset;

          if (currentTop + windowHeight >= pageHeight) {
              currentTop = pageHeight + 1000;
          }

          var best = null;
          for (var name in headerHeights) {
              if ((headerHeights[name] < currentTop && headerHeights[name] > headerHeights[best]) || best === null) {
                  best = name;
              }
          }

          if (currentTop == scrollOffset && !loaded) {
              best = window.location.hash;
              loaded = true;
          }

          var $best = $toc.find("[href='" + best + "']").first();
          console.log($best)
          if (!$best.hasClass("active")) {
              $toc.find(".active").removeClass("active");
              $toc.find(".active-parent").removeClass("active-parent");
              $best.addClass("active");
              $best.parents(tocListSelector).addClass("active").siblings(tocLinkSelector).addClass('active-parent');
              $best.siblings(tocListSelector).addClass("active");
              $toc.find(tocListSelector).filter(":not(.active)").slideUp(150);
              $toc.find(tocListSelector).filter(".active").slideDown(150);
              
              // Manually trigger refreshToc after a short delay
              setTimeout(function() {
                  refreshToc();
              }, 100); // Adjust delay as needed

              if (window.history.replaceState) {
                  window.history.replaceState(null, "", best);
              }
              var thisTitle = $best.data("title");
              if (thisTitle !== undefined && thisTitle.length > 0) {
                  // Changed "–" to "-"
                  document.title = thisTitle.replace(htmlPattern, "") + " - " + originalTitle;
              } else {
                  document.title = originalTitle;
              }
          }
      };

      var makeToc = function () {
          recacheHeights();
          refreshToc();

          $("#nav-button").click(function () {
              $(".toc-wrapper").toggleClass('open');
              $("#nav-button").toggleClass('open');
              return false;
          });
          $(".page-wrapper").click(closeToc);
      

          // Smooth scrolling for TOC links with URL update
          $toc.find(tocLinkSelector).on('click', function(e) {
              e.preventDefault();
              var target = this.hash;
              var $target = $(target);

              // Remove 'active' class from ALL links before adding it to the clicked one
              $toc.find(tocLinkSelector).removeClass('active'); 
              $(this).addClass('active'); 

              $('html, body').animate({
                  'scrollTop': $target.offset().top - scrollOffset
              }, 500, 'swing', function() {
                  // Update URL after scrolling is complete
                  if (history.pushState) {
                      history.pushState(null, null, target);
                  } else {
                      window.location.hash = target;
                  }
              }); 
          });

          $toc.find(tocLinkSelector).each(function () {
              var $this = $(this);
              if ($this.siblings(tocListSelector).length > 0) {
                  var $arrow = $("<span class='toc-arrow'>►&nbsp;&nbsp;</span>");
                  $this.prepend($arrow);

                  if ($this.siblings(tocListSelector).hasClass('active')) {
                      $arrow.addClass('rotate');
                  }

                  $this.click(function (e) {
                      $arrow.toggleClass('rotate');
                      $this.siblings(tocListSelector).slideToggle(150);
                  });
              }
          });
      };

      makeToc();

      window.recacheHeights = recacheHeights;
      window.refreshToc = refreshToc;
  }

  window.loadToc = loadToc;
})();
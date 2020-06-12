/* 
   Simple JQuery Accordion menu.
   HTML structure to use:

Copyright 2007 by Marco van Hylckama Vlieg

web: http://www.i-marco.nl/weblog/
email: marco@i-marco.nl

Free for non-commercial use
*/
function initMenu2() {
  jQuery('.vmenu2 ul').hide();
  jQuery('.vmenu2 ul:first').hide();
  jQuery('.vmenu2 li.active > ul').show();
  jQuery('.vmenu2 li a').click(
    function() {		
      var checkElement = jQuery(this).next();
      if((checkElement.is('ul')) && (checkElement.is(':visible'))) {
		  checkElement.slideUp('normal');
        return false;
        }
      if((checkElement.is('ul')) && (!checkElement.is(':visible'))) {
        jQuery('.vmenu2 ul:visible').slideUp('normal');
        checkElement.slideDown('normal');
        return false;
        }
      }
    );
  }
jQuery(document).ready(function() {initMenu2();});

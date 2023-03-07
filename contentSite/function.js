var iframe = $('#videoPlayer');

// Wait for the iframe to load
iframe.on('load', function() {
  // Get the document of the iframe
  var iframeDoc = iframe.get(0).contentDocument || iframe.get(0).contentWindow.document;
  
  // Select the logo element and remove it
  var logo = $(iframeDoc).find('.logo-icon');
  logo.remove();
});
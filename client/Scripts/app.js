/* custom JS goes here */

/* pagination code from http://www.bootply.com/lxa0FF9yhw */

// IIFE
(function(){
  $(".btn-danger").click(function(event){
    if(!confirm("Are you sure?")) {
      event.preventDefault();
      window.location.assign("/books");
    }
  });
})();

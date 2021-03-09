// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  $(".getInMyBelly").on("click", function(event) {
    var id = $(this).data("id");

    var newStatusState = {
      devoured: 1
    };

    
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newStatusState
    }).then(
      function() {
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
  $(".create-form").on("submit", function(event) {
    event.preventDefault();

    var newBurger = {
      burger_name: $("#ca").val().trim(),
      devoured: 0
    };
    console.log(newBurger);

    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("created new burger");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

   $(".delete-burger").on("click", function(){
     var id = $(this).data("id");

     $.ajax("/api/burgers/" + id, {
       type: "DELETE"
    }).then(
      function() {
        console.log("Deleted Burger:", id);
        location.reload();
      }
    );
  });
});

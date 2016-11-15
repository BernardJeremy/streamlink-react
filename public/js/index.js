// When the browser is ready...
  $(function() {
    // validate
    $("#linkForm").validate({
        // Set the validation rules
        rules: {
            link: {
                required: true,
                url: true
            },
        },
        // Specify the validation error messages
        messages: {
            link: "Please enter a valid URL",
        },
        // submit handler
        submitHandler: function(form) {
          //form.submit();
           $(".links").show();
           //$(".links").fadeOut(4500);
        }
    });
  });

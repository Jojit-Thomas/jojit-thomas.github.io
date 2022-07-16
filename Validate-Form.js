$(document).ready(function () {
  $(".contact-forms").validate({
    rules: {
      name: {
        required: true,
        minlength: 4,
      },
      email: {
        required: true,
        email: true,
      },
      contact: {
        required: true,
        number: true,
        minlength: 10,
        maxlength: 10,
      },
      message: {
        required: true,
        minlength: 10,
        maxlength: 200,
      },
    },
    messages: {
      userName: {
        minlength: "Please Enter Your Full Name",
      },
      userEmail: {
        email: "Please enter a valid Email id",
      },
      contactNumber: {
        minlength: "Please enter a valid contact number",
        maxlength: "Please enter a valid contact number",
      },
      message: {
        minlength: "Its too short! minimum 10 characters",
        maxlength: "Oh no! it's too large",
      },
    },
    submitHandler: function (form) {
      console.log("True");
      console.log("in function submit");
      submit();
    },
  });
});
function submit() {
    $.ajax({
      url: "https://script.google.com/macros/s/AKfycbxg1517bpGg7U0gFLvOkyh1UaF-4VcX_z_sCC6ivFnJ_dthG1opvpmo4g0DuOm16o79/exec",
      data: $(".contact-forms").serialize(),
      method: "POST",
      success: function (response) {
        alert("Form submitted successfully");
      },
      error: function (err) {
        alert("Something Error");
      },
    });
}

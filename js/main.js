$(document).ready(function () {
  $("#image").faceDetection({
    complete: function (faces) {
      console.log(faces);
      for (let i = 0; i < faces.length; i++) {
        $("<div>", {
          class: "face",
          css: {
            left: faces[i].x * faces[i].scaleX + "px",
            top: faces[i].y * faces[i].scaleY + "px",
            width: faces[i].width * faces[i].scaleX + "px",
            height: faces[i].height * faces[i].scaleY + "px",
          },
        }).insertAfter(this);
      }
    },
    error: function (code, message) {},
  });
});

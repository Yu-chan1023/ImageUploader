window.onload = function () {
  // let btn = document.getElementByClass('submit');
  // btn.document.addEventListener('click', function() {
  //   console.log('ok');
  // })
  var dropArea = document.getElementById('drop');
  var fileInput = document.getElementById('image');

  dropArea.addEventListener('dragover', function(e){
    e.preventDefault();
  });
  dropArea.addEventListener('dragleave', function(e){
      e.preventDefault();
  });
  dropArea.addEventListener('drop', function(e){
      e.preventDefault();
      var files = e.dataTransfer.files;
      fileInput.files = files;
      photoPreview('onChenge',files[0]);
  });
  function photoPreview(event, file = null) {
    var file = file;
    if(file === null){
        file = event.target.files[0];
    }
    var reader = new FileReader();
    var preview = document.getElementById("preview");
    var previewImage = document.getElementById("previewImage");

    if(previewImage != null) {
      preview.removeChild(previewImage);
    }
    reader.onload = function(event) {
      var img = document.createElement("img");
      img.setAttribute("src", reader.result);
      img.setAttribute("id", "previewImage");
      preview.appendChild(img);
    };

    reader.readAsDataURL(file);
  }
};
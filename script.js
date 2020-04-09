
function readFile() {

    var preview = document.querySelector('#face-image');
    var file = document.querySelector('input[type=file]').files[0];
    var reader = new FileReader();

    reader.addEventListener("load", function () {
        loadImage(
            reader.result,
            function (img) {
                preview.src = img.toDataURL("image/jpeg");
            },
            {
                orientation: true,
                maxHeight: 300,
                canvas: true
            }
        );

        //preview.src = reader.result;
    }, false);

    reader.onload = function (e) {
        $('.image-upload-wrap').hide();
        $('#loading').show();
        $('.file-upload-content').show();
        $('.image-title').html(file.name);
    };

    reader.readAsDataURL(file);
    init().then(function () {
        console.log("hello");
        predict();
        $('#loading').hide();
    });

    if (file) {
        reader.readAsDataURL(file);
    }

}




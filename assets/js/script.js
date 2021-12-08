var fileExt = ".svg";
let fileUrl = "../assets/images/background-images/"

$(document).ready(
function(){
    $.ajax({
        //This will retrieve the contents of the folder if the folder is configured as 'browsable'
        url: fileUrl,
        success: function (data) {
            $(data).find('a:contains(" + ${fileExt} + ")').each(function () {
                var filename = this.href.replace(window.location, "").replace("http:///", "");
                console.log(filename);
            });
        }     
    });
});
var feedback = function(res) {
  if (res.success === true) {
    var get_link = res.data.link.replace(/^http:\/\//i, 'https://');
    document.querySelector('.status').classList.add('bg-success');


    var str = '{ "requests": [{"features": [{"maxResults": 50,"type": "LABEL_DETECTION"}],"image": {"source": {"imageUri": "' + get_link + '"} }} ]}';

    var settings = {
      "async": true,
      "crossDomain": true,
      "url": "https://vision.googleapis.com/v1/images:annotate?key=XXXXXXXXXXXXXXXXXXX",
      "method": "POST",
      "headers": {
        "Content-Type": "application/json",
        "cache-control": "no-cache"
      },
      "processData": false,
      "data": str
    }

    $.getJSON(settings).done(function(response) {
      console.log(response.responses[0].labelAnnotations);
      var labels = response.responses[0].labelAnnotations;
      var data = "";
      for (var i = 0; i < labels.length; i++) {
        var hashtag = '#' + labels[i].description.replace(/\s/g, "") + ' ';
        data += hashtag;
      }
      document.querySelector('.status').innerHTML =
        '<br><strong>Generated hashtags : </strong><br>' + '<br> <div class="webnots-information webnots-notification-box" id="hashtags">' + data + '</div><button class="button">Copy Hashtags</button><br>' + '<img class="img" alt="Imgur-Upload" src=\"' + get_link + '\"/><br>';
    });
  }
};

new Imgur({
  clientid: '4409588f10776f7', //You can change this ClientID
  callback: feedback
});

function copyHashtags() {
  var copyText = document.getElementById("hashtags");
  copyText.select();
  document.execCommand("copy");
  alert("Copied the text: " + copyText.value);
}

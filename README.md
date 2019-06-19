
```javascript

    _  _   _    _           _     _              _  __       
  _| || |_| |  | |         | |   | |            (_)/ _|      
 |_  __  _| |__| | __ _ ___| |__ | |_ __ _  __ _ _| |_ _   _ 
  _| || |_|  __  |/ _` / __| '_ \| __/ _` |/ _` | |  _| | | |
 |_  __  _| |  | | (_| \__ \ | | | || (_| | (_| | | | | |_| |
   |_||_| |_|  |_|\__,_|___/_| |_|\__\__,_|\__, |_|_|  \__, |
                                            __/ |       __/ |
                                           |___/       |___/ 

```

# Hashtagify

## Generate <kbd>[#Hashtags]()</kbd> for your next [Instagram]() Post!

[![Hashtagify](https://img.shields.io/badge/Hashtagify-dodgerblue.svg?style=flat&logo=instagram&logoColor=white)](http://githublookbook.com) [![Google Vision](https://img.shields.io/badge/Vision-API-critical.svg?style=flat&logo=google&logoColor=white)](https://cloud.google.com/vision/docs/quickstart) [![Imgur API](https://img.shields.io/badge/Imgur-API-critical.svg?style=flat&logo=highly&logoColor=white)](http://githublookbook.com)

> **A web app which suggests hashtags for your picture! It might help you to come up with relevant [#hashtags]() for your next [Instagram]() post :p and it may get more eyes on your Instagram posts.**

![#](https://cdn-images-1.medium.com/max/1600/1*XPpoo_5jt2_EngZSdgZS2Q.png)

### APIs Used

- [Google Vision API](https://cloud.google.com/vision/docs/quickstart)
- [Imgur API](https://github.com/carry0987/Imgur-Upload/)

### Getting Started

- Get your own imgur clientID [here](https://api.imgur.com/endpoints/image).
- Replace `XXXXXXXXX` with your clientID in `js/upload.js`.

```javascript
new Imgur({ 
    clientid: 'XXXXXXXXX', // replace this 
    callback: feedback 
});
```
- Get API keys for [Google Cloud Vision API](https://cloud.google.com/vision/docs/quickstart).

- Replace `XXXXXXXX` with your API keys in `js/upload.js`

```javascript

var settings = {
      "async": true,
      "crossDomain": true,
      // change the key below
      "url": "https://vision.googleapis.com/v1/images:annotate?key=XXXXXXXXXXXXXXXXXXX",
      "method": "POST",
      "headers": {
        "Content-Type": "application/json",
        "cache-control": "no-cache"
      },
      "processData": false,
      "data": str
    }

```

- Now open `index.html`

### Need Help ?

[![Facebook](https://img.shields.io/static/v1.svg?label=follow&message=@vinit.shahdeo&color=9cf&logo=facebook&style=flat&logoColor=white&colorA=informational)](https://www.facebook.com/vinit.shahdeo)  [![Instagram](https://img.shields.io/static/v1.svg?label=follow&message=@vinitshahdeo&color=grey&logo=instagram&style=flat&logoColor=white&colorA=critical)](https://www.instagram.com/vinitshahdeo/) [![LinkedIn](https://img.shields.io/static/v1.svg?label=connect&message=@vinitshahdeo&color=success&logo=linkedin&style=flat&logoColor=white&colorA=blue)](https://www.linkedin.com/in/vinitshahdeo/)

:email: Feel free to contact me @ [vinitshahdeo@gmail.com](https://mail.google.com/mail/)

[![GMAIL](https://img.shields.io/static/v1.svg?label=send&message=vinitshahdeo@gmail.com&color=red&logo=gmail&style=social)](https://www.github.com/vinitshahdeo)

### License

MIT &copy; [Vinit Shahdeo](https://github.com/vinitshahdeo/Hashtagify/blob/master/LICENSE)

---------

```javascript

╦ ╦╔═╗╔═╗╦ ╦╔╦╗╔═╗╔═╗╦╔═╗╦ ╦
╠═╣╠═╣╚═╗╠═╣ ║ ╠═╣║ ╦║╠╣ ╚╦╝
╩ ╩╩ ╩╚═╝╩ ╩ ╩ ╩ ╩╚═╝╩╚   ╩ 


if (isAwesome) {
    // thanks in advance :p
    starThisRepository();
}

```

-----------



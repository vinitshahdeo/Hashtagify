
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

[![Hashtagify](https://img.shields.io/badge/Hashtagify-dodgerblue.svg?style=flat&logo=instagram&logoColor=white)](http://githublookbook.com) [![Google Vision](https://img.shields.io/badge/Vision-API-critical.svg?style=flat&logo=google&logoColor=white)](http://githublookbook.com) [![Imgur API](https://img.shields.io/badge/Imgur-API-critical.svg?style=flat&logo=highly&logoColor=white)](http://githublookbook.com)

> **A web app which suggests hashtags for your picture! It might help you to come up with relevant [#hashtags]() for your next [Instagram]() post :p and it may get more eyes on your Instagram posts.**

![#](https://cdn-images-1.medium.com/max/1600/1*XPpoo_5jt2_EngZSdgZS2Q.png)

### APIs Used

- [Google Vision API]()
- [Imgur API]()

### Getting Started

- Get your own clientID [here]().
- Replace `XXXXXXXXX` with your clientID [here](https://github.com/carry0987/Imgur-Upload/blob/master/js/upload.js#L11) :

```javascript
new Imgur({ 
    clientid: '4409588f10776f7', //You can change this ClientID
    callback: feedback 
});
```
- Get API keys for Google Vision API.

- Replace `XXXXXXXX` with your API keys in `upload.js`

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



### License

MIT [Vinit Shahdeo]()

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



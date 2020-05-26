const settings = {
  "name": "mxfoxtalbot",
  "state": {
    "frontity": {
      "url": "https://mrfoxtalbot.wordpress.com/",
      "title": "MrFoxTalbot",
      "description": "No solo WordPress"
    }
  },
  "packages": [
    {
      "name": "@frontity/twentytwenty-theme",
      "state": {
        "theme": {
          "menu": [
            [ 'History', '/category/history' ],
            [ 'Astronomy', '/category/astronomy' ],
            [ 'Internet & Software', '/tag/internet-software' ],
            [ 'Politics', '/category/politics' ],
          ],
          "featured": {
            "showOnList": false,
            "showOnPost": false
          }
        }
      }
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          "api": "https://public-api.wordpress.com/wp/v2/sites/mrfoxtalbot.wordpress.com"
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;

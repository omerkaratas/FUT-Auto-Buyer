module.exports = {
  headers: {
    name: "FUT Auto Buyer",
    namespace: "http://tampermonkey.net/",
    version: "1.6.2",
    description: "FUT Auto Buyer",
    author: "CK Algos",
    match: [
      "https://www.ea.com/*/fifa/ultimate-team/web-app/*",
      "https://www.ea.com/fifa/ultimate-team/web-app/*",
    ],
    grant: ["GM_xmlhttpRequest"],
    connect: [
      "ea.com",
      "ea2.com",
      "futbin.com",
      "futwiz.com",
      "futbin.org"
    ],
    require: [
      "https://code.jquery.com/jquery-3.6.1.min.js",
      "https://greasyfork.org/scripts/47911-font-awesome-all-js/code/Font-awesome%20AllJs.js?version=275337",
      "https://github.com/ckalgos/fut-trade-enhancer/releases/latest/download/fut-trade-enhancer.user.js",
    ],
    updateURL:
      "https://github.com/omerkaratas/fut-auto-buyer/releases/latest/download/fut-auto-buyer.user.js",
    downloadURL:
      "https://github.com/omerkaratas/fut-auto-buyer/releases/latest/download/fut-auto-buyer.user.js",
    noFrame: true,
  },
};

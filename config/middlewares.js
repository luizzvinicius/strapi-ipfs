module.exports = [
  'strapi::errors',
  {
    name: "strapi::security",
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          "connect-src": ["'self'", "http:"],
          "img-src": [
            "'self'",
            "data:",
            "blob:",
            "dl.airtable.com",
            "*.ipfs.dweb.link", // ipfs.tech
            "*.ipfs.cf-ipfs.com", // cloudflare.com
            "*.ipfs.w3s.link", // web3.storage
          ],
          "media-src": [
            "'self'",
            "data:",
            "blob:",
            "dl.airtable.com",
            "*.ipfs.dweb.link", // ipfs.tech
            "*.ipfs.cf-ipfs.com", // cloudflare.com
            "*.ipfs.w3s.link", // web3.storage
          ],
          upgradeInsecureRequests: null,
        },
      },
    },
  },
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::logger',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];

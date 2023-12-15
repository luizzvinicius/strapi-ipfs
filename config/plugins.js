module.exports = ({ env }) => ({
  upload: {
    config: {
      provider: "strapi-provider-upload-ipfs-alex",
      providerOptions: {
        grpc: "127.0.0.1:5001"
      },
    },
  },
});

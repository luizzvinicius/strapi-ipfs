let client;
module.exports = {
  init(config) {    
    import('kubo-rpc-client').then(({ create }) => {
      client = create(`http://${config.grpc}`);
    });
    return {
      async uploadStream(file) {
        try {
          const ipfs_status = await client.files.write(
            `/${file.name}`,
            file.stream,
            { create: true }
          );
          console.log("IPFS Status", ipfs_status);
        } catch (e) {
          console.log(e);
        }
      },
      async upload(file) {
        try {
          const ipfs_status = await client.files.write(
            `/${file.name}`,
            file.stream,
            { create: true }
          );
          console.log("IPFS Status", ipfs_status);
        } catch (e) {
          console.log(e);
        }
      },
      delete(file) {
        console.log("Deleting", file);
        return new Promise(async (resolve, reject) => {
          try {
            await client.pin.rm(file.path);
            resolve("teste");
          } catch (e) {
            reject(e);
          }
        })
      },
    };
  },
}
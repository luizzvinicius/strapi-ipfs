let client;
module.exports = {
  init: (providerOptions = {}) => {
    import('kubo-rpc-client').then(({ create }) => {
      client = create({
        host: "127.0.0.1",
        port: 5001,
      });
      console.log(client);
    });
    return {
      async uploadStream(file) {
        try {
          console.log(client);
          const name = file.name
          const data = file.stream
          await client.files.write(
            `/${file.name}`,
            data,
            { create: true }
          );
          let info = []
          for await (const chunck of client.files.ls(`/${name}`)) {
            info.push(chunck)
          }
          await client.pin.add(info[0].cid)
        } catch (e) {
          console.log(e);
        }
      },
      async upload(file) { // Não usado pelo strapi
        try {
          await client.files.write(
            `/${file.name}`,
            file.stream,
            { create: true }
          );
        } catch (e) {
          console.log(e);
        }
      },
      async delete(file) {
        console.log("Deleting", file);
        try {
          await client.files.rm(`/${file.name}`)
        } catch (e) {
          console.log(e)
        }
      },
    };
  },
}
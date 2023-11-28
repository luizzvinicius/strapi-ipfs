import { create } from "kubo-rpc-client"
console.log("aqui")
module.exports = {
    init(providerOptions) {
        console.log(providerOptions)
        // init your provider if necessary
        const client = create("http://127.0.0.1:5001")

        return {
            async upload(file) {
                // file content is accessible by `file.buffer`
                try {
                    let nome = file.originalname
                    let content = file.buffer
                    await client.files.write(`/${nome}t`, content, { create: true })
                } catch (error) {
                    console.log(error);
                }
            },
            async uploadStream(file) {
                // file content is accessible by `file.stream`
                try {
                    let nome = file.originalname
                    let content = file.stream
                    await client.files.write(`/${nome}`, content, { create: true })
                } catch (error) {
                    console.log(error);
                }
            },
            delete(file) {
                // delete the file in the provider
            },
            checkFileSize(file, { sizeLimit }) {
                // (optional)
                // implement your own file size limit logic
            },
            getSignedUrl(file) {
                // (optional)
                // Generate a signed URL for the given file.
                // The signed URL allows secure access to the file.
                // Only Content Manager assets will be signed.
                // Returns an object {url: string}.
            },
            isPrivate() {
                // (optional)
                // if it is private, file urls will be signed
                // Returns a boolean
            },
        };
    },
};
/**
 * Precisa instalar alguma coisa ?
 * Configurar o arquivo plugins.js
 * Configurar middleware se necessário
 * Providers alteram funcionalidades dos plugins
 * Tarefa: criar o provider para alterar o plugin upload (padrão)
*/
// console.log("aqui") // passou aqui
module.exports = () => ({
    upload: {
        config: {
            provider: "strapi-provider-ipfs",
            providerOptions: {
                url: "http://127.0.0.1:5001"
            },
        },
    },
});
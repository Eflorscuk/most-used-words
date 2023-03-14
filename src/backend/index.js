const { ipcMain } = require("electron")

ipcMain.on("blabla", (event, dados) => {
    console.log(dados)
    event.reply("blabla", 'respondido')
})
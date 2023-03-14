const { ipcMain } = require("electron")
const pathToRows = require("./pathsToRows")

ipcMain.on("process-subtitles", (event, paths) => {
    console.log(paths)
    pathToRows(paths)
        .then(rows => console.log(rows))
        .then(_ => {
            event.reply("process-subtitles", [
                { word: "i", amount: 547}
            ])
        })
})
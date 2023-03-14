const { ipcMain } = require("electron")
const pathToRows = require("./pathsToRows")
const prepareData = require("./prepareData")
const groupedWords = require("./groupWords")

ipcMain.on("process-subtitles", (event, paths) => {
    console.log(paths)
    pathToRows(paths)
        .then(rows => prepareData(rows))
        .then(preparedData => groupedWords(preparedData))
        .then(groupedWords => {
            event.reply("process-subtitles", groupedWords)
        })
})
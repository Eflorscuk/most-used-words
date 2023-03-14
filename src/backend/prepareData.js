module.exports = rows => {
    return new Promise((resolve, reject) => {
        try {
            const data = rows.filter(filterValid)
                            .map(removePunctuation)
                            .map(removeTags)
                            .reduce(mergeRows)
                            .split(" ")
                            .map(word=>word.toLowerCase())
                            .map(word=>word.replace("\"", ""))
            resolve(data)
        } catch(e) {
            reject(e)
        }
    })
}

function filterValid(row) {
    // To check if a certain line is valid
    const notNumber = !parseInt(row.trim()) // If a number
    const notEmpty = !!row.trim() // If have a space
    const notInterval = !row.includes("-->")
    return notNumber && notEmpty && notInterval
}

function removePunctuation(row) {
    return row.replace(/[,?!:;.']/g, "")
} 

function removeTags(row){
    return row.replace(/(<[^>]+)>/g, "").trim()
}

function mergeRows(fullText, rowText) {
    return `${fullText} ${rowText}`
}
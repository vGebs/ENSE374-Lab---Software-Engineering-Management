const fs = require('fs')

function saveTasksToJson(arr) {
    //console.log(arr)
    var data = JSON.stringify(arr, null, 2)
    fs.writeFile('./public/json/tasks.json', data, finished)

    function finished(err){
        if(err){
            console.log("no go")
            console.log(err)
        } else {
            console.log("all set")
        }
    }
}

function loadTasksFromJson() {
    var data = fs.readFileSync('./public/json/tasks.json')
    var tasks = JSON.parse(data)
    return tasks
}

module.exports = {
    saveTasksToJson,
    loadTasksFromJson
}
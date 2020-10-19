const fs = require('fs');

fs.mkdir('tutorial', (err) => {
    if(err) console.log(err);
    else {
        //deleting the folder
        fs.rmdir('tutorial', (err) => {
            if(err) console.log(err);
            else {
                console.log('Folder is deleted');
            }
        })

        //create a file under the created folder
        fs.writeFile('./tutorial/example.txt', '123', (err) => {
            if(err) console.log(err);
            else {
                console.log("create file successfully");
            }
        })
    }
})

fs.unlink('./tutorial/example.txt', (err) => {
    if(err) console.log(err);
    else console.log("deleted the file under the folder");
})

fs.rmdir('tutorial', (err) => {
    if(err) console.log(err);
    else console.log('deleted the folder')
})
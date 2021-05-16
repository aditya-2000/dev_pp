let fs=require("fs");
let extensions=require("./names.js");
let path = require("path");

let folderpath="./folder";
let extensionpath;


function checkfolder(extension){
   for(let key in extensions){
       if(extensions[key].includes(extension)){
        extensionpath=`${folderpath}/${key}`;
        break;
       }
   }
   return fs.existsSync(extensionpath);
}

function movefile(filename){
    let currentpath=`${folderpath}/${filename}`;
    let finalpath=`${extensionpath}/${filename}`;
    fs.copyFileSync(currentpath,finalpath);
    fs.unlinkSync(currentpath);

}

function makefolder(){
    fs.mkdirSync(extensionpath);
}

function foldersort(folderpath){
    let files=fs.readdirSync(folderpath);
    for(let i=0;i<files.length;i++){
        let extension=path.extname(files[i]);
        let exist=checkfolder(extension);
        if(exist){
            console.log("exist");
            movefile(files[i]);
        }else{
            console.log("not exist");
            makefolder();
            movefile(files[i]);
        }

    }
}

foldersort(folderpath);








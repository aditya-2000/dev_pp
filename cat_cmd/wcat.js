const fs=require("fs");

let content=process.argv.slice(2);

let flags=[];
let files=[];
let removedspace=[];

for(let i=0;i<content.length;i++){
    if(content[i].startsWith('-')){
        flags.push(content[i]);
    }else{
        files.push(content[i]);
    }
}
//console.log(files,flags);
let filekadata="";
for(let i=0;i<files.length;i++){
   filekadata+=fs.readFileSync(files[i]);
   if(i!=files.length-1) filekadata+="\r\n";
}

filekadata =filekadata.split("\r\n");
filekadata.pop();
console.log(filekadata);

if(flags.includes("-s")){
    removelargespaces(filekadata);
}

if(flags.includes("-n") && flags.includes("-b")){
    
    if(flags.indexOf("-n")<flags.indexOf("-b")){
        if(flags.includes("-s")){
            addNumberToAll(removedspace);
        }else{
            addNumberToAll(filekadata);
        }
    }else{
        if(flags.includes("-s")){
            addLineNumberToNonEmptyLine(removedspace);
        }else{
            addLineNumberToNonEmptyLine(filekadata);
        }
    }

}else if(flags.includes("-n")){
    if(flags.includes("-s")){
        addNumberToAll(removedspace);
    }else{
        addNumberToAll(filekadata);
    }
}else if(flags.includes("-b")){
    if(flags.includes("-s")){
        addLineNumberToNonEmptyLine(removedspace);
    }else{
        addLineNumberToNonEmptyLine(filekadata);
    }
}else if(flags.includes("-s")){
    let output = removedspace.join("\n");
    console.log(output);
}






 //console.log(content);


//-s cat command

 
function removelargespaces(content){
    let isblank=false;
   
    for(let i=0;i<content.length;i++){
      if(content[i]==='' && !isblank){
        isblank=true;
        removedspace.push(content[i]);
      } 
      if(content[i]!=''){
          removedspace.push(content[i]);
          isblank=false;
       }
      
    }
}


//-n cat command

function addNumberToAll(content){
    let count=1;
    for(let i=0;i<content.length;i++){
        
        content[i]=`${count}. ${content[i]}`;
        count++;
        
    }
    let addedline=content.join("\n");
    console.log(addedline);

}


//-b cat command
function addLineNumberToNonEmptyLine(content){
    let count=1;
    for(let i=0;i<content.length;i++){
        if(content[i].length>0){
            content[i]=(`${count}. ${content[i]}`);
            count++;
        }
    }
    let addedline=content.join("\n");
    console.log(addedline);


}

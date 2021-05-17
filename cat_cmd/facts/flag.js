 let fs=require("fs");
let content= fs.readFileSync("./f1.txt","utf-8");
content =content.split("\r\n");
 //console.log(content);


//-s cat command
let removedspace=[];
 
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

//console.log(removelargespaces(content));   



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

//console.log(addmunertoall(content))

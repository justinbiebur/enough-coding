import * as vscode from 'vscode';
export default function saveTimer(){
    setTimeout(()=>{
        saveFiles();
    },10000)
}
function onSave(){
    
    vscode.commands.executeCommand('workbench.action.closeAllEditors').then(()=>vscode.commands.executeCommand('workbench.action.closeWindow'));
    
}
function saveFiles() {
    vscode.commands.executeCommand('workbench.action.files.saveAll').then(()=>  //save all affects untitled files
    {
       onSave();
    },()=>{
        console.log("Not Saved");
    });
    
  }
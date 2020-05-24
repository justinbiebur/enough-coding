import * as vscode from 'vscode';
export default function saveTimer(){
    setTimeout(()=>{
        saveFiles();
    },10000)
}
function saveFiles() {
    vscode.commands.executeCommand('vscode.workspace.saveAll');
    
  }
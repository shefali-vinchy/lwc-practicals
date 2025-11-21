import { LightningElement,wire } from 'lwc';
import {openTab,IsConsoleNavigation,openSubtab,EnclosingTabId} from 'lightning/platformWorkspaceApi';

export default class openSubTab extends LightningElement {
    @wire(IsConsoleNavigation)
    isConsoleNavigation
    
    @wire(EnclosingTabId)
    parentId
        openRecordId(){
            if(this.isConsoleNavigation){
                openSubtab(this.parentId,{
                recordId: '001aj00000xp2VJAAY',
                label:'RecordTab',
                focus: true
                }).catch(error=>{
                    console.error(error)
                })
            }
            
        }
    
        openTabURL(){
            if(this.isConsoleNavigation){
                 openSubtab(this.parentId,{
                    url: '/lightning/r/Account/001aj00000xp2VJAAY/view',
                    label:'Case_Account',
                    focus: true
                }).catch(error=>{
                    console.error(error)
                })
            }
        }
    
        openTabPageRef(){
            if(this.isConsoleNavigation){
                 openSubtab(this.parentId,{
                    pageReference:{
                        type: 'standard__objectPage',
                        attributes:{
                            objectApiName: 'Account',
                            actionName: 'list'
                        }
                    },
                    label:'Accounts List',
                    focus: true
                }).catch(error=>{
                    console.error(error)
                })
            }
        }
}
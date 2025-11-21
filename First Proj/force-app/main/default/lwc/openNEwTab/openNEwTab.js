import { LightningElement,wire } from 'lwc';
import {openTab,IsConsoleNavigation} from 'lightning/platformWorkspaceApi';

export default class OpenNEwTab extends LightningElement {

    @wire(IsConsoleNavigation)
    isConsoleNavigation

    openRecordId(){
        if(this.isConsoleNavigation){
            openTab({
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
            openTab({
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
            openTab({
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
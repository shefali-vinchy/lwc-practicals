import { LightningElement,wire } from 'lwc';
import {IsConsoleNavigation,refreshTab, getFocusedTabInfo} from 'lightning/platformWorkspaceApi'


export default class RefreshTabs extends LightningElement {
    @wire(IsConsoleNavigation)
    isConsoleApp

    async refreshHandler(){
        if(this.isConsoleApp){
            const  {tabId}= await getFocusedTabInfo()
            await refreshTab(tabId,{
                includeAllSubtabs:true
            })
        }
    }
}
import { LightningElement ,wire} from 'lwc';
import {subscribe,unsubscribe,MessageContext} from 'lightning/messageService';
import SAMPLEMC from '@salesforce/messageChannel/TableMessageChannel__c';
import Country from '@salesforce/schema/AccountCleanInfo.Country';

const dataColumns = [
    {label:'Name', fieldName: 'Name', type: 'text'},
    {label:'Phone', fieldName: 'Phone', type: 'text'},
    {label:'Country', fieldName: 'Country', type: 'text'}
]
export default class PersonTable extends LightningElement {
    personData =[];
    subscription 
    columns = dataColumns;
    

    @wire(MessageContext)
  messageContext;

    connectedCallback(){
        this.subscription = subscribe(this.messageContext,SAMPLEMC,(message)=>{this.handleMessageReceived(message)})
    }

    handleMessageReceived(message){
        console.log(message)
        this.personData = [...this.personData,message.passData];        
        console.log('personData----'+this.personData)
    }

    disconnectedCallback(){
         unsubscribe(this.subscription)
         this.subscription = null;
    }

   /* formatData(data){
        data.array.forEach(element => {
            
        });
    }*/
}
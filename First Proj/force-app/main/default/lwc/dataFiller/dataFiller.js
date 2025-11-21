import { LightningElement } from 'lwc';
import {publish,createMessageContext, releaseMessageContext} from 'lightning/messageService';
import SAMPLEMC from '@salesforce/messageChannel/TableMessageChannel__c';

export default class DataFiller extends LightningElement {
    Name =''
    Phone= ''
    Country=''
    context =createMessageContext();
    
    constructor(){
        super();
    }
    nameChangeHandler(event){
        this.Name = event.target.value
    }

    phoneChangeHandler(event){
        this.Phone = event.target.value
    }

    countryChangeHandler(event){
        this.Country = event.target.value
    }

    dataPassHandler(event){
        const messagePass ={
            name : this.Name,
            phone: this.Phone,
            country: this.Country
        };
        publish(this.context,SAMPLEMC,{passData:messagePass});
    }

    disconnectedCallback(){
        releaseMessageContext(this.context);
    }
}
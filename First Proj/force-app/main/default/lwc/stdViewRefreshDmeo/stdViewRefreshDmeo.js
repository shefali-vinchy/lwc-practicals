import { LightningElement } from 'lwc';
import {RefreshEvent} from 'lightning/refresh';
import NAME_FIELD from '@salesforce/schema/contact.Name';
import PHONE_FIELD from '@salesforce/schema/contact.Phone';
import EMAIL_FIELD from '@salesforce/schema/contact.Email';
import ACCOUNT_FIELD from '@salesforce/schema/contact.AccountId';

export default class StdViewRefreshDmeo extends LightningElement {
    nameField = NAME_FIELD
    phoneField = PHONE_FIELD
    emailField = EMAIL_FIELD
    accountField = ACCOUNT_FIELD


    successHandler(event){
        console.log('Contact created id', event.detail.id)

        this.dispatchEvent(new RefreshEvent())
    }
}
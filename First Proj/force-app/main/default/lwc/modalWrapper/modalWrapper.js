import { LightningElement } from 'lwc';

export default class ModalWrapper extends LightningElement {
    isOpen = false
    
    openHandler(){
        console.log('Button clicked')
        this.isOpen = true;
    }

    closeHandler(){
        console.log('Button clicked')
        this.isOpen = false;
    }
}
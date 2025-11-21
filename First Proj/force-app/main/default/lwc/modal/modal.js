import { LightningElement } from 'lwc';

export default class Modal extends LightningElement {

    closeModal(){
        const custEvent = new CustomEvent('close')
        this.dispatchEvent(custEvent)
    }
    

    handleFooterSlotChange(){
        const footerElement = this.template.querySelector('.slds-modal__footer')
        if(footerElement){
            footerElement.classList.remove('slds-hide')
        }
    }

    handleHeaderSlotChange(){
        const headerElement = this.template.querySelector('.slds-modal__title')
        if(headerElement){
            headerElement.classList.remove('remove_header')
        }
    }
}
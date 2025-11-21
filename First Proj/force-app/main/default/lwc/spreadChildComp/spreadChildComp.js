import { LightningElement,api } from 'lwc';

export default class SpreadChildComp extends LightningElement {
    @api username
    @api age
}
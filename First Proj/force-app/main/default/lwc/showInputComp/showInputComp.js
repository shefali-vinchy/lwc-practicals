import { LightningElement,api } from 'lwc';

export default class ShowInputComp extends LightningElement {
    @api input=''

    get isInput1(){
        console.log('isInput1 called')
        return this.input === 'input1' 
    }

    get isInput2(){
        return this.input === 'input2'
    }
    get isInput3(){
        console.log('isInput1 called')
        return this.input === 'input3' 
    }
}
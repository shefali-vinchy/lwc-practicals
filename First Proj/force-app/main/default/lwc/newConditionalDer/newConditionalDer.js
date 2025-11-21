import { LightningElement } from 'lwc';

export default class NewConditionalDer extends LightningElement {
      selectVal = '';
      inputOptions = [
        {
            label: 'Input 1',
            value: 'input1',
        },
        {
            label: 'Input 2',
            value: 'input2',
        },
        {
            label: 'Input 3',
            value: 'input3',
        },
    ];

    handleChange(event){
        this.selectVal = event.target.value;
    }

}
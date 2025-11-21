import { LightningElement } from 'lwc';

export default class SpreadParentComp extends LightningElement {
    childProps={
        username: 'shefali@gmail.com',
        age: 35,
        city: "Alpharetta",
        onclick: this.clickHandler.bind(this)
    }

    clickHandler(){
        this.childProps = {...this.childProps,age: this.childProps.age+1}
    }

}
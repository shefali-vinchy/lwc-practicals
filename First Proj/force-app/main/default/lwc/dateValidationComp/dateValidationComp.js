import { LightningElement } from 'lwc';

export default class DateValidationComp extends LightningElement {
    startDate
    endDate
    error

    dateChangeHandler(event){
        const {name,value} = event.target
        this[name] = value
    }

    submitHandler(){
        
        if(this.validateDate(this.startDate, this.endDate)){
            console.log('Date Valid')
        }
        else{
            this.error = 'End Date cannot be less than Start Date'
        }
    }

    validateDate(startDate,endDate){
        return new Date(startDate).getTime() < new Date(endDate).getTime()
    }
}
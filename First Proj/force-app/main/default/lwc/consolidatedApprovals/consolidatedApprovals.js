import { LightningElement } from 'lwc';

const accountColumns=[
    {label:'Name', fieldName: 'Name', type: 'text'},
    {label:'Email', fieldName: 'Email', type: 'text'},
    {label:'BillingCity', fieldName: 'BillingCity', type: 'text'}
]

const oppColumns =[
    {label:'StageName', fieldName: 'StageName', type: 'text'},
    {label:'Amount', fieldName: 'Amount', type: 'text'},
    {label:'Type', fieldName: 'Type', type: 'text'}
]
const caseColumns =[
    {label:'Subject', fieldName: 'Subject', type: 'text'},
    {label:'AccountId', fieldName: 'AccountId', type: 'text'},
    {label:'OwnerId', fieldName: 'OwnerId', type: 'text'}
]
export default class ConsolidatedApprovals extends LightningElement {
    accountColumns =accountColumns
    oppColumns = oppColumns
    caseColumns = caseColumns
    
    accountApprovals =[]
    opportunityApprovals =[]
    caseApprovals =[]
}
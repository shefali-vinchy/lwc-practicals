public with sharing class fetchApprovals {

    @AuraEnabled
    public static List<Approval> methodName(){
        try {
            return [SELECT Id, Status ,TargetObjectId FROM ProcessInstance where Status =: 'Pending'];
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }

    @AuraEnabled(cacheable = true)
    public static List<Account> getAccounts() {
        return [Select Id, Name, Email, BillingCity from Account ];
    }

     @AuraEnabled(cacheable = true)
    public static List<Opportunity> getOpportunities() {
        return [Select Id, StageName,Amount,Type from Opportunity ];
    }

    @AuraEnabled(cacheable = true)
    public static List<Case> getCases() {
        return [Select Id, AccountId, Subject, OwnerId from case ];
    }
    
}
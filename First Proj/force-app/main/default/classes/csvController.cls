public with sharing class csvController {

     @AuraEnabled(cacheable = true)
    public static List<Account> getAccounts() {
        return [Select Id, Name, Phone, AnnualRevenue, Industry from Account ];
    }
}
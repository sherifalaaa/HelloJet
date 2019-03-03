/**
 * @license
 * Copyright (c) 2014, 2019, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
/*
 * Your incidents ViewModel code goes here
 */
define(['ojs/ojcore', 'knockout', 'jquery','text!data/data.json', 'ojs/ojchart', 'ojs/ojselectcombobox', 
        'ojs/ojknockout', 'ojs/ojcomposite','ojs/ojaccordion', 'ojs/ojradioset','ojs/ojbutton','ojs/ojavatar',
        'ojs/ojvalidation','ojs/ojlabel','ojs/ojgauge', 'ojs/ojdatetimepicker', 'ojs/ojtimezonedata','promise',
        'ojs/ojlistview', 'ojs/ojtable', 'ojs/ojarraydataprovider', 'ojs/ojslider', 'ojs/ojnavigationlist',
        'ojs/ojradioset', 'ojs/ojswitch'],
 function(oj, ko, $, file) {
  
    function IncidentsViewModel() {
      var self = this;
      
      var data =  JSON.parse(file);
                
      self.datasource = ko.observableArray(data);
      self.val = ko.observable("pie");
      
      self.firstName = 'Sherif';
      self.lastName = 'Alaa';
      self.initials = oj.IntlConverterUtils.getInitials(self.firstName,self.lastName);
      self.avatarSize = ko.observable("md");
      
      self.ratingValue2 = ko.observable(3);
       
      
      self.value = ko.observable(oj.IntlConverterUtils.dateToLocalIso(new Date(2019, 0, 1)));
      
       var deptArray = [{DepartmentId: 1001, DepartmentName: 'ADFPM 1001 neverending', LocationId: 200, ManagerId: 300},
        {DepartmentId: 556, DepartmentName: 'BB', LocationId: 200, ManagerId: 300},
        {DepartmentId: 10, DepartmentName: 'Administration', LocationId: 200, ManagerId: 300},
        {DepartmentId: 20, DepartmentName: 'Marketing', LocationId: 200, ManagerId: 300},
        {DepartmentId: 30, DepartmentName: 'Purchasing', LocationId: 200, ManagerId: 300},
        {DepartmentId: 40, DepartmentName: 'Human Resources1', LocationId: 200, ManagerId: 300},
        {DepartmentId: 50, DepartmentName: 'Administration2', LocationId: 200, ManagerId: 300}];
         
        self.dataprovider = new oj.ArrayDataProvider(deptArray, {idAttribute: 'DepartmentId'});
        
        self.max = ko.observable(200);
        self.min = ko.observable(0);
        self.valuee = ko.observable(90);
        self.step = ko.observable(10);
      
        
        self.selectedItem = ko.observable("home");
        self.edge = ko.observable("top");
        
        
      
      
                
            
      // Below are a set of the ViewModel methods invoked by the oj-module component.
      // Please reference the oj-module jsDoc for additional information.

      /**
       * Optional ViewModel method invoked after the View is inserted into the
       * document DOM.  The application can put logic that requires the DOM being
       * attached here. 
       * This method might be called multiple times - after the View is created 
       * and inserted into the DOM and after the View is reconnected 
       * after being disconnected.
       */
      self.connected = function() {
        // Implement if needed
      };

      /**
       * Optional ViewModel method invoked after the View is disconnected from the DOM.
       */
      self.disconnected = function() {
        // Implement if needed
      };

      /**
       * Optional ViewModel method invoked after transition to the new View is complete.
       * That includes any possible animation between the old and the new View.
       */
      self.transitionCompleted = function() {
        // Implement if needed
      };
    }

    /*
     * Returns a constructor for the ViewModel so that the ViewModel is constructed
     * each time the view is displayed.  Return an instance of the ViewModel if
     * only one instance of the ViewModel is needed.
     */
    return new IncidentsViewModel();
  }
);

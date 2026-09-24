class finalDashboard{

    // Elements
    gotoDirectory(){
        cy.get('a[href*="/viewDirectory"]',{timeout:30000}).click()
    }
    verifyDirectoryUrl(){
        cy.url({timeout:30000}).should('include','/viewDirectory')
    }
    verifyDirectoryMenu(){
        cy.get('h6',{timeout:30000}).should('be.visible').and('contains.text','Directory')
    }
    verfiyDirectorySidePanel(){
        cy.get('a[href*="/viewDirectory"]').should('be.visible')
    }
    searchEmployeebyFirstName(employeeFirstName){
        cy.get('input[placeholder="Type for hints..."]',{timeout:30000}).should('be.visible').type(employeeFirstName)
        cy.get('.oxd-autocomplete-option',{timeout:30000}).contains(employeeFirstName,{timeout:30000}).click()
        cy.get('button[type="submit"]').click()
    }
    searchEmployeebyMiddleName(employeeMiddleName){
        cy.get('input[placeholder="Type for hints..."]',{timeout:30000}).should('be.visible').type(employeeMiddleName)
        cy.get('.oxd-autocomplete-option',{timeout:30000}).contains(employeeMiddleName,{timeout:30000}).click()
        cy.get('button[type="submit"]').click()
    }
    searchEmployeebyLastName(employeeLastName){
        cy.get('input[placeholder="Type for hints..."]',{timeout:30000}).should('be.visible').type(employeeLastName)
        cy.get('.oxd-autocomplete-option',{timeout:30000}).contains(employeeLastName,{timeout:30000}).click()
        cy.get('button[type="submit"]').click()
    }    
    verifyEmployeebyName(foundEmployee){
        cy.get('.orangehrm-container',{timeout:30000}).should('be.visible').and('contain.text',foundEmployee)
    }
    searchInvalidEmpoyeebyName(nonRegisteredEmployeeName){
        cy.get('input[placeholder="Type for hints..."]',{timeout:30000}).should('be.visible').type(nonRegisteredEmployeeName)   
    }
    verifyInvalidEmployee(){
        cy.get('.oxd-autocomplete-dropdown',{timeout:30000}).first().click();
        cy.get('.oxd-input-field-error-message',{timeout:30000}).should('be.visible').contains('Invalid')
    }
    searchActiveEmployeebyJob(activeEmployeeJob){
        cy.get('.oxd-select-text--arrow',{timeout:300000}).eq(0).click()
        cy.get('div[role="listbox"]',{timeout:300000}).contains(activeEmployeeJob,{timeout:300000}).click()
        cy.get('button[type="submit"]').click()
    }
    verifyActiveEmployeebyJob(activeEmployeeJob){
        cy.get('.orangehrm-container',{timeout:30000}).should('be.visible').and('contain.text',activeEmployeeJob)
    }
    searchEmptyEmployeebyJob(emptyEmployeeJob){
        cy.get('.oxd-select-text--arrow',{timeout:300000}).eq(0).click()
        cy.get('div[role="listbox"]',{timeout:300000}).contains(emptyEmployeeJob,{timeout:30000}).click()
        cy.get('button[type="submit"]').click()
    }
    verifyEmptyEmployeebyJob(){
        cy.get('span[class="oxd-text oxd-text--span"]',{timeout:30000}).should('be.visible').and('contain.text','No Records Found')
    }
    searchActiveEmployeebyLocation(activeEmployeeLocation){
        cy.get('.oxd-select-text--arrow',{timeout:300000}).eq(1).click()
        cy.get('div[role="listbox"]',{timeout:300000}).contains(activeEmployeeLocation,{timeout:30000}).click()
        cy.get('button[type="submit"]').click()
    }
    verifyActiveEmployeebyLocation(activeEmployeeLocation){
        cy.get('.orangehrm-container',{timeout:30000}).should('be.visible').and('contain.text',activeEmployeeLocation)
    }
    searchEmptyEmployeebyLocation(emptyEmployeeLocation){
        cy.get('.oxd-select-text--arrow',{timeout:300000}).eq(1).click()
        cy.get('div[role="listbox"]',{timeout:300000}).contains(emptyEmployeeLocation,{timeout:30000}).click()
        cy.get('button[type="submit"]').click()
    }
    verifyEmptyEmployeebyLocation(){
        cy.get('span[class="oxd-text oxd-text--span"]',{timeout:30000}).should('be.visible').and('contain.text','No Records Found')
    }
    searchActiveEmployeebyNameJobandLocation(employeeFirstName,activeEmployeeJob,activeEmployeeLocation){
        // Search by name
        cy.get('input[placeholder="Type for hints..."]',{timeout:30000}).should('be.visible').type(employeeFirstName)
        cy.get('.oxd-autocomplete-option',{timeout:30000}).contains(employeeFirstName,{timeout:30000}).click()
        
        // Search by job title
        cy.get('.oxd-select-text--arrow',{timeout:30000}).eq(0).click()
        cy.get('div[role="listbox"]',{timeout:30000}).contains(activeEmployeeJob,{timeout:30000}).click()

         // Search by location
        cy.get('.oxd-select-text--arrow',{timeout:30000}).eq(1).click()
        cy.get('div[role="listbox"]',{timeout:30000}).contains(activeEmployeeLocation,{timeout:30000}).click()

        // Search combination
        cy.get('button[type="submit"]').click() 
    }
    verifyActiveEmployeebyNameJobandLocation(foundEmployee,activeEmployeeJob,activeEmployeeLocation){
        
        // Verification combination
        cy.get('.orangehrm-container',{timeout:30000}).should('be.visible').and('contain.text',foundEmployee)
        cy.get('.orangehrm-container',{timeout:30000}).should('be.visible').and('contain.text',activeEmployeeJob)
        cy.get('.orangehrm-container',{timeout:30000}).should('be.visible').and('contain.text',activeEmployeeLocation)
    }
    
    // API intercepts & verify
    interceptDirectoryPage(){
        cy.intercept('GET','/web/index.php/directory/viewDirectory').as('viewDirectory')
    }
    verifyInterceptDirectoryPage(){
        cy.wait('@viewDirectory').its('response.statusCode').should('equal',200)
    }    
    interceptEmployeeName(){
        cy.intercept('GET', '/web/index.php/api/v2/directory/employees*').as('employees')
    }
    verifyInterceptEmployeeName(){
        cy.wait('@employees').its('response.statusCode').should('equal',200)
    }
}
export default new finalDashboard ();
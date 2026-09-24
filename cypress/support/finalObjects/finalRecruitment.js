class finalRecruitment{
    // Elements
    gotoRecruitment(){
        cy.get('a[href*="/viewRecruitmentModule"]',{timeout:45000}).click()
    }
    verifyRecruitmentUrl(){
        cy.url({timeout:45000}).should('include','/viewCandidates')
    }
    verifyRecruitmentMenu(){
        cy.get('h6',{timeout:30000}).should('be.visible').and('contains.text','Recruitment')
    }
    searchActiveCandidatesbyJob(activeCandidatesJob){
        cy.get('.oxd-select-text--arrow',{timeout:450000}).eq(0).click()
        cy.get('div[role="listbox"]',{timeout:450000}).contains(activeCandidatesJob,{timeout:450000}).click()
        cy.get('button[type="submit"]').click()
    }
    verifyActiveCandidatesbyJob(activeCandidatesJob){
        cy.get('.orangehrm-container',{timeout:45000}).should('be.visible').and('contain.text',activeCandidatesJob)
    }
    searchEmptyCandidatesbyJob(emptyCandidatesJob){
        cy.get('.oxd-select-text--arrow',{timeout:450000}).eq(0).click()
        cy.get('div[role="listbox"]',{timeout:450000}).contains(emptyCandidatesJob,{timeout:45000}).click()
        cy.get('button[type="submit"]').click()
    }
    verifyEmptyCandidatesbyJob(){
        cy.get('span[class="oxd-text oxd-text--span"]',{timeout:45000}).should('be.visible').and('contain.text','No Records Found')
    }
    searchActiveCandidatesbyVacancy(activeCandidatesVacancy){
        cy.get('.oxd-select-text--arrow',{timeout:450000}).eq(1).click()
        cy.get('div[role="listbox"]',{timeout:450000}).contains(activeCandidatesVacancy,{timeout:45000}).click()
        cy.get('button[type="submit"]').click()
    }
    verifyActiveCandidatesbyVacancy(activeCandidatesVacancy){
        cy.get('.orangehrm-container',{timeout:45000}).should('be.visible').and('contain.text',activeCandidatesVacancy)
    }
    searchEmptyCandidatesbyVacancy(emptyCandidatesVacancy){
        cy.get('.oxd-select-text--arrow',{timeout:450000}).eq(1).click()
        cy.get('div[role="listbox"]',{timeout:450000}).contains(emptyCandidatesVacancy,{timeout:45000}).click()
        cy.get('button[type="submit"]').click()
    }
    verifyEmptyCandidatesbyVacancy(){
        cy.get('span[class="oxd-text oxd-text--span"]',{timeout:45000}).should('be.visible').and('contain.text','No Records Found')
    }


    //API intercepts & verify
    interceptRecruitmentPage(){
        cy.intercept('GET','/web/index.php/recruitment/viewRecruitmentModule').as('viewRecruitmentModule')
    }
    verifyInterceptRecruitmentPage(){
        cy.wait('@viewRecruitmentModule').its('response.statusCode').should('equal',200)
    }    
    interceptCandidatesName(){
        cy.intercept('GET', '/web/index.php/api/v2/recruitment/candidates*').as('candidates')
    }
    verifyInterceptCandidatesName(){
        cy.wait('@candidates').its('response.statusCode').should('equal',200)
    }
}
export default new finalRecruitment();
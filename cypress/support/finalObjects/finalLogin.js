class finalLogin {
    // Elements
    gotoPage() {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    }    
    getLink() {
        cy.url({timeout: 30000}).should('include', '/auth/login')
    }
    getFavicon() {
        cy.get('link[rel="icon"]',{timeout: 30000}).should('have.attr', 'href').and('include', 'favicon.ico')
    }
    getBranding() {
        cy.get('.orangehrm-login-branding',{timeout: 30000}).should('be.visible')
    }
    getLogo() {
        cy.get('.orangehrm-login-logo',{timeout: 30000}).should('be.visible')
    }
    clickForgotPasswordButton() {
        cy.get('.orangehrm-login-forgot-header',{timeout: 30000}).should('be.visible').click()
    }
    getForgotPasswordLink() {
        cy.url({timeout: 30000}).should('contain', '/requestPassword')
    }
    getUsername(username) {
        cy.get('input[name="username"]',{timeout: 30000}).type(username)
    }
    getPassword(password) {
        cy.get('input[name="password"]',{timeout: 30000}).type(password)
    }
    clickLoginButton() {
        cy.get('button[type="submit"]',{timeout: 30000}).click()
    }
    getUsernameErrorMessage() {
        cy.get('.oxd-input-group',{timeout: 30000})
            .contains('Username')
            .parents('.oxd-input-group')
            .find('.oxd-input-field-error-message')
            .should('be.visible')
            .and('have.text', 'Required')
    }
    getPasswordErrorMessage() {
        cy.get('.oxd-input-group',{timeout: 30000})
            .contains('Password')
            .parents('.oxd-input-group')
            .find('.oxd-input-field-error-message')
            .should('be.visible')
            .and('have.text', 'Required')
    }
    getInvalidCredentialsErrorMessage() {
        cy.get('.oxd-alert-content',{timeout: 30000}).should('be.visible').and('have.text', 'Invalid credentials')
    }
    getDashboardUrl() {
        cy.url({timeout: 30000}).should('include', '/dashboard')
    }

    // API intercepts & verify
    interceptLandingPage(){
        cy.intercept('GET', '/web/index.php/core/i18n/messages').as('messages')
    }
    verifyInterceptLandingPage(){
        cy.wait('@messages').its('response.statusCode').should('equal',200)
    }
    interceptForgotPassword(){
        cy.intercept('GET', '**/requestPasswordResetCode').as('forgotPassword')
    }
    verifyInterceptForgotPassword(){
        cy.wait('@forgotPassword').its('response.statusCode').should('equal', 200)
        cy.get('@forgotPassword.all').then((requests) => {
          expect(requests.length).to.eq(1)
      })
    }
    interceptLogin(){
        cy.intercept('POST', '/web/index.php/auth/validate').as('validate')
    }
    verifyInterceptLogin(){
        cy.wait('@validate').its('response.statusCode').should('equal', 302)
    }
}
export default new finalLogin()
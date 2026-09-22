class LoginHRM {
    // Elements
    gotoPage() {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    }
    getLink() {
        cy.url().should('include', '/auth/login');
    }
    getFavicon() {
        cy.get('link[rel="icon"]').should('have.attr', 'href').and('include', 'favicon.ico');
    }
    getBranding() {
        cy.get('.orangehrm-login-branding').should('be.visible');
    }
    getLogo() {
        cy.get('.orangehrm-login-logo').should('be.visible');
    }
    getForgotPasswordButton() {
        cy.get('.orangehrm-login-forgot-header',{timeout: 10000}).should('be.visible').click();
    }
    getForgotPasswordLink() {
        cy.url({timeout: 10000}).should('contain', '/requestPassword');
    }
    getUsername(username) {
        cy.get('input[name="username"]',{timeout: 10000}).type(username);
    }
    getPassword(password) {
        cy.get('input[name="password"]',{timeout: 10000}).type(password);
    }
    clickLoginButton() {
        cy.get('button[type="submit"]',{timeout: 10000}).click();
    }
    getUsernameErrorMessage() {
        cy.get('.oxd-input-group')
            .contains('Username')
            .parents('.oxd-input-group')
            .find('.oxd-input-field-error-message')
            .should('be.visible')
            .and('have.text', 'Required');
    }
    getPasswordErrorMessage() {
        cy.get('.oxd-input-group')
            .contains('Password')
            .parents('.oxd-input-group')
            .find('.oxd-input-field-error-message')
            .should('be.visible')
            .and('have.text', 'Required');
    }
    getInvalidCredentialsErrorMessage() {
        cy.get('.oxd-alert-content',{timeout: 10000}).should('be.visible').and('have.text', 'Invalid credentials');
    }
    getDashboardUrl() {
        cy.url({timeout: 10000}).should('include', '/dashboard');
    }
}
export default new LoginHRM();
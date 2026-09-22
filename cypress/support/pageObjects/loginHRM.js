class LoginPage {
    // Elements
    gotoPage() {
        return cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    }
    getLink() {
        return cy.url().should('include', '/auth/login');
    }
    getFavicon() {
        return cy.get('link[rel="icon"]').should('have.attr', 'href').and('include', 'favicon.ico');
    }
    getBranding() {
        return cy.get('.orangehrm-login-branding').should('be.visible');
    }
    getLogo() {
        return cy.get('.orangehrm-login-logo').should('be.visible');
    }
    getForgotPasswordButton() {
        return cy.get('.orangehrm-login-forgot-header',{timeout: 30000}).should('be.visible');
    }
    getForgotPasswordLink() {
        return cy.url({timeout: 30000}).should('contain', '/requestPassword');
    }
    inputUsername() {
        return cy.get('input[name="username"]',{timeout: 30000});
    }
    inputPassword() {
        return cy.get('input[name="password"]',{timeout: 30000});
    }
    clickLoginButton() {
        return cy.get('button[type="submit"]',{timeout: 15000}).click();
    }
    getUsernameErrorMessage() {
        return cy.get('.oxd-input-group')
            .contains('Username')
            .parents('.oxd-input-group')
            .find('.oxd-input-field-error-message')
            .should('be.visible')
            .and('have.text', 'Required');
    }
    getPasswordErrorMessage() {
        return cy.get('.oxd-input-group')
            .contains('Password')
            .parents('.oxd-input-group')
            .find('.oxd-input-field-error-message')
            .should('be.visible')
            .and('have.text', 'Required');
    }
    getInvalidCredentialsErrorMessage() {
        return cy.get('.oxd-alert-content',{timeout: 30000}).should('be.visible').and('have.text', 'Invalid credentials');
    }
    getDashboardUrl() {
        return cy.url({timeout: 30000}).should('include', '/dashboard');
    }
}
export default new LoginPage();
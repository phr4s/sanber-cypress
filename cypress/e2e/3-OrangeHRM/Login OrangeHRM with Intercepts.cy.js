describe('OrangeHRM login page test', () => {
    
    beforeEach(() => {
        // Intercept landing page API
        cy.intercept('GET', '/web/index.php/core/i18n/messages').as('messages');

        // Visit the login page before every test
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    });

    // Verify the url of the OrangeHRM login page
    it('LP-01 Verify the url of the OrangeHRM login page', () => {
        cy.url().should('contain', '/auth/login');

        // Verify the API response after the page load
        cy.wait('@messages').its('response.statusCode').should('equal',200);
    });

    // Verify login using non-registered account
    it('LP-02 Verify login using non-registered account ', () => {
        // Intercept login API
        cy.intercept('POST', '/web/index.php/auth/validate').as('validate');

        cy.get('input[name="username"]').should('be.visible').type('AIUEO');
        cy.get('input[name="password"]').should('be.visible').type('apajalah123');
        cy.get('button[type="submit"]').click();

        // Verify the API response for login
        cy.wait('@validate').its('response.statusCode').should('equal', 302);
    });

    // Verify login using registered account but wrong password
    it('LP-03 Verify login using registered account but wrong password', () => {
        // Intercept login API
        cy.intercept('POST', '/web/index.php/auth/validate').as('validate2');

        cy.get('input[name="username"]').should('be.visible').type('Admin');
        cy.get('input[name="password"]').should('be.visible').type('apajalah123');
        cy.get('button[type="submit"]').click();

        // Verify the API response for login
        cy.wait('@validate2').its('response.statusCode').should('equal', 302);
    });

    // Verify login using non-registered account and correct password
    it('LP-04 Verify login using non-registered account and correct password', () => {
        // Intercept login API
        cy.intercept('POST', '/web/index.php/auth/validate').as('validate3');

        cy.get('input[name="username"]').should('be.visible').type('AIUEO');
        cy.get('input[name="password"]').should('be.visible').type('admin123');
        cy.get('button[type="submit"]').click();

        // Verify the API response for login
        cy.wait('@validate3').its('response.statusCode').should('equal', 302);
    });

    // Verify login using registered account and password
    it('LP-05 Verify login using registered account and password', () => {
        // Intercept login API
        cy.intercept('POST', '/web/index.php/auth/validate').as('validate4');

        cy.get('input[name="username"]').should('be.visible').type('Admin');
        cy.get('input[name="password"]').should('be.visible').type('admin123');
        cy.get('button[type="submit"]').click();

        // Verify the API response for login
        cy.wait('@validate4').its('response.statusCode').should('equal', 302);

        cy.url().should('contain', '/dashboard');
    });

    // Verify login API should only called once when user click on login button
    it('LP-06 Verify login API should only called once when user click on login button', () => {
      // Intercept login API
      cy.intercept('POST', '**/auth/validate').as('validate');

      cy.get('input[name="username"]').should('be.visible').type('Admin');
      cy.get('input[name="password"]').should('be.visible').type('admin123');
      cy.get('button[type="submit"]').click(); 

      // Verify the request count for login API
      cy.wait('@validate');
      cy.get('@validate.all').then((requests) => {
        expect(requests.length).to.eq(1);
      });
    });

    // Verify Forgot your password? button hyperlink
    it('LP-07 Verify Forgot your password? button hyperlink', () => {
        // Intercept forgot password API
        cy.intercept('GET', '**/requestPasswordResetCode').as('forgotPassword');

        cy.get('.orangehrm-login-forgot-header').should('be.visible').click();

        // Verify the API response for forgot password
        cy.wait('@forgotPassword').its('response.statusCode').should('equal', 200);

        cy.url().should('contain', '/requestPassword');
    });
    
    // Verify forgot password API should only called once when user click on forgot password button
    it('LP-08 Verify forgot password API should only called once when user click on forgot password button', () => {
      // Intercept forgot password API
      cy.intercept('GET', '**/requestPasswordResetCode').as('forgotPassword');

      cy.get('.orangehrm-login-forgot-header').should('be.visible').click();

      // Verify the request count for forgot password API
      cy.wait('@forgotPassword');
      cy.get('@forgotPassword.all').then((requests) => {
        expect(requests.length).to.eq(1);
      });
    });
});
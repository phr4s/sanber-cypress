import loginData from '../../../fixtures/loginData.json';
import loginHRM from '../../../support/pageObjects/loginHRM.js';


describe('Login OrangeHRM with POM', () => {
    beforeEach(() => {

        // Visit OrangeHRM login page
        loginHRM.gotoPage();
        });
        
    // Verify the url of the OrangeHRM login page
    it('LP-01 Verify the url of the OrangeHRM login page', () => {
        loginHRM.getLink();
    });

    // Verify UI elements on the OrangeHRM login page
    it('LP-02 Verify UI elements on the OrangeHRM login page', () => {
        loginHRM.getFavicon();
        loginHRM.getBranding();
        loginHRM.getLogo();
    })

    // Verify Forgot your password? button hyperlink
    it('LP-03 Verify Forgot your password? button hyperlink', () => {
        loginHRM.getForgotPasswordButton().click();
        loginHRM.getForgotPasswordLink();
    })

    // Verify mandatory field validation in the login page
    it('LP-04 Verify mandatory field validation in the login page', () => {
        loginHRM.inputUsername().clear();
        loginHRM.inputPassword().clear();
        loginHRM.clickLoginButton();
        loginHRM.getUsernameErrorMessage();
        loginHRM.getPasswordErrorMessage();
    })

    //Verify login with registered password and empty username
    it('LP-05 Verify login with registered password and empty username', () => {
        loginHRM.inputUsername().clear();
        loginHRM.inputPassword().type(loginData.validPassword);
        loginHRM.clickLoginButton();
        loginHRM.getUsernameErrorMessage();
    })

    // Verify login with registered username and empty password
    it('LP-06 Verify login with registered username and empty password', () => {
        loginHRM.inputUsername().type(loginData.validUsername);
        loginHRM.inputPassword().clear();
        loginHRM.clickLoginButton();
        loginHRM.getPasswordErrorMessage();
    })

    // Verify login using non-registered account
    it('LP-07 Verify login using non-registered account', () => {
        loginHRM.inputUsername().type(loginData.invalidUsername);
        loginHRM.inputPassword().type(loginData.invalidPassword);
        loginHRM.clickLoginButton();
        loginHRM.getInvalidCredentialsErrorMessage();
    })

    // Verify login using registered account
    it('LP-08 Verify login using registered account', () => {
        loginHRM.inputUsername().type(loginData.validUsername);
        loginHRM.inputPassword().type(loginData.validPassword);
        loginHRM.clickLoginButton();
        loginHRM.getDashboardUrl();
    })
})

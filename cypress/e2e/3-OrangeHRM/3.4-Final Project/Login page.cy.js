import finalLogin from '../../../support/finalObjects/finalLogin.js';
import finalData from '../../../fixtures/finalData.json'

describe('Login page automation using POM and assertion', () => {

    beforeEach(() => {

        // Intercept landing page API
        finalLogin.interceptLandingPage();

        // Visit OrangeHRM login page
        finalLogin.gotoPage();
        });
        
    // Verify the url of the OrangeHRM login page
    it('LP-01 Verify the url of the OrangeHRM login page', () => {
        finalLogin.verifyInterceptLandingPage();
        finalLogin.getLink();
    });

    // Verify UI elements on the OrangeHRM login page
    it('LP-02 Verify UI elements on the OrangeHRM login page', () => {
        finalLogin.getFavicon();
        finalLogin.getBranding();
        finalLogin.getLogo();
    })

    // Verify Forgot your password? button hyperlink
    it('LP-03 Verify Forgot your password? button hyperlink', () => {
        finalLogin.interceptForgotPassword();
        finalLogin.clickForgotPasswordButton();
        finalLogin.verifyInterceptForgotPassword();
        finalLogin.getForgotPasswordLink();
    })

    // Verify mandatory field validation in the login page
    it('LP-04 Verify mandatory field validation in the login page', () => {
        finalLogin.clickLoginButton();
        finalLogin.getUsernameErrorMessage();
        finalLogin.getPasswordErrorMessage();
    })

    //Verify login with registered password and empty username
    it('LP-05 Verify login with registered password and empty username', () => {
        finalLogin.getPassword(finalData.validPassword);
        finalLogin.clickLoginButton();
        finalLogin.getUsernameErrorMessage();
    })

    // Verify login with registered username and empty password
    it('LP-06 Verify login with registered username and empty password', () => {
        finalLogin.getUsername(finalData.validUsername);
        finalLogin.clickLoginButton();
        finalLogin.getPasswordErrorMessage();
    })

    // Verify login using non-registered account
    it('LP-07 Verify login using non-registered account', () => {
        finalLogin.interceptLogin();
        finalLogin.getUsername(finalData.invalidUsername);
        finalLogin.getPassword(finalData.invalidPassword);
        finalLogin.clickLoginButton();
        finalLogin.verifyInterceptLogin();
        finalLogin.getInvalidCredentialsErrorMessage();
    })

    // Verify login using registered username and wrong password
    it('LP-08 Verify login using registered username and wrong password', () => {
        finalLogin.interceptLogin();
        finalLogin.getUsername(finalData.validUsername);
        finalLogin.getPassword(finalData.invalidPassword);
        finalLogin.clickLoginButton();
        finalLogin.verifyInterceptLogin();
        finalLogin.getInvalidCredentialsErrorMessage();
    })

    // Verify login using wrong username and registered password
    it('LP-09 Verify login using registered username and wrong password', () => {
        finalLogin.interceptLogin();
        finalLogin.getUsername(finalData.invalidUsername);
        finalLogin.getPassword(finalData.validPassword);
        finalLogin.clickLoginButton();
        finalLogin.verifyInterceptLogin();
        finalLogin.getInvalidCredentialsErrorMessage();
    })

    // Verify login using registered account
    it('LP-10 Verify login using registered account', () => {
        finalLogin.interceptLogin();
        finalLogin.getUsername(finalData.validUsername);
        finalLogin.getPassword(finalData.validPassword);
        finalLogin.clickLoginButton();
        finalLogin.verifyInterceptLogin();
        finalLogin.getDashboardUrl();
    })
})
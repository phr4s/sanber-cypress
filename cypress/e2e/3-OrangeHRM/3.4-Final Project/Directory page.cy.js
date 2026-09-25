import finalLogin from '../../../support/finalObjects/finalLogin.js'
import finalDirectory from '../../../support/finalObjects/finalDirectory.js'
import finalData from '../../../fixtures/finalData.json'

describe('Directory page automation using POM and assertion', () => {

    // Login into OrangeHRM
    beforeEach(() =>{
        finalLogin.gotoPage();
        finalLogin.getUsername(finalData.validUsername);
        finalLogin.getPassword(finalData.validPassword);
        finalLogin.clickLoginButton();
        finalDirectory.interceptDirectoryPage();
        finalDirectory.gotoDirectory();
    })

    // Verify directory landing page
    it('DC-01 Verify directory landing page', () => {
        finalDirectory.verifyInterceptDirectoryPage();
        finalDirectory.verifyDirectoryMenuandURL();
        finalDirectory.verfiyDirectorySidePanel();
    })

    // Search existing employee using employee first name
    it('DC-02 Search existing employee using employee first name', () => {
        finalDirectory.interceptEmployeeName();
        finalDirectory.searchEmployeebyName(finalData.employeeFirstName);
        finalDirectory.verifyInterceptEmployeeSearchbyName();
        finalDirectory.verifyEmployeebyName(false,finalData.employeeFirstName);        
    })

    // Search existing employee using employee middle name
    it('DC-03 Search existing employee using employee middle name', () => {
        finalDirectory.interceptEmployeeName();
        finalDirectory.searchEmployeebyName(finalData.employeeMiddleName);
        finalDirectory.verifyInterceptEmployeeSearchbyName();
        finalDirectory.verifyEmployeebyName(false,finalData.employeeMiddleName);
    })

    // Search existing employee using employee last name
    it('DC-04 Search existing employee using employee last name', () => {
        finalDirectory.interceptEmployeeName();
        finalDirectory.searchEmployeebyName(finalData.employeeLastName);
        finalDirectory.verifyInterceptEmployeeSearchbyName();
        finalDirectory.verifyEmployeebyName(false,finalData.employeeLastName);
    })
    
    // Search non-registered employee
    it('DC-05 Search non-registered employee', () => {
        finalDirectory.interceptEmployeeName();
        finalDirectory.searchEmployeebyName(finalData.nonRegisteredEmployeeName,false);
        finalDirectory.verifyInterceptEmployeeSearchbyOthers();
        finalDirectory.verifyEmployeebyName(true);
    })

    // Search job with active employee
    it('DC-06 Search job with active employee', () => {
        finalDirectory.interceptEmployeeName();
        finalDirectory.searchEmployeebyJob(finalData.activeEmployeeJob);
        finalDirectory.verifyInterceptEmployeeSearchbyOthers();
        finalDirectory.verifyEmployeebyJob(false,finalData.activeEmployeeJob);
    })

    // Search job without employee
    it('DC-07 Search job without employee', () => {
        finalDirectory.interceptEmployeeName();
        finalDirectory.searchEmployeebyJob(finalData.emptyEmployeeJob);
        finalDirectory.verifyInterceptEmployeeSearchbyOthers();
        finalDirectory.verifyEmployeebyJob(true);
    })

    // Search location with active employee
    it('DC-08 Search location with active employee', () => {
        finalDirectory.interceptEmployeeName();
        finalDirectory.searchEmployeebyLocation(finalData.activeEmployeeLocation);
        finalDirectory.verifyInterceptEmployeeSearchbyOthers();
        finalDirectory.verifyEmployeebyLocation(false,finalData.activeEmployeeLocation);
    })

    // Search location with empty employee
    it('DC-09 Search location with empty employee', () => {
        finalDirectory.interceptEmployeeName();
        finalDirectory.searchEmployeebyLocation(finalData.emptyEmployeeLocation);
        finalDirectory.verifyInterceptEmployeeSearchbyOthers();
        finalDirectory.verifyEmployeebyLocation(true);
    })

    // Search specific employee by name, job title, and location
    it('DC-10 Search specific employee by name, job title, and location', () => {
        finalDirectory.interceptEmployeeName();
        finalDirectory.searchEmployeebyNameJobandLocation(
            finalData.employeeFirstName,
            finalData.activeEmployeeJob,
            finalData.activeEmployeeLocation
        );
        finalDirectory.verifyInterceptEmployeeSearchbyName();
        finalDirectory.verifyEmployeebyNameJobandLocation(
            finalData.employeeFirstName,
            finalData.activeEmployeeJob,
            finalData.activeEmployeeLocation
        );
    })
})
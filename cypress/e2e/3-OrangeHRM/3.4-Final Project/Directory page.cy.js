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
        finalDirectory.verifyDirectoryUrl();
        finalDirectory.verifyDirectoryMenu();
        finalDirectory.verfiyDirectorySidePanel();
    })

    // Search existing employee using employee first name
    it('DC-02 Search existing employee using employee first name', () => {
        finalDirectory.interceptEmployeeName();
        finalDirectory.searchEmployeebyFirstName(finalData.employeeFirstName);
        finalDirectory.verifyInterceptEmployeeName();
        finalDirectory.verifyEmployeebyName(finalData.employeeFirstName);        
    })

    // Search existing employee using employee middle name
    it('DC-03 Search existing employee using employee middle name', () => {
        finalDirectory.interceptEmployeeName();
        finalDirectory.searchEmployeebyMiddleName(finalData.employeeMiddleName);
        finalDirectory.verifyInterceptEmployeeName();
        finalDirectory.verifyEmployeebyName(finalData.employeeMiddleName);
    })

    // Search existing employee using employee last name
    it('DC-04 Search existing employee using employee last name', () => {
        finalDirectory.interceptEmployeeName();
        finalDirectory.searchEmployeebyLastName(finalData.employeeLastName);
        finalDirectory.verifyInterceptEmployeeName();
        finalDirectory.verifyEmployeebyName(finalData.employeeLastName);
    })
    
    // Search non-registered employee
    it('DC-05 Search non-registered employee', () => {
        finalDirectory.interceptEmployeeName();
        finalDirectory.searchInvalidEmpoyeebyName(finalData.nonRegisteredEmployeeName);
        finalDirectory.verifyInterceptEmployeeName();
        finalDirectory.verifyInvalidEmployee();
    })

    // Search job with active employee
    it('DC-06 Search job with active employee', () => {
        finalDirectory.interceptEmployeeName();
        finalDirectory.searchActiveEmployeebyJob(finalData.activeEmployeeJob);
        finalDirectory.verifyInterceptEmployeeName();
        finalDirectory.verifyActiveEmployeebyJob(finalData.activeEmployeeJob);
    })

    // Search job without employee
    it('DC-07 Search job without employee', () => {
        finalDirectory.interceptEmployeeName();
        finalDirectory.searchEmptyEmployeebyJob(finalData.emptyEmployeeJob);
        finalDirectory.verifyInterceptEmployeeName();
        finalDirectory.verifyEmptyEmployeebyJob(finalData.emptyEmployeeJob);
    })

    // Search location with active employee
    it('DC-08 Search location with active employee', () => {
        finalDirectory.interceptEmployeeName();
        finalDirectory.searchActiveEmployeebyLocation(finalData.activeEmployeeLocation);
        finalDirectory.verifyInterceptEmployeeName();
        finalDirectory.verifyActiveEmployeebyLocation(finalData.activeEmployeeLocation);
    })

    // Search location with empty employee
    it('DC-09 Search location with empty employee', () => {
        finalDirectory.interceptEmployeeName();
        finalDirectory.searchEmptyEmployeebyLocation(finalData.emptyEmployeeLocation);
        finalDirectory.verifyInterceptEmployeeName();
        finalDirectory.verifyEmptyEmployeebyLocation(finalData.emptyEmployeeLocation);
    })

    // Search specific employee by name, job title, and location
    it('DC-10 Search specific employee by name, job title, and location', () => {
        finalDirectory.interceptEmployeeName();
        finalDirectory.searchActiveEmployeebyNameJobandLocation(
            finalData.employeeFirstName,
            finalData.activeEmployeeJob,
            finalData.activeEmployeeLocation
        );
        finalDirectory.verifyInterceptEmployeeName();
        finalDirectory.verifyActiveEmployeebyNameJobandLocation(
            finalData.employeeFirstName,
            finalData.activeEmployeeJob,
            finalData.activeEmployeeLocation
        );
    })
})
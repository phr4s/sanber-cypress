import finalLogin from '../../../support/finalObjects/finalLogin.js'
import finalRecruitment from '../../../support/finalObjects/finalRecruitment'
import finalData from '../../../fixtures/finalData.json'

describe('Recruitment page automation using POM and assertion', () => {
    beforeEach(() =>{
        finalLogin.gotoPage();
        finalLogin.getUsername(finalData.validUsername);
        finalLogin.getPassword(finalData.validPassword);
        finalLogin.clickLoginButton();
        finalRecruitment.interceptRecruitmentPage();
        finalRecruitment.gotoRecruitment();
    })
    
    // Verify recruitment landing page
    it('RC-01 Verify recruitment landing page', () => {
        finalRecruitment.verifyInterceptRecruitmentPage();
        finalRecruitment.verifyRecruitmentMenuandUrl();
    })

    // Search job with active candidates
    it('RC-02 Search job with active candidates', () => {
        finalRecruitment.interceptCandidatesName();
        finalRecruitment.searchCandidatesbyJob(finalData.activeCandidatesJob);
        finalRecruitment.verifyInterceptCandidatesbyOther();
        finalRecruitment.verifyCandidatesbyJob(false,finalData.activeCandidatesJob);
    })

    // Search job without candidates
    it('RC-03 Search job without candidates', () => {
        finalRecruitment.interceptCandidatesName();
        finalRecruitment.searchCandidatesbyJob(finalData.emptyCandidatesJob);
        finalRecruitment.verifyInterceptCandidatesbyOther();
        finalRecruitment.verifyCandidatesbyJob(true);
    })

    // Search vacancy with active candidates
    it('RC-04 Search vacancy with active candidates', () => {
        finalRecruitment.interceptCandidatesName();
        finalRecruitment.searchCandidatesbyVacancy(finalData.acviteCandidatesVacancy);
        finalRecruitment.verifyInterceptCandidatesbyOther();
        finalRecruitment.verifyCandidatesbyVacancy(false,finalData.acviteCandidatesVacancy);
    })

    // Search vacancy without candidates
    it('RC-05 Search vacancy without candidates', () => {
        finalRecruitment.interceptCandidatesName();
        finalRecruitment.searchCandidatesbyVacancy(finalData.emptyCandidatesVacancy);
        finalRecruitment.verifyInterceptCandidatesbyOther();
        finalRecruitment.verifyCandidatesbyVacancy(true);
    })

    // Search candidates by name
    it('RC-06 Search candidates by name', () => {
        finalRecruitment.interceptCandidatesName();
        finalRecruitment.searchCandidatesbyName(finalData.activeCandidatesName);
        finalRecruitment.verifyInterceptCandidatesbyName();
        finalRecruitment.verifyCandidatesbyName(false,finalData.activeCandidatesName)
    })
    // Search non-candidates by name
    it('RC-07 Search non-candidates by name', () => {
        finalRecruitment.interceptCandidatesName();
        finalRecruitment.searchCandidatesbyName(finalData.nonCandidatesName,false);
        finalRecruitment.verifyInterceptCandidatesbyName();
        finalRecruitment.verifyCandidatesbyName(true)
    })

    // Search specific candidates by job, vacancy, and name
    it('RC-08 Search specific candidates by job, vacancy, and name', () => {
        finalRecruitment.interceptCandidatesName();
        finalRecruitment.searchCandidatesbyNameJobandVacancy(
            finalData.activeCandidatesJob,
            finalData.acviteCandidatesVacancy,
            finalData.activeCandidatesName
        );
        finalRecruitment.verifyInterceptCandidatesbyName;
        finalRecruitment.verifyCandidatesbyNameJobandVacancy(
            finalData.activeCandidatesJob,
            finalData.acviteCandidatesVacancy,
            finalData.activeCandidatesName
        );
    })
})
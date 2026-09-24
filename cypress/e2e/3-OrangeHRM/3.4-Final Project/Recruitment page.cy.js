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
        finalRecruitment.verifyRecruitmentUrl();
        finalRecruitment.verifyRecruitmentMenu();
    })

    // Search job with active candidates
    it('RC-02 Search job with active candidates', () => {
        finalRecruitment.interceptCandidatesName();
        finalRecruitment.searchActiveCandidatesbyJob(finalData.activeCandidatesJob);
        finalRecruitment.verifyInterceptCandidatesName();
        finalRecruitment.verifyActiveCandidatesbyJob(finalData.activeCandidatesJob);
    })

    // Search job without candidates
    it('RC-03 Search job without candidates', () => {
        finalRecruitment.interceptCandidatesName();
        finalRecruitment.searchEmptyCandidatesbyJob(finalData.emptyCandidatesJob);
        finalRecruitment.verifyInterceptCandidatesName();
        finalRecruitment.verifyEmptyCandidatesbyJob(finalData.emptyCandidatesJob);
    })

    // Search vacancy with active candidates
    it('RC-04 Search vacancy with active candidates', () => {
        finalRecruitment.interceptCandidatesName();
        finalRecruitment.searchActiveCandidatesbyVacancy(finalData.acviteCandidatesVacancy);
        finalRecruitment.verifyInterceptCandidatesName();
        finalRecruitment.verifyActiveCandidatesbyVacancy(finalData.acviteCandidatesVacancy);
    })

    // Search vacancy without candidates
    it('RC-05 Search vacancy without candidates', () => {
        finalRecruitment.interceptCandidatesName();
        finalRecruitment.searchEmptyCandidatesbyVacancy(finalData.emptyCandidatesVacancy);
        finalRecruitment.verifyInterceptCandidatesName();
        finalRecruitment.verifyEmptyCandidatesbyVacancy(finalData.emptyCandidatesVacancy);
    })
})
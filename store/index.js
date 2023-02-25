import Vuex from "vuex";
import members from '/store/members';
import cases from '/store/cases';
import ventures from '/store/ventures';
import journal from '/store/journal';
import feedTemplate from '/store/feedTemplate';
import aboutPage from '/store/aboutPage';

const store = () => {
  return new Vuex.Store({
    namespaced: true,
    modules: {
      memberData: members,
      caseData: cases,
      ventureData: ventures,
      journalData: journal,
      feedData: feedTemplate,
      aboutPageData: aboutPage,
    }
  });
};

export default store
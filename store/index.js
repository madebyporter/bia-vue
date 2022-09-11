import Vuex from "vuex";
import members from '/store/members';
import cases from '/store/cases';
import ventures from '/store/ventures';

const store = () => {
  return new Vuex.Store({
    namespaced: true,
    modules: {
      memberData: members,
      caseData: cases,
      ventureData: ventures,
    }
  });
};

export default store
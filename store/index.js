import Vuex from "vuex";
import members from '/store/members';
import cases from '/store/cases';

const store = () => {
  return new Vuex.Store({
    namespaced: true,
    modules: {
      memberData: members,
      caseData: cases
    }
  });
};

export default store
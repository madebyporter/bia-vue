import client from "~/plugins/contentful";

export const state = () => ({
  cases: null
});

export const mutations = {
  updateCases: (state, cases) => {
    state.cases = cases;
  }
};

export const actions = {
  async getCases({ commit }) {
    try {
      if (!client) return;
      const response = await client.getEntries({
        content_type: "cases",
        include: 9
      });
      if (response.items.length > 0) commit("updateCases", response.items);
    } catch (err) {
      console.error(err);
    }
  }
};

export default {
  actions,
  mutations,
  state
}

import client from "~/plugins/contentful";

export const state = () => ({
  journal: null
});

export const mutations = {
  updateJournal: (state, journal) => {
    state.journal = journal;
  }
};

export const actions = {
  async getJournal({ commit }) {
    try {
      if (!client) return;
      const response = await client.getEntries({
        content_type: "journal",
        include: 9
      });
      if (response.items.length > 0) commit("updateJournal", response.items);
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
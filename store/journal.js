import client from "~/plugins/contentful";

export const state = () => ({
  journal: null,
  journalResourceList: null
});

export const mutations = {
  updateJournal: (state, journal) => {
    state.journal = journal;
  },
  updateJournalResourceList: (state, journalResourceList) => {
    state.journalResourceList = journalResourceList;
  }
};

export const actions = {
  async getJournal({ commit }) {
    try {
      if (!client) return;
      const [journalResponse, journalResourceListResponse] = await Promise.all([
        client.getEntries({
          content_type: "journal",
          include: 9
        }),
        client.getEntries({
          content_type: "journalResourceList",
          include: 9
        })
      ]);
      if (journalResponse.items.length > 0) {
        commit("updateJournal", journalResponse.items);
      }
      if (journalResourceListResponse.items.length > 0) {
        commit("updateJournalResourceList", journalResourceListResponse.items);
      }
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
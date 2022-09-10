import client from "~/plugins/contentful";

export const state = () => ({
  members: null
});

export const mutations = {
 updateMembers: (state, members) => {
   state.members = members;
 }
};

export const actions = {
  async getMembers({ commit }) {
    try {
      if (!client) return;
      const response = await client.getEntries({
        content_type: "member"
      });
      if (response.items.length > 0) commit("updateMembers", response.items);
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
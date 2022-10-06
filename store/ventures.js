import client from "~/plugins/contentful";

export const state = () => ({
  ventures: null
});

export const mutations = {
  updateVentures: (state, ventures) => {
    state.ventures = ventures;
  }
};

export const actions = {
  async getVentures({ commit }) {
    try {
      if (!client) return;
      const response = await client.getEntries({
        content_type: "ventures",
        include: 6
      });
      if (response.items.length > 0) commit("updateVentures", response.items);
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
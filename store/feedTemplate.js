import client from "~/plugins/contentful";

export const state = () => ({
  feedTemplate: null
});

export const mutations = {
  updateFeedTemplate: (state, feedTemplate) => {
    state.feedTemplate = feedTemplate;
  }
};

export const actions = {
  async getFeedTemplate({ commit }) {
    try {
      if (!client) return;
      const response = await client.getEntries({
        content_type: "feedTemplate",
        include: 9
      });
      if (response.items.length > 0) commit("updateFeedTemplate", response.items);
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

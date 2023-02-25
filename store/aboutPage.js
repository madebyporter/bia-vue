import client from "~/plugins/contentful";

export const state = () => ({
  aboutPage: null
});

export const mutations = {
  updateAboutPage: (state, aboutPage) => {
    state.aboutPage = aboutPage;
  }
};

export const actions = {
  async getAboutPage({ commit }) {
    try {
      if (!client) return;
      const response = await client.getEntries({
        content_type: "aboutPage",
        include: 9
      });
      if (response.items.length > 0) commit("updateAboutPage", response.items);
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

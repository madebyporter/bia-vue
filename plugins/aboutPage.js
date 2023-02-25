export default async ({ store }) => {  
  await store.dispatch("getAboutPage", null, { root: true }); 
};
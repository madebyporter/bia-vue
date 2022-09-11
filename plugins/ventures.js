export default async ({ store }) => {  
  await store.dispatch("getVentures", null, { root: true }); 
};
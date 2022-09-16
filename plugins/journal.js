export default async ({ store }) => {  
  await store.dispatch("getJournal", null, { root: true }); 
};
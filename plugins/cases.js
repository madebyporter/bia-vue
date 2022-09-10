export default async ({ store }) => {  
  await store.dispatch("getCases", null, { root: true }); 
};
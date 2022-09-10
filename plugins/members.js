export default async ({ store }) => {  
  await store.dispatch("getMembers", null, { root: true }); 
};
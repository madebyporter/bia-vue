export default async ({ store }) => {  
await store.dispatch("getFeedTemplate", null, { root: true }); 
};
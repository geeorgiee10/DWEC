<script setup>
  import { RouterView } from 'vue-router';

  import { useRouter } from 'vue-router';
  import { getCurrentUser } from 'vuefire';

  const router = useRouter();


  router.beforeEach(async (to, from) => {
    // ...
    // explicitly return false to cancel the navigation
    getCurrentUser();
    if(to.meta.requiresAuth){
      const user = await getCurrentUser();
      if(!user)
        return false;
      else
        return true;
    }
    else{
      return true;
    }
  })
  
</script>

<template>

  <RouterView></RouterView>

 
  

</template>

<style scoped>


  
</style>

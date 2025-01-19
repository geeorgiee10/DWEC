<script setup>
  import Pie from './components/Pie.vue';

  import { watch  } from 'vue'

  import { RouterView } from 'vue-router';

  import { useRouter } from 'vue-router';
  import { getCurrentUser } from 'vuefire';
  import { useCurrentUser} from 'vuefire'

  const router = useRouter();

  const user = useCurrentUser()


  router.beforeEach(async (to, from) => {
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

  watch(user, (newUser) => {
    if (newUser) {
      router.push("/recordatorios");
    }
  });
  
</script>

<template>

  <!-- <RouterLink to="/loguearse">Empieza a hacer las notas</RouterLink> -->

  <RouterView></RouterView>

  <Pie></Pie>

</template>

<style scoped>


  
</style>

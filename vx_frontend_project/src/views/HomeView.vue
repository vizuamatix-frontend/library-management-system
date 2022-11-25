<template>
  <SideBar />
  <!-- <FooterView /> -->
</template>

<script>
import SideBar from '@/components/SideBar.vue';
import { defineComponent } from 'vue';
// Components
 //import FooterView from "../components/FooterView.vue";
export default defineComponent({
  name: 'HomeView',
  components: {
    //FooterView,
    SideBar
},
});
</script>

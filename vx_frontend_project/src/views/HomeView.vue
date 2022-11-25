<template>
  <!-- <SideBar /> -->
  <FooterView />
  <img :src="require('../assets/BooRoomBackground.png')"/>
</template>

<script>
//import SideBar from '@/components/SideBar.vue';
import { defineComponent } from 'vue';
// Components
import FooterView from "../components/FooterView.vue";
export default defineComponent({
  name: 'HomeView',
  components: {
    FooterView,
    //SideBar
},
});
</script>

<style scoped>
img{
        position: absolute;
        width: 100%;
        height: 720px;
    }
</style>

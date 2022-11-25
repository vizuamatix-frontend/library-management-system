<template>
  <NavBar />
  <FooterView />
  <img :src="require('../assets/BooRoomBackground.png')"/>
</template>

<script>
//import SideBar from '@/components/SideBar.vue';
import { defineComponent } from 'vue';
// Components
import FooterView from "../components/FooterView.vue";
import NavBar from "../components/NavBar.vue";
export default defineComponent({
  name: 'HomeView',
  components: {
    FooterView,
    NavBar
},
});
</script>

<style scoped>
img{
        position: absolute;
        width: 100%;
        height: 650px;
    }
</style>

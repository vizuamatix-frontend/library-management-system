<script>
import SideBar from "@/components/SideBar.vue";
import Notice from "@/components/Notice.vue";
import { defineComponent } from "vue";

export default defineComponent({

  components: {
    SideBar,
    Notice,

  },
});
</script>

<template>
  <SideBar />
  <h2 class="title">Notices</h2>
  <dir class="table"><Notice /></dir>
  <div class="add-btn">
    <a style="text-decoration: none" href="addnotice">
      <v-btn color="warning" dark> Add New Notice </v-btn>
    </a>
  </div>
</template>

<style scoped>
.title {
  position: absolute;
  font-size: 40px;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
  top: 40px;
  left: 350px;
}

.table {
  position: absolute;
  /* margin: auto; */
  right: 100px;
  left: 350px;
  top: 150px;
}
.add-btn{
  position: absolute;
  margin: auto;
  margin-top: 550px;
  margin-right: 700px;
  
}
</style>

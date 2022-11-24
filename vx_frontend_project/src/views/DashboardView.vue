<script>
import SideBar from "@/components/SideBar.vue";
import Dashboard from "@/components/Dashboard/Dashboard.vue";
import { defineComponent } from "vue";

export default defineComponent({
  // name: 'BookView',

  components: {
    SideBar,
    Dashboard,
  },
});
</script>

<template>
  <SideBar />
  <h2 class="dashboard-title">Dashboard</h2>
  <dir><Dashboard /></dir>
</template>

<style>
.dashboard-title {
  position: absolute;
  font-size: 40px;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
  top: 40px;
  left: 720px;
}

.table {
  position: absolute;
  left: 300px;
  top: 150px;
}

.add-btn {
  position: absolute;
  top: 60px;
  left: 1200px;
}
</style>

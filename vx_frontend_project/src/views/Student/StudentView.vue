<script>
import SideBar from "@/components/SideBar.vue";
import Student from "@/components/Student.vue";
import { defineComponent } from "vue";

export default defineComponent({

  components: {
    SideBar,
    Student,
  },
});
</script>

<template>
  <SideBar />
  <h2 class="title">Student Details</h2>
  <dir class="student-table"><Student /></dir>
  <div class="add-btn">
    <a style="text-decoration: none" href="/addstudent">
      <v-btn color="warning" dark> Add New Student </v-btn>
    </a>
  </div>
</template>

<style>
.title {
  position: absolute;
  font-size: 40px;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
  top: 40px;
  left: 350px;
}

.student-table {
  position: absolute;
  left: 300px;
  top: 150px;
  width: 75%;
}
</style>

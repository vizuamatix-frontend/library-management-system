<script>
import SideBar from "@/components/SideBar.vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "HomeView",

  components: {
    //FooterView,
    SideBar,
  },
});
</script>

<template>
  <SideBar />
  <h2 class="title">Add New Book</h2>
  <div class="add-student-goback">
    <a style="text-decoration: none" href="/studentview">
      <v-btn color="primary"> Go Back </v-btn>
    </a>
  </div>
  <v-form>
    <v-row>
      <v-col>
        <v-text-field
          label="Student Name"
          placeholder="Student Name"
          outlined
          dense
        ></v-text-field>
      </v-col>
      <v-col>
        <v-text-field
          label="Email Address"
          placeholder="Email Address"
          outlined
          dense
        ></v-text-field>
      </v-col>
      <v-col>
        <v-text-field
          label="Contact no"
          placeholder="Contact no"
          outlined
          dense
        ></v-text-field>
      </v-col>
    </v-row>
  </v-form>
  <div class="add-student-btn">
    <v-btn color="warning" dark> Add Student </v-btn>
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

.v-text-field {
  position: relative;
  width: 700px;
  left: 200px;
  padding-top: 8px;
}
.des {
  height: 300px;
}

.add-student-btn {
  top:550px;
  left: 1020px;
  position: absolute;
}
.add-student-goback {
  position: absolute;
  left: 1250px;
  top: 50px;
}
</style>

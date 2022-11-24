<!-- <script>
    import SideBar from '@/components/SideBar.vue';
   // import StudentTableVue from '@/components/StudentTable.vue';
   import NoticeTable from "@/components/NoticeTable.vue";
    import { defineComponent } from 'vue';

    // Components

    //import FooterView from "../components/FooterView.vue";

    export default defineComponent({
    //name: 'NoticesView',

    components: {
        //FooterView,
        SideBar,
        //StudentTableVue,
        NoticeTable,
    },
    });

    

    

</script>

<template>
    <SideBar />
    <h2 class="title">Notices</h2>
    <dir class="table"><NoticeTable /></dir>
    <div class="add-btn">
        <a style="text-decoration: none" href="#">
        <v-btn
              color="warning"
              dark
            >
              Add New Notice
        </v-btn>
        </a>
    </div>
    
</template>

<style>
    .title{
        position: absolute;
        font-size: 40px;
        font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
        top: 40px;
        left: 350px;
    }

    .table{
        position: absolute;
        left: 300px;
        top: 150px;
    }

    .add-btn{
        position: absolute;
        top: 60px;
        left: 1200px;
    }
</style> -->


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
    <a style="text-decoration: none" href="#">
      <v-btn color="warning" dark> Add New Notice </v-btn>
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

.table {
  position: absolute;
  left: 300px;
  top: 150px;
}
</style>

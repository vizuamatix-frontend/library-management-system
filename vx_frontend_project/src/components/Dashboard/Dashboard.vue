<template>
  <div class="total-quantity-conatainer">
    <TotalStudents />
    <TotalBooks />
  </div>
  <div class="newly-added-conatainer">
    <NewStudents />
    <NewBooks />
  </div>
</template>

<script>
import TotalStudents from "@/components/Dashboard/TotalStudents.vue";
import TotalBooks from "@/components/Dashboard/TotalBooks.vue";
import NewStudents from "@/components/Dashboard/NewStudents.vue";
import NewBooks from "@/components/Dashboard/NewBooks.vue";

import { defineComponent } from "vue";

export default defineComponent({
  components: {
    TotalStudents,
    TotalBooks,
    NewStudents,
    NewBooks,
  },
});
</script>

<style>
.total-quantity-conatainer{
display: flex;
}
.newly-added-conatainer{
  display: flex;
  margin-top: 50px;
  justify-content: space-around;
}
</style>

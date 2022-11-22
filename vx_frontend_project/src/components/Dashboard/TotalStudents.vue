<template>
  <v-card class="mx-auto total-student-card" max-width="344" outlined>
    <v-list-item three-line>
      <v-list-item-content>
        <v-list-item-title class="text-h6 mb-1"><v-icon class="students-icon">mdi-account-multiple</v-icon>
          TOTAL STUDENTS
        </v-list-item-title>
        <v-list-item-title class="text-h4 mb-1 student-count"> 34,000 </v-list-item-title>
      </v-list-item-content>

      <v-list-item-avatar tile size="80" color="grey"></v-list-item-avatar>
    </v-list-item>
  </v-card>
</template>

<script>
export default {};
</script>

<style>
.total-student-card {
  background-color: #d3d3d3;
  min-width: 270px;
  background-color: #d3d3d3;
}
.students-icon{
    margin-right: 20px;
}
.student-count{
    text-align: center;
}
</style>

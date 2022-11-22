<template>
  <v-card class="mx-auto total-books-card" max-width="344" outlined>
    <v-list-item three-line>
      <v-list-item-content>
        <v-list-item-title class="text-h6 mb-1"><v-icon class="books-icon">mdi-folder</v-icon>
          TOTAL BOOKS
        </v-list-item-title>
        <v-list-item-title class="text-h4 mb-1 books-count"> 458 </v-list-item-title>
      </v-list-item-content>

      <v-list-item-avatar tile size="80" color="grey"></v-list-item-avatar>
    </v-list-item>
  </v-card>
</template>

<script>
export default {};
</script>

<style>
.total-books-card {
  padding: 10px;
  min-width: 270px;
  background-color: #d3d3d3;
}
.books-icon{
    margin-right: 20px;
}
.books-count{
    text-align: center;
}
</style>

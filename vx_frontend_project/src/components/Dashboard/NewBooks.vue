<script>

export default {

  data() {
    return {
      books: [
        {
          name: "Listen to Your Heart: The London Adventure",
          author: "Ruskin Bond",
        },
        {
          name: "Business of Sports: The Winning Formula for Success",
          author: "Vinit Karnik",
        },
        {
          name: "A Place Called Home",
          author: "Preeti Shenoy",
        },
        {
          name: "The Struggle for Police Reforms in India",
          author: "Ex-IPS Prakash Singh",
        },
        {
          name: "Leaders, Politicians, Citizens",
          author: "Rasheed Kidwai",
          contact_no: "9476373687",
        },
        {
          name: "Crunch Time: Narendra Modi’s National Security Crises",
          author: "Dr Sreeram Chauliahas",
        },
      ],
    };
  },
};
</script>

<template>
  <div style="overflow-x: auto">
    <table>
      <tr>
        <th>Student Name</th>
        <th>Email Address</th>
      </tr>
      <tr v-for="book in books" :key="book.id">
        <td>{{ book.name }}</td>
        <td>{{ book.author }}</td>
      </tr>
    </table>
  </div>
</template>

<style>
table {
  border-collapse: collapse;
  width: 100%;
}
th {
  background-color: #005567;
  color: white;
  font-size: 1.2rem;
}

th,
td {
  text-align: left;
  padding: 10px;
}

tr:nth-child(even) {
  background-color: #f2f2f2;
}
</style>

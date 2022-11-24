<script>

export default {

  data() {
    return {
      notices: [
        {
          date: "11/23/2022",
          subject: "guidelines for library premises",
          publish_by: "Jhon Doe - Librarian",
        },
        {
          date: "11/20/2022",
          subject: "guidelines for library premises",
          publish_by: "Jhon Doe - Librarian",
        },
        {
          date: "11/15/2022",
          subject: "guidelines for library premises",
          publish_by: "Jhon Doe - Librarian",
        },
        {
          date: "11/10/2022",
          subject: "guidelines for library premises",
          publish_by: "Jhon Doe - Librarian",
        },
        {
          date: "11/09/2022",
          subject: "guidelines for library premises",
          publish_by: "Jhon Doe - Librarian",
        },
        {
          date: "11/09/2022",
          subject: "guidelines for library premises",
          publish_by: "Jhon Doe - Librarian",
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
        <th>Date</th>
        <th>Subject</th>
        <th>Publisher</th>
      </tr>
      <tr v-for="notices in notices" :key="notices.id">
        <td>{{ notices.date }}</td>
        <td>{{ notices.subject }}</td>
        <td>{{ notices.publish_by }}</td>
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
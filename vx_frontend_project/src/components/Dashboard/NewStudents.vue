<script>

export default {

  data() {
    return {
      users: [
        {
          name: "H.S.Dissanayake",
          email: "dissanayaka@gmail.com",
          contact_no: "94763534256",
        },
        {
          name: "K.P.Ranatunge",
          email: "ranatunge@gmail.com",
          contact_no: "94723736789",
        },
        {
          name: "O.P.Kariyawasam",
          email: "kariyawasam@gmail.com",
          contact_no: "94772635673",
        },
        {
          name: "L.M.Wanigasuriya",
          email: "wanigasuriya@gmail.com",
          contact_no: "94773837772",
        },
        {
          name: "I.H.Perera",
          email: "perera@gmail.com",
          contact_no: "9476373687",
        },
        {
          name: "U.N.Munasinghe",
          email: "munasinghe@gmail.com",
          contact_no: "94732725267",
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
        <th>Contact number</th>
      </tr>
      <tr v-for="user in users" :key="user.id">
        <td>{{ user.name }}</td>
        <td>{{ user.email }}</td>
        <td>{{ user.contact_no }}</td>
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

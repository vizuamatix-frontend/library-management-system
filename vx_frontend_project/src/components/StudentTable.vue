<script>

import {
    mdiDelete
  } from '@mdi/js'

  export default {
    data: () => ({
      icons: {
        mdiDelete
      },
    }),
  }
</script>

<template>
    <div style="overflow-x: auto;">
  <table>
    <tr>
      <th>Book Name</th>
      <th>Author Name</th>
      <th>View More Detail</th>
      <th>Edit Book Detail</th>
      <th>Delete</th>
    </tr>
    <tr>
      <td>Listen to Your Heart: The London Adventure</td>
      <td>Ruskin Bond</td>
      <td><v-btn
        depressed
        color="primary"
      >
        View
      </v-btn></td>
      <td>
      <v-btn
      depressed
      color="success"
    >
      Edit
    </v-btn>
    </td>
      <td><v-btn
      depressed
      color="error"
    >
      Delete
    </v-btn></td>
      
    </tr>
    <tr>
      <td>Business of Sports: The Winning Formula for Success</td>
      <td>Vinit Karnik</td>
      <td><v-btn
        depressed
        color="primary"
      >
        View
      </v-btn></td>
      <td><v-btn
      depressed
      color="success"
    >
      Edit
    </v-btn></td>
      <td><v-btn
      depressed
      color="error"
    >
      Delete
    </v-btn></td>
    
    </tr>
    <tr>
      <td>A Place Called Home</td>
      <td>Preeti Shenoy</td>
      <td><v-btn
        depressed
        color="primary"
      >
        View
      </v-btn></td>
      <td><v-btn
      depressed
      color="success"
    >
      Edit
    </v-btn></td>
      <td><v-btn
      depressed
      color="error"
    >
      Delete
    </v-btn></td>
     
    </tr>

    <tr>
      <td>The Struggle for Police Reforms in India</td>
      <td>Ex-IPS Prakash Singh</td>
      <td><v-btn
        depressed
        color="primary"
      >
        View
      </v-btn></td>
      <td><v-btn
      depressed
      color="success"
    >
      Edit
    </v-btn></td>
      <td><v-btn
      depressed
      color="error"
    >
      Delete
    </v-btn></td>
    
    </tr>
    <tr>
      <td>Leaders, Politicians, Citizens</td>
      <td>Rasheed Kidwai</td>
      <td><v-btn
        depressed
        color="primary"
      >
        View
      </v-btn></td>
      <td><v-btn
      depressed
      color="success"
    >
      Edit
    </v-btn></td>
      <td><v-btn
      depressed
      color="error"
    >
      Delete
    </v-btn></td>
      
    </tr>

    <tr>
      <td>Crunch Time: Narendra Modi’s National Security Crises</td>
      <td>Dr Sreeram Chauliahas</td>
      <td><v-btn
        depressed
        color="primary"
      >
        View
      </v-btn></td>
      <td><v-btn
      depressed
      color="success"
    >
      Edit
    </v-btn></td>
      <td><v-btn
      depressed
      color="error"
    >
      Delete
    </v-btn></td>
    
    </tr>
    <tr>
      <td>Tiger of Drass: Capt. Anuj Nayyar, 23, Kargil Hero</td>
      <td>Meena Nayyar & Himmat Singh Shekhawat</td>
      <td><v-btn
        depressed
        color="primary"
      >
        View
      </v-btn></td>
      <td><v-btn
      depressed
      color="success"
    >
      Edit
    </v-btn></td>
      <td><v-btn
      depressed
      color="error"
    >
      Delete
    </v-btn></td>
     
    </tr>

    <tr>
      <td>Hear Yourself</td>
      <td>Indian Author Prem Rawat</td>
      <td><v-btn
        depressed
        color="primary"
      >
        View
      </v-btn></td>
      <td><v-btn
      depressed
      color="success"
    >
      Edit
    </v-btn></td>
      <td><v-btn
      depressed
      color="error"
    >
      Delete
    </v-btn></td>
    
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
        background-color: aqua;
    }

    th, td {
        text-align: left;
        padding: 10px;
    }

    tr:nth-child(even) {background-color: #f2f2f2;}

</style>
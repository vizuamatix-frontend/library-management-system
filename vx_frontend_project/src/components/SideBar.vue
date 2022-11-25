<template>
  <div class="ma-12 pa-12">
    <v-card>
      <v-navigation-drawer permanent expand-on-hover>
        <v-list>
          <v-list-item class="px-2">
            <v-list-item-avatar class="avatar">
              <!-- <v-row justify="space-around"> -->
              <v-avatar color="teal" padding="center">
                <v-icon dark> mdi-account-circle </v-icon>
              </v-avatar>
              <!-- </v-row> -->
            </v-list-item-avatar>
          </v-list-item>

          <v-list-item link>
            <v-list-item-content class="admin">
              <v-list-item-title class="text-h6">
                Hello Admin!
              </v-list-item-title>
              <!-- <v-spacer></v-spacer> -->
              <v-list-item-subtitle class="subtitile"
                >admin@gmail.com</v-list-item-subtitle
              >
              <!-- <v-spacer></v-spacer> -->
            </v-list-item-content>
          </v-list-item>
        </v-list>

        <v-divider class="divider"></v-divider>

        <v-list nav dense>
          <v-list-item link>
            <v-list-item-icon>
              <v-icon>mdi-view-dashboard</v-icon>
            </v-list-item-icon>
            <v-list-item-title><router-link to="/dashboard">Dashboard</router-link></v-list-item-title>
          </v-list-item>
          <v-list-item link>
            <v-list-item-icon>
              <v-icon>mdi-folder</v-icon>
            </v-list-item-icon>
            <!-- <v-list-item-title>Books</v-list-item-title> -->
            <v-list-item-title><router-link to="/bookview">Books</router-link></v-list-item-title>
          </v-list-item>
          <v-list-item link>
            <v-list-item-icon>
              <v-icon>mdi-account-multiple</v-icon>
            </v-list-item-icon>
            <!-- <v-list-item-title>Students</v-list-item-title> -->
            <v-list-item-title><router-link to="/studentview">Students</router-link></v-list-item-title>
          </v-list-item>
          <v-list-item link>
            <v-list-item-icon>
              <v-icon>mdi-message-text</v-icon>
            </v-list-item-icon>
            <!-- <v-list-item-title>Notices</v-list-item-title> -->
            <v-list-item-title><router-link to="/noticesview">Notices</router-link></v-list-item-title>
          </v-list-item>
          <v-spacer></v-spacer>
          <v-btn flat color="grey">
            <span>Sign Out</span>
            <v-icon right>Exit</v-icon>
          </v-btn>
        </v-list>
      </v-navigation-drawer>
    </v-card>
  </div>
</template>

<script>
export default {
  //   data() {
  //     return{
  //         drawer:false
  //     }
  //   }
};
</script>

<style>
.avatar {
  position: absolute;
  padding-left: 100px;
  top: 10px;
  margin-left: auto;
  margin-right: auto;
}

.admin {
  position: absolute;
  z-index: 9999;
  bottom: 0;
  top: 10px;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  text-align: center;
}

.divider {
  position: relative;
  padding-top: 10px;
  padding-bottom: 10px;
  margin-top: 20px;
}
.subtitile {
  position: absolute;
  bottom: 30;
  top: 30px;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  text-align: center;
}
</style>

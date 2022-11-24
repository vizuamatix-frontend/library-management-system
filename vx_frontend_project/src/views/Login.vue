<script>
    
    
    export default {
        data: () => ({
            valid: true,
            name: "",
            UsernameRules: [
                (v) => !!v || "Name is required",
                (v) => (v && v.length <= 10) || "Name must be less than 10 characters",
            ],
            password: "",
            passwordRules: [
                (v) => !!v || "More Details  is not required",
                (v) =>
                (v && v.length <= 10) || "Contact no must be less than 11 characters",
            ],
        }),
    };
</script>

<template>
    <img :src="require('../assets/login.png')"/>
    <div class="login"><h1>Login</h1></div>
    <div class="input">
        <v-text-field
            v-model="name"
            :counter="10"
            :rules="UsernameRules"
            label="Username"
            required
          ></v-text-field> <br>
          <v-text-field
            v-model="password"
            :counter="10"
            :rules="passwordRules"
            label="Password"
            required
          ></v-text-field>
    </div>
    <div class="btn1"><v-btn depressed color="error"> Login </v-btn></div>
</template>

<style scoped>
    img{
        position: absolute;
        width: 50%;
        height: 745px;
    }
    .login{
        position: absolute;
        top: 70px;
        left: 70%;
        font-size: 25px;
        color: rgb(100, 39, 59);
    }
    .input{
        position: absolute;
        left: 46%;
        top: 220px;
    }
    .v-text-field{
        width: 500px;
    }
    .btn1{
        position: absolute;
        top: 500px;
        left: 66%;
    }
    .v-btn{
        width: 300px;
    }

</style>
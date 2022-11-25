<template>
    <nav class="navbar navbar-default">
        <div class="container-fluid">
            <!-- <div class="navbar-header">
                <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <a class="navbar-brand" href="/login">BookRoom Administrator</a>
            </div> -->

            <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul class="nav navbar-nav">
                    <li class="active"><router-link to="/login">Signin</router-link></li>
                    <li><router-link to="/signup">Signup</router-link></li>
                </ul>
            </div>
        </div>
    </nav>




</template>

<script>
    export default {
    }
</script>

<style scoped>
.navbar{
   background-color: black;        
}
</style>
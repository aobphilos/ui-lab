<template>
<div>
    <!--  Loader -->
    <div id="loader" v-fade-out></div>
    <!--  Loader End -->
    <!-- Verified heading-->
    <section id="verified_header">
        <div class="container">
            <div class="row">
            <div class="col-md-12 col-sm-12 col-xs-12">
                <h4 class="h4-type3">VERIFIED REPORT BY GCILAB.COM</h4>
                <div class="border-bar4 margin-t20 "></div>
            </div>
            </div>
        </div>
    </section>
    <!-- Verified heading end-->
    <!-- Verified -->
    <section id="verified" class="padding-tb50">
        <div class="container">
        <div class="row">
            <div class="col-md-12">
            <div class="clients">
                <ul class="slides text-center">
                <li>
                    <img src="../assets/img/brands/1.png" alt="">
                </li>
                <li>
                    <img src="../assets/img/brands/2.png" alt="">
                </li>
                <li>
                    <img src="../assets/img/brands/3.png" alt="">
                </li>
                <li>
                    <img src="../assets/img/brands/4.png" alt="">
                </li>
                <li>
                    <img src="../assets/img/brands/1.png" alt="">
                </li>
                <li>
                    <img src="../assets/img/brands/2.png" alt="">
                </li>
                <li>
                    <img src="../assets/img/brands/3.png" alt="">
                </li>
                <li>
                    <img src="../assets/img/brands/4.png" alt="">
                </li>
                </ul>
            </div>
            </div>
        </div>
        </div>
    </section>
    <!-- clients end -->
</div>
</template>
<script>
export default {
  name: 'PageVerified',
  data () {
    return {
      msg: 'Welcome to GCILab'
    }
  },
  mounted: () => {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#verified_header {
    height: 300px;
    background-image: url(../assets/img/portfolio/portfolio.jpg);
    background-repeat: no-repeat;
    background-size: cover;
}
</style>

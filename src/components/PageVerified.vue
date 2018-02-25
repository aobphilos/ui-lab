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
    <!-- what we do  -->
    <section id="verified" class="padding-tb100">
        <div class="container">
            <form action="#/verified">
                <div class="row">
                    <div class="col-md-5">
                            <div class="form-group">
                                <label for="verifiedId">Please use this form to search your verified report</label><br><br>
                                <input type="text" class="form-control" name="verifiedId" placeholder="Enter Rreport Id" >
                            </div>
                            <button type="submit" class="btn btn-primary">Search</button>
                        <p class="p-type-3 color-grey margin-t20"></p>
                    </div>
                </div>
            </form>
        </div>
    </section>
    <!-- what we do  end-->
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
  height: 265px;
  background-image: url(../assets/img/cover/default.jpg);
  background-repeat: no-repeat;
  background-size: cover;
}
</style>

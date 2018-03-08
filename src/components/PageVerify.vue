<template>
<div>
    <!--  Loader -->
    <div id="loader" v-fade-out></div>
    <!--  Loader End -->
    <!-- Verify heading-->
    <section id="verify_header">
        <div class="container">
            <div class="row">
            <div class="col-md-12 col-sm-12 col-xs-12">
                <h4 class="h4-type3">VERIFY REPORT</h4>
                <div class="border-bar4 margin-t20 "></div>
            </div>
            </div>
        </div>
    </section>
    <!-- Verify heading end-->
    <!-- what we do  -->
    <section id="verify" class="padding-tb50">
        <div class="container">
            <form action="#/verify">
                <div class="row">
                    <div class="col-md-5">
                            <div class="form-group">
                                <label for="verifyId">Please use this form to search your verify report</label><br><br>
                                <input type="text" class="input_text" name="verifyId" placeholder="Enter Rreport Id" >
                            </div>
                            <input type="submit" name="submit" value="Search" class="input_submit">
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
  name: 'PageVerify',
  data () {
    return {
      msg: 'Welcome to GCILab'
    }
  },
  mounted: () => { $('.parallax-mirror').hide() }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#verify_header {
  height: 265px;
  background-image: url(../assets/img/cover/default.jpg);
  background-repeat: no-repeat;
  background-size: cover;
}
</style>

<template>
    <div>
        <!--  Loader -->
        <div id="loader" v-fade-out></div>
        <!--  Loader End -->
        <!-- Services heading-->
        <section id="services_header">
            <div class="container">
            <div class="row">
                <div class="col-md-12 col-sm-12 col-xs-12">
                <h4 class="h4-type3">SERVICES</h4>
                <div class="border-bar4 margin-t20 "></div>
                </div>
            </div>
            </div>
        </section>
        <!-- Services heading end-->
        <!-- Services -->
        <section id="services">
            <div class="container">
                <div class="row">
                    <div class="col-md-7 col-md-offset-0 col-sm-10 col-sm-offset-1 col-xs-10 col-xs-offset-1">
                        <div class="row padding-tb50">
                            <div class="col-md-11">
                                <h4 class="h4-type1">GEM IDENTIFICATION CONSULTANCY REPORT</h4>
                                <div>
                                    <p class="p-type-3 color-grey margin-t20">
                                        <ol>
                                            <li>  600 BAHT/STONE</li>
                                            <li>  400 BAHT/STONE</li>
                                            <li>  300 BAHT/STONE</li>
                                            <li>  200 BAHT/STONE</li>
                                        </ol>
                                    </p>
                                    <p class="p-type-3 color-grey margin-t20">ONE REPORT CAN BE CONTAINED MULTIPLE STONES DETAILS WITH ADDITIONAL FEE OF 100 BAHT PER STONE.</p>
                                    <div class="example">
                                        <p class="p-type-3 color-grey margin-t20">FOR EXAMPLE:</p>
                                        <p class="p-type-3 color-grey margin-t20">ONE REPORT (NUMBER 1, 600 BAHT) FOR A PAIR OF RUBIES = THE TOTAL FEE IS 700 BAHT. (600 + 100)</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row padding-tb50">
                            <div class="col-md-11">
                                <h4 class="h4-type1">VERBAL GEMS TESTING</h4>
                                <div>
                                    <p class="p-type-3 color-grey margin-t20">
                                        <ol>
                                            <li>100 BAHT/STONE (WITH NO REPORT ISSUED)</li>
                                        </ol>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-5 col-xs-12 imgage-box">
                        <div class="row padding-tb25">
                            <a href="../static/img/services/service-1.jpg" data-lightbox="service-lightbox">
                                <img src="../assets/img/services/service-1.jpg" alt="Services">
                            </a>
                        </div>
                        <div class="row padding-tb25">
                            <a href="../static/img/services/service-2.jpg" data-lightbox="service-lightbox">
                                <img src="../assets/img/services/service-2.jpg" alt="Services">
                            </a>
                        </div>
                        <div class="row padding-tb25">
                            <a href="../static/img/services/service-3.jpg" data-lightbox="service-lightbox">
                                <img src="../assets/img/services/service-3.jpg" alt="Services">
                            </a>
                        </div>
                        <div class="row padding-tb25">
                            <a href="../static/img/services/service-4.jpg" data-lightbox="service-lightbox">
                                <img src="../assets/img/services/service-4.jpg" alt="Services">
                            </a>
                        </div>
                        <div class="row padding-tb25">
                            <a href="../static/img/services/service-5.jpg" data-lightbox="service-lightbox">
                                <img src="../assets/img/services/service-5.jpg" alt="Services">
                            </a>
                        </div>
                        <div class="row padding-tb25">
                            <a href="../static/img/services/service-6.jpg" data-lightbox="service-lightbox">
                                <img src="../assets/img/services/service-6.jpg" alt="Services">
                            </a>
                        </div>
                        <div class="row padding-tb25">
                            <a href="../static/img/services/service-7.jpg" data-lightbox="service-lightbox">
                                <img src="../assets/img/services/service-7.jpg" alt="Services">
                            </a>
                        </div>
                        <div class="row padding-tb25">
                            <a href="../static/img/services/service-8.jpg" data-lightbox="service-lightbox">
                                <img src="../assets/img/services/service-8.jpg" alt="Services">
                            </a>
                        </div>
                        <div class="row padding-tb25">
                            <a href="../static/img/services/service-9.jpg" data-lightbox="service-lightbox">
                                <img src="../assets/img/services/service-9.jpg" alt="Services">
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- Services  end-->
    </div>
</template>
<script>
export default {
  name: 'PageServices',
  data () {
    return {
      msg: 'Welcome to GCILab'
    }
  },
  mounted: () => {
    $('.parallax-mirror').hide()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#services_header {
  height: 265px;
  background-image: url(../assets/img/cover/default.jpg);
  background-repeat: no-repeat;
  background-size: cover;
}

.imgage-box .padding-tb25 {
        padding: 15px 0;
        margin: 10px 0;
        text-align: center;
        border: 2px solid lightgray;
        border-radius: 25px;
}

@media (max-width: 768px) {
  #services_header{
      height: 230px;
  }
}
</style>

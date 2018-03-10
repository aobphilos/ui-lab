<template>
    <div>
        <!--  Loader -->
        <div id="loader" v-fade-out>
            <div class="wrapper">
                <div class="cssload-loader"></div>
            </div>
        </div>
        <!--  Loader End -->
        <item-slider />
        <!-- seperate block -->
        <section class="padding-tb25 hidden-sm hidden-xs">&nbsp;</section>
        <!-- seperate block end -->
        <!-- GEMOLOGY -->
        <section id="whoweare">
            <div class="container">
                <div class="row">
                    <div class="col-md-6 col-md-offset-0 col-sm-10 col-sm-offset-1 col-xs-10 col-xs-offset-1 padding-tb100">
                        <h4 class="h4-type2 margin-t10">GEMS &amp; GEMOLOGY CONSULTANT</h4>
                        <div class="border-bar margin-t20 "></div>
                        <p class="p-type-3 color-grey margin-t20">by experienced graduate gemologist (G.G.) instructor from GIA</p>
                        <router-link to="services" rel="tooltip" title="READ MORE" class="btn login-btn" >READ MORE</router-link>
                    </div>
                    <div class="col-md-6 col-xs-12 parallax-window" data-parallax="scroll" data-image-src="../assets/img/whoweare.jpg" data-speed="0.4">
                    </div>
                </div>
            </div>
        </section>
        <!-- GEMOLOGY end-->
        <!-- VERIFY -->
        <section id="whoweare">
            <div class="container">
                <div class="row">
                    <div class="col-md-6 col-xs-12 parallax-window" data-parallax="scroll" data-image-src="../assets/img/verify.jpg" data-speed="0.4">
                    </div>
                    <div class="col-md-6 col-md-offset-0 col-sm-10 col-sm-offset-1 col-xs-10 col-xs-offset-1 padding-tb100">
                        <h4 class="h4-type2 margin-t10">VERIFY REPORT</h4>
                        <div class="border-bar margin-t20 "></div>
                        <p class="p-type-3 color-grey margin-t20"></p>
                        <router-link to="verify" rel="tooltip" title="MORE COLLECTION" class="btn login-btn" >CHECK</router-link>
                    </div>
                </div>
            </div>
        </section>
        <!-- VERIFY end-->
        <!-- portfolio -->
        <section id="portfolio" class="padding-tb100">
            <div class="container">

            <div class="row">
                <div class="col-md-12">
                <h4 class="h4-type2 text-center">GALLERY</h4>
                <div class="border-bar2 margin-t20"></div>
                </div>
            </div>

            <div class="row margin-t50">

                <div class="col-md-4 margin-t30">
                <div class="portfolio-item">
                    <a href="https://scontent.fbkk12-1.fna.fbcdn.net/v/t31.0-8/20121200_1445878972144996_1725100968484993448_o.jpg?oh=48994a51102b7ca810bd1f469d3a9547&oe=5B4BD504" data-lightbox="portfolio">
                    <img src="../assets/img/portfolio/item1.jpg" alt="">
                    </a>
                </div>
                </div>

                <div class="col-md-4 margin-t30">
                <div class="portfolio-item">
                    <a href="https://scontent.fbkk12-1.fna.fbcdn.net/v/t31.0-8/19944595_1736201119754187_1593587063392924517_o.jpg?oh=b6f5d9646d924bffae72c05e167ff4a4&oe=5B0B0900" data-lightbox="portfolio">
                    <img src="../assets/img/portfolio/item2.jpg" alt="">
                    </a>
                </div>
                </div>

                <div class="col-md-4 margin-t30">
                <div class="portfolio-item">
                    <a href="https://scontent.fbkk12-1.fna.fbcdn.net/v/t31.0-8/19942606_1731420190232280_1670578840384535054_o.jpg?oh=8d76cbbcc74ed13546dff6b44ee61dae&oe=5B1A12A4" data-lightbox="portfolio">
                    <img src="../assets/img/portfolio/item3.jpg" alt="">
                    </a>
                </div>
                </div>

                <div class="col-md-4 margin-t30">
                <div class="portfolio-item">
                    <a href="https://scontent.fbkk12-1.fna.fbcdn.net/v/t31.0-8/19575160_10212285609631948_2249457055390730749_o.jpg?oh=4f7886a9162f23674a9166c9b70ba16f&oe=5B18409A" data-lightbox="portfolio">
                    <img src="../assets/img/portfolio/item4.jpg" alt="">
                    </a>
                </div>
                </div>

                <div class="col-md-4 margin-t30">
                <div class="portfolio-item">
                    <a href="https://scontent.fbkk12-1.fna.fbcdn.net/v/t1.0-9/16002731_1508472599180261_5873993211054461631_n.jpg?oh=df8024410976726ee4dec97d81b82286&oe=5B469728" data-lightbox="portfolio">
                    <img src="../assets/img/portfolio/item5.jpg" alt="">
                    </a>
                </div>
                </div>

                <div class="col-md-4 margin-t30">
                <div class="portfolio-item">
                    <a href="https://scontent.fbkk12-1.fna.fbcdn.net/v/t31.0-8/20116844_1445878965478330_4462544605663604442_o.jpg?oh=e5df55ffc3b7ae7bd8e32802313d7026&oe=5B0A0A22" data-lightbox="portfolio">
                    <img src="../assets/img/portfolio/item6.jpg" alt="">
                    </a>
                </div>
                </div>
            </div>

            </div>
        </section>
        <!-- portfolio end-->
    </div>
</template>
<script>
import ItemSlider from '@/components/ItemSlider'
export default {
  name: 'PageLanding',
  components: { ItemSlider },
  data () {
    return {
      msg: 'Welcome to GCILab'
    }
  },
  mounted: () => {
    $('.parallax-mirror').show()
    $('.parallax-window').parallax()
  },
  destroyed: () => {
    $('.parallax-mirror').hide()
    $('.parallax-window').parallax('destroy')
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

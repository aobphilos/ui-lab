<template>
    <div>
        <!--  Loader -->
        <div id="loader" v-fade-out></div>
        <!--  Loader End -->

        <!-- About us heading-->
        <section id="about_header">
            <div class="container">
            <div class="row">
                <div class="col-md-12 col-sm-12 col-xs-12">
                <h4 class="h4-type3">ABOUT US</h4>
                <div class="border-bar4 margin-t20 "></div>
                </div>
            </div>
            </div>
        </section>
        <!-- About us heading end-->
        <!-- GEMOLOGY -->
        <section id="whoweare" class="padding-tb50">
            <div class="container">
                <div class="row">
                    <div class="col-md-5 col-xs-12">
                        <div>
                             <img src="../assets/img/whoweare.jpg" alt="">
                        </div>
                    </div>
                    <div class="col-md-7 col-md-offset-0 col-sm-10 col-sm-offset-1 col-xs-10 col-xs-offset-1">
                        <div class="margin-t20 "></div>
                        <p class="p-type-5 color-grey margin-t20">OVER 15 YEARS OF EXPERIENCES AS INSTRUCTORS AT GIA AND AIGS, WE WOULD LOVE TO SHARE OUR KNOWLEDGE AND ENSURE THE TRUST IN GEMS TO THE BUSINESS.</p>
                        <div class="margin-t20 "></div>
                        <p class="p-type-5 color-grey margin-t20">WE ARE WELCOME TO DO THE GEMOLOGICAL CONSULTANCY SERVICE BY THE EXPERT GEMOLOGISTS OF GCILAB.</p>
                    </div>

                </div>
            </div>
        </section>
        <!-- GEMOLOGY end-->
        <!-- Diploma Surachart -->
        <section id="diploma-surachart" class="padding-tb50 diploma">
            <div class="container">
                <div class="row testimonial">
                     <div class="col-md-7 col-md-offset-0 col-sm-10 col-sm-offset-1 col-xs-10 col-xs-offset-1">
                         <h5 class="">SURACHART PANJATHAMMAWIT, G.G., B.SC.<br>GRADUATE GEMOLOGIST/GIA</h5>
                        <div class="margin-t20 "></div>
                        <p class="p-type-5 color-grey margin-t20">
                            <ul>
                                <li>Material Science (Gems and Jewelry), SWU</li>
                                <li>Graduate Gemologist (G.G.), GIA</li>
                                <li>Accredited Jewelry Professional (A.J.P.), GIA</li>
                                <li>Graduate Pearls Diploma, GIA</li>
                                <li>Manager of Gemology Education (School’s Principal), GIA Thailand Apr 2000—Jan 2011</li>
                                <li>Director of English Academic, AIGS Feb 2011—Apr 2012</li>
                                <li>Owner and Gemologist of Gemological Consultancy (GC Lab)</li>
                                <li>Over 10 years of teaching experiences for Graduate Gemologist Program (G.G.), GIA</li>
                                <li>Instructor for cooperate class Accredited Jewelry Professional(A.J.P.) with Christie’s,</li>
                                <li>Pearl Grading course in Singapore and Sri Lanka</li>
                                <li>Gemologist of GCI Lab (Gemological Consultancy)</li>
                            </ul>
                        </p>
                    </div>
                    <div class="col-md-5 col-xs-12">
                        <div>
                            <a href="../static/img/aboutus/diploma-surachart.jpg" data-lightbox="diploma-surachart-lightbox" data-alt="Diploma Surachart">
                                <img src="../assets/img/aboutus/diploma-surachart.jpg" alt="Diploma Patarat">
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- Diploma Surachart end-->
         <!-- Diploma Patarat -->
        <section id="diploma-patarat" class="padding-tb50 diploma">
            <div class="container">
                <div class="row testimonial">
                     <div class="col-md-7 col-md-offset-0 col-sm-10 col-sm-offset-1 col-xs-10 col-xs-offset-1">
                         <h5 class="">PATTARAT TERMPAISIT, G.G., B.SC.<br>GRADUATE GEMOLOGIST/GIA</h5>
                        <div class="margin-t20 "></div>
                        <p class="p-type-5 color-grey margin-t20">
                            <ul>
                                <li>Material Science (Gems and Jewelry), SWU</li>
                                <li>Graduate Gemologist (G.G.), GIA</li>
                                <li>Accredited Jewelry Professional (A.J.P.), GIA</li>
                                <li>Graduate Pearls Diploma, GIA</li>
                                <li>Instructor of Graduate Gemologist Program (G.G.), GIA</li>
                                <li>Manager of  Marketing Laboratory Development, AIGS </li>
                                <li>Instructor for cooperate class “Diamond Grading” with Debswana (De Beers), Botswana</li>
                                <li>Marketing Executive, Regal Jewelry </li>
                            </ul>
                        </p>
                    </div>
                    <div class="col-md-5 col-xs-12">
                        <div>
                            <a href="../static/img/aboutus/diploma-patarat.jpg" data-lightbox="diploma-patarat-lightbox" data-alt="Diploma Patarat">
                                <img src="../assets/img/aboutus/diploma-patarat.jpg" alt="Diploma Patarat">
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- Diploma Patarat end-->
    </div>
</template>
<script>
export default {
  name: 'PageAbout',
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
#about_header {
  height: 265px;
  background-image: url(../assets/img/cover/default.jpg);
  background-repeat: no-repeat;
  background-size: cover;
}
</style>

<template>
    <div class="main main-raised">
        <div class="container">
            <div class="section text-center section-landing">
                <div class="row">
                    <div class="col-md-8 col-md-offset-2">
                        <h2 class="title">Services Page</h2>
                        <h5 class="description">This is the paragraph where you can write more details about your product. Keep you user engaged
                            by providing meaningful information. Remember that by this time, the user is curious, otherwise
                            he wouldn't scroll to get here. Add a button if you want the user to see more.</h5>
                    </div>
                </div>

                <div class="features">
                    <div class="row">
                        <div class="col-md-4">
                            <div class="info">
                                <div class="icon icon-primary">
                                    <i class="material-icons">chat</i>
                                </div>
                                <h4 class="info-title">First Feature</h4>
                                <p>Divide details about your product or agency work into parts. Write a few lines about
                                    each one. A paragraph describing a feature will be enough.</p>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="info">
                                <div class="icon icon-success">
                                    <i class="material-icons">verified_user</i>
                                </div>
                                <h4 class="info-title">Second Feature</h4>
                                <p>Divide details about your product or agency work into parts. Write a few lines about
                                    each one. A paragraph describing a feature will be enough.</p>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="info">
                                <div class="icon icon-danger">
                                    <i class="material-icons">fingerprint</i>
                                </div>
                                <h4 class="info-title">Third Feature</h4>
                                <p>Divide details about your product or agency work into parts. Write a few lines about
                                    each one. A paragraph describing a feature will be enough.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="section text-center">
                <h2 class="title">Here is our team</h2>

                <div class="team">
                    <div class="row" v-for="member in members" :key="member.id">
                        <div class="col-md-4">
                            <div class="team-player">
                                <img :src="member.img" alt="Thumbnail Image" class="img-raised img-circle">
                                <h4 class="title">{{member.name}} {{member.ext}}
                                    <br />
                                    <small class="text-muted">Model</small>
                                </h4>
                                <p class="description">You can write here details about one of your team members. You can give more details
                                    about what they do. Feel free to add some
                                    <a href="#">links</a> for people to be able to follow them outside the site.</p>
                                <a href="#pablo" class="btn btn-simple btn-just-icon">
                                    <i class="fa fa-twitter"></i>
                                </a>
                                <a href="#pablo" class="btn btn-simple btn-just-icon">
                                    <i class="fa fa-instagram"></i>
                                </a>
                                <a href="#pablo" class="btn btn-simple btn-just-icon btn-default">
                                    <i class="fa fa-facebook-square"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>
<script>
export default {
  name: 'PageServices',
  data () {
    return {
      msg: 'Welcome to GCILab',
      members: [
        { id: 1, name: 'Moshi', ext: 'Joob', isActive: true, img: require('../assets/img/ori/gems01.jpg') },
        { id: 2, name: 'Shino', ext: 'Joob', isActive: true, img: require('../assets/img/ori/gems02.jpg') },
        { id: 3, name: 'Momo', ext: 'Joob', isActive: true, img: require('../assets/img/ori/gems03.jpg') }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

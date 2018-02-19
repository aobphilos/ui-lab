<template>
    <nav class="navbar navbar-color-on-scroll navbar-transparent fixed-top  navbar-expand-lg " color-on-scroll="100" id="sectionsNav">
        <div class="container">
            <div class="navbar-translate">
                <a class="navbar-brand" href="#/"><img class="logo" src="../assets/logo.png" alt="GCILAB">GCILab</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    <span class="navbar-toggler-icon"></span>
                    <span class="navbar-toggler-icon"></span>
                </button>
            </div>
            <div class="collapse navbar-collapse">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item">
                        <router-link to="about" class="nav-link" rel="tooltip" title="About GCILab">
                            <i class="material-icons">assignment_ind</i> About Us
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="services" class="nav-link" rel="tooltip" title="Services">
                            <i class="material-icons">local_mall</i> Services
                        </router-link>
                    </li>
                     <li class="nav-item">
                        <router-link to="verified" class="nav-link" rel="tooltip" title="Verified">
                            <i class="material-icons">playlist_add_check</i> Verified Report
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="contact" class="nav-link" rel="tooltip" title="Contact">
                            <i class="material-icons">contact_mail</i> Contact
                        </router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>
<script>
export default {
  name: 'SectionNav'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
img.logo{
    width: 32px;
}
</style>

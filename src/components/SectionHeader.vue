<template>
    <!-- header navigation -->
    <header id="navigation">
        <div class="container">
            <div class="row">
            <div class="col-md-2">
                <a class="navbar-brand" href="#/"><img src="../assets/img/nav-logo.png" alt="GCILab" class="main-nav-logo"></a>
                <span class="ti-menu nav-btn-open hidden-md hidden-lg"></span>
            </div>
            <div class="col-md-8 text-center">
                <ul class="main-nav">
                    <li>
                        <router-link to="about" class="nav-link" rel="tooltip" title="About GCILab">About Us</router-link>
                    </li>
                    <li>
                        <router-link to="services" class="nav-link" rel="tooltip" title="Services">Services</router-link>
                    </li>
                     <li>
                        <router-link to="verified" class="nav-link" rel="tooltip" title="Verified">Verified Report</router-link>
                    </li>
                    <li>
                        <router-link to="contact" class="nav-link" rel="tooltip" title="Contact">Contact</router-link>
                    </li>
                </ul>
            </div>
            <div class="col-md-2">
                <a href="#" class="login-btn btn pull-right">Sign In</a>
            </div>
            </div>
        </div>
    </header>
    <!-- header navigation end -->
</template>
<script>
export default {
  name: 'SectionHeader'
}
</script>

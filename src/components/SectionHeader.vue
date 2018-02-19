<template>
    <div class="header header-filter">
        <div class="container">
            <div class="row">
                <div class="col-md-6">
                    <div class="content"></div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  name: 'SectionHeader'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header.header-filter {
    background-image: url('../assets/img/bg-header.jpg');
}
.header .content{
    height: 144px;
}
</style>

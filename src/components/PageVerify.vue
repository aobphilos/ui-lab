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
          <div class="row">
              <div class="col-md-4 col-sm-5 col-xs-12">
                <div class="padding-tb25">
                  <form action="#/verify">
                    <div class="form-group">
                        <label for="verifyId">Please use this form to search your verify report</label>
                        <br>
                        <br>
                        <input type="text" class="input_text" name="verifyId" placeholder="Enter Report ID" v-model="reportId" v-bind:disabled="isLoading">
                    </div>
                    <button name="submit" class="input_submit" @click.prevent="getReport" v-bind:disabled="isLoading">Search
                        <i class="glyphicon glyphicon-refresh" v-bind:class="{loader: isLoading}"></i>
                    </button>
                    <p class="p-type-3 color-grey margin-t20">
                        <span class="error" v-show="hasError">** Invalid Report Id **</span>
                    </p>
                  </form>
                </div>
              </div>
              <div class="col-md-8 col-sm-7 col-xs-12 text-center">
                  <div class="row wrapper-image">
                    <h4 class="h4-type1">Sample Report</h4>
                  </div>
                  <div class="row wrapper-image">
                      <a href="../static/img/verify/verify1.jpg" data-lightbox="sample-verify1-lightbox" data-alt="Sample Verify Image">
                          <img src="../assets/img/verify/verify1.jpg" alt="Sample Verify Image">
                      </a>
                  </div>
                  <div class="row wrapper-image">
                      <a href="../static/img/verify/verify2.jpg" data-lightbox="sample-verify2-lightbox" data-alt="Sample Verify Image">
                          <img src="../assets/img/verify/verify2.jpg" alt="Sample Verify Image">
                      </a>
                  </div>
              </div>
          </div>
      </div>
    </section>
    <!-- what we do  end-->
</div>
</template>
<script>
export default {
  name: 'PageVerify',
  data: () => {
    return {
      reportId: '',
      isLoading: false,
      hasError: false
    }
  },
  methods: {
    renderDocument: function (url) {
      let a = document.createElement('a')
      a.href = url
      a.target = '_blank'
      a.click()
      console.log('revoke url by Anchor')
      return $.Deferred()
        .resolve()
        .promise()
    },

    getReportServer: function (url) {
      // id: 1803SNV0075
      return $.ajax({
        method: 'GET',
        url: url,
        crossDomain: true,
        xhrFields: {
          responseType: 'blob',
          withCredentials: true
        }
      })
    },

    getReportLocal: function (url) {
      // id: 1803CDR9999
      return $.ajax({
        method: 'GET',
        url: url,
        xhrFields: {
          responseType: 'blob',
          withCredentials: true
        }
      })
    },

    getReport: function () {
      const vm = this

      if (vm.reportId.trim() === '') {
        return
      }

      vm.hasError = false
      vm.isLoading = true

      let localUrl = `/certificates/${this.reportId}.pdf`
      let apiUrl = `http://dreamxchange-001-site3.btempurl.com/api/certificates/DownloadAndOpen?id=${
        this.reportId
      }`

      $.when(vm.getReportLocal(localUrl))
        .then((contentLocal, status, response) => {
          let reg = /^application\/pdf/
          let contentType = response.getResponseHeader('content-type')
          let isFound = reg.test(contentType)
          return $.Deferred()
            .resolve(isFound, contentLocal)
            .promise()
        })
        .then((isFound, pdf) => {
          if (isFound) {
            return $.Deferred()
              .resolve(localUrl)
              .promise()
          } else {
            return $.when(vm.getReportServer(apiUrl)).then(() => {
              return $.Deferred()
                .resolve(apiUrl)
                .promise()
            })
          }
        })
        .then(targetUrl => {
          return vm.renderDocument(targetUrl)
        })
        .then(() => {
          vm.isLoading = false
          vm.reportId = ''
        })
        .fail(e => {
          vm
            .getReportServer(apiUrl)
            .then(pdf => {
              return vm.renderDocument(apiUrl)
            })
            .fail(() => {
              vm.hasError = true
            })
            .always(() => {
              vm.isLoading = false
              vm.reportId = ''
            })
        })
    }
  },
  mounted: () => {
    $('.parallax-mirror').hide()
  }
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
.input_submit[disabled] {
  filter: grayscale(1);
}
.loader {
  border-radius: 50%;
  -webkit-animation: spin 2s linear infinite; /* Safari */
  animation: spin 2s linear infinite;
}
.error {
  font-style: italic;
  color: red;
  font-weight: 400;
  font-size: 15px;
}
.wrapper-image {
  padding: 25px 15px;
}
/* Safari */
@-webkit-keyframes spin {
  0% {
    -webkit-transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
  }
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
@media (max-width: 768px) {
  #verify_header {
    height: 230px;
  }
}
</style>

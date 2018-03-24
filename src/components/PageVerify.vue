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
                                <input type="text" class="input_text" name="verifyId" placeholder="Enter Report ID" v-model="reportId" v-bind:disabled="isLoading" >

                            </div>
                            <button name="submit" class="input_submit" @click.prevent="getReport" v-bind:disabled="isLoading">Search <i class="glyphicon glyphicon-refresh" v-bind:class="{loader: isLoading}"></i></button>
                        <p class="p-type-3 color-grey margin-t20"><span class="error" v-show="hasError">** Invalid Report Id **</span></p>
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
  data: () => {
    return {
      reportId: '',
      isLoading: false,
      hasError: false
    }
  },
  methods: {
    renderDocument: function (content, reportName) {
      // IE doesn't allow using a blob object directly as link href
      // instead it is necessary to use msSaveOrOpenBlob
      if (window.navigator && window.navigator.msSaveOrOpenBlob) {
        console.log('render by open blob')
        window.navigator.msSaveOrOpenBlob(content, reportName)
      } else {
        let a = document.createElement('a')
        let url = window.URL.createObjectURL(content)
        a.href = url
        a.download = reportName
        a.click()
        window.URL.revokeObjectURL(url)
        console.log('render by revoke object')
      }
      return $.Deferred()
        .resolve()
        .promise()
    },

    getReportServer: function () {
      // id: 1803SNV0075
      let url =
        'http://dreamxchange-001-site3.btempurl.com/api/certificates/download'
      let data = { id: this.reportId }
      return $.ajax({
        method: 'GET',
        url: url,
        data: data,
        crossDomain: true,
        xhrFields: {
          responseType: 'blob',
          withCredentials: true
        }
      })
    },

    getReportLocal: function () {
      // id: 1803CDR9999
      // let url = `/static/content/${this.reportId}.pdf`
      let url = `/certificates/${this.reportId}.pdf`
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

      let reportName = `${vm.reportId}.pdf`

      $.when(vm.getReportLocal())
        .then((contentLocal, status, response) => {
          let reg = /^application\/pdf/
          let contentType = response.getResponseHeader('content-type')
          let isFound = reg.test(contentType)
          return $.Deferred().resolve(isFound, contentLocal).promise()
        })
        .then((isFound, pdf) => {
          if (isFound) {
            return $.Deferred().resolve(pdf).promise()
          } else {
            return vm.getReportServer()
          }
        })
        .then((pdf) => {
          return vm.renderDocument(pdf, reportName)
        })
        .then(() => {
          vm.isLoading = false
          vm.reportId = ''
        })
        .fail((e) => {
          vm.getReportServer()
            .then((pdf) => {
              return vm.renderDocument(pdf, reportName)
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
</style>

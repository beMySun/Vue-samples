
<template>
  <div v-show="loading" class="loading">
    <Loading v-show="loading"></Loading>
  </div>
</template>

<script>
import Loading from '@/components/Loading'
export default {
  data () {
    return {
      loading: true
    }
  },
  created () {
    this.axios.get('/static/mock/ahs.json').then((response) => {
      setTimeout(() => {
        sessionStorage.setItem('productData', JSON.stringify(response.data))
        var data = JSON.parse(sessionStorage.getItem('productData'))
        console.log(data)
        this.$router.push({
          name: response.data.templateType + response.data.template.split('|')[0]
        })
        this.loading = true
      }, 3000)
    }, () => {
      console.log('failed')
    })
  },
  components: {
    Loading
  }
}

</script>

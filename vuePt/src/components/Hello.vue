<template>
    <div>{{msg}}</div>
</template>
<script>
export default {
    name: 'hello',
    data() {
        return {
            msg: 'Welcome to Your Vue.js App '
        }
    },

    created() {

    },

    methods: {
        getData() {

        },
        getData2() {

        }
    }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.hello {
    h1,
    h2 {
        font-weight: normal;
        color: red;
    }
    ul {
        list-style-type: none;
        padding: 0;
    }
    li {
        display: inline-block;
        margin: 0 10px;
    }
    a {
        color: #42b983;
    }
}
</style>

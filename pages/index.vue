<template>
<div class='bg-dark col-lg-6 min-vh-100 col-md-12'>
    <TopBar />
    <div class="input-group mt-5 pt-5">
        <input type="text" v-on:keyup.enter='filter' v-model='strFilter' class="form-control filter-judul shadow-none border-0" :placeholder="plchFilter" :aria-label="plchFilter" aria-describedby="button-filter">
        <button v-if='strFilter == ""' @click='filter' class="btn btn-outline-secondary btn-filter-judul shadow-none border-0" type="button" id="button-filter">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-filter" viewBox="0 0 16 16">
                <path d="M6 10.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z" />
            </svg>
        </button>
        <button v-if='strFilter' @click='delFilter' class="btn btn-outline-secondary btn-filter-judul shadow-none border-0" type="button" id="button-filter">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
            </svg>
        </button>
    </div>
    <ul class="list-group list-anime mt-5 mb-5 pb-5">
        <li v-if='data.result.length > 0' class="list-group-item text-white d-flex justify-content-between align-items-center">
            <div class="me-auto">
                <div><b>{{ teksJumlah }}</b></div>
            </div>
            <span class="badge border border-white rounded-pill"><b>{{ data.totalKata }}</b></span>
        </li>
        <li v-if='data.result.length == 0' class="list-group-item text-danger d-flex justify-content-between align-items-center">
            <div class="me-auto">
                <div>Anime tidak ditemukan :(</div>
            </div>
        </li>
        <NuxtLink v-for='a in data.result' v-if='a.anime !== ""' :key='a.anime' :to='"/anime/" + encodeURIComponent(a["anime"].toLowerCase())'>
            <li class="list-group-item d-flex justify-content-between align-items-center">
                <div class="me-auto">
                    <div><small>{{ a.anime }}</small></div>
                </div>
                <span class="badge border border-secondary rounded-pill"><small>{{ a.totalKata }}</small></span>
            </li>
        </NuxtLink>
    </ul>
    <BottomBar />
</div>
</template>

<script>
export default {
    scrollToTop: true,
    async asyncData({
        $axios
    }) {
        let data = await $axios.$get('/api/getlistanime')
        let strFilter = "";
        let plchFilter = "";
        let teksJumlah = "";
        let bahasa = "";
        return {
            data,
            strFilter,
            plchFilter,
            bahasa,
            teksJumlah
        }
    },

    mounted() {
        this.cekBahasa();
    },

    watch: {
        strFilter: function (val) {
            this.filter();
        }
    },

    methods: {
        filter() {
            this.$axios.$get('/api/getlistanime')
                .then(res => {
                    this.data = res;
                    let arr = this.data.result;
                    let filter = arr.filter(x => x['anime'].toLowerCase().search(this.strFilter.toLowerCase()) !== -1);
                    this.data.result = filter;
                })
                .catch(err => {
                    alert(err)
                })
        },
        delFilter() {
            this.strFilter = "";
        },
        cekBahasa() {
            this.bahasa = localStorage.bahasa;
            if(this.bahasa == "indonesia") {
                this.plchFilter = "cari anime";
                this.teksJumlah = "Jumlah Kata";
            } else {
                this.plchFilter = "search anime";
                this.teksJumlah = "Word Count";
            }
            setTimeout(this.cekBahasa, 100)
        }
    }
}
</script>

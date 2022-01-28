<template>
<div class='fixed-top position-fixed'>
    <div class='container'>
        <div class='row d-flex justify-content-center'>
            <div class='col-lg-6 bg-dark border-bottom border-secondary rounded text-white d-flex justify-content-between align-items-center'>
                <div class='py-2'>
                    <h3 v-if='path == "/" || path == "/cari" || path == "/developer-api" || path === "/tentang"' class='m-0 p-0'>Katanime</h3>
                    <NuxtLink to='/' v-if='path.split("/")[1] == "anime"'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="white" class="bi bi-arrow-left" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z" />
                        </svg>
                    </NuxtLink>
                    <NuxtLink to='/cari' v-if='path.split("/")[1] == "carikata"'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="white" class="bi bi-arrow-left" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z" />
                        </svg>
                    </NuxtLink>
                </div>
                <div v-if='path !== "/developer-api" && path !== "/tentang"' class='d-flex'>
                    <button v-if='bahasa == "indonesia"' @click='gantiBhs' class='bg-transparent shadow-none border-0'>
                        <img src='/img/Flag_of_Indonesia.svg' class='lang'>
                    </button>
                    <button v-if='bahasa == "inggris"' @click='gantiBhs' class='bg-transparent shadow-none border-0'>
                        <img src='/img/Flag_of_the_United_Kingdom.svg' class='lang'>
                    </button>
                </div>
                <div v-if='path == "/developer-api" || path == "/tentang"' class='d-flex'>
                    <button disabled class='bg-transparent shadow-none border-0'>
                        <img src='/img/Flag_of_Indonesia.svg' class='lang'>
                    </button>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            bahasa: '',
            path: '',
            prev: ''
        }
    },

    mounted() {
        this.cekPrev();
        this.path = this.$route.path;
        if (!localStorage.bahasa) {
            localStorage.bahasa = 'indonesia';
            this.bahasa = 'indonesia';
        } else {
            this.bahasa = localStorage.bahasa;
        }
    },

    methods: {
        cekPrev() {
            this.prev = this.$nuxt.context.from ? this.$nuxt.context.from['fullPath'] : '/';
            setTimeout(this.cekPrev, 100);
        },

        gantiBhs() {
            if (localStorage.bahasa == 'indonesia') {
                localStorage.bahasa = 'inggris';
                this.bahasa = 'inggris';
            } else {
                localStorage.bahasa = 'indonesia';
                this.bahasa = 'indonesia';
            }
        }
    }
}
</script>

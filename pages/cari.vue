<template>
<div class='bg-dark col-lg-6 min-vh-100 d-flex align-items-center col-md-12'>
    <TopBar />
    <div class="input-group">
        <input type="text" v-on:keyup.enter='cari' v-model='kata' class="form-control filter-judul shadow-none border-0" :placeholder="plchCari" :aria-label="plchCari" aria-describedby="button-filter">
        <button @click='cari' class="btn btn-outline-secondary btn-filter-judul shadow-none border-0" type="button" id="button-filter">
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
            </svg>
        </button>
    </div>
    <BottomBar />
</div>
</template>

<script>
export default {
    data() {
        return {
            kata: '',
            plchCari: ''
        }
    },

    mounted() {
        this.cekBahasa();
    },

    methods: {
        cekBahasa() {
            if (localStorage.bahasa == 'indonesia') {
                this.plchCari = 'cari kata disini...';
            } else {
                this.plchCari = 'search word in here...';
            }

            setTimeout(this.cekBahasa, 100);
        },
        cari() {
            this.$router.push({
                path: '/carikata?kata=' + this.kata
            })
        }
    }
}
</script>

<template>
<div class='bg-dark col-lg-6 p-0 min-vh-100 col-md-12'>
    <TopBar />
    <div class='px-4 pt-5 pb-5 mb-5'>
        <div class="card border-secondary text-white mt-5 bg-transparent">
            <div class="card-body">
                <h3 class="card-title m-0 p-0 text-center">"{{ kata }}"</h3>
            </div>
        </div>
        <div v-if='bahasa == "indonesia"' style='z-index:999' class="toast-container position-fixed p-3 bottom-0 start-50 translate-middle-x" id="toastPlacement" data-original-class="toast-container position-absolute p-3">
            <div class="toast pesan-sukses bg-success text-white border border-secondary">
                <div class="toast-body">
                    berhasil disalin!
                </div>
            </div>
        </div>
        <div v-if='bahasa == "inggris"' style='z-index:999' class="toast-container position-fixed p-3 bottom-0 start-50 translate-middle-x" id="toastPlacement" data-original-class="toast-container position-absolute p-3">
            <div class="toast pesan-sukses bg-success text-white border border-secondary">
                <div class="toast-body">
                    copied successfully!
                </div>
            </div>
        </div>
        <div v-if='bahasa == "indonesia"' style='z-index:999' class="toast-container position-fixed p-3 bottom-0 start-50 translate-middle-x" id="toastPlacement" data-original-class="toast-container position-absolute p-3">
            <div class="toast pesan-gagal bg-danger text-white border border-secondary">
                <div class="toast-body">
                    tidak berhasil disalin!
                </div>
            </div>
        </div>
        <div v-if='bahasa == "inggris"' style='z-index:999' class="toast-container position-fixed p-3 bottom-0 start-50 translate-middle-x" id="toastPlacement" data-original-class="toast-container position-absolute p-3">
            <div class="toast pesan-gagal bg-danger text-white border border-secondary">
                <div class="toast-body">
                    copied not successfully!
                </div>
            </div>
        </div>
        <div v-for='k in data.result' class='mt-5'>
            <div  :id='k.id' class="card border-secondary rounded-0 rounded-top text-white pt-5 p-3 bg-transparent">
                <div class="card-body">
                    <p v-if='bahasa == "indonesia"' class="card-text m-0 p-0 text-center"><b>“</b> {{ k.indo }} <b>”</b></p>
                    <p v-if="bahasa == 'inggris'" class="card-text m-0 p-0 text-center"><b>“</b> {{ k.english }} <b>”</b></p>
                    <p class='text-center mb-0 pb-0 mt-3'><small><i>~ {{ k.character }}</i> | {{ k.anime }} ~</i></small></p>
                </div>
            </div>
            <div class='card-footer d-flex align-items-center justify-content-around border border-secondary'>
                <button v-if='bahasa == "indonesia"' @click='copy(k.indo)' class='shadow-none bg-transparent border-0'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" class="bi bi-clipboard" viewBox="0 0 16 16">
                        <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z" />
                        <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z" />
                    </svg>
                </button>
                <button v-if='bahasa == "inggris"' @click='copy(k.english)' class='shadow-none bg-transparent border-0'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" class="bi bi-clipboard" viewBox="0 0 16 16">
                        <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z" />
                        <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z" />
                    </svg>
                </button>
                <button @click='download(k.id)' class='shadow-none bg-transparent border-0'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" class="bi bi-download" viewBox="0 0 16 16">
                        <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" />
                        <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z" />
                    </svg>
                </button>
            </div>
        </div>
        <client-only>
            <infinite-loading class='mt-3' v-if='data' @infinite="infiniteHandler"></infinite-loading>
        </client-only>
    </div>
</div>
</template>

<script>
import * as htmlToImage from 'html-to-image';
import {
    toJpeg
} from 'html-to-image';
export default {
    scrollToTop: true,
    async asyncData({
        $axios,
        params,
        query
    }) {
        let kata = query.kata;
        let page = 1;
        let data = await $axios.$get(`/api/carikata?kata=${kata}&page=${page}`)
        let bahasa = "";
        return {
            kata,
            data,
            bahasa,
            page
        }
    },

    mounted() {
        this.cekBahasa();
    },

    methods: {
        download(id) {
            htmlToImage.toJpeg(document.getElementById(id), {
                    pixelRatio: 5
                })
                .then(function (dataUrl) {
                    var link = document.createElement('a');
                    link.download = 'katanime-' + id + '-.jpeg';
                    link.href = dataUrl;
                    link.click();
                });
        },

        cekBahasa() {
            this.bahasa = localStorage.bahasa;
            setTimeout(this.cekBahasa, 100)
        },

        infiniteHandler($status) {
            this.page++;
            this.$axios.$get(`/api/carikata?kata=${this.kata}&page=${this.page}`)
                .then(response => {
                    if (!response.next) {
                        $status.complete();
                    }
                    this.page++;
                    for (let i in response.result)
                        this.data.result.push({
                            id: response.result[i].id,
                            english: response.result[i].english,
                            anime: response.result[i].anime,
                            indo: response.result[i].indo,
                            character: response.result[i].character
                        })
                    $status.loaded();
                })
                .catch(err => {
                    alert(err)
                })
        },
        copy(text) {
            navigator.clipboard.writeText(text).then(function () {
                var toastElList = [].slice.call(document.querySelectorAll('.pesan-sukses'))
                var toastList = toastElList.map(function (toastEl) {
                    return new bootstrap.Toast(toastEl, {
                        delay: 1000,
                        autohide: true
                    }).show()
                })
            }, function (err) {
                var toastElList = [].slice.call(document.querySelectorAll('.pesan-gagal'))
                var toastList = toastElList.map(function (toastEl) {
                    return new bootstrap.Toast(toastEl, {
                        delay: 1000,
                        autohide: true
                    }).show()
                })
            });
        }
    }
}
</script>

<template>
<div class='fixed-bottom position-fixed'>
    <div class='container'>
        <div class='row d-flex justify-content-center'>
            <div class='col-lg-6 border-top border-secondary rounded d-flex bg-dark text-white justify-content-around py-2'>
                <NuxtLink to='/'>
                    <button class='bg-transparent shadow-none border-0'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" :class='[ path == "/" ? "text-white" : "" ]' class="bi bi-house text-secondary icon-botbar" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M2 13.5V7h1v6.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V7h1v6.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5zm11-11V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z" />
                            <path fill-rule="evenodd" d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z" />
                        </svg>
                    </button>
                </NuxtLink>
                <NuxtLink to='/cari'>
                    <button class='bg-transparent shadow-none border-0'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" :class='[ path == "/cari" ? "text-white" : "" ]' class="bi bi-search text-secondary icon-botbar" viewBox="0 0 16 16">
                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                        </svg>
                    </button>
                </NuxtLink>
                <NuxtLink to='/developer-api'>
                    <button class='bg-transparent shadow-none border-0'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" :class='[ path == "/developer-api" ? "text-white" : "" ]' class="bi bi-book text-secondary icon-botbar" viewBox="0 0 16 16">
                            <path d="M1 2.828c.885-.37 2.154-.769 3.388-.893 1.33-.134 2.458.063 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493-1.18.12-2.37.461-3.287.811V2.828zm7.5-.141c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492V2.687zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z" />
                        </svg>
                    </button>
                </NuxtLink>
                <NuxtLink to='/tentang'>
                    <button class='bg-transparent shadow-none border-0'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" :class='[ path == "/tentang" ? "text-white" : ""]' class="bi bi-info-circle text-secondary icon-botbar" viewBox="0 0 16 16">
                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                            <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                        </svg>
                    </button>
                </NuxtLink>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            path: ''
        }
    },

    mounted() {
        this.path = this.$route.path;
    }
}
</script>

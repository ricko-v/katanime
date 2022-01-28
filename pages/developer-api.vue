<template>
<div class='bg-dark col-lg-6 p-0 min-vh-100 col-md-12'>
    <TopBar />
    <div class='px-4 pt-5 pb-5 mb-5'>
        <div class="card border-secondary text-white mt-5 bg-transparent">
            <div class="card-body">
                <h3 class="card-title m-0 p-0 text-center">Dokumentasi API</h3>
                <p class='text-center mb-0 text-secondary'><small>base_url: <b>https://katanime.vercel.app</b></small></p>
            </div>
        </div>
        <div class="card border-secondary text-white mt-5 bg-transparent">
            <div class="card-body">
                <h5 class="card-title m-0 p-0"><b>[+] Get Random</b></h5>
                <hr>
                <small>Mendapatkan kata-kata anime secara random. Maksimal sesuai total kata di database.</small>
                <p class='mb-3 text-secondary'><small>path: <b>/api/getrandom</b></small></p>
                <table class="table border border-secondary table-dark table-striped">
                    <thead>
                        <tr>
                            <th scope="col" class='text-center'>query</th>
                            <th scope='col' class='text-center'>tipe</th>
                            <th scope='col' class='text-center'>min</th>
                            <th scope="col" class='text-center'>status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class='text-center'>limit</td>
                            <td class='text-center'>int</td>
                            <td class='text-center'>1</td>
                            <td class='text-center'>wajib</td>
                        </tr>
                    </tbody>
                </table>
                <p class='mb-1 text-secondary'><small>contoh: <br><b><a href='https://katanime.vercel.app/api/getrandom?limit=5' target='_blank'>https://katanime.vercel.app/api/getrandom?limit=5</a></b></small></p>
            </div>
        </div>
        <div class="card border-secondary text-white mt-5 bg-transparent">
            <div class="card-body">
                <h5 class="card-title m-0 p-0"><b>[+] Get List Anime</b></h5>
                <hr>
                <small>Mendapatkan list anime yang tersedia.</small>
                <p class='mb-3 text-secondary'><small>path: <b>/api/getlistanime</b></small></p>
                <p class='mb-1 text-secondary'><small>contoh: <br><b><a href='https://katanime.vercel.app/api/getlistanime' target='_blank'>https://katanime.vercel.app/api/getlistanime</a></b></small></p>
            </div>
        </div>
        <div class="card border-secondary text-white mt-5 bg-transparent">
            <div class="card-body">
                <h5 class="card-title m-0 p-0"><b>[+] Get by Anime</b></h5>
                <hr>
                <small>Mendapatkan kata-kata dari judul anime.</small>
                <p class='mb-3 text-secondary'><small>path: <b>/api/getbyanime</b></small></p>
                <table class="table table-dark border-secondary border table-striped">
                    <thead>
                        <tr>
                            <th scope="col" class='text-center'>query</th>
                            <th scope='col' class='text-center'>tipe</th>
                            <th scope='col' class='text-center'>min</th>
                            <th scope="col" class='text-center'>status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class='text-center'>anime</td>
                            <td class='text-center'>string</td>
                            <td class='text-center'>-</td>
                            <td class='text-center'>wajib</td>
                        </tr>
                        <tr>
                            <td class='text-center'>page</td>
                            <td class='text-center'>int</td>
                            <td class='text-center'>1</td>
                            <td class='text-center'>wajib</td>
                        </tr>
                    </tbody>
                </table>
                <p class='mb-1 text-secondary'><small>contoh: <br><b><a href='https://katanime.vercel.app/api/getbyanime?anime=naruto&page=1' target='_blank'>https://katanime.vercel.app/api/getbyanime?anime=naruto&page=1</a></b></small></p>
            </div>
        </div>
        <div class="card border-secondary text-white mt-5 bg-transparent">
            <div class="card-body">
                <h5 class="card-title m-0 p-0"><b>[+] Cari Kata</b></h5>
                <hr>
                <small>Mencari kata-kata anime yang tersedia.</small>
                <p class='mb-3 text-secondary'><small>path: <b>/api/carikata</b></small></p>
                <table class="table table-dark border-secondary border table-striped">
                    <thead>
                        <tr>
                            <th scope="col" class='text-center'>query</th>
                            <th scope='col' class='text-center'>tipe</th>
                            <th scope='col' class='text-center'>min</th>
                            <th scope="col" class='text-center'>status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class='text-center'>kata</td>
                            <td class='text-center'>string</td>
                            <td class='text-center'>-</td>
                            <td class='text-center'>wajib</td>
                        </tr>
                        <tr>
                            <td class='text-center'>page</td>
                            <td class='text-center'>int</td>
                            <td class='text-center'>1</td>
                            <td class='text-center'>wajib</td>
                        </tr>
                    </tbody>
                </table>
                <p class='mb-1 text-secondary'><small>contoh: <br><b><a href='https://katanime.vercel.app/api/carikata?kata=kuat&page=1' target='_blank'>https://katanime.vercel.app/api/carikata?kata=kuat&page=5</a></b></small></p>
            </div>
        </div>
    </div>
    <BottomBar />
</div>
</template>

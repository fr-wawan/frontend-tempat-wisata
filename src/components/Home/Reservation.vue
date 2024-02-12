<template>
    <div class="mt-32 relative">
        <h3 class="font-extrabold text-[#4475F2]">RESERVASI TEMPAT</h3>

        <div class="flex justify-between mt-5">
            <div class="w-6/12">
                <h1 class="font-extrabold text-4xl">
                    Gak mau ngantri? reservasi aja! 🤙🏻
                </h1>

                <template v-for="item in reservationItem">
                    <ReservationInfo :item="item" />
                </template>
            </div>

            <div>
                <img src="../../../images/liburan.png" alt="" class="w-[693px] absolute -right-20 -top-52" />
            </div>
        </div>
    </div>
</template>
  
<script setup>
import ReservationInfo from "./ReservationInfo.vue";

let reservationItem = [
    {
        icon: "🔎",
        title: "Cari tempat yang kamu mau",
        description:
            "Temukan destinasi selanjutnya yang akan kamu kunjungi dengan Destinize",
    },

    {
        icon: "✏️",
        title: "Isi data dan konfirmasi pembayaran",
        description: "Tulis dan lengkapi data kamu untuk keperluan data booking",
    },
    {
        icon: "😍",
        title: "Tinggal masuk dan enjoy!",
        description:
            "Kamu bisa langsung masuk dan enjoy liburan kamu tanpa hambatan",
    },
];
</script>
  
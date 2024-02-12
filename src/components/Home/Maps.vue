<template>
    <div class="mt-40">
        <h3 class="font-extrabold text-center text-[#4475F2]">
            CARI TEMPAT WISATA
        </h3>
        <h1 class="text-center font-extrabold text-6xl mt-10">
            🗺️ • Cari Tempat Wisata Didekatmu
        </h1>

        <p class="text-center w-8/12 leading-[32px] my-8 mb-12 mx-auto text-lg">
            Fitur ini memungkinkan kamu untuk mencari tempat wisata atau tempat yang
            sedang populer di daerah kamu dengan begitu kamu akan selalu update dan
            gak kudet lagi 👍🏻
        </p>

        <div class="mapouter">
            <div class="gmap_canvas">
                <iframe class="gmap_iframe" width="100%" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"
                    src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=Indonesia&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe><a
                    href="https://connectionsgame.org/">Connections Puzzle</a>
            </div>
        </div>

        <div class="mt-16 grid grid-cols-3 gap-10">
            <template v-for="item in wisataItem">
                <WisataInfo :item="item" />
            </template>
        </div>
    </div>
</template>
  
<script setup>
import LocationIcon from "@/components/icon/LocationIcon.vue";
import WisataInfo from "@/components/Home/WisataInfo.vue";
import HeartIcon from "@/components/icon/HeartIcon.vue";
import GroupIcon from "@/components/icon/GroupIcon.vue";

let wisataItem = [
    {
        icon: LocationIcon,
        title: "Populer di dekatmu",
        description:
            "Tempat pariwisata yang populer dan pasti dikenal semua orang didekatmu",
    },
    {
        icon: HeartIcon,
        title: "Favorit di dekatmu",
        description:
            "Tempat favorit dan disukai semua orang orang di sekitar daerah kamu",
    },
    {
        icon: GroupIcon,
        title: "Ramai di didekatmu",
        description:
            "Spot yang paling ramai dikunjungi para warga sekaligus para wisatawan",
    },
];
</script>
  
<style scoped>
.mapouter {
    position: relative;
    text-align: right;
    width: 100%;
    height: 600px;
}

.gmap_canvas {
    overflow: hidden;
    background: none !important;
    width: 100%;
    height: 600px;
}

.gmap_iframe {
    height: 600px !important;
}
</style>
  
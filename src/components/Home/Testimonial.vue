<template>
    <div class="mt-20">
        <h3 class="font-extrabold text-center text-lg text-[#4737FF]">
            TESTIMONIAL DESTINIZE
        </h3>


        <h1 class="text-center text-6xl font-extrabold my-7">
            💬 • Apa Kata Mereka Tentang Kami
        </h1>

        <p class="text-center w-8/12 mx-auto text-[#18191F] leading-[32px]">
            Penasaran apa saja review dari pengguna yang memakai aplikasi dan website
            Destinize buat nentuin kemana liburan mereka selanjutnya? Yuk cek dibawah!
        </p>

        <div class="grid grid-cols-3 gap-20 mt-10">
            <template v-for="item in TestimonialItems">
                <TestimonialCard :item="item" />
            </template>
        </div>
    </div>
</template>
  
<script setup>
import TestimonialCard from "./TestimonialCard.vue";
const TestimonialItems = [
    {
        avatar: "../../../images/iyas-modified.png",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste consequatur excepturi quibusdam mollitia aspernatur, accusamus veritatis quo qui tempora recusandae.",
        username: "Iyas The Black Guy 👨🏿‍🦱",
        location: "Mahasiswa di SMKTI Airlangga",
    },
    {
        avatar: "../../../images/wawan-modified.png",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste consequatur excepturi quibusdam mollitia aspernatur, accusamus veritatis quo qui tempora recusandae.",
        username: "Wawan Gosling 😎🤫🧏",
        location: "Mahasiswa di SMKTI Airlangga",
    },
    {
        avatar: "../../../images/tajri-modified.png",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste consequatur excepturi quibusdam mollitia aspernatur, accusamus veritatis quo qui tempora recusandae.",
        username: "Tajri Hamas 🇵🇸 🇵🇸 🇵🇸",
        location: "Mahasiswa di SMKTI Airlangga",
    },
];
</script>
  
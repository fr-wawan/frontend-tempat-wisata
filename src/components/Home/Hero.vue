<template>
    <div class="flex justify-between relative mt-20">
        <div class="w-7/12">
            <h3 class="rounded-full text-[#4F7DF3] bg-[#E5EDFF] text-sm p-2 px-4 font-bold w-72">
                ✈ • Explore the wonderful indonesia!
            </h3>
            <h1 class="text-[#181E4B] font-extrabold text-7xl leading-[89px]">
                Liburan & nikmati

                <span class="text-[#4475F2]">tempat baru</span>

                di indonesia
            </h1>

            <p class="mt-9 leading-[30px] w-8/12">
                Destinize membuat kamu selalu update terkait tempat liburan baru di
                Indonesia dengan mengikuti perkembangan para influencer di sosial media
                ✨
            </p>

            <div class="mt-10 flex items-center gap-10">
                <button class="rounded-lg text-white bg-blue-500 p-5 px-10">
                    Mulai sekarang →
                </button>

                <div class="flex items-center gap-3">
                    <div class="border border-blue-500 rounded-full p-4">
                        <PlayerIcon />
                    </div>
                    <span class="font-bold text-[#686D77]">Putar Demo</span>
                </div>
            </div>
        </div>

        <div class="">
            <img src="../../../images/hero.png" alt="" class="w-[693px] absolute -right-20 -top-52" />
        </div>
    </div>
</template>
  
<script setup>
import PlayerIcon from "@/components/icon/PlayerIcon.vue";
</script>
  
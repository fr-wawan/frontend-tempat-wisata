<template>
    <div class="border-b">
        <div class="flex w-full items-center gap-12 px-48 py-7">
            <Logo />

            <div class="w-[52%]">
                <input type="text" class="rounded-full p-4 w-full icon-search bg-[#F0F1F2] placeholder:text-sm"
                    placeholder="Cari apapun disini..." />
            </div>

            <div class="text-[#969BAB] flex items-center gap-2">
                <Language />
                <p>Bahasa Indonesia</p>
                <DownArrowBold />
            </div>

            <div class="flex items-center gap-3">
                <div class="rounded-full bg-[#E3EBFD] p-4">
                    <Location />
                </div>
                <div>
                    <span>Lokasi</span>
                    <div class="text-[#4475F2] font-semibold flex gap-2">
                        <p>Indonesia, Yogyakarta</p>
                        <DownArrowBoldBlue />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script setup>
import Logo from "@/components/icon/Logo.vue";
import Language from "@/components/icon/Language.vue";
import DownArrowBold from "@/components/icon/DownArrowBold.vue";
import DownArrowBoldBlue from "@/components/icon/DownArrowBoldBlue.vue";
import Location from "@/components/icon/Location.vue";
</script>
  
<style scoped>
.icon-search {
    background: url("data:image/svg+xml,%3Csvg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M7.66634 14.0002C11.1641 14.0002 13.9997 11.1646 13.9997 7.66683C13.9997 4.16903 11.1641 1.3335 7.66634 1.3335C4.16854 1.3335 1.33301 4.16903 1.33301 7.66683C1.33301 11.1646 4.16854 14.0002 7.66634 14.0002Z' stroke='%239A9EA6' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M14.6663 14.6668L13.333 13.3335' stroke='%239A9EA6' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E%0A") no-repeat left;
    background-size: 16px;
    background-position: 20px;
    padding-left: 45px;
    background-color: rgb(240 241 242 / var(--tw-bg-opacity));
}
</style>
  
<template>
    <Disclosure v-slot="{ open }">
        <DisclosureButton class="border p-7 w-full flex items-center justify-between bg-white shadow">
            <span class="font-bold">{{ question.name }}</span>
            <div class="rounded-full shadow-md p-2" :class="open ? 'bg-blue-400' : ''">
                <ChevronRightIcon :stroke-width="2" :size="16" :class="open ? 'rotate-90 transform text-white' : ''"
                    class="h-5 w-5 text-gray-800" />
            </div>
        </DisclosureButton>
        <DisclosurePanel
            class=" px-5 leading-[26px] pb-5 border border-l-blue-400 border-l-4 bg-[#F6F6F6] shadow w-full p-7 "
            v-html="question.description">
        </DisclosurePanel>
    </Disclosure>
</template>
  
<script setup>
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
import { ChevronRightIcon } from 'vue-tabler-icons';

const props = defineProps({
    question: Object
})
</script>
  
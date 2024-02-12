<template>
    <div class="my-5">
        <label :for="name">{{ label }}</label>
        <textarea :name="name" :id="name" cols="30" rows="10" :placeholder="placeholder"
            @input="$emit('update:modelValue', $event.target.value)" :value="modelValue"
            class="block border border-gray-300 mt-3 rounded-lg md:w-full w-full p-2.5 placeholder:text-sm placeholder:p-1 placeholder:text-gray-400"
            required></textarea>
    </div>
</template>
  
<script>
export default {
    props: {
        name: String,
        label: String,
        value: String,
        type: {
            type: String,
            default: "text",
        },
        placeholder: String,
        modelValue: [String, Number],
    },
};
</script>
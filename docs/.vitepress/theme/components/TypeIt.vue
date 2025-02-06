<template></template>
<script setup lang="ts">
import { onMounted } from "vue";
import TypeIt from "typeit";

onMounted(() => {
  new TypeIt(".tagline", {
    strings: [
      "高性能、开源的分布式 MQTT 消息中间件，支持多种协议，广泛应用于物联网、车联网和实时消息系统。",
    ],
    speed: 200,
  }).go();
});
</script>

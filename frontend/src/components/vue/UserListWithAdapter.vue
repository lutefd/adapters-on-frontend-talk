<template>
  <div class="p-4">
    <h1 class="text-2xl font-bold mb-4">User List (With Adapter)</h1>
    <button
      class="bg-blue-500 text-white px-4 py-2 rounded mb-4"
      @click="switchApi"
    >
      Switch to API v{{ apiVersion === 1 ? "2" : "1" }}
    </button>
    <ul class="space-y-2">
      <li v-for="user in users" :key="user.id" class="bg-gray-100 p-2 rounded">
        {{ user.name }} - {{ user.email }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";
import { getUsersV1, getUsersV2 } from "../../lib/api_client";
import { adaptUser } from "../../lib/adapter";
import type { User } from "../../lib/interfaces";

export default defineComponent({
  setup() {
    const users = ref<User[]>([]);
    const apiVersion = ref<1 | 2>(1);

    const fetchUsers = async () => {
      if (apiVersion.value === 1) {
        users.value = await getUsersV1();
      } else {
        const data = await getUsersV2();
        users.value = data.map(adaptUser);
      }
    };

    const switchApi = () => {
      apiVersion.value = apiVersion.value === 1 ? 2 : 1;
      fetchUsers();
    };

    onMounted(fetchUsers);

    return { users, apiVersion, switchApi };
  },
});
</script>

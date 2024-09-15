<script lang="ts">
  import { onMount } from 'svelte';
  import { getUsersV1, getUsersV2 } from '../../lib/api_client';
  import { adaptUser } from '../../lib/adapter';
  import type { User } from '../../lib/interfaces';

  let users: User[] = [];
  let apiVersion: 1 | 2 = 1;

  const fetchUsers = async () => {
    if (apiVersion === 1) {
      users = await getUsersV1();
    } else {
      const data = await getUsersV2();
      users = data.map(adaptUser);
    }
  };

  onMount(fetchUsers);

  const switchApi = () => {
    apiVersion = apiVersion === 1 ? 2 : 1;
    fetchUsers();
  };
</script>

<div class="p-4">
  <h1 class="text-2xl font-bold mb-4">User List (With Adapter)</h1>
  <button
    class="bg-blue-500 text-white px-4 py-2 rounded mb-4"
    on:click={switchApi}
  >
    Switch to API v{apiVersion === 1 ? '2' : '1'}
  </button>
  <ul class="space-y-2">
    {#each users as user (user.id)}
      <li class="bg-gray-100 p-2 rounded">
        {user.name} - {user.email}
      </li>
    {/each}
  </ul>
</div>

<script setup lang="ts">
import { computed, ref } from 'vue';
import ViewToggle from '../components/atoms/ViewToggle.vue';
import UsersTable from '../components/organisms/UsersTable.vue';
import Button from '../components/ui/button/Button.vue';
import { useQueries } from '../composables/useQueries';

const { useHelloQuery, useUsersQuery, useHealthQuery } = useQueries();
const viewMode = ref<'table' | 'card'>('table');

const helloQuery = useHelloQuery();
const usersQuery = useUsersQuery();
const healthQuery = useHealthQuery();

// Computed properties for unified state management
const isLoading = computed(
  () => helloQuery.isFetching.value || usersQuery.isFetching.value || healthQuery.isFetching.value
);

const error = computed(
  () => helloQuery.error.value || usersQuery.error.value || healthQuery.error.value
);

const apiResponse = computed(() => helloQuery.data.value || healthQuery.data.value);

const fetchHello = () => helloQuery.refetch();
const fetchHealth = () => healthQuery.refetch();

const clearError = () => {
  helloQuery.error.value = null;
  usersQuery.error.value = null;
  healthQuery.error.value = null;
};
</script>
<template>
  <div class="home">
    <section class="api-demo">
      <h2 class="text-2xl">API Demo</h2>
      <div class="flex gap-4">
        <Button :loading="isLoading" @click="fetchHello"> Test Hello API </Button>
        <Button :loading="isLoading" @click="fetchHealth" size="sm" variant="destructive">
          Health Check
        </Button>
        <router-link to="/about">
          <Button variant="link">About Page</Button>
        </router-link>
      </div>

      <div v-if="error" class="error">
        <h3>Error:</h3>
        <p>{{ error }}</p>
        <Button size="sm" @click="clearError">Clear</Button>
      </div>

      <div v-if="apiResponse" class="response">
        <h3>API Response:</h3>
        <pre>{{ JSON.stringify(apiResponse, null, 2) }}</pre>
      </div>
    </section>

    <section class="users-table-section mt-8">
      <div class="mb-4 flex items-center justify-between">
        <h2 class="text-2xl">Users</h2>
        <ViewToggle :current-view="viewMode" @update:view="viewMode = $event" />
      </div>
      <UsersTable
        :users="usersQuery.data.value || []"
        :is-loading="usersQuery.isFetching.value"
        :view-mode="viewMode"
      />
    </section>
  </div>
</template>

<style scoped></style>

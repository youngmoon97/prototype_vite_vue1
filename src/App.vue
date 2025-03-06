<script setup>
const links = ['안심 등하교', '친구끼리', '잼민SNS'];
</script>

<template>
    <v-layout class="rounded rounded-md" style="display: flex; flex-direction: column">
        <v-main>
            <!-- <AppHeader :sideBar="sidebar" @openSideBar="onOpenSideBar" /> -->
            <v-container class="tab-content" style="height: auto">
                <router-view />
            </v-container>
        </v-main>
        <v-footer app fixed class="bg-orange-lighten-1">
            <v-row>
                <v-btn v-for="link in links" :key="link" class="mx-2" color="white" rounded="xl" variant="text">
                    {{ link }}
                </v-btn>
                <v-col class="text-center mt-4" cols="12">
                    {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
                </v-col>
            </v-row>
        </v-footer>
    </v-layout>
</template>

<style scoped></style>

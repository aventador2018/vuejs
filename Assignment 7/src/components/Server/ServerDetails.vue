<template>
    <div class="col-xs-12 col-sm-6">
        <p v-if="!server">Please select a server!</p>
        <div v-else>
            <p>Server ID: {{ server.id }}</p>
            <p>Server Status: {{ server.status }}</p>
            <button @click="resetStatus">Reset Status</button>
        </div>
    </div>

</template>

<script>
    import { eventBus } from '../../main.js';

    export default {
        data: function() {
            return {
                server: null
            }
        },
        created() {
            eventBus.$on('serverClicked', (server) => {
                this.server = server;
            })
        },
        methods: {
            resetStatus: function() {
                this.server.status = 'Normal';
            }
        }
    }
</script>

<style>

</style>

<template>
    <li
            class="list-group-item"
            @click="onClick"
            style="cursor: pointer">
        Server #{{ server.id }}
    </li>
</template>

<script>
    import { eventBus } from '../../main';

    export default {
        props: ['server'],
        methods: {
            onClick: function() {
                eventBus.$emit('serverClicked', this.server);
            }
        }
    }
</script>

<style>

</style>

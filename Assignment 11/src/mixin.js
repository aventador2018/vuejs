export const mixin = {
    computed: {
        computed1() {
            return this.text.split('').reverse().join('');
        },
        computed2() {
            return this.text + ` (${this.text.length})`;
        }
    }
}
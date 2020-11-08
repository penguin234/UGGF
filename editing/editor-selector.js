Vue.component('modifier-editer', {
    props: ['modifier', 'index'],
    data: function() {
        return {
        };
    },
    methods: {
        rightMove: function() {
            this.$emit('swap', this.index, this.index+1);
        },
        leftMove: function() {
            this.$emit('swap', this.index, this.index-1);
        },
        remove: function() {
            this.$emit('remove', this.index);
        },
        select: function() {
            this.$emit('selected', this.index);
        }
    },
    watch: {
        type: function(val) {
            if (this.modifier) {
                this.modifier.type = this.type;
            }
        },
        modifier: function(val) {
            this.type = val.type;
        },
    },
    template: `
        <div>
            <button @click="leftMove"><</button>
            <button @click="remove">🗑</button>
            <button @click="rightMove">></button>
            <br>

            <button @click="select">Edit</button>
            <br>
        </div>
    `,
});
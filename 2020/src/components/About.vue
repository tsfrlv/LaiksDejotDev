<template>
    <div>
        <h1>About</h1>


    </div>
</template>

<script>
import marked from 'marked'
import VueGallery from 'vue-gallery'

export default {
    data() {
        return {
            workshops: [
                {
                    id: 1,
                    name: 'Workshop name',
                    image: require('../assets/the.png'),
                    body: marked(require('../assets/articles/workshops/workshop-1.md').default)
                }
            ],
            selectedWorkshop: null
        }
    },
    methods: {
        openModal(workshop) {
            this.selectedWorkshop = workshop
            this.$bvModal.show('preview')
        }
    }
}
</script>

<template>
    <div>
        <h1>Workshops</h1>

        <ul class="row list-unstyled">
            <li class="col-4" v-for="workshop in workshops" :key="workshop.id">
                <a class="card" href="#" @click.prevent="openModal(workshop)">
                    <span class="card-body">
                        <span class="card-title">{{ workshop.name }}</span>
                        <img :src="workshop.image" class="card-img">
                    </span>
                </a>
            </li>
        </ul>

        <b-modal id="preview" :title="selectedWorkshop && selectedWorkshop.name" hide-footer>
            <article v-if="selectedWorkshop" v-html="selectedWorkshop.body"></article>
        </b-modal>
    </div>
</template>

<script>
import marked from 'marked'

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

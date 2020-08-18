<template>
    <div id="app" class="container-fluid">
        <div class="row">
            <div class="col-3">
                <aside class="nav flex-column">
                    <router-link to="/" class="nav-link">About festival</router-link>
                    <router-link to="/program" class="nav-link">Program</router-link>
                    <router-link to="/performances" class="nav-link">Performances</router-link>
                    <router-link to="/workshops" class="nav-link">Workshops</router-link>
                    <router-link to="/prices" class="nav-link">Prices and tickets</router-link>
                    <router-link to="/venues" class="nav-link">Venues</router-link>
                    <a href="#" @click.prevent="" class="nav-link">EN</a>
                </aside>
            </div>
            <section class="col-9">
                <router-view></router-view>
                <footer class="d-flex align-items-center justify-content-between">
                    <a v-for="sponsor in sponsors" :href="sponsor.url" :key="sponsor.url" target="_blank">
                        <img :src="sponsor.image" style="max-width: 100px"/>
                    </a>
                </footer>
            </section>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            sponsors: [
                { url: '#1', image: require('@/assets/dome_logo.jpg') }
            ]
        }
    }
}
</script>

<style lang="scss">
$primary: #191919;
$body-bg: #f5c683;
$modal-backdrop-bg: rgba(#000, 0.2);

@import '~bootstrap/scss/bootstrap';
</style>

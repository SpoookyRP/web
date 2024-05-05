<script>
    import { base } from "$app/paths";
</script>

<div id="container">
    <img class="background" src="{base}/images/background.png" alt="background">
</div>

<style lang="scss">
    #container {
        font-family: "Popins", sans-serif;
    }

    .background {
        width: 100%;
        height: 100%;
        object-fit: cover;
        position: absolute;
        top: 0;
        left: 0;
        z-index: -1;
    }
</style>
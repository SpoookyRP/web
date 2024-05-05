<script>
	import { page } from '$app/stores';
</script>


<svelte:head>
    <title>Error | SpookyRP</title>
</svelte:head>

<div id="container">
    <h1>{$page.error.message}</h1>
    <img class="background" src="images/background.png" alt="background">
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

    h1 {
        color: white;
        font-size: 5rem;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
</style>
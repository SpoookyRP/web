<script>
    import { base } from "$app/paths";
</script>

<svelte:head>
    <title>Error | SpookyRP</title> 
</svelte:head>

<div id="container">
    <h1>404</h1>
    <p>Page not found</p>
    <a href="{base}/">Go to Home</a>
</div>

<style>
    #container {
        font-family: "Popins", sans-serif;
        color: black;
    }
</style>
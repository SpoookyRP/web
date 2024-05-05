<script>
    import { base } from "$app/paths";

    export const load = async ({ fetch }) => {
        return {
            props: {},
            meta: {
                title: '404 | SpookyRP'
            }
        };
    };
</script>

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
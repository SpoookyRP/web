<script>
    import { base } from "$app/paths";
</script>

<svelte:head>
    <title>Home | SpookyRP</title> 
</svelte:head>

<div class="right-menu">
    <h1>Vítej na našich stránkách!</h1>
    <p>Spooky RP je český roleplay server na platformě FiveM. Na našem serveru se snažíme vytvořit co nejlepší zážitek pro hráče, ať už jde o kvalitní roleplay, nebo o příjemnou komunitu.</p>
</div>

<img class="character" src="{base}/images/character.webp" alt="character">

<style lang="scss"> 
    
    .right-menu {
        position: absolute;
        top: 50%;
        right: 5%;
        transform: translateY(-50%);
        width: 40%;
        color: white;
        background-color: rgba(20, 26, 31, 0.7); /* Změněno na rgba */
        padding: 50px;
        border-radius: 10px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);

        h1 {
            font-size: 3rem;
            margin-bottom: 20px;
        }

        p {
            font-size: 1.5rem;
        }
    }

    .character {
        position: absolute;
        bottom: 0;
        right: 0;
        width: 140%;
        height: 80%;
        object-fit: contain;
        z-index: -1;
    }
</style>
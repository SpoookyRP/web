<script>
    import { base } from "$app/paths";
</script>

<svelte:head>
    <title>Jak se připojit? | SpookyRP</title>
</svelte:head>

<div id="container">
    <h1>Jak se připojit?</h1>
    <div class="verify">
        <h2>Ověření</h2>
        <p>První krok je stáhnout si klienta FiveM, který je dostupný na <a href="https://fivem.net/" target="_blank">fivem.net</a>. Po stažení a instalaci klienta je potřeba spustit FiveM a vyhledat server Spooky RP. Po připojení na server je potřeba si vytvořit postavu a vyčkat na schválení.</p>
    </div>
    <div class="connect">
        <h2>Připojení</h2>
        <p>Připojení na server je možné přes IP adresu <span>connect.spookyrp.cz</span>. Po připojení na server je potřeba si vytvořit postavu a vyčkat na schválení.</p>
    </div>
</div>

<img class="character" src="{base}/images/character_connect.webp" alt="character">

<style lang="scss">

#container {
        position: absolute;
        top: 50%;
        right: 5%;
        transform: translateY(-50%);
        width: 40%;
        background-color: rgba(20, 26, 31, 0.7);
        padding: 50px;
        border-radius: 10px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);

        color: white;

        h1 {
            position: relative;
            width: 240px;
        }

        h1::after {
            content: "";
            position: absolute;
            left: 0;
            right: 0;
            bottom: -5px;
            height: 2px;
            background: #f07911;
        }

        .verify, .connect {
            h2 {
                position: relative;
                margin-top: 35px;
            }

            h2::after {
                content: "";
                position: absolute;
                left: 0;
                right: 0;
                bottom: -5px;
                height: 1px;
                background: #f07911;
            }
        }

        .verify {
            h2 {
                width: 95px;
            }
        }

        .connect {
            h2 {
                width: 105px;
            }
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
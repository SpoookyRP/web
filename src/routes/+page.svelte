<script>
    import Fa from "svelte-fa";
    import { faInstagram, faDiscord, faYoutube } from '@fortawesome/free-brands-svg-icons';
    import { base } from "$app/paths";

    export const load = async ({ fetch }) => {
        return {
            props: {},
            meta: {
                title: 'Home | SpookyRP'
            }
        };
    };
</script>

<div id="container">
    <img class="background" src="{base}/images/background.png" alt="background">
    
    <div class="upper-menu">
        <img src="{base}/images/logo_text.png" alt="logo">
        <div class="sites">
            <a href="{base}/404">Jak se připojit?</a>
            <a href="{base}/about">O nás</a>
            <a href="{base}/faq">FAQ</a>
        </div>
    </div>

    <div class="left-menu">
        <a href="{base}/"><Fa icon={faInstagram} size="3x"/></a>
        <a href="https://discord.gg/eMbGavcXym"><Fa icon={faDiscord} size="3x"/></a>
        <a href="{base}/"><Fa icon={faYoutube} size="3x"/></a>
    </div>

    <div class="right-menu">
        <h1>Vítej na našich stránkách!</h1>
        <p>Spooky RP je český roleplay server na platformě FiveM. Na našem serveru se snažíme vytvořit co nejlepší zážitek pro hráče, ať už jde o kvalitní roleplay, nebo o příjemnou komunitu.</p>
    </div>

    <img class="character" src="{base}/images/character.webp" alt="character">
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

    .upper-menu {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 20%;
        height: 10vh;

        .sites {
            display: flex;
            gap: 80px;
            font-size: 1.5rem;

            a {
                color: white;
                text-decoration: none;
            }
        }
    }

    .left-menu {
        position: absolute;
        top: 50%;
        left: 5%;
        transform: translateY(-50%);
        display: flex;
        align-items: center;
        flex-direction: column;
        gap: 20px;

        a {
            color: white;
            text-decoration: none;
        }
        
        a:nth-child(1):hover {
            color: #d00b86;
        }

        a:nth-child(2):hover {
            color: #7289da;
        }

        :nth-child(3):hover {
            color: #ff0000;
        }
    }
    
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
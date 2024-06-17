<script>
    import Fa from "svelte-fa";
    import { faInstagram, faDiscord, faYoutube } from '@fortawesome/free-brands-svg-icons';
    import { base } from "$app/paths";
</script>

<div id="container">
    <img class="background" src="{base}/images/background.png" alt="background">

    <div class="upper-menu">
        <a href="{base}/"><img src="{base}/images/logo_text.png" alt="logo"></a>
        <div class="sites">
            <a href="{base}/connect">Jak se připojit?</a>
            <a href="{base}/about">O nás</a>
            <a href="{base}/faq">FAQ</a>
        </div>
    </div>

    <div class="left-menu">
        <a href="{base}/"><Fa icon={faInstagram} size="3x"/></a>
        <a href="https://discord.gg/eMbGavcXym"><Fa icon={faDiscord} size="3x"/></a>
        <a href="{base}/"><Fa icon={faYoutube} size="3x"/></a>
    </div>
    <slot />
</div>

<style lang="scss">

    *, *::after, *::before {
        -webkit-user-select: none;
        -webkit-user-drag: none;
        -webkit-app-region: no-drag;
    }

    #container {
        font-family: "Popins", sans-serif;
        -webkit-user-select: none; /* Safari */
        -ms-user-select: none; /* IE 10 and IE 11 */
        user-select: none; /* Standard syntax */
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
</style>
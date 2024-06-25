<script>
    import { base } from "$app/paths";
</script>

<svelte:head>
    <title>O nás | SpookyRP</title>
</svelte:head>

<div id="container">
    <h1>O nás</h1>
    <div class="scripts">
        <h2>Skripty</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eu blandit risus, eu sollicitudin diam. Sed bibendum diam in ante volutpat, in bibendum tortor condimentum. Donec tempus at arcu ac sodales. Fusce bibendum, dolor nec ornare malesuada, metus tellus facilisis ipsum, et hendrerit quam nunc a lacus. Phasellus et arcu tortor. Proin sit amet velit in nisl euismod tempus. Suspendisse ac tristique nunc. Vestibulum accumsan lacus ac consequat efficitur. Quisque at velit vitae risus dapibus imperdiet non vitae elit. Nullam quis finibus turpis. Proin ullamcorper tortor id rhoncus tincidunt. Morbi blandit nec tortor eu rutrum. Morbi ac dictum magna.</p>
    </div>
    <div class="community">
        <h2>Komunita</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eu blandit risus, eu sollicitudin diam. Sed bibendum diam in ante volutpat, in bibendum tortor condimentum. Donec tempus at arcu ac sodales. Fusce bibendum, dolor nec ornare malesuada, metus tellus facilisis ipsum, et hendrerit quam nunc a lacus. Phasellus et arcu tortor. Proin sit amet velit in nisl euismod tempus. Suspendisse ac tristique nunc. Vestibulum accumsan lacus ac consequat efficitur. Quisque at velit vitae risus dapibus imperdiet non vitae elit. Nullam quis finibus turpis. Proin ullamcorper tortor id rhoncus tincidunt. Morbi blandit nec tortor eu rutrum. Morbi ac dictum magna.</p>
    </div>
</div>

<img class="character" src="{base}/images/character_about.webp" alt="character">

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
            width: 100px;
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

        .scripts, .community {
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

        .scripts {
            h2 {
                width: 85px;
            }
        }

        .community {
            h2 {
                width: 115px;
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
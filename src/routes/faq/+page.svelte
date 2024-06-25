<script>
    import { base } from "$app/paths";
</script>

<svelte:head>
    <title>FAQ | SpookyRP</title>
</svelte:head>

<div id="container">
    <h1>FAQ</h1>
    <div class="list">
        <!-- <h2>Seznam otázek</h2>
        <ul>
            <li><a href="#question1">Otázka 1</a></li>
            <li><a href="#question2">Otázka 2</a></li>
            <li><a href="#question3">Otázka 3</a></li>
            <li><a href="#question4">Otázka 4</a></li>
            <li><a href="#question5">Otázka 5</a></li>
        </ul> -->
        <h2>Zde nic zatím není</h2>
    </div>
</div>

<img class="character" src="{base}/images/character_faq.webp" alt="character">

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
            width: 75px;
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
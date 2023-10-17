<style lang="scss">
    @import url("../lib/style/fonts.scss");
    @import url("../lib/style/colours.css");

    :root {
        font-family: 'Noto Sans';
        background-color: var(--background-color-muted);
    }

    .slot {
        color: var(--color);
        transition: 0.5s cubic-bezier(.07, .95, 0, 1);
    }

    .container {
        margin: 6px;
        display: inline-block;
        cursor: pointer;
    }

    .bar1, .bar2, .bar3 {
        width: 20px;
        height: 3px;
        background-color: var(--primary-accent);
        margin: 4px;
        transition: 0.35s ease-in-out; 
    }

    /* Dropdown content (hidden by default) */
    .dropdown-content {
        padding: 0;
        margin: 0;
        min-width: 160px;
        width: 10vw;
        display: flex;
        flex-direction: column;
        max-height: 0;
        position: absolute;
        background-color: var(--background-color);
        box-shadow: 0px 3px 0px var(--primary-accent);
        transition: 0.5s cubic-bezier(.07, .95, 0, 1);
        z-index: 100;
        pointer-events: none;
        overflow: hidden;
    }

    /* Show the dropdown menu on hover */ 
    .dropdown-content-show {
        padding: 6px 0;
        max-height: 105px;
        transition: 0.5s cubic-bezier(.07, .95, 0, 1); 
        pointer-events: auto;
    }

    .dropdown-link {
        color: var(--text-accent);
        text-decoration: none;
        font-family: 'Noto Sans';
        font-weight: 700;
        margin: 6px 12px;
    }

    .dropdown-link:hover {
        color: var(--primary-accent);
        transition: color 0.5s cubic-bezier(.07, .95, 0, 1);
    }

    .dropdown-link:active {
        color: var(--primary-accent-muted);
        transition: color 0.25s cubic-bezier(.07, .95, 0, 1);
    }


    /* Rotate first bar */
    .change .bar1 {
      transform: translate(0, 7px) rotate(-45deg);
    }

    /* Fade out the second bar */
    .change .bar2 {opacity: 0;}

    /* Rotate last bar */
    .change .bar3 {
      transform: translate(0, -7px) rotate(45deg);
    }

    nav {
        align-items: center;
        display: flex;
        background-color: var(--background-color);
        box-shadow: 0 3px 0 var(--primary-accent);
        transition: 0.5s cubic-bezier(.07, .95, 0, 1);
    }

</style>

<script lang="ts">
    import { loggedIn } from '../firebase.ts';

    let menuButtonState: boolean = false;
    let signedIn: boolean = loggedIn();

    function toggleMenuButton() {
        menuButtonState = !menuButtonState;
    } 
</script>

<nav>
    <div class="container" class:change={menuButtonState} on:click={toggleMenuButton}>
        <div class="bar1"></div>
        <div class="bar2"></div>
        <div class="bar3"></div>
    </div>
</nav>
   
<div class="dropdown-content" class:dropdown-content-show={menuButtonState}>
    <a href="/" class="dropdown-link">HOME</a>
    <a href="/settings" class="dropdown-link">SETTINGS</a>
        {#if signedIn}
            <a href="/logout" class="dropdown-link">
                LOGOUT
            </a>
        {:else}
            <a href="/login" class="dropdown-link">
                LOGIN
            </a>
        {/if}
</div>

<div class="slot">
    <slot />
</div>

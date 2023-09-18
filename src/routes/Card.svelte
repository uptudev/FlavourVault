<script lang="ts">
    export let title = '';
    export let ingredients: string[] = [];
    export let procedure = '';
    export let colour = 1;

    let pink: boolean = false;
    let orange: boolean = false;
    let yellow: boolean = false;
    let green: boolean = false;
    let blue: boolean = false;
    let purple: boolean = false;

    switch(colour) {
        case 0:
            pink = true;
            break;
        case 1:
            orange = true;
            break;
        case 2:
            yellow = true;
            break;
        case 3:
            green = true;
            break;
        case 4:
            blue = true;
            break;
        case 5:
            purple = true;
            break;
        default:
    }

    let expanded: boolean = false;
    let visible: boolean = false;
    let isEditable: boolean = false;

    function toggleExpand() {
        expanded = !expanded;
    }

    function toggleEditable() {
        isEditable = !isEditable;
    }

    function peek() {
        visible = true;
    }

    function hide() {
        visible = false;
    }

</script>

<style lang="scss">
    @import url('../lib/style/colours.css');

    .card {
        margin: 3px;
        min-width: 300px;
        width: 30vw;
        min-height: 0;
        max-height:25vh;
        border-radius: 6px;
        padding: 6px;
        background-color: var(--background-color);
        transition: min-height 8s ease-in-out, max-height 8s ease-in-out, width 8s ease-in-out, 0.5s cubic-bezier(.07, .95, 0, 1);
    }

    .edit-button {
        margin: 6px;
        min-width: 64px;
        opacity: 0;
        border-radius: 6px;
        background-color: var(--background-color-accent);
        border: none;
        color: var(--primary-accent);
        font-weight: 600;
        display: none;
        position: relative;
        z-index: 5;
        transition: opacity 8s ease-in-out, width 8s ease-in-out, 0.5s cubic-bezier(.07, .95, 0, 1);
    }

    .edit-button-show {
        display: block;
        opacity: 1;
        transition: opacity 8s ease-in-out, width 8s ease-in-out, 0.5s cubic-bezier(.07, .95, 0, 1);
    }

    .pink {
        --primary-accent: var(--primary-color);
    }

    .orange {
        --primary-accent: var(--accent-color);
    }

    .yellow {
        --primary-accent: var(--tertiary-color);
    }

    .green {
        --primary-accent: var(--secondary-color);
    }

    .blue {
        --primary-accent: var(--quaternary-color);
    }

    .purple {
        --primary-accent: var(--quinary-color);
    }

    .big-card {
        width: calc(100vw - 24px);
        max-height: 90vh;
    }

    .card-header {
        margin-bottom: 4px;
        position: relative;
        background-color: var(--background-color-accent);
        font-weight: 800;
        font-size: 16pt;
        text-decoration: underline 1px solid var(--primary-accent);
        border-radius: 6px;
        border-bottom: 3px solid var(--primary-accent);
        z-index: 1;
        text-align: center;
        transition: width 8s ease-in-out, 0.5s cubic-bezier(.07, .95, 0, 1);
    }

    .ingredients-list {
        margin: 6px;
    }

    .ingredients {
        position: relative;
        opacity: 0;
        max-height: 0;
        margin: -6px 0 0;
        padding: 0 6px 0;
        z-index: 0;
        background-color: var(--background-color-accent);
        border-radius: 0 0 6px 6px ;
        transition: opacity 8s ease-in-out, max-height 8s ease-in-out, width 8s ease-in-out, 0.5s cubic-bezier(.07, .95, 0, 1);
        overflow: hidden;
    }

    .ingredients-show {
        opacity: 1;
        display: block;
        max-height: 100vh;
        padding: 6px 6px 0;
    }

    .procedure {
        opacity: 0;
        max-height: 0;
        position: relative;
        padding: 0 6px 0;
        z-index: 0;
        background-color: var(--background-color);
        border-radius: 0 0 6px 6px ;
        transition: opacity 8s ease-in-out, max-height 8s ease-in-out, width 8s ease-in-out, 0.5s cubic-bezier(.07, .95, 0, 1);
        overflow: hidden;
    }

    .procedure-show {
        opacity: 1;
        display: block;
        max-height: 100vh;
        padding: 6px 6px 0;
    }

    .subheader {
        opacity: 0;
        display: none;
        font-weight: 700;
        font-size: 14pt;
        text-decoration: underline 1px dashed var(--primary-accent);
        color: var(--text-accent);
        transition: width 8s ease-in-out, 0.5s cubic-bezier(.07, .95, 0, 1);
    }

    .subheader-show {
        opacity: 1;
        display: block;
    }

    .edit-recipe {
        resize: none;
    }

</style>

<div 
    class="card" 
    class:big-card={expanded} 
    class:pink={pink}
    class:orange={orange}
    class:yellow={yellow}
    class:green={green}
    class:blue={blue}
    class:purple={purple}
>
    <div class="card-header" on:click={toggleExpand} on:mouseenter={peek} on:mouseleave={hide}>
            {title}
    </div>
    <div class="ingredients" class:ingredients-show={isEditable}>
        {#if isEditable}
            <textarea rows=1 class="edit-recipe" bind:value={title}></textarea>
        {/if}
    </div>
    <div class="ingredients" class:ingredients-show={visible || expanded}>
        <strong class="subheader" class:subheader-show={expanded}>Ingredients<br></strong>
        {#if isEditable}
            <textarea rows=1 class="edit-recipe" bind:value={ingredients}></textarea>
        {:else}
            <ul class="ingredients-list">
                {#each ingredients as ingredient, index}
                    <li class="ingredients-list-item">{ingredient}</li>
                {/each}
            </ul>
        {/if}
    </div>
    <div class="procedure" class:procedure-show={expanded}>
        <strong class="subheader" class:subheader-show={expanded}>Procedure<br></strong>
        {#if isEditable}
            <textarea rows=1 class="edit-recipe" bind:value={procedure}></textarea>
        {:else}
            {procedure}
        {/if}
    </div>
    <button class='edit-button' class:edit-button-show={expanded} on:click={toggleEditable}>
        {isEditable ? "Save" : "Edit"}
    </button>
</div>

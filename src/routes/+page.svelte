<script lang='ts'>
    import Card from './Card.svelte';
    import './UserData.ts';
    import { loggedIn } from '../firebase.ts';

    let testRecipe1: Recipe = {
        color: 0,
        title: "Test Recipe 1",
        description: "unimplemented",
        ingredients: [
            "kill",

        ],
        procedure: [
            "me",
        ]
    }

    let testRecipe2: Recipe = {
        color: 1,
        title: "Test Recipe 2",
        description: "unimplemented",
        ingredients: [
            "kill",

        ],
        procedure: [
            "me",
        ]
    }

    let testRecipe3: Recipe = {
        color: 2,
        title: "Test Recipe 3",
        description: "unimplemented",
        ingredients: [
            "kill",

        ],
        procedure: [
            "me",
        ]
    }

    let testRecipe4: Recipe = {
        color: 3,
        title: "Test Recipe 4",
        description: "unimplemented",
        ingredients: [
            "kill",

        ],
        procedure: [
            "me",
        ]
    }

    let testRecipe5: Recipe = {
        color: 4,
        title: "Test Recipe 5",
        description: "unimplemented",
        ingredients: [
            "kill",

        ],
        procedure: [
            "me",
        ]
    }

    let testRecipe6: Recipe = {
        color: 5,
        title: "Test Recipe 6",
        description: "unimplemented",
        ingredients: [
            "kill",

        ],
        procedure: [
            "me",
        ]
    }

</script>

<style lang='scss'>
    .recipe-book {
        margin: 6px auto;
        padding: 0 !important;
        list-style-type: none;
        width: 100vw;
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        flex-direction: column;
    }
</style>

{#if loggedIn}
<div class='recipe-book'>
    <Card title={testRecipe1.title} ingredients={testRecipe1.ingredients} procedure={testRecipe1.procedure} colour={testRecipe1.color} />
    <Card title={testRecipe2.title} ingredients={testRecipe2.ingredients} procedure={testRecipe2.procedure} colour={testRecipe2.color} />
    <Card title={testRecipe3.title} ingredients={testRecipe3.ingredients} procedure={testRecipe3.procedure} colour={testRecipe3.color} />
    <Card title={testRecipe4.title} ingredients={testRecipe4.ingredients} procedure={testRecipe4.procedure} colour={testRecipe4.color} />
    <Card title={testRecipe5.title} ingredients={testRecipe5.ingredients} procedure={testRecipe5.procedure} colour={testRecipe5.color} />
    <Card title={testRecipe6.title} ingredients={testRecipe6.ingredients} procedure={testRecipe6.procedure} colour={testRecipe6.color} />
</div>
{:else}
<p>Please log in to see your recipe books!</p>
{/if}

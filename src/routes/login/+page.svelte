<script lang='ts'>
    import { signUp, signIn, loggedIn, logOut } from '../../firebase.ts';

    let email = '';
    let password = '';

</script>

{#if loggedIn()}
    <p>WOAH IT WORKED</p>
    <button type="button" on:click={logOut}>Sign Out</button>
{:else}
    <form>
        <input type="email" bind:value={email} placeholder="Email" />
        <input type="password" bind:value={password} placeholder="Password" />
        <button type="button" on:click={handleSignUp}>Sign Up</button>
        <button type="button" on:click={handleSignIn}>Sign In</button>
    </form>
{/if}

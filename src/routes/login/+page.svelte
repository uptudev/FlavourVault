<script lang='ts'>
    import { signUp, signIn } from '../../firebase.ts';

    let email = '';
    let password = '';
    let user = null;

    const handleSignUp = async () => {
        try {
            user = await signUp(email, password);
            // Handle successful sign-up, e.g., redirect to another page
        } catch (error) {
        // Handle sign-up error, e.g., display an error message
            console.error(error.message);
        }
    }

    const handleSignIn = async () => {
        try {
            user = await signIn(email, password);
            // Handle successful sign-up, e.g., redirect to another page
        } catch (error) {
            // Handle sign-up error, e.g., display an error message
            console.error(error.message);
        }
    }

</script>

{#if user}
    <p>WOAH IT WORKED</p>
{:else}
    <form>
        <input type="email" bind:value={email} placeholder="Email" />
        <input type="password" bind:value={password} placeholder="Password" />
        <button type="button" on:click={handleSignUp}>Sign Up</button>
        <button type="button" on:click={handleSignIn}>Sign In</button>
    </form>
{/if}

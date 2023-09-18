<script lang='ts'>
    import { writable } from 'svelte/store';
    import { FVUser } from '../UserData.ts';
    import { auth, handleSignUp, handleSignIn } from '../../firebase.ts';
    
    let user = null;

    function setUser(email: string, password: string) {
        
    }

</script>

<style lang='scss'>

</style>

{#if (user != null)}

{:else}
<h2>Log In</h2>
    <form>
        <label class="login_title">
            Email:
        </label><br />
        <input class="login" type="text" id="email" name="email" />
        <br />
        <label class="login_title">
            Password:
        </label><br />
        <input class="login" type="password" id="password" name="password" />
        <div>
            <button class="login-button" type="submit" onClick={handleSignIn}>
                Sign in
            </button>
            <button class="login-button" type="submit" onClick={handleSignUp}>
                Sign up
            </button>
        </div>
    </form>
{/if}

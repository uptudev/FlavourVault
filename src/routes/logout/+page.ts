// Import required functions or modules
import { logOut } from '../../firebase.ts';
import { goto } from '$app/navigation';

// Define the load function for the page
export async function load() {
    logOut()
        .then(() => {
            goto('/');
        }).catch(error => {
            // Handle sign-out error.
            console.error(error);
        });
}

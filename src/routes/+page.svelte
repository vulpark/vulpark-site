<script lang="ts">
    import LandingPage from "../components/other/LandingPage.svelte";

    const loggedIn = false;
</script>

{#if !loggedIn}
    <LandingPage />
{:else}
    <h1>Welcome to SvelteKit</h1>
    <p>
        Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation
    </p>
{/if}

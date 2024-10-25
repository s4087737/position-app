<script>
    import { onMount } from 'svelte';

    let treasureCount;

    onMount(() => {
        treasureCount = localStorage.getItem('treasureCount') || 0;
    });
</script>

<!-- Scoreboard Display -->
<div class="scoreboard">
    <h1>Scoreboard</h1>
    <p>Treasures Collected: {treasureCount} / 5</p>
</div>

<div class="text-center mt-10">
    <a href="/" class="btn btn-primary">
        Go Back to Home
    </a>
</div>

<style>
    .scoreboard {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin-top: 20px;
        font-size: 20px;
        font-weight: bold;
    }

    .scoreboard h1 {
        font-size: 36px;
        margin-bottom: 20px;
    }

    .scoreboard p {
        font-size: 24px;
    }

    .btn {
        padding: 0.75rem 1.5rem;
        background-color: #3b82f6;
        color: white;
        border-radius: 0.375rem;
        text-decoration: none;
    }

    .btn:hover {
        background-color: #2563eb;
    }
</style>
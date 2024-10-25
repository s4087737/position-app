<script>
    let instructions = `
        Welcome to the GNSS Timed Scavenger Hunt!

        Time is Running Out!

        A timer has been started, and is beginning to tick down!
        If the time runs out, the game is over!
        BUT there are health potions.
             Once you are within 10 meters of an health potion, you will pick it up and you'll get more time.

        Your objective here is to beat monsters around the map.

        They are located in 5 adjacent suburbs (Use the toggle to help you find the suburbs)

        When you encounter an enemy there will be a prompt to roll a dice.

        If you are successful, they will drop treasure! Collect 5 treasures to win the game!

        Try to have more time remaining. The more time you have remaining, the higher your score

        This score will be recorded on the scoreboard!


        Use your device's GNSS chip to help you
        navigate to the markers.

        How to Play:
        1. Look at the map and identify the markers.
        2. Fight monsters by walking towards them, and follow the prompts
        3. When you're within 10 meters of a item, treasure or potion it will automatically be counted.
        4. Make sure the timer doesn't run out
        5. Check your score on the scoreboard page.

        Good luck and have fun!
    `;
</script>

<!-- Gameplay Instructions -->
<div class="container mx-auto py-10">
    <h1 class="text-3xl font-bold text-center mb-4">Gameplay Instructions</h1>

    <p class="text-lg whitespace-pre-line text-center">
        {instructions}
    </p>

    <div class="text-center mt-10">
        <a href="/scoreboard" class="btn btn-primary">
            Go to Scoreboard
        </a>
    </div>
</div>

<style>
    .container {
        max-width: 600px;
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

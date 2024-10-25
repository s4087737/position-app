<script>
    // Import necessary functions and components
    import { getDistance, getMapBounds } from '$lib';
    import Geolocation from 'svelte-geolocation';
    import { Control, ControlButton, ControlGroup, FillLayer, GeoJSON, LineLayer, MapEvents, MapLibre, Marker, Popup } from 'svelte-maplibre';

    export let data; // Data passed into the component
    const geojsonData = data.geojsonData; // GeoJSON data
    let gnssAccuracy = null;
    let markers = [

        {
            lngLat: { lng: 144.9638347277324, lat: -37.80967960080751 },
            label: 'Health',
            name: 'Gain 60 seconds',
            sprite: 'assets/Artifact_Vial_of_Lifeblood.gif',
            extendsTime: true,
            action: 'add',
        },
        {
            lngLat: { lng: 144.9648347277324, lat: -37.81067960080751 },
            label: 'Health',
            name: 'Gain 60 seconds',
            sprite: 'assets/Artifact_Vial_of_Lifeblood.gif',
            extendsTime: true,
            action: 'add',
        },

        {
            lngLat: { lng: 144.9538347277324, lat: -37.81667960080751 },
            label: 'Health',
            name: 'Gain 60 seconds',
            sprite: 'assets/Artifact_Vial_of_Lifeblood.gif',
            extendsTime: true,
            action: 'add',
        },
        {
            lngLat: { lng: 144.9478347277324, lat: -37.81267960080751 },
            label: 'Health',
            name: 'Gain 60 seconds',
            sprite: 'assets/Artifact_Vial_of_Lifeblood.gif',
            extendsTime: true,
            action: 'add',
        },
        {
            lngLat: { lng: 144.9488347277324, lat: -37.81867960080751 },
            label: 'Health',
            name: 'Gain 60 seconds',
            sprite: 'assets/Artifact_Vial_of_Lifeblood.gif',
            extendsTime: true,
            action: 'add',
        },


        {
            lngLat: { lng: 144.9636166, lat: -37.8081224 },
            label: 'Skeleton',
            name: 'Fight for a chance to gain a treasure',
            sprite: 'assets/Skeleton_(adventure_map).gif',
            extendsTime: true,
            action: 'subtract',
            level: 4,
        },
        {
            lngLat: { lng: 144.9628347277324, lat: -37.81267960080751 },
            label: 'Ice Elemental',
            name: 'Fight for a chance to gain a treasure',
            sprite: 'assets/Ice_Elemental_(adventure_map).gif',
            extendsTime: true,
            action: 'subtract',
            level: 8,
        },

        {
            lngLat: { lng: 144.9548347277324, lat: -37.81617960080751 },
            label: 'Skeleton',
            name: 'Fight for a chance to gain a treasure',
            sprite: 'assets/Skeleton_(adventure_map).gif',
            extendsTime: true,
            action: 'subtract',
            level: 4,
        },
        {
            lngLat: { lng: 144.9488347277324, lat: -37.81217960080751 },
            label: 'Ice Elemental',
            name: 'Fight for a chance to gain a treasure',
            sprite: 'assets/Ice_Elemental_(adventure_map).gif',
            extendsTime: true,
            action: 'subtract',
            level: 8,
        },
        {
            lngLat: { lng: 144.9488347277324, lat: -37.81817960080751 },
            label: 'Skeleton',
            name: 'Fight for a chance to gain a treasure',
            sprite: 'assets/Skeleton_(adventure_map).gif',
            extendsTime: true,
            action: 'subtract',
            level: 4,
        },
        {
            lngLat: { lng: 144.9538347277324, lat: -37.81017960080751 },
            label: 'Ice Elemental',
            name: 'Fight for a chance to gain a treasure',
            sprite: 'assets/Ice_Elemental_(adventure_map).gif',
            extendsTime: true,
            action: 'subtract',
            level: 8,
        },
        {
            lngLat: { lng: 144.9478347277324, lat: -37.81417960080751 },
            label: 'Skeleton',
            name: 'Fight for a chance to gain a treasure',
            sprite: 'assets/Skeleton_(adventure_map).gif',
            extendsTime: true,
            action: 'subtract',
            level: 4,
        },
        {
            lngLat: { lng: 144.9628347277324, lat: -37.81267960080751 },
            label: 'Ice Elemental',
            name: 'Fight for a chance to gain a treasure',
            sprite: 'assets/Ice_Elemental_(adventure_map).gif',
            extendsTime: true,
            action: 'subtract',
            level: 8,
        },
    ];
    let bounds = getMapBounds(markers);
    let success = false;
    let error = '';
    let position = {};
    const coords = [];
    const accuracy = null;
    let watchPosition = false;
    let watchedPosition = {};
    let watchedMarker = {};
    const initialMarkers = [...markers]; // Keep a copy of the initial markers
    let treasureCount = 0;

    // Timer related states
    let timeLeft = 500; // Initial time in seconds
    let timerActive = false;
    let timerInterval;

    // Health bar initial state
    let health = 100;

    // Game state
    let gameOver = false;
    let gameWon = false; // State to track if the game is won

    // Reference to MapLibre instance
    let mapInstance;

    // Variable for current enemy encounter
    let currentEnemy = null;

    // hoverstatefilter Function
    function hoverStateFilter(purple, yellow) {
        return purple || yellow;
    }

    // Function to roll a 12-sided dice
    function rollDice() {
        return Math.floor(Math.random() * 12) + 1;
    }

    let combatResult = null; // null - no result, 'success' - win, 'fail' - lose
    let combatSuccess = false; // Track if the combat is successful

    // Function to handle combat
    function handleCombat(enemy) {
        const rollResult = rollDice();
        if (rollResult > enemy.level) {
            // Add a "treasure" marker at the enemy's location
            markers = [
                ...markers,
                {
                    lngLat: enemy.lngLat,
                    label: 'Treasure',
                    name: 'Treasure Found!',
                    sprite: 'assets/Endless_Sack_of_Gold_artifact.gif',
                    extendsTime: false,
                    action: ''
                }
            ];
            combatResult = 'success'; // Set combat result to success
            combatSuccess = true; // Mark combat as successful
            treasureCount += 1; // Increase treasure count
        } else {
            // Penalize the player by reducing the timer
            timeLeft -= 45;
            combatResult = 'fail'; // Set combat result to fail
        }

        currentEnemy = null; // Reset current enemy after the action
        enemy.engaged = false; // Reset enemy engagement status
        markers = markers.filter(m => m !== enemy); // Remove defeated enemy marker

        // Start hiding the result after a few seconds
        setTimeout(() => {
            combatResult = null;
            combatSuccess = false; // Reset combat success
        }, 3000); // Hide after 3 seconds
    }

    // Function to add a marker
    function addMarker(e, label, name, sprite, action) {
        markers = [
            ...markers,
            {lngLat: e.detail.lngLat, label, name, sprite, extendsTime: true, action},
        ];
    }

    const options = {
        enableHighAccuracy: true,
        timeout: Infinity,
        maximumAge: 0,
    };

    // Function to start the game, combining geolocation watch and timer
    function startGame() {
        watchPosition = true;
        timerActive = true;
        gameWon = false; // Reset game win state
        gameOver = false;
        timeLeft = 500; // Reset time
        health = 100; // Reset health
        treasureCount = 0; // Reset score
        markers = [...initialMarkers]; // Reset markers

        if (timerInterval) {
            clearInterval(timerInterval);
        }

        timerInterval = setInterval(() => {
            if (timeLeft > 0 && health > 0) {
                timeLeft -= 1;
                health -= 100 / 500; // Decrease the health over time
            } else {
                gameOver = true;
                clearInterval(timerInterval);
                timerActive = false;
                watchPosition = false;
                localStorage.setItem('treasureCount', treasureCount);
            }
        }, 1000);
    }

    $: if (watchedPosition.coords && !timerActive) {
        zoomToPlayer();
    }

    function zoomToPlayer() {
        if (mapInstance && watchedPosition.coords) {
            mapInstance.setCenter([watchedPosition.coords.longitude, watchedPosition.coords.latitude]);
            mapInstance.setZoom(14); // Set to desired zoom level
        }
    }

    // Show or hide GeoJSON data
    let showGeoJSON = false;

    $: if (watchedPosition.coords) {
        watchedMarker = {lngLat: {lng: watchedPosition.coords.longitude, lat: watchedPosition.coords.latitude}};

        markers.forEach((marker) => {
            const distance = getDistance([watchedMarker, marker]);
            const threshold = 10;

            if (distance <= threshold && marker.extendsTime && !marker.engaged) {
                if (marker.action === 'add') {
                    timeLeft += 60; // Extend time by 60 seconds
                } else if (marker.action === 'subtract') {
                    // Trigger dice roll combat for enemies
                    currentEnemy = marker;
                    marker.engaged = true; // Mark the enemy as engaged to avoid retriggering combat
                }
                marker.extendsTime = false; // Prevent multiple actions from the same marker
            }
        });

        // Check if the player has collected 5 treasures
        if (treasureCount >= 5) {
            gameWon = true;
            gameOver = true;
            timerActive = false;
            clearInterval(timerInterval); // Stop the timer
            localStorage.setItem('treasureCount', treasureCount);
            localStorage.setItem('timeLeft', timeLeft); // Store time left
            setTimeout(() => {
                gameWon = false; // Hide the winning overlay after 3 seconds
            }, 3000);
        }
    }

</script>

<!-- UI -->
<!-- Main container starts -->
<div class="flex flex-col h-[calc(100vh-80px)] w-full">
    <!-- Grid container starts -->
    <div class="grid grid-cols-4 gap-4">
        <div class="col-span-4 md:col-span-1 text-center">
            <h1 class="font-bold">Geolocation</h1>
            <Geolocation
                    getPosition={watchPosition}
                    options={options}
                    watch={true}
                    on:position={(e) => { watchedPosition = e.detail; }}
            />
        </div>

        <div class="col-span-4 md:col-span-1 text-center">
            <h1 class="font-bold">Toggle Melbourne Suburbs</h1>
            <button
                    class="btn btn-neutral"
                    on:click={() => { showGeoJSON = !showGeoJSON; }}>Toggle
            </button>
        </div>

        <div class="col-span-4 md:col-span-2 text-center">
            <h1 class="font-bold">Treasures Collected: {treasureCount}/5</h1>
        </div>
    </div>
    <!-- Grid container ends -->

    <!-- Combat section -->
    {#if currentEnemy}
        <div class="combat-section text-center">
            <h3 class="font-bold">You have encountered an enemy! Roll the dice to determine the outcome.</h3>
            <button
                    class="btn btn-neutral"
                    on:click={() => handleCombat(currentEnemy)}
                    disabled={combatSuccess}>Roll Dice
            </button>
        </div>
    {/if}

    <!-- Combat result section -->
    {#if combatResult}
        <div class="combat-overlay">
            {#if combatResult === 'success'}
                <img src="assets/Combat_Success.gif" alt="Combat Succeeded">
                <p>Combat Success</p>
            {:else if combatResult === 'fail'}
                <img src="assets/fail-fault.gif" alt="Combat Failed">
                <p>Combat Failed, Try Again</p>
            {/if}
        </div>
    {/if}

    <!-- Timer and health section -->
    <div class="timer-health-container text-center">
        <h1 class="font-bold">Time Left: {timeLeft} seconds</h1>
        {#if gameOver && gameWon}
            <div class="win-overlay">
                <p>Congratulations! You win!</p>
            </div>
        {:else if gameOver}
            <div class="game-over-screen">Game Over</div>
        {/if}
        <div class="health-bar">
            <div
                    class="health-bar-inner"
                    style="width: {Math.max((health / 100) * 100, 0)}%;"></div>
        </div>
        {#if !timerActive}
            <button
                    class="btn btn-neutral"
                    on:click={startGame}>{gameOver ? 'Restart Game' : 'Start Game'}</button>
        {/if}
        {#if gameOver && gameWon}
            <div class="score-overlay">
                <p>Check the time remaining on the Scoreboard. Try to beat your previous records!</p>
            </div>
        {/if}
    </div>

    <!-- Map section -->
    <MapLibre
            bind:this={mapInstance}
            center={[144.97, -37.81]}
            class="map flex-grow min-h-[500px]"
            standardControls
            style="https://tiles.basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json"
            bind:bounds
            zoom={14}
    >
        <Control class="flex flex-col gap-y-2">
            <ControlGroup>
                <ControlButton on:click={() => { bounds = getMapBounds(markers); }}>
                    Fit
                </ControlButton>
            </ControlGroup>
        </Control>

        <MapEvents on:click={event => addMarker(event, 'New Marker', 'This is a new marker', 'path_to_new_marker_sprite.png', 'add')} />

        {#if showGeoJSON}
            <GeoJSON id="geojsonData" data={geojsonData} promoteId="name">
                <FillLayer
                        paint={{ 'fill-color': hoverStateFilter('purple', 'yellow'), 'fill-opacity': 0.3 }}
                        beforeLayerType="symbol"
                        manageHoverState
                >
                    <Popup openOn="hover" let:data>
                        {@const props = data?.properties}
                        {#if props}
                            <div class="flex flex-col gap-2"><p>{props.name}</p></div>
                        {/if}
                    </Popup>
                </FillLayer>
                <LineLayer
                        layout={{ 'line-cap': 'round', 'line-join': 'round' }}
                        paint={{ 'line-color': 'purple', 'line-width': 3 }}
                        beforeLayerType="symbol"
                />
            </GeoJSON>
        {/if}

        {#each markers as {lngLat, label, name, sprite, action}, i (i)}
            <Marker {lngLat} class="custom-marker-{label.toLowerCase()}">
                <img
                        src={sprite}
                        alt={label}
                        class={label.toLowerCase() === 'clue' ? 'custom-clue' : ''}
                />
                <Popup openOn="hover" offset={[0, -10]}>
                    {#if label === 'Clue'}
                        <!-- Display clue text box on hover -->
                        <div class="clue-popup">
                            <p>Clue Found: {name}</p>
                        </div>
                    {/if}
                    <div class="text-lg font-bold">{name}</div>
                </Popup>
            </Marker>
        {/each}

        {#if watchedMarker.lngLat}
            <Marker lngLat={watchedMarker.lngLat} class="custom-player-marker">
                <img src="assets/PlayerKnight_(E).gif" alt="Player"/>
                <Popup offset={[0, -10]}>
                    <div class="text-lg font-bold">You</div>
                </Popup>
            </Marker>
        {/if}
    </MapLibre>
    <!-- Closing flex div -->
</div>
<!-- Styles -->
<style>
    .map {
        width: 100%;
        height: 500px;
    }

    .btn {
        padding: 10px 20px;
        margin: 5px;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        font-size: 16px;
    }

    .btn-primary {
        background-color: #3b82f6;
        color: white;
    }

    .custom-marker img {
        width: 32px;
        height: 32px;
    }

    .custom-player-marker img {
        width: 58px;
        height: 61px;
        border: 2px solid blue;
        border-radius: 50%;
    }

    .btn {
        padding: 10px 20px;
        margin: 5px;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        font-size: 16px;
    }

    .btn-neutral {
        background-color: #f0f0f0;
        color: #333;
    }

    .font-bold {
        font-weight: bold;
    }

    .text-center {
        text-align: center;
    }

    .game-over-screen {
        color: red;
        font-size: 24px;
        font-weight: bold;
    }

    .timer-health-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin-top: 20px;
    }

    .health-bar {
        width: 80%;
        height: 50px;
        background-color: #e0e0e0;
        border-radius: 25px;
        margin: 20px auto;
        overflow: hidden;
        box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
        position: relative;
    }

    .health-bar-inner {
        height: 100%;
        background-color: #6c0505;
        transition: width 1s linear;
    }

    .combat-overlay {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 1000;
        pointer-events: none;
    }

    .combat-overlay img {
        width: 200px; /* Adjust the size as needed */
        height: auto;
    }

    .combat-overlay {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 1000;
        pointer-events: none;
        text-align: center;
        color: white;
        font-size: 24px;
        font-weight: bold;
        background: rgba(0, 0, 0, 0.7);
        padding: 20px;
        border-radius: 10px;
    }

    .combat-overlay img {
        width: 200px; /* Adjust the size as needed */
        height: auto;
        display: block;
        margin: 0 auto 10px;
    }

    .combat-overlay p {
        margin: 0;
    }

    .win-overlay {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 1000;
        text-align: center;
        color: green;
        font-size: 24px;
        font-weight: bold;
        background: black;
        padding: 20px;
        border-radius: 10px;
    }

    .score-overlay {
        margin-top: 10px;
        color: green;
    }
    .overlay-top-left {
        position: absolute;
        top: 10px;
        left: 10px;
        z-index: 1000;
        background: rgba(255, 255, 255, 0.8);
        padding: 10px;
        border-radius: 5px;
        box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
    }

    .accuracy-info {
        font-size: 14px;
        font-weight: bold;
        color: #333;
    }

</style>
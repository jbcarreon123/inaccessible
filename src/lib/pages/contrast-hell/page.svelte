<svelte:head>
    <style>
        .page-view,
        body {
            --grv-text: rgb(0, 200, 255);
            --grv-mantle: rgb(0, 255, 0);
        }

        .page-view * {
            animation: shake 50ms linear infinite alternate;
        }

        @keyframes shake {
            0% {
                transform: rotate(0deg);
            }
            100% {
                transform: rotate(-0.1deg);
            }
        }
    </style>
</svelte:head>

<style>

    
</style>

<h1>Can you read this???</h1>
<h2>Or this?</h2>
<p>Or this???</p>
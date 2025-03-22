<svelte:head>
    <style>
        .page-view,
        body {
            --grv-text: #FF050D;
            --grv-mantle: #F0009C;
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

        .wave {
            filter:contrast(3000) !important;
        }
    </style>
</svelte:head>

<style>

    
</style>

<h1>Can you read this???</h1>
<h2>Or this?</h2>
<p>Or this???</p>
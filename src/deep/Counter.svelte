<script>
  export let count = 0
  $: doubleCount = count * 2
  $: quadCount = doubleCount * 2
  let isHign = false
  $: {
    isHign = count > 5

  }
</script>

<p class:warning={isHign}>Count: {count}</p>
<p>Count X2: {doubleCount}</p>
{#if isHign}
  <p>Count X4: {quadCount}</p>
{/if}
<button on:click={() => count += 1}>+</button>
<button on:click={() => count -= 1}>-</button>

<style>
  p {
    color: cadetblue;
  }
  .warning {
    text-decoration: underline;
  }
</style>
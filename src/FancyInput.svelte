<script>
  export let controlValue
  export let label

  const x = new Promise(resolve => setTimeout(resolve, 1000)).then(() => 'text')
</script>

<input type="text" bind:value={controlValue}>
{#if label && controlValue}
  <div>{label}</div>
{/if}

<div>
  {#await x}
    <div>
      <div>
        <div>
          Loading...
        </div>
      </div>
    </div>
  {:then y}
    {y}
  {/await}
</div>
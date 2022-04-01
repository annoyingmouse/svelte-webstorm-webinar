<script>
  import Counter from "./deep/Counter.svelte";
  import FancyInput from "./FancyInput.svelte";
  import { numbers } from "./stores";
  import {fade} from "svelte/transition";
  // numbers.set(10) - in console

  let value = ''

  $: someting = $numbers * 2
</script>

<FancyInput bind:controlValue={value} label="FRED"/>
<p>{value}</p>

<Counter count={5}/>
{#if $numbers > 9}
  <p transition:fade={{duration:1000}}>{$numbers} {someting}</p>
{/if}


<style>
  p{
    border: 1px solid black;
  }
</style>
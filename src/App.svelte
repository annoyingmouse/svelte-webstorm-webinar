<script>
  import Counter from "./deep/Counter.svelte";
  import FancyInput from "./FancyInput.svelte";
  let value = ''
</script>

<FancyInput bind:controlValue={value} label="FRED"/>
<p>{value}</p>

<Counter count={5}/>

<p>The text</p>

<style>
  p{
    border: 1px solid black;
  }
</style>
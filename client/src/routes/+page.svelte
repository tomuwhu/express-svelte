<script>
  import axios from 'axios'
  import md5 from 'md5'
  import { onMount } from 'svelte';
  var un = '', pw = '', name = '-'
  onMount(() => name = localStorage.getItem('name') || null)
  function f() {
    axios
      .post("//localhost:3000/server", {un: un, pw: md5(pw)})
      .then(resp => {
        name = resp.data.name
        localStorage.setItem('name', name)
      })
  }
</script>
<div>
  {#if name != null}
    <h1>Üdvözlöm, {name}</h1>
    <br>
    <button on:click={() => {
      localStorage.removeItem('name')
      name = null
    }}>Kijelentkezés</button>
  {:else if name == '-'}
    Starting...
  {:else}
    <input type="text" bind:value={un} placeholder="Felhasználónév (tom)"><br>
    <input type="text" bind:value={pw} placeholder="Jelszó (1234)"><br>
    <button on:click={f}>Bejelentkezés</button>
  {/if}
</div>
<style>
  div {
    text-align: center;
  }
  input, button {
    margin: 10px;
  }
</style>
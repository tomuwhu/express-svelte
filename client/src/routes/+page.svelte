<script>
  import axios from 'axios'
  var prev = 0, a = 1, b = 1
  function f() {
    axios
      .post("//localhost:3000/server", {c: a})
      .then(resp => {
        prev = a
        a = resp.data.c
        b = resp.data.rnd
      })
  }
</script>
<div>
  <button on:click={f}>Post data: {a}</button>
  <hr>
  Answer: {prev} + {b} = {a}
  <hr>
  {prev.toFixed(2)} + {b.toFixed(2)} =? {a.toFixed(2)} 
</div>
<style>
  div {
    text-align: center;
  }
</style>
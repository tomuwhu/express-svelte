<script>
  import axios from 'axios'
  var a = 1
  function f() {
    axios
      .post("//localhost:3000/server", {c: a})
      .then(resp => {
        a = resp.data.c
      })
  }
</script>
<button on:click={f}>Post data</button>
{a}
<script lang="ts">
  import QrCode from "./QrCode.svelte";
  let input: string = window.location.hash.slice(1);
  let size: number = 500;

  $: if (input !== undefined) window.location.replace(`#${input}`);
</script>

<svelte:window on:hashchange={() => (input = window.location.hash.slice(1))} />

<main class="flex flex-col justify-center max-w-lg m-auto">
  <input type="text" bind:value={input} />
  <QrCode value={input} {size} />
  {#if input === ""}
  <span>Source: <a target="_blank" href="https://github.com/ntnj/qrcode-web">https://github.com/ntnj/qrcode-web</a></span>
  {/if}
</main>
<script lang="ts">
  import { onMount } from 'svelte';
  import QRious from 'qrious';

  export let value = "";
  export let size = 300;

  let target: HTMLCanvasElement;
  let qr: any;

  $: if (qr) qr.value = value;

  onMount(() => {
    qr = new QRious({
      element: target,
      value: value,
      size: size,
    });
  })
</script>

<canvas bind:this={target} height={size} width={size} />
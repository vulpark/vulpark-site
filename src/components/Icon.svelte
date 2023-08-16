<script lang="ts">
    import { twMerge } from 'tailwind-merge';

    export let src: string;
    export let alt: string | undefined | null = undefined;

</script>

<img {src} {alt} class={twMerge("rounded-md w-12 h-12 m-auto bg-black", $$props.class)} />

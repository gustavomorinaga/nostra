<script lang="ts" context="module">
	import { ContentProductDetail } from '$lib/layouts';
</script>

<script lang="ts">
	export let data;
	const { product } = data;
</script>

<ContentProductDetail {product} />

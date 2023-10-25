<script lang="ts">
	import 'iconify-icon';
	import { cn } from '$ui/utils';

	let className: string | null | undefined = undefined;
	export let icon: `${string}:${string}`;
	export { className as class };
</script>

<iconify-icon {icon} class={cn('text-base', className)}></iconify-icon>

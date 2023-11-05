<script lang="ts">
	import { Icon, Input, Label } from '@nostra/ui/components';
	import type { ComponentProps } from 'svelte';

	export let icon: ComponentProps<Icon>['icon'];
</script>

<Label class="flex items-center">
	<Icon class="relative left-7 top-2 -translate-y-1/2 transform" {icon} />
	<Input type="email" id="email" placeholder="Enter your email" class="pl-10" />
</Label>

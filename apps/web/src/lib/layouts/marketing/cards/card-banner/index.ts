export type TBanner = { title: string; link?: string; image: Pick<HTMLImageElement, 'src' | 'alt'> };

export { default as CardBanner } from './card-banner.layout.svelte';

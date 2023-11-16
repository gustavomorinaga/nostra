import Root from './announcement.component.svelte';
import Content from './announcement-content.component.svelte';
import Action from './announcement-action.component.svelte';
import Link from './announcement-link.component.svelte';

export const Announcement = { Root, Content, Action, Link };
export {
	Root as AnnouncementRoot,
	Content as AnnouncementContent,
	Action as AnnouncementAction,
	Link as AnnouncementLink
};

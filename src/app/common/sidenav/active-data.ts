export interface INavbarData {
    parentId: number;
    routeLink?: string;
    icon: string;
    label: string;
    expanded: boolean;
}

export const activeData: INavbarData[] = [
    {
        parentId: 1,
        routeLink: 'dashboard',
        icon: 'fal fa-chalkboard-user',
        label: 'Dashboard',
        expanded: true
    },
    {
        parentId: 2,
        icon: 'fal fa-gear',
        label: 'Setup Module',
        expanded: false
    },
    {
        parentId: 3,
        icon: 'fal fa-coins',
        label: 'Sales Module',
        expanded: false
    },
    {
        parentId: 4,
        icon: 'fal fa-file-signature',
        label: 'Reports Module',
        expanded: false
    },
];
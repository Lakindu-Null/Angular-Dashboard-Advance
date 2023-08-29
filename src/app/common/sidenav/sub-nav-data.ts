import { INavbarData } from "./nav-helper";

export const navbarData: INavbarData[] = [
    /* --------------
        SETUP MODULE 
    ----------------*/
    {
        parentId: 2,
        childId: 1,
        routeLink: 'company',
        icon: 'fal fa-building',
        label: 'Company',
    },
    {
        parentId: 2,
        childId: 2,
        routeLink: 'volume-type',
        icon: 'fal fa-scale-balanced',
        label: 'Volume Type',
    },
    {
        parentId: 2,
        childId: 3,
        routeLink: 'color',
        icon: 'fal fa-palette',
        label: 'Color',
    },
    {
        parentId: 2,
        childId: 4,
        routeLink: 'category',
        icon: 'fal fa-bars-staggered',
        label: 'Category',
    },
    {
        parentId: 2,
        childId: 5,
        routeLink: 'product',
        icon: 'fal fa-paint-roller',
        label: 'Product',
    },
    {
        parentId: 2,
        childId: 6,
        routeLink: 'users',
        icon: 'fal fa-users',
        label: 'Users',
    },
    /*----------------
        SALES MODULE
    -----------------*/
    {
        parentId: 3,
        childId: 1,
        routeLink: 'grn',
        icon: 'fal fa-credit-card',
        label: 'Grn',
        items: [
            {
                routeLink: 'grn/make-grn',
                label: 'Make Grn'
            },
            {
                routeLink: 'grn/grn-reprint',
                label: 'Grn Reprint'
            }
        ]
    },
    {
        parentId: 3,
        childId: 2,
        routeLink: 'invoice',
        icon: 'fal fa-file-invoice-dollar',
        label: 'Invoice',
        items: [
            {
                routeLink: 'invoice/make-invoice',
                label: 'Make Invoice'
            },
            {
                routeLink: 'invoice/invoice-reprint',
                label: 'Invoice Reprint'
            }
        ]
    },
    {
        parentId: 3,
        childId: 3,
        routeLink: 'sales',
        icon: 'fal fa-chart-pie',
        label: 'Sales',
        items: [
            {
                routeLink: 'sales/sales-return',
                label: 'Sales Return'
            },
            {
                routeLink: 'sales/sales-return-reprint',
                label: 'Sales Return Reprint'
            }
        ]
    },
    {
        parentId: 3,
        childId: 4,
        routeLink: 'receipt',
        icon: 'fal fa-receipt',
        label: 'Receipt',
        items: [
            {
                routeLink: 'receipt/make-receipt',
                label: 'Make Receipt'
            },
            {
                routeLink: 'receipt/receipt-cancel',
                label: 'Receipt Cancel'
            },
            {
                routeLink: 'receipt/receipt-reprint',
                label: 'Receipt Reprint'
            }
        ]
    },
    {
        parentId: 3,
        childId: 5,
        routeLink: 'pending-cheques',
        icon: 'fal fa-money-check-dollar',
        label: 'Pending Cheques'
    },
    /*------------------
        REPORT MODULE
    -------------------*/
    {
        parentId: 4,
        childId: 1,
        routeLink: 'sales-commision',
        icon: 'fal fa-arrow-right-arrow-left',
        label: 'Sales Commision'
    },
    {
        parentId: 4,
        childId: 2,
        routeLink: 'current-stock',
        icon: 'fal fa-boxes-stacked',
        label: 'Current Stock'
    }
];

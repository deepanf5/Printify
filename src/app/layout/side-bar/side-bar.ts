import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import {
  lucideArrowRight,
  lucideBadgeCheck,
  lucideBike,
  lucideCalendar,
  lucideChevronRight,
  lucideChevronUp,
  lucideEye,
  lucideEyeOff,
  lucideHouse,
  lucideInbox,
  lucideLoader,
  lucideRouteOff,
  lucideSearch,
  lucideSettings,
  lucideSignpost,
  lucideSpotlight,
  lucideWind,
  lucideWrench,
} from '@ng-icons/lucide';
import { HlmCollapsibleImports } from '@spartan-ng/helm/collapsible';
import { HlmSidebarImports } from '@spartan-ng/helm/sidebar';

export interface SidebarItem {
  title: string;
  route?: string;
  isActive?: boolean;
}

export interface SidebarGroup {
  title: string;
  icon: string;
  route?: string;
  defaultOpen: boolean;
  items?: SidebarItem[];
}

@Component({
  imports: [HlmSidebarImports, NgIcon, HlmCollapsibleImports],
  selector: 'app-side-bar',
  styleUrl: './side-bar.css',
  templateUrl: './side-bar.html',
  providers: [
    provideIcons({
      lucideEye,
      lucideEyeOff,
      lucideArrowRight,
      lucideChevronUp,
      lucideChevronRight,
      lucideBike,
      lucideRouteOff,
      lucideSpotlight,
      lucideWrench,
      lucideWind,
      lucideSignpost,
      lucideBadgeCheck,
      lucideLoader,
    }),
  ],
})
export class SideBar {
  readonly _items = [
    {
      title: 'Products',
      icon: 'lucidePackage',
      defaultOpen: true,
      items: [
        { title: 'All Products', route: '/admin/products' },
        { title: 'Add Product', route: '/admin/products/add' },
        { title: 'Categories', route: '/admin/categories' },
        { title: 'Sizes & Colors', route: '/admin/attributes' },
      ],
    },
    {
      title: 'Orders',
      icon: 'lucideShoppingBag',
      defaultOpen: false,
      items: [
        { title: 'All Orders', route: '/admin/orders' },
        { title: 'Pending Orders', route: '/admin/orders/pending' },
        { title: 'Completed Orders', route: '/admin/orders/completed' },
        { title: 'Returns & Refunds', route: '/admin/returns' },
      ],
    },
    {
      title: 'Customization',
      icon: 'lucidePalette',
      defaultOpen: false,
      items: [
        { title: 'Design Templates', route: '/admin/designs/templates' },
        { title: 'Custom Designs', route: '/admin/designs/custom' },
        { title: 'Print Areas', route: '/admin/designs/print-areas' },
        { title: 'Design Requests', route: '/admin/designs/requests' },
      ],
    },
    {
      title: 'Customers',
      icon: 'lucideUsers',
      defaultOpen: false,
      items: [
        { title: 'All Customers', route: '/admin/customers' },
        { title: 'Customer Reviews', route: '/admin/reviews' },
      ],
    },
    {
      title: 'Inventory',
      icon: 'lucideWarehouse',
      defaultOpen: false,
      items: [
        { title: 'Stock Management', route: '/admin/inventory' },
        { title: 'Low Stock', route: '/admin/inventory/low-stock' },
        { title: 'Inventory History', route: '/admin/inventory/history' },
      ],
    },
    {
      title: 'Marketing',
      icon: 'lucideMegaphone',
      defaultOpen: false,
      items: [
        { title: 'Discounts & Coupons', route: '/admin/discounts' },
        { title: 'Banners', route: '/admin/banners' },
        { title: 'Featured Products', route: '/admin/featured' },
      ],
    },
    {
      title: 'Reports',
      icon: 'lucideChartNoAxesCombined',
      defaultOpen: false,
      items: [
        { title: 'Sales Reports', route: '/admin/reports/sales' },
        { title: 'Product Performance', route: '/admin/reports/products' },
        { title: 'Order Reports', route: '/admin/reports/orders' },
      ],
    },
    {
      title: 'Settings',
      icon: 'lucideSettings',
      defaultOpen: false,
      items: [
        { title: 'Store Settings', route: '/admin/settings/store' },
        { title: 'Shipping Settings', route: '/admin/settings/shipping' },
        { title: 'Payment Settings', route: '/admin/settings/payment' },
      ],
    },
  ];
}

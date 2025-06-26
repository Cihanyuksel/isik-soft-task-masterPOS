// API Response type defination
export interface ProductResponse {
  message: string;
  status: string;
  currentPage: number;
  totalPages: number;
  totalItems: number;
  data: Product[];
}

// Product type definition
export interface Product {
  id: number;
  name: string;
  price: number;
  productCode: string;
  barcode: string;
  stock: number;
  status: boolean;
  category: string | null;
  description: string;
  imageUrl?: string;
}

// Stat card type definition
export interface StatCardType {
  title: string;
  value: string;
  change: string;
  isPositive?: boolean;
}

// Menu item type definition
export interface MenuItemType {
  id: string;
  icon: React.ReactNode;
  label: string;
  isActive?: boolean;
  hasChildren?: boolean;
  notificationCount?: number;
  children?: MenuItemType[];
}

// Menu section type definition
export interface MenuSectionType {
  title: string;
  items: MenuItemType[];
}

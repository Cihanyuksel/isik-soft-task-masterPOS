import {
  FiHome,
  FiSettings,
  FiMessageCircle,
  FiBox,
  FiTag,
  FiLayers,
  FiFeather,
  FiUpload,
  FiTrendingUp,
  FiDollarSign,
  FiShoppingBag,
  FiRefreshCcw,
  FiPercent,
  FiArchive,
  FiCalendar,
  FiMail,
  FiLogOut,
} from "react-icons/fi";
import { MdOutlineLeaderboard } from "react-icons/md";
import { IoIosBarcode, IoIosHeart } from "react-icons/io";
import { MdSecurity } from "react-icons/md";
import { MenuSectionType } from "./types";

export const menuSections: MenuSectionType[] = [
  {
    id: 1,
    title: "MAIN MENU",
    items: [
      {
        id: "1",
        icon: <FiHome />,
        label: "Dashboard",
        isActive: false, // Dashboard is not active in the image, Products is.
      },
      {
        id: "23",
        icon: <FiBox />, // Changed icon for Products
        label: "Products",
        isActive: true, // Products is active in the image
        hasChildren: true,
        children: [
          { id: "20", icon: <FiBox />, label: "All Products", isActive: true }, // "All Products" is active
          { id: "21", icon: <FiBox />, label: "Add New Product" }, // Changed label
          { id: "22", icon: <FiTag />, label: "Tags" }, //Tag
        ],
      },

      {
        id: "2",
        icon: <FiLayers />, // Icon for Categories
        label: "Categories",
        isActive: false,
      },
      {
        id: "3",
        icon: <FiTag />, // Icon for Sub Category (similar to Tags)
        label: "Sub Category",
      },
      {
        id: "4",
        icon: <FiFeather />, // Icon for Brands
        label: "Brands",
      },
      {
        id: "5",
        icon: <IoIosBarcode />, // Icon for Scan Barcode
        label: "Scan Barcode",
      },
      {
        id: "6",
        icon: <FiUpload />, // Icon for Import Products
        label: "Import Products",
      },
    ],
  },
  {
    id: 2,
    title: "ANALYTICS", // New Section
    items: [
      {
        id: "7",
        icon: <FiTrendingUp />, // Icon for Sales
        label: "Sales",
        notificationCount: 50,
      },
      {
        id: "8",
        icon: <FiDollarSign />, // Icon for Point of Sales
        label: "Point of Sales",
      },
      {
        id: "9",
        icon: <MdOutlineLeaderboard />, // Icon for Leaderboards
        label: "Leaderboards",
      },
      {
        id: "10",
        icon: <FiShoppingBag />, // Icon for Orders
        label: "Orders",
      },
      {
        id: "11",
        icon: <FiRefreshCcw />, // Icon for Refund
        label: "Refund",
      },
      {
        id: "12",
        icon: <FiPercent />, // Icon for Taxes
        label: "% Taxes",
      },
      {
        id: "13",
        icon: <FiArchive />, // Icon for Stock
        label: "Stock",
      },
    ],
  },

  {
    id: 3,
    title: "APPS", // New Section
    items: [
      {
        id: "14",
        icon: <FiMessageCircle />,
        label: "Chat",
        notificationCount: 10,
      },
      {
        id: "15",
        icon: <FiCalendar />, // Icon for Calendar
        label: "Calendar",
      },
      {
        id: "16",
        icon: <FiMail />, // Icon for Email
        label: "Email",
      },
    ],
  },
  {
    id: 4,
    title: "SETTINGS",
    items: [
      {
        id: "17",
        icon: <FiSettings />,
        label: "Settings",
        hasChildren: true,
        children: [
          { id: "26", icon: <FiSettings />, label: "General" }, // Assuming these from original code
          { id: "27", icon: <MdSecurity />, label: "Security" }, // Assuming these from original code
        ],
      },
      {
        id: "18",
        icon: <FiLogOut />, // Icon for Log Out
        label: "Log Out",
      },
    ],
  },
];

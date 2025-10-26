Here is a Product Requirements Document (PRD) for building the "Shree Anna Connect" website prototype, as specified.

***

## 1. Overview

* **Product:** "Shree Anna Connect" - A Millets Value Chain Platform Prototype.
* **Purpose:** This document outlines the requirements for a **high-fidelity, clickable website prototype**. The primary goal is to simulate the platform's core user flows and demonstrate its value proposition for the SIH 2024 presentation.
* **Problem:** The Indian millet (Shree Anna) value chain is fragmented, leading to unfair farmer pricing, a lack of consumer trust (no traceability), and high logistical inefficiencies.
* **Solution:** This prototype will showcase a digital marketplace that directly connects farmers/SHGs with buyers/processors, provides farm-to-fork traceability, and offers a central support hub.

## 2. Objectives & Goals

* **Primary Goal:** Create a visually compelling and interactive prototype to demonstrate the solution's feasibility and user experience during the SIH 2024 finale.
* **Secondary Goal:** Validate the core user journeys for the three main actors (Farmer, Buyer, Admin).
* **Technical Goal:** Implement the prototype using a modern stack (Next.js, Shadcn UI) to demonstrate technical competence.

## 3. Target Users (Actors)

This prototype will simulate the experiences for three key user roles:

1.  **Farmer / SHG (Seller):** The producer who lists products, manages inventory, and tracks orders.
2.  **Buyer / Processor (Buyer):** The business or individual who browses, traces, and purchases millet products in bulk.
3.  **Admin (Platform Operator):** The administrator who manages users, verifies listings, and oversees platform health.

## 4. Technical Stack & Implementation

* **Framework:** **Next.js** (App Router)
* **Language:** TypeScript
* **UI Components:** **Shadcn UI** (This is not a component library itself, but a collection of reusable components built with Radix UI and Tailwind CSS. We will use `npx shadcn-ui@latest init` and add components as needed).
* **Styling:** **TailwindCSS** with custom design system based on reference designs
* **Icons:** **Lucide React** for consistent iconography
* **Charts:** **Recharts** for dashboard visualizations
* **Data:** **Mock Data**. All data (users, products, orders) will be hardcoded in JSON files (e.g., `/lib/mockdata.ts`) and imported directly into the components.
* **State Management:** React `useState` / `useContext` for simple global state (e.g., mock auth status).
* **Deployment:** Vercel

## 4.1. Design System & Visual Identity

### Color Palette (Inspired by Reference Designs)
* **Primary Colors:**
  - **Green:** `#22c55e` (Primary brand color for agriculture/nature theme)
  - **Orange:** `#f97316` (Secondary accent color for CTAs and highlights)
  - **Dark Blue:** `#1e293b` (Text and headers)
  - **Light Gray:** `#f8fafc` (Backgrounds and cards)
  - **White:** `#ffffff` (Clean backgrounds)

### Typography
* **Headings:** Bold, modern sans-serif (Inter or similar)
* **Body Text:** Clean, readable sans-serif
* **Hierarchy:** Clear size differentiation (h1: 2.5rem, h2: 2rem, h3: 1.5rem)

### Layout Patterns (From Reference Screenshots)
* **Landing Page Layout:** Hero section with large headline, feature cards in grid, step-by-step process flow
* **Dashboard Layout:** Left sidebar navigation, top header with search, main content area with cards and tables
* **Card Design:** Clean white cards with subtle shadows, rounded corners, clear hierarchy
* **Button Styles:** Primary orange buttons for CTAs, secondary outlined buttons for secondary actions

## 5. Prototype Features & User Stories

All authentication and data submission will be simulated. Clicking "Login" or "Submit" will navigate the user to the appropriate page without a real backend call, using the mock data.

### 5.1. Global Features

* **Landing Page:** A comprehensive marketing page inspired by the fruit box design, explaining what "Shree Anna Connect" is.
    * **Header Section:**
        - Logo: "Shree Anna Connect" with millet grain icon
        - Navigation: "Home," "Marketplace," "About Us," "How it Works," "Contact"
        - CTA: "Sign In" button (orange background)
    * **Hero Section:**
        - Large headline: "Empower Farmers, Connect Buyers with Premium Millets"
        - Sub-headline: "Direct farm-to-market platform for authentic Shree Anna products. Fair pricing, traceable supply chain, and sustainable agriculture."
        - Primary CTA: "Explore Marketplace" (large orange button)
        - Hero image: Farmer with millet crops or marketplace visualization
    * **Feature Highlights Section:**
        - 4 key features in grid layout with icons:
            - "Direct Farmer Connection" (farmer icon)
            - "Quality Assurance" (certification icon)
            - "Fair Pricing" (price tag icon)
            - "Traceable Supply Chain" (tracking icon)
    * **How It Works Section:**
        - 3-step process with visual flow:
            1. "Farmers List Products" (with farmer image)
            2. "Buyers Browse & Order" (with marketplace image)
            3. "Secure Delivery & Payment" (with delivery image)
    * **Product Showcase Section:**
        - Grid of millet product cards (Ragi, Bajra, Foxtail, etc.)
        - Each card shows: product image, name, farmer info, price, "View Details" button
    * **Trust Indicators Section:**
        - Statistics: "500+ Verified Farmers," "1000+ Satisfied Buyers," "50+ Tonnes Delivered"
    * **Footer:**
        - Company info, links, contact details, social media icons
* **Authentication (Simulated):**
    * **Sign Up Page:** A single form with Shadcn `Input` (Name, Email), `Select` (Role: Farmer or Buyer), and `Button` (Sign Up).
    * **Login Page:** A simple form with Shadcn `Input` (Email, Password) and `Button` (Login).
    * **Flow:** Clicking "Sign Up" or "Login" will route the user to their respective dashboard (Farmer Dashboard, Buyer Dashboard, or Admin Dashboard) as if the login was successful. We can use a simple dropdown on the login page to "Login as Farmer," "Login as Buyer," or "Login as Admin" for demo purposes.

---

### 5.2. Actor: Farmer / SHG (Seller) Flow

* **User Story:** As a farmer, I want to list my millet products, manage my inventory, and see the orders I have received.

* **Farmer Dashboard (Home):**
    * **Layout:** Left sidebar navigation + main content area (inspired by Plan dashboard)
    * **Sidebar Navigation:**
        - Logo: "Shree Anna Connect" with millet icon
        - Navigation items: "Overview" (chart icon), "My Products" (package icon), "Orders" (shopping cart icon), "Analytics" (bar chart icon), "Settings" (gear icon)
    * **Top Header:**
        - Search bar: "Search products, orders..."
        - User profile dropdown with farmer avatar
        - Notifications bell icon
    * **Main Content:**
        - **Stats Cards:** 4 cards in grid layout:
            - "Total Earnings: ₹24,500" (green accent)
            - "Active Listings: 4" (blue accent)
            - "Pending Orders: 2" (orange accent)
            - "This Month Sales: ₹8,200" (purple accent)
        - **Recent Orders Table:** Clean table with columns: Order ID, Buyer, Product, Quantity, Status, Actions
        - **Quick Actions:** "Add New Product" and "View All Orders" buttons
* **My Products Page:**
    * **UI:** A Shadcn `Table` listing all products the farmer has uploaded.
    * **Data:** Mock data: [Ragi (100kg), Bajra (50kg), Foxtail (200kg)].
    * **Action:** A `Button` "Add New Product".
* **Add New Product Page:**
    * **UI:** A form using Shadcn `Input` (Product Name), `Select` (Millet Type), `Textarea` (Description), and a placeholder `Input` (Quantity in KG).
    * **Action:** A `Button` "Upload Quality Certificate" (opens file picker, but does not upload).
    * **Action:** A `Button` "Submit Listing". Clicking this shows a Shadcn `Toast` notification: "Success! Your product is listed." and navigates back to the "My Products" page.
* **Manage Orders Page:**
    * **UI:** A `Table` showing incoming orders from buyers.
    * **Data:** Mock data: [Order #1001 from "ABC Processors", Order #1002 from "Shree Foods"].
    * **Action:** A `Button` to "Accept Order" (simulated).

---

### 5.3. Actor: Buyer / Processor (Buyer) Flow

* **User Story:** As a buyer, I want to browse all available millet products, filter them, view their traceability, and place an order.

* **Buyer Dashboard (Marketplace):**
    * **Layout:** Left sidebar navigation + main content area
    * **Sidebar Navigation:**
        - Logo: "Shree Anna Connect" with millet icon
        - Navigation items: "Marketplace" (store icon), "My Orders" (shopping cart icon), "Favorites" (heart icon), "Traceability" (map icon), "Settings" (gear icon)
    * **Top Header:**
        - Search bar: "Search millet products..."
        - User profile dropdown with buyer avatar
        - Cart icon with item count badge
    * **Main Content:**
        - **Filters Section:** Horizontal filter bar with dropdowns for "Millet Type," "Region," "Certification," "Price Range"
        - **Product Grid:** 3-column grid of product cards, each showing:
            - Product image (millet variety)
            - Product name and farmer info
            - Price per kg
            - Available quantity
            - Quality certification badge
            - "View Details" button
        - **Pagination:** Page navigation at bottom
* **Product Details Page:**
    * **UI:** Shows detailed info: product name, seller info (Farmer Ramesh from Odisha), price, quantity.
    * **Traceability Feature:** A `Button` "View Farm-to-Fork Traceability".
    * **Action:** Clicking the button opens a Shadcn `Dialog` (modal) showing a mock timeline/stepper:
        1.  **Farm:** "Ragi Seed Sown" (May 2024, Koraput, Odisha)
        2.  **Harvest:** "Harvested & Sun-Dried" (Aug 2024)
        3.  **QC:** "Digital Quality Report" (Link to a mock PDF)
        4.  **Logistics:** "Arrived at Hub" (Rourkela, Aug 2024)
* **Checkout Flow (Simulated):**
    * **UI:** "Add to Cart" / "Buy Now" `Button`.
    * **Action:** Clicking "Buy Now" leads to a simple checkout page with mock order summary.
    * **Action:** Clicking "Place Order" shows a success `Toast`: "Order placed successfully!"

---

### 5.4. Actor: Admin Flow

* **User Story:** As an admin, I want to see platform statistics, manage users, and resolve complaints.

* **Admin Dashboard (Home):**
    * **Layout:** Left sidebar navigation + main content area
    * **Sidebar Navigation:**
        - Logo: "Shree Anna Connect" with millet icon
        - Navigation items: "Overview" (chart icon), "Users" (users icon), "Products" (package icon), "Orders" (shopping cart icon), "Complaints" (flag icon), "Analytics" (bar chart icon), "Settings" (gear icon)
    * **Top Header:**
        - Search bar: "Search users, products..."
        - Admin profile dropdown
        - Notifications bell icon with badge count
    * **Main Content:**
        - **Stats Cards:** 4 cards in grid layout:
            - "Total Users: 150" (blue accent)
            - "Total Products: 450" (green accent)
            - "Pending KYC: 5" (orange accent)
            - "Open Complaints: 2" (red accent)
        - **Charts Section:** 
            - User signups chart (line chart)
            - Product listings by category (pie chart)
            - Monthly transaction volume (bar chart)
        - **Recent Activity Feed:** Timeline of recent platform activities
* **Manage Users Page:**
    * **UI:** A Shadcn `Table` of all users (Farmers and Buyers) from mock data.
    * **Data:** Columns: User ID, Name, Role, KYC Status (Pending/Verified).
    * **Action:** A `Button` on "Pending" users labeled "Verify KYC". Clicking it just changes the Shadcn `Badge` from "Pending" to "Verified" in the UI (session state only).
* **Complaints Hub Page:**
    * **UI:** A `Table` of mock complaints.
    * **Data:** [Complaint #50, User: Farmer Ramesh, "Payment not received"], [Complaint #51, User: ABC Processors, "Quality mismatch"].
    * **Action:** A `Button` to "Resolve" (simulated).

## 6. UI/UX Specifications (Based on Reference Designs)

### 6.1. Component Library Requirements
* **Cards:** Clean white cards with subtle shadows (`shadow-sm`), rounded corners (`rounded-lg`), proper padding
* **Buttons:** 
  - Primary: Orange background (`bg-orange-500`), white text, hover effects
  - Secondary: Outlined style with orange border
  - Size variants: Small, Medium, Large
* **Tables:** Clean design with alternating row colors, hover effects, proper spacing
* **Forms:** Consistent input styling, proper labels, validation states
* **Navigation:** 
  - Sidebar: Collapsible, active state indicators, proper spacing
  - Top header: Search bar prominence, user controls alignment
* **Modals/Dialogs:** Clean overlay, proper z-index, close button placement
* **Badges:** Status indicators with appropriate colors (green for success, orange for pending, red for error)

### 6.2. Responsive Design
* **Mobile-first approach:** All components must work on mobile devices
* **Breakpoints:** 
  - Mobile: 320px - 768px
  - Tablet: 768px - 1024px
  - Desktop: 1024px+
* **Grid systems:** CSS Grid for complex layouts, Flexbox for simple arrangements
* **Navigation:** Collapsible sidebar on mobile, hamburger menu

### 6.3. Accessibility Requirements
* **Color contrast:** Minimum WCAG AA compliance
* **Keyboard navigation:** All interactive elements accessible via keyboard
* **Screen reader support:** Proper ARIA labels and semantic HTML
* **Focus indicators:** Clear visual focus states

## 7. Out of Scope (For this Prototype)

* **NO** real backend database (No MongoDB, No PostgreSQL).
* **NO** real user authentication (No JWT, No OAuth, No session management).
* **NO** real payment integration (No Stripe, No Razorpay).
* **NO** real file uploads (e.g., for KYC docs or quality certs).
* **NO** real AI/ML functionality (All "predictive analytics" on dashboards will be static, hardcoded numbers).
* **NO** complex filtering or search logic. UI will be present, but functionality is not required.


### 6.4. Implementation Guidelines

* **Tailwind Configuration:** Extend default colors with custom palette
* **Component Variants:** Use Tailwind's variant system for different states
* **Spacing System:** Consistent spacing using Tailwind's scale (4, 8, 12, 16, 24, 32px)
* **Typography Scale:** Use Tailwind's text size classes with custom line heights
* **Shadow System:** Subtle shadows for depth (`shadow-sm`, `shadow-md`, `shadow-lg`)

### 6.5. Mock Data Structure
```typescript
// Example mock data structure
interface Product {
  id: string;
  name: string;
  type: 'Ragi' | 'Bajra' | 'Foxtail' | 'Jowar';
  farmer: {
    name: string;
    location: string;
    avatar: string;
  };
  price: number;
  quantity: number;
  certification: 'Organic' | 'FSSAI' | 'APEDA';
  image: string;
}

interface Order {
  id: string;
  buyer: string;
  products: Product[];
  status: 'Pending' | 'Confirmed' | 'Shipped' | 'Delivered';
  totalAmount: number;
  createdAt: string;
}
```
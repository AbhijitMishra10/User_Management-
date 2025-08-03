# 🛍️ ShoppyGlobe – E-commerce App

# App Description /-
This app deals with the basics of a general e commerce website, where you can browse different products, add them to your cart, remove them from your cart and place your order. It also shows you how many items of the same product you have already added to your cart once you have atleast one of them in your cart. At the time of placing your order, the total value of your order is also rendered properly

# Technologies used /-
React: For designing the different components we have in this project/
React-Router: For smooth routing through the different components, for client side rendering 
Redux: For handling the state of those components
Redux Toolkit: For smooth transition between react and redux, for global state management
Css: For basic styling of the app
JS: For handling the overall logic for this app
Vite: For all the bundling and rendering of the components

## 🚀 Features

- 🏠 There is a 'Home' page with a searchable product list
- 📦 Product detail page using dynamic route (`/product/:id`)
- 🛒 Shopping cart with quantity updates and removal
- ✅ Checkout page to review and place orders
- 🧭 Client-side routing using **React Router**
- ⚙️ Global state management via **Redux Toolkit**
- 💡 Responsive and clean UI
- 🌐 Fetches data from [DummyJSON API](https://dummyjson.com/)

---

## 📂 Folder Structure

src/
├── components/ # Reusable react based UI components
├── pages/ # Route-based components, handling the client side rendering properly
├── hooks/ # Custom React hooks
├── Utils/ # Redux slice and store
├── App.jsx # Layout with <Outlet />
├── main.jsx # Entry point with router & store
└── App.css # Styling

## 🛠️ Installation & Usage

```bash
# Clone this repo
git clone https://github.com/AbhijitMishra@10/shoppyglobe.git

cd shoppyglobe

# Install dependencies
npm install

# Run the dev server
npm run dev
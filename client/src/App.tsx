import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { Footter } from "./components/Footter";
import { Header } from "./components/Header";
import { HomePage } from "./pages/HomePage";
import { Navbar } from "./components/Navbar";
import { CartPage } from "./pages/CartPage";
import { FavoritesPage } from "./pages/FavoritesPage";
import { DarkCompairPage } from "./pages/DarkCompairPage";
import { DetalNewsPage } from "./pages/DetalNewsPage";
import { OrderFormPage } from "./pages/OrderFormPage";
import { DeliveryInfoPage } from "./pages/DeliveryInfoPage";
import { PaymentPage } from "./pages/PaymentPage";
import { ProfilePage } from "./pages/ProfilePage";
import { CatalogPage } from "./pages/CatalogPage";
import { CardProductPage } from "./pages/CardProductPage";
import { TextPage } from "./pages/TextPage";
import { ListDirectoryPage } from "./pages/ListDirectoryPage";
import { ContactsPage } from "./pages/ContactsPage";

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
        <Route path="/dark-compair" element={<DarkCompairPage />} />
        <Route path="/detail-news" element={<DetalNewsPage />} />
        <Route path="/order-form" element={<OrderFormPage />} />
        <Route path="/delivery-info" element={<DeliveryInfoPage />} />
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/profile-page" element={<ProfilePage />} />
        <Route path="/card-product/:id" element={<CardProductPage />} />
        <Route path="/text-page" element={<TextPage />} />
        <Route path="/listDirectory-page" element={<ListDirectoryPage />} />
        <Route path="/contacts-page" element={<ContactsPage />} />
      </Routes>
      <Footter />
    </div>
  );
}

export default App;

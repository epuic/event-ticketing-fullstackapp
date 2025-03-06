// App.js
import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from './components/common/Navbar';
import LoginPage from './components/auth/LoginPage';
import RegistrationPage from './components/auth/RegistrationPage';
import FooterComponent from './components/common/Footer';
import UserService from './components/service/UserService';
import UpdateUser from './components/userspage/UpdateUser';
import UserManagementPage from './components/userspage/UserManagementPage';
import ProfilePage from './components/userspage/ProfilePage';
import AddEventPage from "./components/event/AddEventPage";
import EventManagementPage from "./components/event/EventManagementPage";
import UpdateEventsPage from "./components/event/UpdateEventsPage";
import EvenimenteBilete  from "./components/event/EvenimenteBilete";
import BuyTicketPage from "./components/Tickets/BuyTicketPage";

function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route exact path="/" element={<LoginPage />} />
            <Route exact path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegistrationPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/events" element={<EvenimenteBilete />} />
            <Route path="/buy-ticket/:eventId" element={<BuyTicketPage />} />
            <Route path="/register" element={<RegistrationPage />} />

            {UserService.adminOnly() && (
              <>
                <Route path="/admin/user-management" element={<UserManagementPage />} />
                <Route path="/update-user/:userId" element={<UpdateUser />} />
                <Route path="/update-event/:eventId" element={<UpdateEventsPage />} />
                <Route path="/admin/events" element={<EventManagementPage />} />
                <Route path="/add-event" element={<AddEventPage />} />
              </>
            )}
            <Route path="*" element={<Navigate to="/login" />} />‰
          </Routes>
        </div>
        <FooterComponent />
      </div>
      <div className="background-animation">
        <h1 style={{ color: "white", textAlign: "center", paddingTop: "20%" }}>
          Animație de fundal în React
        </h1>
      </div>
    </BrowserRouter>
  );
}
export default App;

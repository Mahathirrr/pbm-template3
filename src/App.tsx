import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SplashScreen from './screens/SplashScreen';
import OnboardingScreen from './screens/OnboardingScreen';
import WelcomeScreen from './screens/WelcomeScreen';
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';
import DashboardScreen from './screens/DashboardScreen';
import ServiceListingScreen from './screens/ServiceListingScreen';
import ServiceRequestScreen from './screens/ServiceRequestScreen';
import NotificationsScreen from './screens/NotificationsScreen';
import HistoryScreen from './screens/HistoryScreen';
import SettingsScreen from './screens/SettingsScreen';
import PersonalInfoScreen from './screens/PersonalInfoScreen';
import NotificationSettingsScreen from './screens/NotificationSettingsScreen';
import PrivacySecurityScreen from './screens/PrivacySecurityScreen';
import PaymentMethodsScreen from './screens/PaymentMethodsScreen';
import HelpSupportScreen from './screens/HelpSupportScreen';

function App() {
  return (
    <BrowserRouter>
      <div className="mobile-container">
        <Routes>
          <Route path="/" element={<SplashScreen />} />
          <Route path="/onboarding" element={<OnboardingScreen />} />
          <Route path="/welcome" element={<WelcomeScreen />} />
          <Route path="/login" element={<LoginScreen />} />
          <Route path="/signup" element={<SignupScreen />} />
          <Route path="/dashboard" element={<DashboardScreen />} />
          <Route path="/services" element={<ServiceListingScreen />} />
          <Route path="/service/:id" element={<ServiceRequestScreen />} />
          <Route path="/notifications" element={<NotificationsScreen />} />
          <Route path="/history" element={<HistoryScreen />} />
          <Route path="/settings" element={<SettingsScreen />} />
          <Route path="/settings/personal" element={<PersonalInfoScreen />} />
          <Route path="/settings/notifications" element={<NotificationSettingsScreen />} />
          <Route path="/settings/privacy" element={<PrivacySecurityScreen />} />
          <Route path="/settings/payment" element={<PaymentMethodsScreen />} />
          <Route path="/settings/support" element={<HelpSupportScreen />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
import React, { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import nprogress from 'nprogress';
import 'nprogress/nprogress.css';
import { AnimatePresence, motion } from 'framer-motion';
import About from './About/About';
import Mentorship from './Mentorship/Mentorship';
import Landing from './Landing/Landing';
import ForexEducation from './ForexEducation/ForexEducation';
import Automation from './Automation/Automation';
import Strategy from './Strategy/Strategy';
import Tools from './Tools/Tools';
import Loading from './Components/Loading';
import WhiteLebel from './WhiteLebel/WhiteLebel';
import WttBot from './WttBot/WttBot';
import Contact from './Contact/Contact';
import Package from './Package/Package';
import Payment from './Payment/Payment';

import './App.css';



import TermsAndCondition from './Pages/TermsAndCondition';
import PrivacyPolicy from './Pages/PrivacyPolicy';
import RefundPolicy from './Pages/RefundPolicy';
import Disclaimer from './Pages/Disclaimer';
import Cookies from './Pages/Cookies';
import Affiliate from './Pages/Affiliate';




function App() {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    nprogress.start();
    setIsLoading(true);

    const timer = setTimeout(() => {
      setIsLoading(false);
      nprogress.done();
    }, 3000);

    return () => {
      clearTimeout(timer);
      nprogress.done();
    };
  }, [location]);

  return (
    <div>
      {/* Show loading indicator if loading state is true */}
      {isLoading ? (
        <Loading />
      ) : (
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<PageTransition><Landing /></PageTransition>} />
            <Route path="/about" element={<PageTransition><About /></PageTransition>} />
            <Route path="/mentorship" element={<PageTransition><Mentorship /></PageTransition>} />
            <Route path="/educations" element={<PageTransition><ForexEducation /></PageTransition>} />
            <Route path="/automation" element={<PageTransition><Automation /></PageTransition>} />
            <Route path="/strategy" element={<PageTransition><Strategy /></PageTransition>} />
            <Route path="/tools" element={<PageTransition><Tools /></PageTransition>} />
            <Route path="/package" element={<PageTransition><Package /></PageTransition>} />
            <Route path="/whitelabel" element={<PageTransition><WhiteLebel /></PageTransition>} />
            <Route path="/wttbot" element={<PageTransition><WttBot /></PageTransition>} />
            <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
            <Route path="/terms" element={<PageTransition><TermsAndCondition /></PageTransition>} />
            <Route path="/privacy" element={<PageTransition><PrivacyPolicy /></PageTransition>} />
            <Route path="/refund" element={<PageTransition><RefundPolicy /></PageTransition>} />
            <Route path="/disclaimer" element={<PageTransition><Disclaimer /></PageTransition>} />
            <Route path="/cookies" element={<PageTransition><Cookies /></PageTransition>} />
            <Route path="/affiliate" element={<PageTransition><Affiliate /></PageTransition>} />
            <Route path="/payment" element={<PageTransition><Payment /></PageTransition>} />

          </Routes>
        </AnimatePresence>
      )}
    </div>
  );
}

const PageTransition = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
};

export default App;


import React from 'react';
import Header from '../components/Header';
import DocumentStatus from '../components/DocumentStatus';
import Footer from '../components/Footer';

function Status() {
  return (
    <div>
      <Header />
      <main>
        <DocumentStatus />
      </main>
      <Footer />
    </div>
  );
}

export default Status;

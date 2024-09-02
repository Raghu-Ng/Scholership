import React from 'react';
import Header from '../components/Header';
import DocumentUpload from '../components/DocumentUpload';
import Footer from '../components/Footer';

function Upload() {
  return (
    <div>
      <Header />
      <main>
        <DocumentUpload />
      </main>
      <Footer />
    </div>
  );
}

export default Upload;

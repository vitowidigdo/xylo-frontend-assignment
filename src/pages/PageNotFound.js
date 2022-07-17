import React from "react";
import { Link } from "react-router-dom";

import Header from "../partials/Header";

import Footer from "../partials/Footer";

function PageNotFound() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <Header />

      <main className="grow">
        <section className="relative">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="pt-32 pb-12 md:pt-40 md:pb-20">
              <div className="max-w-3xl mx-auto text-center">
                <h1 className="h1 mb-4">Page Cannot be Found!</h1>
                <div className="mt-8">
                  <Link to="/" className="btn text-white bg-helopro-primary">
                    Back to Home
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default PageNotFound;

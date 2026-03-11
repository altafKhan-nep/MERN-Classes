import React from "react";
// import { Button } from "@/components/ui/button";
// If you don't have a Button component, use a regular button instead:
const Button = ({ children, className = "", ...props }) => (
  <button className={className} {...props}>
    {children}
  </button>
);

export default function NetflixHomePage() {
  return (
    <div className="bg-black text-white min-h-screen w-full">
      {/* Header */}
      <header className="flex items-center justify-between p-6 bg-gradient-to-b from-black via-transparent to-transparent">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
          alt="Netflix Logo"
          className="h-10"
        />
        <div className="space-x-4">
          <Button className="bg-red-600 hover:bg-red-700">Sign In</Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center px-4 py-20 bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/6c541240-e36d-4a39-8966-44b5c5ff4b4c/6e7b438b-28b3-4de5-9d3e-4b1572638c42/NP-en-20240708-popsignuptwoweeks-perspective_alpha_website_large.jpg')] bg-cover bg-center bg-no-repeat">
        <div className="bg-black bg-opacity-70 p-8 rounded-xl max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Unlimited movies, TV shows, and more all are free
          </h1>
          <p className="text-xl mb-6">Watch anywhere. Cancel anytime.</p>
          <p className="text-lg mb-4">
            Ready to watch? Enter your email to create or restart your
            membership.
          </p>
          <div className="flex flex-col md:flex-row items-center gap-2">
            <input
              type="email"
              placeholder="Email address"
              className="p-3 rounded w-full md:w-2/3 text-black"
            />
            <Button className="bg-red-600 hover:bg-red-700 text-xl px-6 py-3">
              Get Started
            </Button>
          </div>
        </div>
      </section>

      {/* Feature Sections */}
      <section className="grid md:grid-cols-2 gap-8 p-12 items-center border-t border-gray-800">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Enjoy on your TV
          </h2>
          <p className="text-xl">
            Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray
            players, and more.
          </p>
        </div>
        <img
          src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"
          alt="TV"
          className="w-full"
        />
      </section>

      <section className="grid md:grid-cols-2 gap-8 p-12 items-center border-t border-gray-800">
        <img
          src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg"
          alt="Mobile"
          className="w-full"
        />
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Download your shows to watch offline
          </h2>
          <p className="text-xl">
            Save your favorites easily and always have something to watch.
          </p>
        </div>
      </section>

      <section className="grid md:grid-cols-2 gap-8 p-12 items-center border-t border-gray-800">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Watch everywhere
          </h2>
          <p className="text-xl">
            Stream unlimited movies and TV shows on your phone, tablet, laptop,
            and TV.
          </p>
        </div>
        <img
          src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile.png"
          alt="Devices"
          className="w-full"
        />
      </section>

      {/* Footer */}
      <footer className="bg-black text-gray-400 text-sm p-8 border-t border-gray-800">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          <div>
            <p>FAQ</p>
            <p>Investor Relations</p>
            <p>Privacy</p>
            <p>Speed Test</p>
          </div>
          <div>
            <p>Help Center</p>
            <p>Jobs</p>
            <p>Cookie Preferences</p>
            <p>Legal Notices</p>
          </div>
          <div>
            <p>Account</p>
            <p>Ways to Watch</p>
            <p>Corporate Information</p>
            <p>Only on Netflix</p>
          </div>
          <div>
            <p>Media Center</p>
            <p>Terms of Use</p>
            <p>Contact Us</p>
          </div>
        </div>
        <p className="mt-6 text-center">Netflix Clone UI © 2025</p>
      </footer>
    </div>
  );
}

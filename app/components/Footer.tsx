"use client";

import { FaFacebookF, FaTwitter, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#09090B] text-white pt-24 pb-12 px-6 sm:px-10 md:px-20 lg:px-32">
      <div className="max-w-6xl mx-auto flex flex-wrap justify-between gap-y-16 gap-x-30">
        {/* Branding Section */}
        <div className="w-full sm:w-[40%] flex-shrink-0">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-10 h-10 rounded-full bg-violet-600 flex items-center justify-center text-white text-xl">
              ◎
            </div>
            <h3 className="text-2xl font-bold text-white">EuTACT</h3>
          </div>

          <p className="text-base text-gray-400 leading-relaxed mb-6">
            Build SaaS AI applications using OpenAI and Next.js, this kit comes
            with pre-configured and pre-built examples, making it easier to
            quickly kickstart your AI startup.
          </p>

          <div className="flex space-x-4 mb-6">
            {[FaFacebookF, FaTwitter, FaGithub].map((Icon, idx) => (
              <button
                key={idx}
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white"
              >
                <Icon size={16} />
              </button>
            ))}
          </div>

          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} EuTACT Corp. All rights reserved.
          </p>
        </div>

        {/* Footer Links */}
        <div className="flex flex-wrap flex-1 justify-between gap-12 text-base">
          {/* Products */}
          <div className="min-w-[150px]">
            <h4 className="text-white font-semibold mb-4 text-lg">Products</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#">Features</a>
              </li>
              <li>
                <a href="#">Integrations</a>
              </li>
              <li>
                <a href="#">Pricing</a>
              </li>
              <li>
                <a href="#">Changes log</a>
              </li>
              <li>
                <a href="#">Roadmap</a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="min-w-[150px]">
            <h4 className="text-white font-semibold mb-4 text-lg">Company</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Refund Policy</a>
              </li>
              <li>
                <a href="#">Support</a>
              </li>
              <li>
                <a href="#">Community</a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div className="min-w-[150px]">
            <h4 className="text-white font-semibold mb-4 text-lg">Support</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#">Features</a>
              </li>
              <li>
                <a href="#">Integrations</a>
              </li>
              <li>
                <a href="#">Pricing</a>
              </li>
              <li>
                <a href="#">Changes log</a>
              </li>
              <li>
                <a href="#">Roadmap</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

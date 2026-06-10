'use client';

import { X, Mail, Code2, ExternalLink } from 'lucide-react';

export default function Footer() {
  const footerSections = [
    {
      title: 'Products',
      links: [
        { name: 'Expense Management', href: '#' },
        { name: 'Accounts Payable', href: '#' },
        { name: 'Corporate Cards', href: '#' },
        { name: 'Treasury', href: '#' },
        { name: 'Reporting', href: '#' },
      ],
    },
    {
      title: 'Solutions',
      links: [
        { name: 'For Startups', href: '#' },
        { name: 'For Enterprise', href: '#' },
        { name: 'For Finance Teams', href: '#' },
        { name: 'For IT Teams', href: '#' },
      ],
    },
    {
      title: 'Developers',
      links: [
        { name: 'API Documentation', href: '#' },
        { name: 'SDKs', href: '#' },
        { name: 'Webhooks', href: '#' },
        { name: 'Status', href: '#' },
      ],
    },
    {
      title: 'Partners',
      links: [
        { name: 'Partner Program', href: '#' },
        { name: 'Become a Partner', href: '#' },
        { name: 'Partner Directory', href: '#' },
        { name: 'Referral Program', href: '#' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { name: 'Blog', href: '#' },
        { name: 'Case Studies', href: '#' },
        { name: 'Help Center', href: '#' },
        { name: 'Webinars', href: '#' },
      ],
    },
    {
      title: 'Company',
      links: [
        { name: 'About', href: '#' },
        { name: 'Careers', href: '#' },
        { name: 'Press', href: '#' },
        { name: 'Contact', href: '#' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { name: 'Privacy Policy', href: '#' },
        { name: 'Terms of Service', href: '#' },
        { name: 'Cookie Policy', href: '#' },
        { name: 'Security', href: '#' },
      ],
    },
  ];

  const socialLinks = [
    { name: 'X (Twitter)', icon: X, href: '#' },
    { name: 'LinkedIn', icon: ExternalLink, href: '#' },
    { name: 'GitHub', icon: Code2, href: '#' },
    { name: 'Email', icon: Mail, href: '#' },
  ];

  return (
    <footer className="py-16 border-t border-white/10 bg-black/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-8 mb-12">
          {/* Logo column */}
          <div className="col-span-2 lg:col-span-1">
            <h3 className="text-2xl font-bold gradient-text mb-4">LLM Pay</h3>
            <p className="text-gray-400 text-sm mb-4">
              AI-powered financial operations for modern businesses.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Footer sections */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="font-semibold text-white mb-4">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © 2024 LLM Pay. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">
              Privacy
            </a>
            <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">
              Terms
            </a>
            <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

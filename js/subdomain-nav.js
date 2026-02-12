/**
 * Subdomain Navigation Controller
 * Detects if the site is being viewed on closer.scalingoffers.com
 * and modifies the header/nav accordingly:
 *   - Removes "Client Testimonials" from nav and mobile menu
 *   - Replaces "Become a Partner" + "Client Login" with single "Closer Login" button
 */
(function () {
  'use strict';

  var hostname = window.location.hostname;
  var isCloserSubdomain =
    hostname === 'closer.scalingoffers.com' ||
    hostname.startsWith('closer.');

  if (!isCloserSubdomain) return;

  document.addEventListener('DOMContentLoaded', function () {
    // --- Desktop Nav ---

    // Remove "Client Testimonials" link from header-row2
    var headerRow2 = document.querySelector('.header-row2');
    if (headerRow2) {
      headerRow2.style.display = 'none';
    }

    // Replace "Become a Partner" + "Client Login" with "Closer Login"
    var headerRowRight = document.querySelector('.header-row-right');
    if (headerRowRight) {
      headerRowRight.innerHTML =
        '<a href="closer-login" class="header-btn-client-login text1 hover-bright">Closer Login</a>';
    }

    // --- Mobile Menu ---

    // Remove "Client Testimonials" from mobile menu links
    var mobileMenuLinks = document.querySelector('.mobile-menu-links');
    if (mobileMenuLinks) {
      mobileMenuLinks.style.display = 'none';
    }

    // Replace mobile menu actions with single "Closer Login"
    var mobileMenuActions = document.querySelector('.mobile-menu-actions');
    if (mobileMenuActions) {
      mobileMenuActions.innerHTML =
        '<a href="closer-login" class="header-btn-client-login text1 hover-bright">Closer Login</a>';
    }

    // --- Logo: point to main domain ---
    var logoLink = document.querySelector('.header-logo-link');
    if (logoLink) {
      logoLink.setAttribute('href', 'https://www.scalingoffers.com');
    }

    // --- Footer ---

    // Remove "Client Testimonials" from footer nav
    var footerNav = document.querySelector('.footer-nav');
    if (footerNav) {
      var footerLinks = footerNav.querySelectorAll('a');
      footerLinks.forEach(function (link) {
        if (
          link.textContent.trim().toLowerCase().indexOf('testimonial') !== -1
        ) {
          link.style.display = 'none';
        }
      });
    }
  });
})();

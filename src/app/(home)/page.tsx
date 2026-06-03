'use client';

import { useEffect } from 'react';
import { HOME_STYLES, HOME_BODY } from './home-content';

/**
 * Homepage — bold "Engineering Field Notes" redesign.
 *
 * The markup + styles live in ./home-content.ts (generated from the design).
 * They're injected as a self-contained block and the interactivity (live IST
 * clock, mobile menu, scroll-reveal) is wired up here. The redesign provides
 * its own top bar, so <Toolbar/> returns null on "/" (see components/Toolbar.tsx).
 */
export default function Home() {
  useEffect(() => {
    // Live Hyderabad (IST) clock
    const clock = document.getElementById('clock');
    const tick = () => {
      if (!clock) return;
      try {
        clock.textContent = new Date().toLocaleTimeString('en-GB', {
          timeZone: 'Asia/Kolkata',
          hour12: false,
        });
      } catch {
        clock.textContent = new Date().toTimeString().slice(0, 8);
      }
    };
    tick();
    const timer = setInterval(tick, 1000);

    // Mobile menu toggle
    const btn = document.getElementById('menuBtn');
    const menu = document.getElementById('mMenu');
    const toggleMenu = () => {
      btn?.classList.toggle('open');
      menu?.classList.toggle('open');
    };
    btn?.addEventListener('click', toggleMenu);
    const links = menu ? Array.from(menu.querySelectorAll('a')) : [];
    const closeMenu = () => {
      btn?.classList.remove('open');
      menu?.classList.remove('open');
    };
    links.forEach((a) => a.addEventListener('click', closeMenu));

    // Scroll reveal
    const revealEls = Array.from(document.querySelectorAll('[data-reveal]'));
    let observer: IntersectionObserver | undefined;
    if (typeof IntersectionObserver !== 'undefined') {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('in');
              observer?.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.1, rootMargin: '0px 0px -30px 0px' }
      );
      revealEls.forEach((el) => observer?.observe(el));
    } else {
      revealEls.forEach((el) => el.classList.add('in'));
    }

    return () => {
      clearInterval(timer);
      btn?.removeEventListener('click', toggleMenu);
      links.forEach((a) => a.removeEventListener('click', closeMenu));
      observer?.disconnect();
    };
  }, []);

  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link
        href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,400..800&family=JetBrains+Mono:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />
      <style dangerouslySetInnerHTML={{ __html: HOME_STYLES }} />
      <div dangerouslySetInnerHTML={{ __html: HOME_BODY }} />
    </>
  );
}

"use client";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    // Load external scripts then run app
    const loadScript = (src: string): Promise<void> =>
      new Promise((resolve) => {
        if (document.querySelector(`script[src="${src}"]`)) { resolve(); return; }
        const s = document.createElement("script");
        s.src = src;
        s.onload = () => resolve();
        document.head.appendChild(s);
      });

    const loadFont = () => {
      if (document.querySelector('link[data-app-font]')) return;
      const l = document.createElement("link");
      l.rel = "stylesheet";
      l.href = "https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800;900&display=swap";
      l.setAttribute("data-app-font", "1");
      document.head.appendChild(l);
    };

    Promise.all([
      loadScript("https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js"),
      loadScript("https://cdnjs.cloudflare.com/ajax/libs/qrcodejs/1.0.0/qrcode.min.js"),
    ]).then(() => {
      loadFont();
      // Load the app JS and HTML from external file
      fetch("/app-bundle.js")
        .then(r => r.text())
        .then(code => {
          // eslint-disable-next-line no-new-func
          new Function(code)();
        });
    });
  }, []);

  return <div id="app-root" />;
}

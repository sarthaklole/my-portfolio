import React from "react";
import { Mail, Phone, Github, Linkedin } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="halftoneLight" />
      <span className="contactEyebrow">ISSUE 05 — TO BE CONTINUED</span>
      <h2 className="contactTitle">Let's Build The Next Issue</h2>
      <p className="contactSub">
        Looking for a high-impact developer with relentless discipline and engineering focus?
        My web-shooters are ready for internships, collaborations, and ambitious builds.
      </p>

      <div className="contactLinks">
        <a href="mailto:lolesarthak@gmail.com" className="contactLink">
          <Mail size={18} color="var(--crimson)" /> lolesarthak@gmail.com
        </a>
        <a href="tel:+917058533191" className="contactLink">
          <Phone size={18} color="var(--yellow)" /> +91 7058533191
        </a>
        <a
          href="https://github.com"
          target="_blank"
          rel="noreferrer"
          className="contactLink"
        >
          <Github size={18} color="var(--electric)" /> GitHub
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noreferrer"
          className="contactLink"
        >
          <Linkedin size={18} color="var(--neon-cyan)" /> LinkedIn
        </a>
      </div>
    </section>
  );
}

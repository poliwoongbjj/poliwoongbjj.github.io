import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  return (
    <div className="bg-gradient-to-r from-blue-50 to-indigo-50">
      <div className="max-w-6xl mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold text-center">Hi, I'm Woong Kim</h1>
        <div className="flex justify-center gap-6 mt-4">
          <Github size={24} />
          <Linkedin size={24} />
          <Mail size={24} />
        </div>
      </div>
    </div>
  );
};

export default Hero;

import React from 'react';

export interface Founder {
  name: string;
  title: string;
  imageUrl: string;
  linkedinUrl: string;
  description: string;
}

export interface ProjectType {
  id: number;
  name:string;
  category: string;
  description: string;
  longDescription: string;
  features: string[];
  logo: React.FC<React.SVGProps<SVGSVGElement>>;
  calendlyLink: string;
  teamSize: number;
  founders: Founder[];
  imageUrl: string;
  pdfUrl: string;
  extraParagraph: string;
  logoIncludesName: boolean;
}
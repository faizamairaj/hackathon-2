import React from 'react';

interface ContactCardProps {
  icon: React.ReactNode;
  title: string;
  details: string[];
  color: string;
  iconColor: string;
}

export default function ContactCard({ icon, title, details, color, iconColor }: ContactCardProps) {
  return (
    <div className={`${color} p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow`}>
      <div className={`${iconColor} mb-4`}>{icon}</div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      {details.map((detail, index) => (
        <p key={index} className="text-gray-600">
          {detail}
        </p>
      ))}
    </div>
  );
}
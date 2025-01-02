import React from 'react';
import { Tv, Bluetooth, Wifi, Music2, Usb, Zap, MonitorCheck, Award } from 'lucide-react';
import Container from '../layout/Container';

const features = [
  { icon: Tv, label: 'HDMI', description: 'Multiple HDMI ports for connectivity' },
  { icon: Bluetooth, label: 'Bluetooth', description: 'Wireless audio streaming' },
  { icon: Wifi, label: 'WiFi', description: 'Smart connectivity' },
  { icon: Music2, label: 'HiFi', description: 'High-fidelity audio' },
  { icon: Usb, label: 'USB', description: 'USB media playback' },
  { icon: Zap, label: 'Energy Saving', description: 'Eco-friendly operation' },
  { icon: MonitorCheck, label: 'Full HD', description: 'Crystal clear resolution' },
  { icon: Award, label: 'A+ Grade Panel', description: 'Premium display quality' },
];

export default function Features() {
  return (
    <Container className="py-16">
      <h2 className="text-3xl font-bold text-center mb-12 font-heading">
        Premium Features
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className="text-center transform transition-transform duration-300 ease-in-out hover:scale-105"
          >
            <div className="bg-white p-6 rounded-lg shadow-lg border border-gold/20 h-full flex flex-col items-center">
              <feature.icon className="h-12 w-12 mb-4 text-primary" />
              <h3 className="font-heading text-lg mb-2">{feature.label}</h3>
              <p className="text-sm text-gray-600">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
}
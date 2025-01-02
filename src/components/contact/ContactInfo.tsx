import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { contactInfo } from '../../data/contact';

export default function ContactInfo() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900">Contact Information</h2>
      
      <div className="space-y-4">
        <div className="flex items-center">
          <Phone className="h-5 w-5 text-red-600 mr-3" />
          <span>{contactInfo.phone}</span>
        </div>
        
        <div className="flex items-center">
          <Mail className="h-5 w-5 text-red-600 mr-3" />
          <span>{contactInfo.email}</span>
        </div>
        
        <div className="flex items-center">
          <MapPin className="h-5 w-5 text-red-600 mr-3" />
          <span>{contactInfo.address}</span>
        </div>
      </div>
    </div>
  );
}
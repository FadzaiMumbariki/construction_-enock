import React from 'react';

const PHONE = '2638688005304';
const WA_URL = `https://wa.me/${PHONE}`;

export default function WhatsAppChat() {
  const defaultMsg = 'Hello Enock Construction, I would like to enquire about your services and equipment.';

  return (
    <a
      href={`${WA_URL}?text=${encodeURIComponent(defaultMsg)}`}
      className="whatsapp-fab"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      title="Chat on WhatsApp"
    >
      <i className="fa fa-whatsapp"></i>
      <span className="whatsapp-fab__pulse" />
    </a>
  );
}

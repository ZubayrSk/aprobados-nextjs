"use client";

import { MessageCircle } from "lucide-react";
import { WHATSAPP_NUMBERS } from "@/lib/constants";

export const FloatingWhatsApp = () => {
  return (
    <a
      href={WHATSAPP_NUMBERS[0].url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      className="fixed bottom-7 right-7 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp shadow-lg shadow-whatsapp/30 transition-transform hover:scale-110"
    >
      <MessageCircle className="h-7 w-7 fill-white text-white" />
    </a>
  );
};

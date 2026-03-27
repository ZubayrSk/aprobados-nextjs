"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { CONTACT } from "@/lib/constants";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Fix default marker icons for bundlers
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png",
  iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png",
  shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png",
});

export default function ContactMap() {
  return (
    <div className="overflow-hidden rounded-2xl border border-warm-border">
      <MapContainer
        center={CONTACT.mapPosition}
        zoom={15}
        scrollWheelZoom={false}
        style={{ height: "340px", width: "100%" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={CONTACT.mapPosition}>
          <Popup>
            <strong>Aprobados</strong>
            <br />
            {CONTACT.address}
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

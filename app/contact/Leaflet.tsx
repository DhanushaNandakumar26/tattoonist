'use client';

import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import './CustomIcon'; // Ensure this file sets up the default icon

const LeafletMap: React.FC = () => {
  const position: [number, number] = [10.5043, 76.1649]; // Coordinates for Popkiss Tattoo Studio

  return (
    <div style={{ padding: '1rem' }}>
      <MapContainer
        center={position}
        zoom={15}
        style={{ height: '400px', width: '100%', borderRadius: '1rem', overflow: 'hidden' }}
      >
        <TileLayer
          url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
          attribution='&copy; <a href="https://carto.com/">CARTO</a> | &copy; OpenStreetMap contributors'
        />
        <Marker position={position}>
          <Popup>
            <strong>Tattoonist Studio</strong><br />
            Kanjani Road, Thrissur
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default LeafletMap;

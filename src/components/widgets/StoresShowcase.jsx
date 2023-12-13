"use client"

// Imports
import React, { useState, useEffect } from "react";

import StoresGrid from "../store-related/StoresGrid";

async function getStores() {
    
    try {
      const result = await fetch("/api/store-settings");
      if (!result.ok) {
        throw new Error('Error al obtener los datos');
      }
      const data = await result.json();
      return data;
  
    } catch (error) {
      return [];
    }
  }

function StoresShowcase({userType}) {
    const [stores, setStores] = useState([]);
    
    useEffect(() => {
        getStores().then(data => {
            setStores(data);
        });
    }, []);

    return (
        <>
            <div className="mb-12">
                <h2 className="mb-4 text-4xl font-bold text-center">
                    Descubre los comercios
                </h2>
                <StoresGrid stores={stores} userType={userType} />
            </div>
        </>
    );
}

export default StoresShowcase;

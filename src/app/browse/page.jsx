"use client";

import React from "react";

import NavBar from "@/components/navbars/NavBar";
import BrowseIndex from "@/components/browse-related/BrowseIndex";


function BrowsePage() {

    return (
        <>
            <NavBar />
            <main className="flex flex-col items-center justify-center min-h-screen px-6 py-12">

                <BrowseIndex userType="def"/>
            </main>
        </>
    );
}

export default BrowsePage;

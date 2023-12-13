"use client";

import React from "react";
import NavBar from "@/components/navbars/NavBar";
import CommonBrowse from "@/components/browse-related/CommonBrowse";

function BrowseByActivityPage() {

    return (
        <>
            <NavBar />

            <main className="container mx-auto min-h-screen px-6 py-12">

                <CommonBrowse searchKey="activity" pageTitle="Busca por actividad" userType="def" />

            </main>
        </>
    );
}

export default BrowseByActivityPage;

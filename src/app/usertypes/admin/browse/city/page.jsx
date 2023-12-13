"use client";

import React from "react";
import CommonBrowse from "@/components/browse-related/CommonBrowse";

function BrowseByCityPage() {

    return (
        <>
            <main className="container mx-auto min-h-screen px-6 py-12">

                <CommonBrowse searchKey="city" pageTitle="Busca por ciudad" userType="admin" />

            </main>
        </>
    );
}

export default BrowseByCityPage;

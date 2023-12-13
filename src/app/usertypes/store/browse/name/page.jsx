"use client";

import React from "react";
import CommonBrowse from "@/components/browse-related/CommonBrowse";

function BrowseByNamePage() {

    return (
        <>
            <main className="container mx-auto min-h-screen px-6 py-12">

                <CommonBrowse searchKey="businessName" pageTitle="Busca por nombre" userType="store" />

            </main>
        </>
    );
}

export default BrowseByNamePage;

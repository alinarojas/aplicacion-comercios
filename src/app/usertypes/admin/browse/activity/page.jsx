"use client";

import React from "react";
import CommonBrowse from "@/components/browse-related/CommonBrowse";

function BrowseByActivityPage() {

    return (
        <>
            <main className="container mx-auto min-h-screen px-6 py-12">

                <CommonBrowse searchKey="activity" pageTitle="Busca por actividad" userType="admin" />

            </main>
        </>
    );
}

export default BrowseByActivityPage;

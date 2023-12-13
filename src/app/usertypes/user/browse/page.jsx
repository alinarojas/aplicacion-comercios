"use client";

import React from "react";

import BrowseIndex from "@/components/browse-related/BrowseIndex";


function UserBrowsePage() {

    return (
        <>
            <main className="flex flex-col items-center justify-center min-h-screen px-6 py-12">

                <BrowseIndex userType="user"/>
            </main>
        </>
    );
}

export default UserBrowsePage;

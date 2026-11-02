/** @jsxImportSource react */
import React from "react";
import type { BlogPost } from "../utils/types.ts";
import Head from "./Head.tsx";
import Header from "./Header.tsx";

interface LayoutProps {
  children: React.ReactNode;
  post?: BlogPost;
}

export function Layout({ post, children }: LayoutProps) {
  return (
    <html lang="en">
      <Head post={post} />
      <body>
        <div className="page">
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
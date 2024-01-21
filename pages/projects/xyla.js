import Head from "next/head";
import Link from "next/link";
import util from "../../styles/util.module.css";
import Script from "next/script";
import generateImageComponents from "../../lib/imageUtil";
import React, { useState, useEffect } from "react";
import { addScrollListener } from "../../lib/scroll";
import StickyTab from "../../components/stickyTab";

export default function Xyla() {
  const pageId = "xylaPage";
  const description = `Leading Product & Brand Design at the Wealth Management Tech firm. I joined the company in 2020 as the second employee, designed and shipped early products and helped the company grow from 4 employees to over 50, from $0 in Assets Under Management to over $1.3 Billion.`;

  const sections = [
    {
      id: "bison",
      title: "Bison Financial AI",
      description:
        "We built our net worth dashboard with unique coverage in private assets. Beyond banks, stock brokerages and crypto platforms, our dashboard allows users to track their employer equity, angel investments and fund investment LP stakes. Below images: 1-2) the latest desktop design, 3) a well-beloved past version, 4) a speculative mock and 5) mobile view.",
      imageCount: 5,
      section: "product",
    },
    {
      id: "tldr",
      title: "TL;Dr.",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis condimentum auctor massa, vel sodales leo tristique vel.",
      imageCount: 4,
      section: "product",
    },
    {
      id: "oev2",
      title: "OpenEvidence V2",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis condimentum auctor massa, vel sodales leo tristique vel.",
      imageCount: 2,
      section: "product",
    },
    {
      id: "oe",
      title: "OpenEvidence for Doctors",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis condimentum auctor massa, vel sodales leo tristique vel.",
      imageCount: 4,
      section: "product",
    },
    {
      id: "vs-chatgpt",
      title: "OpenEvidence vs ChatGPT",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis condimentum auctor massa, vel sodales leo tristique vel.",
      imageCount: 4,
      section: "brand",
    },
    {
      id: "drug-discovery",
      title: "Drug Discovery Pitch Deck",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis condimentum auctor massa, vel sodales leo tristique vel.",
      imageCount: 4,
      section: "brand",
    },
  ];

  const [activeTab, setActiveTab] = useState(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const cleanupScrollListener = addScrollListener(
      sections,
      setScrolled,
      setActiveTab,
      pageId
    );

    return () => {
      cleanupScrollListener();
    };
  }, [sections, setScrolled, setActiveTab]);

  return (
    <>
      <Head>
        <title>Xyla</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.gif" />{" "}
        <meta property="og:image" content="https://www.sj.land/og/index.png" />
      </Head>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-T2CWC86NTK"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'GA_MEASUREMENT_ID');
        `}
      </Script>

      <main className={util.page} id={pageId}>
        <div className={util.projectColumn}>
          <div className={util.projectTopContainer}>
            <div className={util.projectTopLeft}>
              <h1 className={util.projectHeader}>Xyla</h1>
              <p className={util.description}>
                {`Founded by Daniel Nadler who previously sold his AI company Kensho Technologies for $700 million, Xyla is working on aligning and grounding large language models for accuracy-critical domains. Learn more about the `}
                <a
                  href="https://www.forbes.com/sites/katiejennings/2023/07/27/this-health-ai-startup-aims-to-keep-doctors-up-to-date-on-the-latest-science/?sh=11e89421442a"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "underline" }}
                >
                  company's mission
                </a>
                {" and "}
                <a
                  href="https://arxiv.org/pdf/2302.08091.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "underline" }}
                >
                  why we need a specialized LLM
                </a>
                {". "}
              </p>
              <p className={util.description}>
                {`I help the team part-time with product design, brand positioning and marketing. The team inked multiple partnerships with top medical institutions and is now working on a product that will provide the same reliable AI to finance professionals.`}
              </p>
            </div>

            <p className={util.projectDate}>{`2023 – Now`}</p>
          </div>

          <div
            style={{
              position: "sticky",
              top: "-20px",
              zIndex: "99",
              width: "calc(100% - 2.5rem)",
              margin: "0 1.25rem",
              border: `1px solid ${scrolled ? `var(--gray3)` : "transparent"}`,
              border: `1px solid var(--gray3)`,
              borderRadius: "9px",
              backgroundColor: "var(--modalBg)",
              padding: "0.5rem 1rem 0.5rem 1rem",
            }}
          >
            <StickyTab
              activeTab={activeTab}
              sections={sections}
              includeBrandSection={true}
            />
          </div>

          {sections.map((section) => (
            <section key={section.id} id={section.id}>
              <h2 className={util.projectSectionHeader}>{section.title}</h2>
              <p className={util.projectDescription}>{section.description}</p>
              {generateImageComponents(`/xyla`, section.imageCount, section.id)}
            </section>
          ))}

          <Link scroll={false} href="/projects">
            <a className={util.backButton}> ← &nbsp; Other Projects</a>
          </Link>
        </div>
      </main>
    </>
  );
}

import { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

const getMetaData = (
  dynamicTitle: string,
  dynamicDescription: string
): Metadata => {
  return {
    title: dynamicTitle,
    description: dynamicDescription,
    openGraph: {
      type: "website",
      title: dynamicTitle,
      description: dynamicDescription,
      url: siteUrl,
      images: [
        {
          url: "/og-image.jpg",
          width: 800,
          height: 600,
          alt: "Anit Radiators",
        },
      ],
    },
    other: {
      keywords: "nextjs, react, seo, web development",
    },
  };
};

export default getMetaData;

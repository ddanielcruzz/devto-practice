import React from "react";
import { Card } from "../components/Card";
import { CardArticle } from "../components/CardArticle";

const response = [
  {
    title: "fReddit - 300+ Subreddits to join",
    subtitle: "products",
    isNew: false,
  },
  {
    title: "Learn Ruby with Fun Applications ",
    subtitle: "education",
    isNew: true,
  },
];

export const RightAside = () => {
  return (
    <aside className="flex flex-col space-y-4 hidden md:block">
      <Card title="Listings">
        {response.map((listing) => (
          <CardArticle
            key={listing.title}
            title={listing.title}
            subtitle={listing.subtitle}
          />
        ))}
      </Card>
      <Card title="#help">
        {response.map((listing) => (
          <CardArticle
            key={listing.title}
            title={listing.title}
            subtitle={listing.subtitle}
            isNew={listing.isNew}
          />
        ))}
      </Card>
      <Card title="#discuss">
        {response.map((listing) => (
          <CardArticle
            key={listing.title}
            title={listing.title}
            subtitle={listing.subtitle}
          />
        ))}
      </Card>
    </aside>
  );
};

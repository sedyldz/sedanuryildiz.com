interface Author {
  name: string;
  image: string;
}

interface RecipeFrontmatter {
  title: string;
  description: string;
  date: string;
  author: Author;
}

export interface Recipe {
  slug: string;
  frontmatter: RecipeFrontmatter;
}

export function getRecipes(): Recipe[] {
  // TODO: Replace with actual recipe data
  return [
    {
      slug: "classic-chocolate-chip-cookies",
      frontmatter: {
        title: "Classic Chocolate Chip Cookies",
        description:
          "A timeless recipe for soft and chewy chocolate chip cookies that everyone will love.",
        date: "2024-03-20",
        author: {
          name: "Sedanur Yıldız",
          image: "/images/profile.jpg", // Make sure this image exists in your public directory
        },
      },
    },
  ];
}

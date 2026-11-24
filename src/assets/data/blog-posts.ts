import {
  type BlogPost,
  comparePostsByPublishedAt,
  isPostPublished,
} from "@/lib/blog";

const DEFAULT_AUTHOR = "Hotel Expert";
const DEFAULT_AVATAR = "/images/avatars/1.webp";

const NEWS = "Travel News" as const;
const ANALYSIS = "Hotel Guides" as const;

export const getPostImagePath = (slug: string) => `/images/posts/${slug}.webp`;
export const getPostSocialImagePath = (slug: string) =>
  `/images/posts/${slug}.png`;

export const slugifyCroatian = (value: string) =>
  value
    .trim()
    .toLowerCase()
    .replaceAll("đ", "dj")
    .normalize("NFKD")
    .replaceAll(/[\u0300-\u036f]/g, "")
    .replaceAll(/[^a-z0-9]+/g, "-")
    .replaceAll(/^-+|-+$/g, "")
    .replaceAll(/-{2,}/g, "-");

type SourcePost = Omit<
  BlogPost,
  | "author"
  | "avatarUrl"
  | "imageUrl"
  | "socialImageUrl"
  | "slug"
  | "contentSlug"
> & {
  slug: string;
} & Partial<Pick<BlogPost, "author" | "avatarUrl" | "imageUrl">>;

const createPost = (post: SourcePost): BlogPost => {
  const {
    slug: contentSlug,
    author = DEFAULT_AUTHOR,
    avatarUrl = DEFAULT_AVATAR,
    imageUrl,
    ...rest
  } = post;

  const slug = slugifyCroatian(post.title);

  return {
    author,
    avatarUrl,
    contentSlug,
    slug,
    imageUrl: imageUrl ?? getPostImagePath(slug),
    socialImageUrl: getPostSocialImagePath(slug),
    ...rest,
  };
};

export const blogPosts: BlogPost[] = [
  createPost({
    id: 1,
    slug: "anthropic-claude-meetings",
    title: "Welcome to HotelAndTraveling.com Guides by Hotel Expert",
    description:
      "Your daily source for hotel booking insights, destination guides, airline updates, and practical travel advice.",
    imageAlt: "HotelAndTraveling.com Guides editorial desk by Hotel Expert",
    publishedOn: "2026-11-23",
    category: ANALYSIS,
    readTime: 3,
    featured: false,
  }),
];

const assertUniqueField = (
  posts: BlogPost[],
  fieldName: "id" | "slug" | "contentSlug",
) => {
  const values = new Set<string | number>();

  for (const post of posts) {
    const value = post[fieldName];

    if (values.has(value)) {
      throw new Error(`Duplicate blog post ${fieldName} detected: ${value}`);
    }

    values.add(value);
  }
};

export const assertUniqueBlogPosts = (posts: BlogPost[]) => {
  assertUniqueField(posts, "id");
  assertUniqueField(posts, "slug");
  assertUniqueField(posts, "contentSlug");
};

assertUniqueBlogPosts(blogPosts);

export const sortedBlogPosts = blogPosts
  .filter((post) => isPostPublished(post))
  .sort(comparePostsByPublishedAt);

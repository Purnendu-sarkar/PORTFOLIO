export type BlogPost = {
  id: number;
  title: string;
  summary: string;
  date: string;
  content: string;
};


export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Mastering React Hooks",
    summary:
      "An in-depth guide to using React hooks like useState, useEffect, and useContext effectively.",
    date: "August 15, 2025",
    content:
      "React hooks completely changed the way we write components. With hooks, you no longer need class components for managing state or lifecycle methods. This post covers useState, useEffect, and useContext in detail with practical code examples and best practices.",
  },
  {
    id: 2,
    title: "Building a Full-Stack App with the MERN Stack",
    summary:
      "Learn how to build your first full-stack web application using MongoDB, Express, React, and Node.js.",
    date: "August 18, 2025",
    content:
      "The MERN stack is one of the most popular choices for modern web development. In this blog, I walk you through creating a simple CRUD application from scratch. We set up the backend with Express and MongoDB, then build a dynamic frontend using React and connect them together.",
  },
  {
    id: 3,
    title: "Why TypeScript is a Game-Changer for JavaScript Developers",
    summary:
      "Discover how TypeScript helps you write safer, more maintainable code in large projects.",
    date: "August 21, 2025",
    content:
      "TypeScript adds strong typing to JavaScript, which prevents many runtime errors. In this post, I explain how TypeScript improves developer experience, enhances IDE support, and makes large-scale applications easier to maintain. I also compare TypeScript vs JavaScript with real-world scenarios.",
  },
  {
    id: 4,
    title: "Getting Started with Tailwind CSS",
    summary:
      "A beginner-friendly guide to building modern UIs with Tailwind CSS utility-first classes.",
    date: "August 25, 2025",
    content:
      "Tailwind CSS allows developers to build beautiful, responsive UIs quickly without writing custom CSS from scratch. In this blog, I share how to set up Tailwind in a React project, common utility classes, and best practices for building professional, scalable designs.",
  },
  {
    id: 5,
    title: "Understanding REST APIs and CRUD Operations",
    summary:
      "Everything you need to know about REST APIs and implementing CRUD operations in your projects.",
    date: "August 28, 2025",
    content:
      "APIs are the backbone of modern applications. This post explains the fundamentals of REST architecture and demonstrates how to implement CRUD operations (Create, Read, Update, Delete) in a backend using Node.js and Express. I also show how to test endpoints with Postman.",
  },
];
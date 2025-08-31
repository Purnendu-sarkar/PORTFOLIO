import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { blogPosts, type BlogPost } from "@/constants/blog";

export default function Blog() {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  return (
    <section id="blog" className="container mx-auto py-20 px-4 md:px-6">
      {/* Section Title */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
          📝 My Blog
        </h2>
        <div className="w-32 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 mx-auto mt-3 rounded-full shadow-lg" />
        <p className="text-gray-400 mt-4 text-lg max-w-2xl mx-auto">
          Sharing my thoughts, experiences, and technical content.
        </p>
      </div>

      {/* Blog Posts Grid */}
      <div className="grid md:grid-cols-2 gap-8">
        {blogPosts.map((post) => (
          <motion.div
            key={post.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="p-6 rounded-xl  border-gray-700 backdrop-blur-md bg-gray-800 bg-opacity-60 hover:shadow-xl transition-all duration-300">
              <h3 className="text-2xl lg:text-3xl font-semibold text-blue-300 mb-2">
                {post.title}
              </h3>
              <p className="text-lg lg:text-xl text-gray-200 mb-4">
                {post.date}
              </p>
              <p className="text-muted-foreground mb-4 line-clamp-3">
                {post.summary}
              </p>
              <Button
                variant="outline"
                onClick={() => setSelectedPost(post)}
                className="text-purple-500 hover:bg-purple-500/10"
              >
                Read More
              </Button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal for Blog Details */}
      <Dialog open={!!selectedPost} onOpenChange={() => setSelectedPost(null)}>
        <DialogContent className="max-w-2xl bg-gray-900 text-gray-200 border border-gray-700 shadow-2xl rounded-2xl">
          {selectedPost && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold text-purple-400">
                  {selectedPost.title}
                </DialogTitle>
              </DialogHeader>
              <div className="space-y-4">
                <p className="text-gray-300 leading-relaxed">
                  {selectedPost.content}
                </p>
                <p className="text-gray-500 text-sm">
                  Date: {selectedPost.date}
                </p>
                <Button
                  variant="secondary"
                  onClick={() => setSelectedPost(null)}
                  className="bg-purple-600 text-white hover:bg-purple-700"
                >
                  Close
                </Button>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}

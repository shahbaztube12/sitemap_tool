const BlogPost = require('../model/blogPost.model'); // I will create this model next

// Controller to handle blog post submission
exports.submitBlogPost = async (req, res) => {
  try {
    const { title, content, author } = req.body;
    if (!title || !content || !author) {
      return res.status(400).json({ error: 'Title, content, and author are required.' });
    }
    const newPost = new BlogPost({ title, content, author, createdAt: new Date() });
    await newPost.save();
    res.status(201).json({ message: 'Blog post submitted successfully', post: newPost });
  } catch (error) {
    console.error('Error submitting blog post:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

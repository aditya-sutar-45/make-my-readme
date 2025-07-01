export const readmeSections = [
  // ===== Meta / Main Sections =====
  {
    name: "Title & Badges",
    tag: "meta",
    content: `# Project Name

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Build](https://img.shields.io/badge/build-passing-brightgreen)
`,
  },
  {
    name: "Description",
    tag: "meta",
    content: `## 📄 Description

Briefly describe what your project does and why it exists.
`,
  },
  {
    name: "Features",
    tag: "meta",
    content: `## 🚀 Features

- Feature 1
- Feature 2
- Feature 3
`,
  },
  {
    name: "Installation",
    tag: "setup",
    content: `## ⚙️ Installation

\`\`\`bash
# Clone the repo
git clone https://github.com/yourusername/your-repo.git

# Navigate into the directory
cd your-repo

# Install dependencies
npm install
\`\`\`
`,
  },
  {
    name: "Usage",
    tag: "usage",
    content: `## ▶️ Usage

\`\`\`bash
npm start
\`\`\`

Include screenshots or example usage:
![Usage Screenshot](path/to/screenshot.png)
`,
  },
  {
    name: "Tests",
    tag: "setup",
    content: `## 🧪 Running Tests

\`\`\`bash
npm test
\`\`\`
`,
  },
  {
    name: "Contributing",
    tag: "collaboration",
    content: `## 🧑‍💻 Contributing

Contributions are welcome! Please open an issue or submit a pull request.

1. Fork the project
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Open a PR
`,
  },
  {
    name: "To-Do / Checklist",
    tag: "planning",
    content: `## ✅ To-Do

- [ ] Add more features
- [ ] Improve documentation
- [ ] Add tests
`,
  },
  {
    name: "Dependencies",
    tag: "setup",
    content: `## 📦 Built With

- [React](https://reactjs.org/)
- [Express](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
`,
  },
  {
    name: "Folder Structure",
    tag: "setup",
    content: `## 🗂️ Project Structure

\`\`\`
project-name/
├── public/
├── src/
│   ├── components/
│   └── App.js
└── README.md
\`\`\`
`,
  },
  {
    name: "Authors & Acknowledgements",
    tag: "collaboration",
    content: `## 👥 Authors

- [@yourusername](https://github.com/yourusername)

## 🙏 Acknowledgements

- Thanks to [SomeTool](https://some-tool.com)
- Inspired by [SomeRepo](https://github.com/...)
`,
  },
  {
    name: "License",
    tag: "meta",
    content: `## 📜 License

Distributed under the MIT License. See \`LICENSE\` for more information.
`,
  },
  {
    name: "Contact / Social",
    tag: "collaboration",
    content: `## 📣 Contact

For questions or feedback, reach out via:

- Email: your@email.com
- LinkedIn: [Your Name](https://linkedin.com/in/yourprofile)
`,
  },
  {
    name: "Live Demo / Link",
    tag: "usage",
    content: `## 🌍 Live Demo

Check it out here: [https://yourapp.com](https://yourapp.com)
`,
  },
  {
    name: "Environment Variables",
    tag: "setup",
    content: `## 🌐 Environment Variables

To run this project, you’ll need to add the following environment variables to your \`.env\` file:

\`\`\`env
PORT=3000
API_KEY=yourapikey
\`\`\`
`,
  },

  // ===== Markdown Building Blocks =====

  {
    name: "Heading",
    tag: "basic",
    content: `## ✨ Section Heading

Write your section content here...
`,
  },
  {
    name: "Link",
    tag: "basic",
    content: `[Link Text](https://example.com)
`,
  },
  {
    name: "Image",
    tag: "basic",
    content: `![Alt Text](https://via.placeholder.com/600x200.png?text=Sample+Image)
`,
  },
  {
    name: "Table",
    tag: "basic",
    content: `| Column 1 | Column 2 | Column 3 |
|----------|----------|----------|
| Row 1    | Data     | More     |
| Row 2    | Data     | More     |
`,
  },
  {
    name: "Blockquote",
    tag: "basic",
    content: `> This is a blockquote. Use it to highlight quotes or important notes.
`,
  },
  {
    name: "Horizontal Rule",
    tag: "basic",
    content: `---

`,
  },
  {
    name: "Code Block",
    tag: "basic",
    content: `\`\`\`js
// JavaScript example
function sayHello(name) {
  return \`Hello, \${name}!\`;
}
\`\`\`
`,
  },
  {
    name: "Inline Code",
    tag: "basic",
    content: `Use \`console.log()\` to print output to the console.
`,
  },
];

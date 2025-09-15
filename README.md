# Cursor CLI Demo

A Next.js application that demonstrates the integration of Cursor AI agent capabilities with GitHub Actions workflows for automated code review and CI/CD processes.

## 🚀 What This Project Is

This project serves as a demonstration of how to integrate Cursor's AI-powered CLI tools into a modern web development workflow. It combines:

- **Next.js 15.5.3** - A React-based full-stack framework
- **Cursor AI Agent Integration** - Automated code review and CI/CD workflows
- **GitHub Actions** - Automated workflows for code review and deployment
- **Modern Tooling** - TypeScript, Tailwind CSS, and ESLint

To learn more about the project, go to /docs directory

## 🏗️ Project Structure

```markdown
cursor-cli-demo/
├── src/
│   └── app/
│       ├── globals.css          # Global styles with Tailwind CSS
│       ├── layout.tsx           # Root layout component
│       ├── page.tsx             # Home page component
│       └── favicon.ico
├── public/                      # Static assets (SVG icons)
├── workflows/                   # GitHub Actions workflows
│   ├── simple.yaml             # Basic Cursor agent workflow
│   └── code-reviewer.yaml      # Automated code review workflow
├── package.json                # Dependencies and scripts
├── next.config.ts              # Next.js configuration
├── tsconfig.json               # TypeScript configuration
├── eslint.config.mjs           # ESLint configuration
├── postcss.config.mjs          # PostCSS configuration for Tailwind
└── AGENTS.md                   # Agent configuration rules
```

## 🛠️ How It's Put Together

### Frontend Stack
- **Framework**: Next.js 15.5.3 with App Router
- **Language**: TypeScript 5.x
- **Styling**: Tailwind CSS v4 with custom CSS variables
- **Fonts**: Geist Sans and Geist Mono from Google Fonts
- **Icons**: SVG assets for UI elements

### Development Tools
- **Linting**: ESLint with Next.js TypeScript rules
- **Styling**: PostCSS with Tailwind CSS plugin
- **Type Checking**: Strict TypeScript configuration

### AI Integration
- **Cursor Agent Rules**: Configured in `AGENTS.md` to prevent unauthorized code writing
- **Automated Workflows**: GitHub Actions for CI/CD and code review

### GitHub Actions Workflows

#### 1. Simple Workflow (`workflows/simple.yaml`)
- **Trigger**: Push to main, PRs, or manual dispatch
- **Purpose**: Demonstrates basic Cursor CLI integration
- **Actions**: Installs Cursor CLI and runs a simple agent command

#### 2. Code Review Workflow (`workflows/code-reviewer.yaml`)
- **Trigger**: Pull request events (opened, synchronized, etc.)
- **Purpose**: Automated code review using Cursor AI
- **Features**:
  - Reviews PR diffs
  - Leaves inline comments on changed lines
  - Tracks and resolves previous issues
  - Uses emojis for categorizing feedback (🚨 Critical, 🔒 Security, etc.)

## 🚀 How to Run the Project

### Prerequisites
- Node.js 18+ 
- npm or yarn
- Git

### Installation & Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd cursor-cli-demo
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Available Scripts

```bash
# Development server with hot reload
npm run dev

# Build for production
npm run build

# Start production server (requires build first)
npm run start

# Run ESLint
npm run lint
```

### Environment Setup for CI/CD

To use the GitHub Actions workflows, you'll need to:

1. **Set up Cursor API Key**
   - Add `CURSOR_API_KEY` as a repository secret
   - Create an environment named `CURSOR_API_KEY` in your GitHub repository settings

2. **Configure Permissions**
   - Ensure the repository has appropriate permissions for PR comments
   - The workflows require `contents: read` and `pull-requests: write` permissions

## 🎯 Key Features

### Current Implementation
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Dark Mode Support**: Automatic dark/light theme switching
- **Type Safety**: Full TypeScript implementation
- **Modern Fonts**: Geist font family integration
- **Clean Architecture**: Next.js App Router with proper component structure

### AI-Powered Workflows
- **Automated Code Review**: AI agent reviews PRs and provides feedback
- **Intelligent Comments**: Categorized feedback with emojis and priorities
- **Issue Tracking**: Automatically resolves previously reported issues
- **Smart Filtering**: Avoids duplicate comments and focuses on critical issues

## 🔧 Configuration

### Cursor Agent Rules
The project includes agent configuration in `AGENTS.md` that prevents unauthorized code modifications, ensuring the AI assistant only provides guidance without making changes.

### Tailwind CSS
Custom CSS variables are configured for theming:
- `--background` and `--foreground` for color scheme
- `--font-geist-sans` and `--font-geist-mono` for typography

## 📝 Development Notes

This project demonstrates best practices for:
- Modern Next.js application structure
- TypeScript configuration for React projects
- Tailwind CSS integration with custom themes
- ESLint setup for code quality
- GitHub Actions for CI/CD automation
- AI-powered development workflows

The application serves as both a functional Next.js app and a template for integrating Cursor AI capabilities into development workflows.
```

This comprehensive README explains what the project is (a Cursor CLI demo with Next.js), how it's structured (modern web stack with AI integration), and provides clear instructions for running and understanding the project. The README covers all the technical aspects while remaining accessible to developers at different skill levels.

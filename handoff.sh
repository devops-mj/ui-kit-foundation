#!/bin/bash

# Exclude Next.js, Vercel, node_modules, and npm lock noise
IGNORE_LIST="--exclude-dir={node_modules,.git,.next,.vercel,out,build,coverage,chunks} --exclude=package-lock.json"

echo "==================== AI HANDOFF CONTEXT ===================="
echo "Repo: $(basename "$(pwd)") | Branch: $(git branch --show-current)"
echo "Time: $(date '+%Y-%m-%d %H:%M')"
echo ""
echo "### 1. MANUAL FOCUS (PROGRESS.md)"
if [ -f PROGRESS.md ]; then
  sed -n '/## 🟢/,/## 🔴/p' PROGRESS.md | grep -v "## 🔴"
else
  echo "[!] PROGRESS.md not found in root directory."
fi
echo ""
echo "### 2. RECENT COMMITS (Last 3)"
git log -n 3 --pretty=format:"* %h - %s (%cr)" 2>/dev/null || echo "No commits yet."
echo ""
echo ""
echo "### 3. ACTIVE UNCOMMITTED CHANGES"
git status --short | head -n 15
echo ""
echo "### 4. OPEN TODOs IN CODEBASE"
grep -rnw './src' $IGNORE_LIST -e 'TODO:' --include=\*.{js,ts,jsx,tsx,css,scss,module.css} 2>/dev/null | head -n 10
echo ""
echo "==========================================================="

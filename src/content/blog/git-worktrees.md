---
title: "Git Worktrees & Branch Management in the Age of AI Agents"
description: "Why git worktrees are essential when working with AI coding agents, and the branch management practices you need to stay in control"
date: "2026-03-10"
lastModified: "2026-03-10"
slug: "git-worktrees"
author:
  name: "Sedanur Yıldız"
  image: "/seda.jpg"
keywords:
  - Git
  - Worktrees
  - Branch Management
  - AI Agents
  - Developer Workflow
  - Version Control
image: "/images/posts/your-post-image.jpg"
---

# Git Worktrees: A Must-Know When AI Agents Write Your Code

If you're using AI coding agents like Cursor, Claude Code, Copilot, or Devin, you've probably run into this problem: you're on one branch, the agent is making changes, and suddenly you need to check something else, fix a bug, or try a different idea. So you stash your work, switch branches, lose your place, and waste time getting back to where you were.

**Git worktrees** fix this. And with agents creating and changing branches faster than ever, knowing your way around git isn't optional anymore. It's the most important skill you can have.

## The Big Picture: One Branch = One Folder

Here's the simple idea: **each worktree is a copy of your project folder, sitting right next to it, on a different branch.** Git manages everything behind the scenes.

Say your project lives in `~/Dev/my-app`. When you create worktrees, your folder structure looks like this:

```
~/Dev/
  my-app/                  ← main branch (your original folder)
  my-app-feat-auth/        ← feat/auth branch
  my-app-feat-dashboard/   ← feat/dashboard branch
  my-app-fix-navbar/       ← fix/navbar branch
```

Each of these folders is a full working copy of your project, but on a different branch. They all share the same git history. No duplicate clones, no wasted disk space. You just open whichever folder you need in your editor.

**One parallel task = one worktree = one folder.** That's it.

Without worktrees, you have one folder and you keep switching branches inside it. With worktrees, separate branches are separate folders. You never have to stash, switch, or lose your place.

## Why You Need This When Using Agents

Most of the time, you're not starting a project from scratch. You're working on an existing codebase, and so is everyone else on your team. Each person has their own task, their own branch, their own changes.

AI agents work the same way. Think of them as extra teammates. One agent is building auth, another is fixing a bug, another is refactoring the API layer. In a real team, each person has their own machine and their own checkout. But agents all run on *your* computer. They all need access to the same repo, at the same time, on different branches.

That's exactly what worktrees give you. Each agent gets its own folder, its own branch, and can work without stepping on the others. You can have one agent working in `my-app-feat-auth/`, another in `my-app-fix-navbar/`, and still keep coding in `my-app/` yourself.

Without worktrees, you're stuck with one folder and one branch at a time. You'd have to wait for one agent to finish before starting the next. With worktrees, the work runs in parallel, just like a real team.

## How to Use Worktrees

Say you're on `main` and you want to work on a feature called `feat/auth` in a separate folder. You have two options depending on whether the branch exists yet or not.

### The branch already exists

If `feat/auth` is already a branch (you created it earlier, or it's on the remote):

```sh
git worktree add ../my-app-feat-auth feat/auth
```

This puts `feat/auth` in a folder called `my-app-feat-auth` right next to your project. Open it in your editor and you're good to go.

### The branch doesn't exist yet

If you want to create a new branch and move it into its own folder in one step, use the `-b` flag:

```sh
git worktree add -b feat/auth ../my-app-feat-auth main
```

This creates a new branch called `feat/auth` based on `main` and checks it out in `../my-app-feat-auth`. No need to create the branch first.

### See all your worktrees

```sh
git worktree list
```

You'll get something like:

```
~/Dev/my-app                abc1234 [main]
~/Dev/my-app-feat-auth      def5678 [feat/auth]
~/Dev/my-app-new-feature    ghi9012 [feat/new-feature]
```

### Delete a worktree

When you're done with a branch, clean up:

```sh
git worktree remove ../my-app-feat-auth
```

If you already deleted the folder by hand:

```sh
git worktree prune
```

## Branch Management Tips

Worktrees work best when your branches are tidy. Here are some simple rules:

### Name your branches clearly

Use prefixes so you know what each branch is for at a glance:

- `feat/` for new features
- `fix/` for bug fixes
- `refactor/` for cleaning up code
- `chore/` for updating packages, config stuff

### Don't let branches live too long

The longer a branch stays open, the harder it is to merge. Agents help you move fast, so use that speed. Open a branch, do the work, make a PR, merge it, delete it.

```sh
git branch -d feat/auth
git push origin --delete feat/auth
```

### Pull often

Before you start anything new, grab the latest code:

```sh
git fetch --all --prune
git pull origin main
```

The `--prune` flag removes old branches that don't exist on the remote anymore. Keeps things clean.

### Rebase to keep a clean history

Rebasing puts your changes on top of the latest `main`, which makes the history easier to read, especially when reviewing agent-written code:

```sh
git checkout feat/auth
git rebase main
```

If there are conflicts, fix them one at a time:

```sh
git add .
git rebase --continue
```

> Only rebase branches you haven't pushed yet. If the branch is already pushed, use merge instead, or push with `--force-with-lease` if you know what you're doing.

## Putting It All Together: A Daily Workflow

Here's what a good day looks like when you're working with AI agents:

1. **Start fresh.** `git pull origin main`
2. **Make a worktree for your task.** `git worktree add -b feat/task ../my-app-task main`
3. **Let the agent work in that folder.** Point it at `my-app-task/`
4. **Check what it did.** Run `git diff` in the worktree to see every change
5. **Commit carefully.** Don't just accept everything. Use `git add -p` to pick what goes in
6. **Push and open a PR.** `git push -u origin feat/task`
7. **Clean up.** `git worktree remove ../my-app-task && git branch -d feat/task`

The whole idea: **agents write code fast, but you own the git history.** Worktrees give you room to let agents do their thing without losing track of your branches.

## Wrap Up

Git was always important. But now, with AI agents writing and changing code all day long, it's *the* tool you need to master. Worktrees let you keep up with the speed agents bring. Good branch habits keep your history clean and your merges smooth.

Learn these commands. Use them every day. Future you, the one reviewing an agent's 47th commit at 2 AM, will be glad you did.

If you want a quick reference for the git commands, check out my [Git Cheatsheet](/blog/git-cheatsheet).

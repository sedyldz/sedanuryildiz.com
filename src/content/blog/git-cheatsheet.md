---
title: "Git Cheatsheet"
description: "The git commands I actually use every day, organized by what I'm trying to do"
date: "2026-03-10"
lastModified: "2026-03-10"
slug: "git-cheatsheet"
author:
  name: "Sedanur Yıldız"
  image: "/seda.jpg"
keywords:
  - Git
  - Cheatsheet
  - Version Control
  - Developer Tools
image: "/images/posts/your-post-image.jpg"
---

# Git Cheatsheet

The git commands I keep forgetting and wasting my LLM tokens to ask how to write. Now they're here so I can just look them up.

## Check what's going on

```sh
git status                    # see what changed
git diff                      # see changes you haven't staged
git diff --staged             # see changes you're about to commit
git log --oneline -10         # last 10 commits, short format
git log --oneline --graph     # see your branch structure
git log --oneline --all       # see all branches, not just the current one
```

## Branches

```sh
git branch                    # list local branches
git branch -a                 # list all branches (local + remote)
git branch feat/my-feature    # create a new branch
git checkout feat/my-feature  # switch to a branch
git checkout -b feat/quick    # create and switch in one step
git branch -d feat/done       # delete a merged branch
git branch -D feat/nope       # force delete an unmerged branch
```

## Remote branches

```sh
git fetch --all --prune       # get latest from remote, clean up old refs
git pull origin main          # pull latest main
git push -u origin feat/auth  # push and set upstream
git push origin --delete feat/old  # delete a remote branch
```

## Staging and committing

```sh
git add file.txt              # stage a specific file
git add .                     # stage everything
git add -p                    # stage pieces of files, one chunk at a time
git commit -m "message"       # commit with a message
git commit --amend            # fix the last commit (message or files)
```

## Remove a file from git (but keep it on disk)

Sometimes you committed a file that shouldn't be tracked, like `.env` or a build folder. This removes it from git but keeps it on your computer:

```sh
git rm --cached file.txt           # stop tracking a single file
git rm --cached -r dist/           # stop tracking a whole folder
```

After that, add the file or folder to your `.gitignore` so it doesn't get tracked again, then commit.

## Stashing

```sh
git stash                     # save your current changes for later
git stash list                # see all saved stashes
git stash pop                 # bring back the latest stash
git stash drop                # throw away the latest stash
git stash show -p             # see what's inside the latest stash
```

## Undoing things

```sh
git checkout -- file.txt      # throw away unstaged changes to a file
git restore --staged file.txt # unstage a file (keep the changes)
git reflog                    # find commits you thought you lost
```

## Reset

`git reset` moves your branch pointer back to a previous commit. The three modes control what happens to the changes:

```sh
git reset --soft HEAD~1       # undo last commit, keep changes staged
git reset --mixed HEAD~1      # undo last commit, keep changes but unstaged (default)
git reset --hard HEAD~1       # undo last commit, throw away everything
```

You can also reset to any commit, not just the previous one:

```sh
git reset --soft abc1234      # go back to a specific commit, keep changes staged
git reset --hard abc1234      # go back to a specific commit, lose everything after it
git reset --hard origin/main  # make your local branch match the remote exactly
```

> `--hard` deletes your changes for good. If you're not sure, use `--soft` so you can still see what you had.

## Rebasing

```sh
git rebase main               # put your branch's commits on top of main
git rebase --continue         # keep going after fixing a conflict
git rebase --abort            # cancel and go back to how things were
```

> Only rebase branches you haven't pushed yet. If the branch is already pushed, use merge instead, or push with `--force-with-lease` if you know what you're doing.

## Worktrees

```sh
git worktree add ../folder branch       # check out a branch in a new folder
git worktree add -b new ../folder main  # create a new branch in a new folder
git worktree list                       # see all your worktrees
git worktree remove ../folder           # delete a worktree
git worktree prune                      # clean up if you deleted a folder by hand
```

## Merging

```sh
git merge feat/auth           # merge a branch into your current branch
git merge --no-ff feat/auth   # merge with a merge commit (no fast-forward)
git merge --abort             # cancel a merge that has conflicts
```

## Checking history

```sh
git log --oneline --graph --all        # full picture of all branches
git log --author="name"                # filter by author
git log --since="2 weeks ago"          # filter by time
git show abc1234                       # see a specific commit
git blame file.txt                     # see who changed each line
```

## Tags

```sh
git tag v1.0.0                # create a lightweight tag
git tag -a v1.0.0 -m "msg"   # create a tag with a message
git push origin v1.0.0        # push a tag to remote
git push origin --tags        # push all tags
```

## Cleaning up

```sh
git branch --merged | grep -v "main"   # show branches already merged
git remote prune origin                # remove stale remote refs
git gc                                 # clean up git's internal files
git clean -fd                          # remove untracked files and folders
```

## Cherry-pick

```sh
git cherry-pick abc1234       # apply a specific commit to your current branch
git cherry-pick --abort       # cancel if something goes wrong
```

## Config (useful one-time setups)

```sh
git config --global user.name "Your Name"
git config --global user.email "you@example.com"
git config --global init.defaultBranch main
git config --global pull.rebase true   # rebase by default when pulling
```

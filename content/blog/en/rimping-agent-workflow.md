---
title: "Rimping: trimming tokens before they reach an agent"
description: "A look at Rimping, which reduces redundant prompt, shell, and file-read content, alongside Dstack files for agent workflows."
date: 2026-10-27
---

When using an AI coding agent, every piece of context has a cost: prompts, command output, and file contents. Rimping focuses on reducing tokens in that data before it reaches the agent, without changing the core task.

## Trimming data from three places

Rimping works with three kinds of data that show up regularly in coding workflows:

- **Prompts:** trims verbose wording and handles diffs before sending
- **Shell output:** reduces excess command output
- **File reads:** helps reduce the content passed along from files

These are separate because each kind of data has different context. Prompts contain instructions and constraints; shell output can include details unrelated to the question; and files may contain more than the relevant section. Trimming should not mean making everything as short as possible. It should reduce excess while preserving what the agent needs to do the work.

Handling several points in one workflow means less manual editing and copying, and brings context cost into consideration before data reaches the agent instead of only after a prompt gets too long.

## Dstack for agent context

Another part of the project is Dstack, a file pack for organizing agent workflows. It includes `AGENTS.md`, token budgets, skills, and adapters. These pieces help provide structure and context so agents can work more leanly.

Rimping also has hooks for Cursor, Claude Code, and Codex. The project is written in TypeScript and uses Bun.

## Separating data handling from guidance

Reducing what reaches an agent is about handling data in transit. Giving an agent guidance is about organizing its context. Rimping brings these concerns together while keeping their roles distinct: the tool handles data, while Dstack organizes workflow files.

This separation makes it clear that the problem is not just token count; it is also about providing the right context. Compressing data without clear guidance or constraints can still leave an agent working toward the wrong goal.

## Lessons learned

When building tools for AI workflows, saving tokens is only part of the problem. Clear instructions, useful context, and integration with existing tools matter too. Rimping treats data reduction and file organization as complementary concerns, not the same job.

## Tech stack

- TypeScript
- Bun
- Hooks for Cursor, Claude Code, and Codex
- Dstack: `AGENTS.md`, token budgets, skills, and adapters

See the code on [GitHub](https://github.com/dukerspace/rimping) and learn more on the [Rimping project page](https://dukerspace.com/projects/rimping).

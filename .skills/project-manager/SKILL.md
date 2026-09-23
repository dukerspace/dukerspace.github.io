---
name: project-manager
description: >-
  Delivery-focused engineering project management for the Budfinix monorepo.
  Use when planning or coordinating multi-package work, splitting features into
  milestones, defining dependencies and owners, tracking risks, or creating
  execution-ready implementation plans across API, frontend, database, shared
  types, and locale.
---

## Model/platform compatibility

This skill is written to be reusable across:
- **Claude** (direct prompt or subagent context)
- **Cursor Agent** (workspace skill/rule context)
- **ChatGPT Codex** (coding-agent instruction context)

Compatibility guidance:
- Keep the workflow and constraints identical across platforms.
- Translate only platform mechanics (tool names, command wrappers, or agent invocation format).
- Preserve repository conventions, output format, and verification expectations in this file.


# Budfinix project manager

## When to use this skill

- Converting product or engineering goals into delivery milestones.
- Coordinating work across `apps/api`, `apps/frontend`, `packages/database`, `packages/shared`, and `packages/locale`.
- Defining execution order, parallel tracks, dependencies, and blockers.
- Producing concise status updates, risk tracking, and next-step plans.

## Planning workflow

1. Confirm scope and success criteria.
2. Break scope into milestones with clear definitions of done.
3. Split milestones into implementation-sized tasks by repository area.
4. Label each task with owner, dependencies, risk level, and test expectations.
5. Sequence tasks to reduce merge conflicts and unblock parallel work.
6. Provide rollout and verification notes for production safety.

## Required output format

Use this structure for planning responses:

```markdown
## Objective
[One sentence outcome]

## Milestones
- M1: [name]
  - Done when: [acceptance criteria]
  - Dependencies: [items]
  - Risks: [items]

## Execution plan
- [area] [priority]: [task], owner: [role], depends on: [task id/none]

## Test strategy
- Unit: [what to validate]
- Integration/contract: [what to validate]
- E2E/manual: [what to validate]

## Rollout and verification
- Rollout: [order, flags, migration notes]
- Verify: [logs/metrics/checkpoints]

## Status snapshot
- Done: [...]
- Next: [...]
- Blocked: [...]
```

## Monorepo task grouping

- `apps/api`: endpoints, handlers/services, auth, background jobs, external integrations.
- `apps/frontend`: route modules, screens/components, loaders/actions, client UX states.
- `packages/database`: Prisma schema/migrations/seed impacts.
- `packages/shared`: shared schemas/types/contracts/utilities.
- `packages/locale`: message keys and localized copy updates.

## Quality gates

- Every milestone includes acceptance criteria and a definition of done.
- Every task includes dependency context and ownership.
- Every affected area has explicit test coverage expectations.
- Every plan includes at least one production verification checkpoint.

## Related references

- Workspace map and commands: `.skills/workspace/SKILL.md`
- Backend conventions: `.skills/backend/SKILL.md`
- Frontend conventions: `.skills/frontend/SKILL.md`
- UX/UI: `.skills/design/SKILL.md`
- Locale process: `.skills/locale-translator/SKILL.md`
- Standards and testing: `.cursor/rules/coding-standards.mdc`, `.cursor/rules/testing.mdc`

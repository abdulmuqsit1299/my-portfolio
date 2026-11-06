# Copilot execution instructions

## Human-in-the-loop control

- Never create a git commit or push to GitHub without explicit approval from the user in the current conversation.
- Before making a commit or push, summarize the exact changes and validation results and request approval.
- Local edits, schema generation, tests, and dry-run builds are allowed before approval.

## TinaCMS configuration

Use this environment-variable fallback order:

1. `PUBLIC_TINA_CLIENT_ID`
2. `TINA_CLIENT_ID`
3. `TINACLIENTID`
4. No hardcoded credential in source control

For the token, use:

1. `PUBLIC_TINA_TOKEN`
2. `TINA_TOKEN`
3. `TINATOKEN`
4. No hardcoded credential in source control

Tina credentials must be configured in Vercel Environment Variables and must never be written to tracked files.

## Git branch hygiene

- Work on a short-lived feature branch.
- Merge changes to `main` through a pull request.
- Avoid transient patch branches and unrelated changes.
- Keep generated files tracked only when they are required for reproducible builds.

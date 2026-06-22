# Version Control Workflow

### Key rules

* Short-lived branches
* One feature per branch or follow tasks on Linear
* For discovered work, create and document a task in Linear
* Make sure main is protected from direct pushes
* Production deployments only happen on Mondays and Thursdays

### Main branches

* main/master → production
* preview → staging/integration

---

## Common Branch Naming Conventions

### Simple rule

* type/scope-description

### Core types

* feature/ → new feature
* fix/ → bug fix
* hotfix/ → urgent production fix
* refactor/ → code improvement (no behavior change)
* chore/ → maintenance (deps, configs)
* docs/ → documentation changes
* test/ → tests only

### DX / quality

* improvement/ → general enhancements
* perf/ → performance improvements
* style/ → formatting, linting, UI polish

### Product / business

* release/ → release prep
* experiment/ → testing ideas
* spike/ → research / exploration

### Team / workflow

* bugfix/ → same as fix/
* ci/ → CI/CD changes
* build/ → build system changes

#### Examples

* feature/product-catalog
* fix/cart-checkout-error
* refactor/auth-service
* chore/update-dependencies

---

# 1. Creating and Selecting Branches

* Create branches from preview using the GitHub interface
* Select it using Source Control Checkout on VS Code UI

---

# 2. Commit & Push

* All work must happen on feature branches
* Stage changes using the "+" icon on View > Source Control UI on VS Code
* Use small, clear commits with descriptive messages
* Copy ticket details into ChatGPT, generate a commit message, review it, then use it
* Use Commit and Push under Source Control UI on VS Code

---

# 3. Pull Request Merge Strategy

## feature branch → preview

* Select base: preview and compare: feature branch
* Review diff carefully
* Create Pull Request
* Rebase and Merge
* Perform QA/testing on preview before production release
* The feature branch owner is responsible for deleting the remote branch immediately after merge

---

## preview → main

* Production deployments happen only on Mondays and Thursdays
* Select base: main and compare: preview
* Review diff carefully
* Create Pull Request
* Copy ticket details into ChatGPT, generate a PR title/message, review it, then use it
* Rebase and Merge
* Keep preview branch permanently in the project

---

# 4. Cleanup

* Switch branches to preview or main using Source Control Checkout on VS Code UI
* Sync latest changes using pull/sync

```bash
git branch -D branch-name
git fetch --prune
```

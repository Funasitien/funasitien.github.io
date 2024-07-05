---
title: 🍭 Admonitions
tags:
  - markdown
  - tuto
  - en
---

# 📦 Admonitions List
This is a list of Admonitions aviable Admonitions in Obsidian and compatible with Quartz V4

> [!SUCCESS]
> Aliases: “success”, “check”, “done”

```markdown
> [!SUCCESS]
> Useful information that users should know, even when skimming content.
```
---
> [!INFO]
> Useful information that users should know, even when skimming content.

```markdown
> [!INFO]
> Useful information that users should know, even when skimming content.
```
---
> [!NOTE]
> Useful information that users should know, even when skimming content.

```markdown
> [!NOTE]
> Useful information that users should know, even when skimming content.
```
---
> [!Todo]
> Aliases: “abstract”, “summary”, “tldr”

```markdown
> [!Todo]
> Useful information that users should know, even when skimming content.
```
---
> [!ABSTRACT]
> Aliases: “abstract”, “summary”, “tldr”

```markdown
> [!ABSTRACT]
> Useful information that users should know, even when skimming content.
```
---
> [!TIP]
> Aliases: “tip”, “hint”, “important”

```markdown
> [!TIP]
> Helpful advice for doing things better or more easily.
```
---
> [!QUESTION]
> Aliases: “question”, “help”, “faq”

```markdown
> [!QUESTION]
> Useful information that users should know, even when skimming content.
```
---
> [!WARNING]
> Aliases: “warning”, “attention”, “caution”

```markdown
> [!WARNING]
> Urgent info that needs immediate user attention to avoid problems.
```
---
> [!Failure]
> Aliases: “failure”, “missing”, “fail”

```markdown
> [!Failure]
> Key information users need to know to achieve their goal.
```
---
> [!BUG]
> Key information users need to know to achieve their goal.

```markdown
> [!BUG]
> Key information users need to know to achieve their goal.
```
---
> [!DANGER]
> Aliases: “danger”, “error”

```markdown
> [!DANGER]
> Advises about risks or negative outcomes of certain actions.
```
This one work also with ![ERROR]

---
> [!EXAMPLE]
> Key information users need to know to achieve their goal.

```markdown
> [!EXAMPLE]
> Key information users need to know to achieve their goal.
```
---
> [!QUOTE]
> Aliases: “quote”, “cite”

```markdown
> [!QUOTE]
> Advises about risks or negative outcomes of certain actions.
```

# 🏷️ Change the title of the Admonitions
You can change the title of any admonition using a text after the tag:
> [!QUOTE] Once A Man Said
> Markdown is the best programation language of the world

```markdown
> [!QUOTE] Once A Man Said
> Markdown is the best programation language of the world
```
# 🏷️ Custom Admonitions

> [!CUSTOM] Once A Man Said
> Markdown is the best programation language of the world

```css
.callout {
  &[data-callout="custom"] {
    --color: #customcolor;
    --border: #custombordercolor;
    --bg: #custombg;
    --callout-icon: url("data:image/svg+xml; utf8, <custom formatted svg>"); //SVG icon code
  }
}
```
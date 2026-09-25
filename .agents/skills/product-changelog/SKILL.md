---
name: product-changelog
description: "Actualiza de forma segura las novedades de la landing a partir de Git y PRs."
---

Si piden «actualiza el changelog de la landing», trabaja desde la raíz Git de esta landing. Lee `CHANGELOG.md` y ejecuta `node .agents/skills/product-changelog/bin/changelog.mjs plan`. Contrasta todos los commits pendientes con PRs (si tienes acceso) y cambios en archivos. No inventes despliegues ni incluyas datos internos en la web pública. Si no hay cambios, no edites nada. Redacta un borrador JSON con `sections` (`title`: Nuevas funciones, Mejoras o Correcciones; `items`: textos planos), ejecuta `add <to> <AAAA-MM-DD> <título> <borrador.json>` y `pnpm changelog:sync`. Revisa el diff, ejecuta `pnpm changelog:check` y los checks del proyecto. Nunca fuerces el cursor si Git ha cambiado; informa si no pudiste consultar PRs. No comitees ni despliegues automáticamente.
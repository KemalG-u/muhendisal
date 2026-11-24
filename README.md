> 🚧 **Status: active development.** It works for the author; interfaces may change.

# MühendisAl

A free, open **Turkish-language course for becoming an AI engineer** with the Anthropic API: 78 pages in 11 chapters (environment setup, prompting, embeddings and vector search, RAG, fine-tuning vs RAG, agents and MCP, multimodal, safety, deployment, career), plus four small reference projects. Built with MkDocs Material.

Türkçe sürüm: [README.tr.md](README.tr.md)

## Why this exists

Turkish AI learning material is mostly either translated documentation or shallow "what is AI" introductions. This course aims at the gap in between: an adult who reads Turkish and wants to build projects on their own. The author wrote it while documenting his own learning, working with Claude as a co-author; the text was directed and reviewed by the author.

## What is in the repository

| Path | What |
|---|---|
| `docs/` | The course text (Turkish), chapters `bolum-0` to `bolum-10`, plus `dashboard.md` and `hakkimda.md` |
| `mkdocs.yml`, `overrides/`, `hooks/`, `includes/` | Site configuration, theme override, build hooks, glossary |
| `backend/` | Optional FastAPI + SQLite API for progress, quiz stats, streaks (the static site does not need it) |
| `examples/` | Four reference projects used by the course: `semantic-search`, `rag-chatbot`, `tahta-asistani`, `icerik-ozet-agent` |
| `scripts/` | Dashboard page generator, SQLite backup, rebuild helper |

## Quick start

Read online: the author's deployment is at https://wiki.oluk.org/platform/ (not checked at release time; it may be offline).

Build the site yourself:

```bash
python -m venv venv
source venv/bin/activate          # Windows: venv\Scripts\activate
pip install -r requirements.txt   # mkdocs, mkdocs-material, glightbox, pymdown-extensions, rss plugin, backend deps
mkdocs serve                      # http://127.0.0.1:8000
mkdocs build                      # static site into ./site
```

Notes on the site build:

- `mkdocs.yml` enables Material's `social` plugin (Open Graph cards), which needs Cairo/Pillow system libraries; remove that plugin block if you do not need cards.
- The `rss` plugin needs `mkdocs-rss-plugin`, which is listed in `requirements.txt` without a version pin.
- **The site build was not re-run when this repository was prepared for release** (MkDocs was not installed on the preparing machine). Treat the commands above as the intended workflow and open an issue if the build fails.
- To publish, upload `site/` to any static host (for example GitHub Pages or nginx). Set `site_url` in `mkdocs.yml` to your own address.

Run an example project (each has its own README, `pyproject.toml` and tests):

```bash
cd examples/semantic-search
pip install -e ".[dev]"
python -m pytest -q
```

The examples call external services (Anthropic, Voyage AI, Qdrant) when run for real; the unit tests use mocks. You need your own API keys, set through environment variables or a local `.env` file (see each example's README).

Optional progress API:

```bash
pip install -r backend/requirements.txt
uvicorn backend.main:app --port 9100
```

Set `MUHENDISAL_CORS_ORIGINS` (comma-separated) to the origin(s) that serve your site. `ecosystem.config.js` is a PM2 process file for it (override paths with `MUHENDISAL_VENV` and `MUHENDISAL_LOG_DIR`).

## Requirements

Python 3.12 for the examples; MkDocs Material 9.x (pinned `<10` in `requirements.txt`); an Anthropic API key to run the example projects against the real API.

## Limits and unverified claims

- Work in progress: the course pages exist and are substantial, but not every page has been re-reviewed after later model and pricing changes. Prices, model names and benchmark numbers in the text were current when written (2026) and are **not re-verified automatically**.
- The site build and the optional backend were not re-tested for this release; only the example projects' unit tests were run (see the CI workflow for the current state).
- The "Production RAG" case study (chapter 4.8) describes a real project built for a foundation. The institution is intentionally not named; the figures are the author's own records and have not been independently audited.
- The optional backend has no test suite yet.
- API-backed widgets (progress, XP, quiz stats) only work while the backend is running.

## License

- Written course content (`docs/`): [CC BY 4.0](LICENSE-CONTENT). Attribute "MühendisAl by Kemal (KarıncaAI)" and link to this repository.
- Code (`backend/`, `examples/`, `scripts/`, `hooks/`, site JS/CSS): [Apache-2.0](LICENSE).
- Third-party material linked or quoted in the course keeps its own license.

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) (writing rules for course pages, in Turkish) and [SECURITY.md](SECURITY.md).

# Bio-CAD-Resources

Practical guides, free resources, and hands-on training to help engineering students and professionals learn CAD, AI, web development, and related tools — with ready downloads and reviews to speed your projects.

## What this is
Bio-CAD-Resources is a small static website and resource hub for engineers and students who want practical, no‑fluff guides, CAD templates, AI prompts, and honest hardware/software recommendations.

### Stack
- **Language(s):** HTML, CSS (static site)
- **Framework / runtime:** Plain static site (designed for GitHub Pages or any static host)
- **Notable files / assets:** `index.html`, `resources.html`, `about.html`, `contact.html`, `reviews.html`, `cad-engineering/`, `css/style.css`, `images/`

## How it's organized
Top-level layout of the repository:
```
index.html                 # Home / hero + links to main sections
resources.html             # Free downloads, recommended tools, drive links
about.html                 # Mission, who we are, what we do
contact.html               # Contact / waitlist links and forms
reviews.html               # Laptop & product reviews
README.md                  # This file
css/
  style.css                # Main site styles
cad-engineering/
  index.html               # CAD & Engineering landing
  ai-tools/
    index.html             # AI tools / prompts / guides
    web-develpoment/       # (directory for web development content)
    laptops-tech/          # (directory for laptop & tech reviews)
images/
  Profile picture,...      # Site images and assets
```

How it fits together:
- This is a collection of linked static HTML pages styled by `css/style.css`. `index.html` is the entry point and links to the CAD, AI tools, resources, and reviews pages. The `cad-engineering/` subtree contains focused content (AI tools, web dev, laptop reviews). `resources.html` contains the download links (Google Drive) and email collection forms (Formspree placeholders).

## How to preview / run locally
Quickest way to preview the site after cloning:

1. Clone the repo:
   ```
   git clone https://github.com/Abraham1234888/Bio-CAD-Resources.git
   cd Bio-CAD-Resources
   ```

2. Preview in your browser (open `index.html` directly), or run a simple static server:
   - Python 3:
     ```
     python -m http.server 8000
     ```
     then open http://localhost:8000
   - VS Code: use the Live Server extension and open `index.html`.

Deploy to GitHub Pages (simple):
- Push the `main` branch to GitHub and enable GitHub Pages in the repository settings (Source: main / root). The site will serve the static HTML/CSS.

Notes on external links and forms:
- `resources.html` contains Google Drive download links (pre-filled IDs). Those links are:
  - Autodesk Inventor Starter Pack (Drive ID: 1t-acxKXfJB7ueNbk5YvP6OT84j-PL0Mq)
  - 10 AI Tools Cheat Sheet (Drive ID: 1rvRFpmTDV2f4nI5S5g5oJm7lswMTsyTC)
  - Laptop Buying Guide 2026 (Drive ID: 1SJ2h6l7KtPMw4W5i0z0eic-mqtGePkRC)
- The email collection forms use a Formspree placeholder `https://formspree.io/f/YOUR-FORMSPREE-ID` — replace `YOUR-FORMSPREE-ID` with your actual Formspree form ID or wire up a mailing service of your choice.

## Add / change content
- To add a new resource: add the downloadable file (or host externally) and update `resources.html` with the link/button.
- To add a new page: create the `.html` file in the repo, add a nav link in `index.html` and the other headers if desired, and update `css/style.css` if you need layout changes.
- For images: add to `images/` and reference them with relative paths.

## Contributing
- Fork the repo, make edits (HTML/CSS or add assets), then open a pull request.
- Keep changes focused per PR (content, new asset, or style fixes).
- If you want me to help add continuous deployment (GH Pages workflow) or a simple build step, I can draft the workflow file.

## Suggestions & To-dos (recommended)
- Replace Formspree placeholder ID with a real endpoint or an embedded mailing service.
- Consider moving heavy downloads into the repository `downloads/` folder if file sizes are small — or use a proper file host for reliability.
- Add a LICENSE file (e.g., MIT) to clarify reuse.
- Add a small CONTRIBUTING.md if you plan to accept community edits.

## Contact
- Use `contact.html` on the site for enquiries or training signups.




© 2026 BioCAD Resources

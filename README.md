# TTSET Global Ltd — Intern Portfolio Template (July 2026 Cohort)

A single-page HTML/CSS/JavaScript portfolio template for TTSET Global Ltd internship
students to showcase academic and professional (internship) work. No build tools,
frameworks, or installs required — just edit the files and deploy.

---

## 1. Folder Structure

```
ttset-portfolio-template/
├── index.html          # All page content and sections
├── css/
│   └── style.css        # Colors, fonts, layout, responsive rules
├── js/
│   └── script.js         # Typed terminal effect, nav toggle, project filter
├── assets/
│   └── (add your CV PDF and profile photo here)
└── README.md            # This guide
```

---

## 2. What Each Intern Needs to Edit

Open `index.html` in VS Code and search for the comment `[EDIT]` — every spot that
needs personal content is marked with it. In summary:

| Section | What to change |
|---|---|
| Nav / Brand | Your name, link to your CV file |
| Hero | Name, role/track, initials or profile photo, badge text |
| Terminal lines | Edit the array at the top of `js/script.js` (`lines = [...]`) |
| About | Bio paragraph, institution, program track, duration, location |
| Skills | Chips under Technical / Tools & Platforms / Professional |
| Experience | Timeline stages — match your actual internship schedule |
| Projects | Duplicate a `.project-card` block per project; set `data-category="academic"` or `"professional"`; add real links |
| Certifications | List your real certificates/awards |
| Contact | Email, phone, LinkedIn, GitHub |

**To use a real photo instead of initials:** in `index.html`, replace
```html
<div class="avatar"><span>YN</span></div>
```
with
```html
<div class="avatar"><img src="assets/profile.jpg" alt="Your Name" style="width:100%;height:100%;border-radius:50%;object-fit:cover;"></div>
```
and place `profile.jpg` inside the `assets/` folder.

**To add your CV:** place your PDF in `assets/` (e.g. `assets/CV-Your-Name.pdf`) and
make sure the `href` on the "Download CV" button in the nav matches the filename exactly.

**Contact form note:** the form currently uses `mailto:` — it opens the visitor's own
email app pre-filled with their message. This works with zero setup. If you want
messages collected without relying on the visitor's email client, sign up free at
[Formspree](https://formspree.io) and replace the form's `action` attribute with the
endpoint they give you.

---

## 3. Preview Locally Before Publishing

You don't need a server, but a local one avoids browser file-access warnings.

**Option A — no installs (quickest):** just double-click `index.html` to open it in
your browser.

**Option B — with VS Code:** install the "Live Server" extension, right-click
`index.html`, and choose "Open with Live Server".

---

## 4. Push to GitHub

Run these commands from inside the `ttset-portfolio-template` folder (replace
`your-username` and `your-repo-name`):

```bash
cd ttset-portfolio-template
git init
git add .
git commit -m "Initial portfolio - TTSET Global Ltd July 2026 internship"
git branch -M main
git remote add origin https://github.com/your-username/your-repo-name.git
git push -u origin main
```

If you don't have a repository yet: go to GitHub → **New repository** → name it
(e.g. `my-ttset-portfolio`) → **do not** initialize with a README (you already have
one) → create, then run the commands above.

---

## 5. Deploy on Vercel

1. Go to [vercel.com](https://vercel.com) and sign in with your GitHub account.
2. Click **Add New → Project**.
3. Select the repository you just pushed.
4. Framework preset: choose **"Other"** (this is a static HTML site — no build
   command or output directory needed).
5. Click **Deploy**.
6. Vercel gives you a live URL like `https://my-ttset-portfolio.vercel.app`.

Every time you `git push` new changes to `main`, Vercel automatically redeploys.

**Custom domain (optional):** in the Vercel project → **Settings → Domains**, add
your own domain if you have one and follow the DNS instructions shown.

---

## 6. Accessibility & Quality Checklist (already built in)

- Keyboard-navigable with visible focus outlines
- Respects `prefers-reduced-motion` (disables the typed effect and scroll animations)
- Responsive down to mobile (hamburger nav under 880px width)
- No external JS frameworks — fast load, nothing to break

---

## 7. Optional Next Steps

- Add a favicon: drop a `favicon.ico` in the project root and link it in `<head>`.
- Add Google Analytics or Vercel Analytics if you want visitor stats.
- Swap the `.chip` skill lists for ones that match your actual stack.

---

*Template built for TTSET Global Ltd internship students — July 2026 cohort. Each
student should fork/copy this template into their own GitHub repository rather than
editing a shared one.*

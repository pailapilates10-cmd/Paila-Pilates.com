# Paila Pilates website · private draft

This is the Paila-owned static website draft. It is intentionally **not published**. The source architecture takes inspiration from [the reference prototype](https://github.com/FabinGurung/sumita-pilates-studio), but its example schedule, prices, people, contact details, claims and browser-only booking/member demos are not Paila data.

## Preview locally

Run `python3 -m http.server 8000` in the repository and open `http://localhost:8000`. The generated pages also open directly from disk. No build dependencies are needed.

## Structure

- Seven HTML pages: home, schedule, passes, instructors, about, contact, member.
- `assets/css/styles.css` holds the responsive design.
- `assets/js/shared.js` handles the mobile navigation and copyright year.
- `data/site-data.js` records the currently approved public fields. The blank fields are deliberate.
- `tools_build.py` regenerates the HTML pages (`python3 tools_build.py`). Edit it when changing page copy or structure.
- `docs/LAUNCH_CHECKLIST.md` lists the content and service decisions before publication.

This draft has a `noindex` meta tag, but **privacy depends on keeping the GitHub repository private and not enabling public hosting**. Review and remove `noindex` only as part of an approved public launch.

The operational workbook and confidential customer or staff data belong in private Paila Drive. Only owner-approved public exports belong here. No booking, payment, contact form or member authentication is active.

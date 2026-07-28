# Sample Content for WordPress

Ready-to-paste starter content for the headless site: **7 blog posts** (the
same ones the frontend ships with — same slugs, so nothing changes visually
when WordPress takes over) and **3 projects**, plus an image-generation
prompt for every featured image.

## Before you start

1. **Posts → Categories** — create exactly these three (spelling matters):
   `News`, `Guides`, `Product Spotlight`
2. **Posts → All Posts** — trash the default "Hello world!" post.
3. Work top to bottom; newest publish date appears first on the site.

## How to enter each piece of content

| Field | Where in wp-admin |
| --- | --- |
| Title | Top of the editor |
| Slug | Sidebar → Post → **Link** (URL field) — use the suggested slug |
| Body | The **Content** box defaults to **Manual** mode — paste the body HTML into the editor's **Code** tab *(only needed for this pre-written set — new articles are written directly in the visual editor, guided by the **Writing checklist** box; **Form** mode is the auto-layout alternative)* |
| Gallery | **Gallery (1–5 images)** box below the editor → *Add / select images* — optional for these samples |
| Excerpt | Sidebar → Post → **Excerpt** panel |
| Category / Tags | Sidebar → Post → **Categories** / **Tags** |
| Featured image | Sidebar → Post → **Featured image** (upload the generated image, paste the alt text into its Alt Text field) |
| Publish date | Sidebar → Post → **Publish** date — controls card ordering |

> Projects use the same flow under **Projects → Add New**, but with **Tags**
> instead of categories. The first tag WordPress returns becomes the badge on
> the project card — check the live card and rename/reorder if needed.

## Image specs (all images)

- **Aspect/size:** 16:9, at least **1600 × 900 px** (cards and covers crop to 16:9)
- **Format:** JPG or WebP, under ~300 KB if you can
- Append this to every prompt for consistency:

```
Photorealistic architectural photograph, modern Philippine property, warm
natural light, deep navy blue-hour sky or soft daylight, clean composition,
no text, no logos, no watermark, no fisheye, no oversaturated HDR. 16:9.
```

---

# Blog Posts

## 1 — 5 Reasons Homeowners Are Switching to Smart Gate Automation in 2026

- **Slug:** `5-reasons-to-automate-your-gate`
- **Category:** Guides
- **Tags:** Gate Automation, Smart Home, Buying Guide
- **Date:** 2026-07-13
- **Excerpt:** Convenience is only the start. Here is what is actually driving families across the Philippines to automate the front gate this year.

**Body HTML:**

```html
<p>Ten years ago, an automated gate was a luxury reserved for compounds and executives. In 2026 it is quietly becoming the default — and not for the reason most people assume. Convenience gets you in the door, but it is rarely what closes the decision.</p>
<h2>It starts with the 10pm arrival</h2>
<p>Ask anyone who has rolled up to a manual gate in the rain, headlights on, engine running, while someone fumbles for a padlock. The first drive home after automating is the moment it clicks: you never step out of the car again.</p>
<ul>
  <li><strong>Safety after dark</strong> — no getting out on an unlit street</li>
  <li><strong>Everyday speed</strong> — the gate is open before you reach it</li>
  <li><strong>Weather</strong> — rain and heat stop being your problem</li>
  <li><strong>Control from anywhere</strong> — let a guest in from your phone</li>
</ul>
<h2>What actually changes the decision</h2>
<p>The tipping point is almost always <strong>integration</strong>. Once the gate talks to the cameras and the lights, it stops being a gate and becomes the front line of the whole property.</p>
<blockquote>The gate you never think about is the one doing its job. That is the whole goal — a front line so smooth it disappears.</blockquote>
<p>Thinking about it for your own home? Send us your gate's width and a photo, and we will tell you exactly what it would take.</p>
```

**Featured image prompt:**

```
A modern sliding gate at the entrance of an upscale Philippine residence at
dusk, gate mid-open as a car approaches with soft headlights, warm amber
gate lights glowing, contemporary concrete and wood facade behind.
```

- **Alt:** Contemporary home with an automated sliding gate at dusk
- *(Optional inline image after the list)* — prompt: `View from inside a car at night in light rain, an automated gate opening ahead, wet driveway reflections, warm house lights beyond.` — Alt: A gate opening as the car arrives on a rainy night

## 2 — CV Mechatronics Completes Its 500th Automated Gate Installation

- **Slug:** `500th-automated-gate-installation`
- **Category:** News
- **Tags:** Milestone, Gate Automation
- **Date:** 2026-07-02
- **Excerpt:** A milestone five years in the making — half a thousand gates across Metro Manila and beyond, each precision-installed and app-connected.

**Body HTML:**

```html
<p>This month we handed over our 500th automated gate — a heavy-duty sliding installation for a commercial compound in Quezon City. It is a number worth pausing on, because every one of those gates represents a site survey, a load calculation, and a crew on the ground making sure the finished install opens the same way on year five as it did on day one.</p>
<h2>Five years, five hundred gates</h2>
<p>When we started, most requests were simple residential swing gates. Today the mix has shifted toward larger, higher-duty systems — and toward properties that want the gate tied into their cameras, lighting, and phone.</p>
<ul>
  <li>Sliding motors rated up to 800 kg for commercial entries</li>
  <li>Bi-parting swing operators for residential driveways</li>
  <li>Roll-up and sectional drives for industrial bays</li>
  <li>Battery backup on every install — gates open during outages</li>
</ul>
<blockquote>The gate is usually the first thing a system touches and the last thing anyone thinks about. We build it to be the part you never have to think about again.</blockquote>
<p>Thank you to every homeowner, builder, and facilities manager who trusted us with the entrance to their property. On to the next five hundred.</p>
```

**Featured image prompt:**

```
A wide commercial compound entrance in Quezon City with a large steel
sliding gate partially open, guardhouse beside it, crisp morning light,
professional and orderly, tropical landscaping.
```

- **Alt:** Commercial compound entrance with a heavy-duty automated sliding gate

## 3 — How to Choose the Right Gate Motor for Your Property

- **Slug:** `choosing-the-right-gate-motor`
- **Category:** Guides
- **Tags:** Gate Automation, Buying Guide
- **Date:** 2026-06-18
- **Excerpt:** Sliding, swing, or roll-up? Gate weight, duty cycle, and power backup all shape the decision. Here is how we spec a motor that lasts.

**Body HTML:**

```html
<p>The right gate motor is the one you forget is there. The wrong one announces itself — straining on hot afternoons, stalling mid-cycle, failing the week the warranty ends. Getting the spec right up front is almost entirely about matching the motor to how the gate is actually used.</p>
<h2>Start with the gate, not the motor</h2>
<p>Three properties of the gate decide most of the choice:</p>
<ul>
  <li><strong>Weight and length.</strong> A 300 kg residential slider and an 800 kg commercial one are different machines, not different settings.</li>
  <li><strong>Type of travel.</strong> Sliding, swing, roll-up, and bi-fold each want a purpose-built operator.</li>
  <li><strong>Cycle count.</strong> A driveway used twice a day and a delivery bay opening two hundred times a day need very different duty ratings.</li>
</ul>
<h2>Then plan for the bad day</h2>
<p>Power backup is not optional in our book. A gate that traps you in — or out — during a brownout is a safety problem, not an inconvenience. Every motor we install pairs with a battery that keeps it moving when the grid does not.</p>
<p>Add safety photocells and a vehicle loop detector, and the gate stops for people and cars automatically. Spec those in from the start; retrofitting them later always costs more.</p>
<p>Not sure where your gate lands? Send us the dimensions and a photo and we will tell you exactly what it needs.</p>
```

**Featured image prompt:**

```
Close-up detail of a professionally installed sliding gate motor and steel
rack at the base of a modern gate, clean cabling, shallow depth of field,
workshop-quality installation, daylight.
```

- **Alt:** A sliding gate motor and rack, cleanly installed at the gate base

## 4 — Spotlight: PDLC Smart Glass That Switches from Clear to Private in Milliseconds

- **Slug:** `spotlight-pdlc-smart-glass`
- **Category:** Product Spotlight
- **Tags:** Smart Glass, PDLC
- **Date:** 2026-06-05
- **Excerpt:** Switchable glass that goes from fully transparent to frosted at the touch of a button — how it works and where it earns its place.

**Body HTML:**

```html
<p>PDLC — polymer-dispersed liquid crystal — is the technology behind glass that turns from clear to opaque on command. Cut the power and the crystals scatter light, giving a clean matte-white privacy state. Apply it and they align, and the glass reads as ordinary clear glazing.</p>
<h2>Where it earns its place</h2>
<ul>
  <li><strong>Conference rooms</strong> that need privacy for a meeting and openness the rest of the day</li>
  <li><strong>Master baths and bedrooms</strong> where blinds feel dated and hard to clean</li>
  <li><strong>Storefronts</strong> that go private after hours without shutters</li>
</ul>
<p>The switch is instant — clear to roughly 80% opacity in milliseconds — and controllable by wall switch, remote, or the same app that runs the rest of the property. As a bonus, the film blocks UV, cutting interior heat and fading.</p>
<blockquote>Most clients expect a gadget and are surprised to find a genuinely calmer room. No cords, no slats, no dust traps — just a wall of glass that decides how private it wants to be.</blockquote>
<p>We cut panels to size on site and can retrofit film to existing glazing in most cases, with no structural changes.</p>
```

**Featured image prompt:**

```
A modern conference room with a floor-to-ceiling glass wall, the glass
split between frosted matte white on one side and perfectly clear on the
other, bright minimalist office interior, soft daylight.
```

- **Alt:** A glass office wall transitioning from frosted to clear

## 5 — 5 Signs Your CCTV System Is Due for an Upgrade

- **Slug:** `5-signs-your-cctv-needs-an-upgrade`
- **Category:** Guides
- **Tags:** CCTV, Security
- **Date:** 2026-05-22
- **Excerpt:** Grainy footage, blind spots, and no phone access are more than annoyances — they are the difference between evidence and a shrug.

**Body HTML:**

```html
<p>A camera system earns its keep on the one night something happens. If any of these sound familiar, that night will not go the way you hope.</p>
<h2>1. The footage is too soft to identify anyone</h2>
<p>Older analog cameras top out at a resolution where faces and plates blur into suggestion. Modern 4MP and 8MP IP cameras resolve the detail that actually matters.</p>
<h2>2. Night footage is unusable</h2>
<p>If your cameras go blind after dark, they are working part-time. Infrared reaches ~30 m; ColorVu keeps full color at night entirely.</p>
<h2>3. You cannot check it from your phone</h2>
<p>Live view and playback from iOS or Android is now the baseline, not a luxury. If you have to be on-site to see anything, the system is a generation behind.</p>
<h2>4. There are blind spots you have learned to live with</h2>
<p>Coverage gaps become habits. A quick survey usually finds two or three angles that a single well-placed camera would close.</p>
<h2>5. Storage overwrites before you need it</h2>
<p>If clips vanish in days, an incident you discover a week later is already gone. A properly sized NVR fixes the math.</p>
<p>Any one of these is worth a conversation. Two or more, and it is time.</p>
```

**Featured image prompt:**

```
A modern white dome security camera mounted under the eave of a
contemporary Philippine home at dusk, warm porch light below, deep blue
evening sky, crisp product-like detail.
```

- **Alt:** A security camera mounted under the eave of a modern home at dusk

## 6 — Introducing Centralized App Control Across Every CV Mechatronics System

- **Slug:** `introducing-centralized-app-control`
- **Category:** News
- **Tags:** App Control, Product Launch
- **Date:** 2026-05-08
- **Excerpt:** Gates, glass, cameras, and lighting — now under a single dashboard, with access logs and real-time alerts for the whole property.

**Body HTML:**

```html
<p>Until now, a fully kitted property could mean three or four apps — one for the gate, another for the cameras, a switch on the wall for the glass. Today we are bringing all of it under one roof.</p>
<h2>One dashboard for everything installed</h2>
<ul>
  <li>Open and close gates from anywhere</li>
  <li>Switch smart glass and view live CCTV in the same view</li>
  <li>Schedule and override lighting</li>
  <li>Access logs with timestamps, per user</li>
  <li>Push alerts for gate events, motion, and alarms</li>
</ul>
<p>It runs natively on iOS and Android — no browser, no separate logins. Add a system later and it simply appears in the dashboard; nothing to re-learn.</p>
<blockquote>The goal was never more buttons. It was fewer decisions — one place to see the whole property and act on it.</blockquote>
<p>Existing clients on supported hardware can migrate at no cost. Talk to us about enrolling your property.</p>
```

**Featured image prompt:**

```
A hand holding a smartphone in a bright modern living room, the phone
screen showing a simple dark home-control interface with large clean
toggle icons and no readable text, room softly blurred behind.
```

- **Alt:** A phone controlling a home's gate, glass, cameras, and lights from one screen

## 7 — Spotlight: ColorVu Cameras That See in Full Color at Night

- **Slug:** `spotlight-colorvu-night-vision`
- **Category:** Product Spotlight
- **Tags:** CCTV, ColorVu
- **Date:** 2026-04-20
- **Excerpt:** Traditional night vision paints the dark in gray. ColorVu keeps the color — and with it, the detail that turns footage into evidence.

**Body HTML:**

```html
<p>Ask anyone who has reviewed grainy black-and-white night footage: the moment that matters is almost always the one detail the infrared washed out. A dark jacket and a navy one look identical in gray. ColorVu changes that.</p>
<h2>How it stays in color</h2>
<p>Instead of switching to infrared after dusk, ColorVu cameras pair an unusually light-sensitive sensor with a supplemental warm light. The result is full-color video in conditions where a conventional camera would have gone monochrome — or gone dark.</p>
<ul>
  <li>Color detail retained well into the night</li>
  <li>Clothing, vehicles, and skin tones stay distinguishable</li>
  <li>Available across indoor and outdoor bullet and turret models</li>
</ul>
<blockquote>Color is not a luxury on a security camera. It is half the description you would give if someone asked what you saw.</blockquote>
<p>We spec ColorVu wherever lighting is unpredictable — driveways, perimeters, back entries. Pair it with motion-triggered recording and you capture the right frames, in color, automatically.</p>
```

**Featured image prompt:**

```
A bullet security camera on a residential perimeter wall at night, its
warm supplemental light illuminating a colorful garden and gate in the
background, vivid color detail despite the dark sky.
```

- **Alt:** A night-vision camera keeping a garden and gate in full color after dark

---

# Projects

## A — A Hillside Weekend Home That Runs Itself

- **Slug:** `tagaytay-hillside-home-automation`
- **Tags:** Residential, Gate Automation, Smart Glass, CCTV, App Control, Lighting
- **Date:** 2026-06-28
- **Excerpt:** Automated gate, switchable glass, full-color night cameras, and scene lighting for a family's Tagaytay retreat — all under one app.

**Body HTML:**

```html
<p>The brief from the owners was a feeling, not a spec sheet: they wanted the drive up to their weekend home to end the way a good weekend should — with nothing to fumble, fight, or remember.</p>
<h2>What we installed</h2>
<ul>
  <li>Sliding gate operator with battery backup, opening on approach</li>
  <li>PDLC smart glass across the west-facing living room wall</li>
  <li>Eight ColorVu cameras covering the perimeter and approach road</li>
  <li>Scene-based lighting for arrival, evening, and away modes</li>
  <li>One app for the whole property — shared with the caretaker</li>
</ul>
<h2>The detail that made it</h2>
<p>The house sits on a slope with a long, curved approach. We tied the gate to geofenced arrival so it is fully open by the last bend, and set the glass to ease into privacy mode at sunset — the living room keeps its view all day, then turns in for the night on its own.</p>
<blockquote>A weekend home should ask nothing of you when you arrive. Every system here is timed to be one step ahead of the family, never in their way.</blockquote>
<p>When the family is away, away-mode runs the lights on a lived-in pattern and the cameras push motion alerts straight to the owners' phones — the property looks after itself until the next drive up.</p>
```

**Featured image prompt:**

```
A modern hillside house in Tagaytay Philippines at dusk, wide angle from
the driveway, warm light glowing through a large glass living room wall,
automated gate open in the foreground, cool evening air.
```

- **Alt:** A hillside home at dusk with its gate open and the living room glowing

## B — Commercial Compound Gate and Surveillance Upgrade, Quezon City

- **Slug:** `quezon-city-compound-gate-surveillance-upgrade`
- **Tags:** Commercial, Gate Automation, CCTV, App Control
- **Date:** 2026-05-30
- **Excerpt:** An 800 kg sliding gate, 24-hour color perimeter coverage, and access logs for every entry — staged over two weekends with zero downtime for tenants.

**Body HTML:**

```html
<p>The compound's aging chain-driven gate was failing weekly, and its analog cameras had long stopped producing usable footage. For a multi-tenant facility with deliveries from early morning to late night, neither was acceptable — but shutting the entrance down for days wasn't an option either.</p>
<h2>The upgrade</h2>
<ul>
  <li>Heavy-duty sliding operator rated for the 800 kg gate, with loop detectors and safety photocells</li>
  <li>Battery backup sized for a full day of brownout cycles</li>
  <li>Sixteen ColorVu cameras on a properly sized NVR — color footage, day and night</li>
  <li>Guard-house tablet and app access with per-user entry logs</li>
</ul>
<h2>Staged around the tenants</h2>
<p>We split the work across two weekends: cameras and cabling first, gate operator second, with the entrance manually staffed and fully operational in between. Tenants never lost a delivery window.</p>
<blockquote>Commercial work is judged twice — once at handover, and again every busy Monday after. The system has to disappear into the flow of the site.</blockquote>
<p>Every entry and exit is now logged with a timestamp and a color frame. The facilities manager reviews the week from a phone, and the gate has not missed a cycle since handover.</p>
```

**Featured image prompt:**

```
A light-industrial compound entrance in Quezon City in daytime, large
steel sliding gate mid-cycle, guardhouse with a security camera above,
delivery van waiting, clean and professional, tropical sun.
```

- **Alt:** A commercial compound entrance with a heavy sliding gate and guardhouse camera

## C — Smart Glass Conference Suite, Makati

- **Slug:** `makati-smart-glass-conference-suite`
- **Tags:** Commercial, Smart Glass, App Control, Lighting
- **Date:** 2026-04-25
- **Excerpt:** Three glass-walled meeting rooms that turn private at the tap of a button — PDLC panels tied into the floor's lighting scenes.

**Body HTML:**

```html
<p>The office fit-out gave every meeting room a glass wall facing the open floor — beautiful, bright, and completely impractical for confidential calls. Blinds would have undone the design; the brief was privacy without visual clutter.</p>
<h2>What we installed</h2>
<ul>
  <li>Laminated PDLC smart glass panels for three meeting rooms</li>
  <li>Wall-mounted switches at each door, plus app control for facilities</li>
  <li>Lighting scenes that pair with the glass state — bright when clear, focused when private</li>
  <li>Scheduled clear state after hours so the floor reads open again</li>
</ul>
<h2>Living with it</h2>
<p>The switch is instant and silent: tap the panel by the door and the room goes matte-white before the first person sits down. Facilities can set every room on the floor from one screen, and the glass blocks UV — a real consideration on a sun-facing Makati high-rise.</p>
<blockquote>Good office technology is invisible twice: you don't see it, and you don't see what it hides.</blockquote>
<p>No structural changes were needed — the panels fit the existing frames, and the whole suite was installed over one long weekend.</p>
```

**Featured image prompt:**

```
A modern Makati office meeting room with floor-to-ceiling smart glass
walls in a frosted private state, one room clear showing the city skyline
beyond, minimalist furniture, soft daylight.
```

- **Alt:** Meeting rooms with smart glass walls, one frosted private, one clear to the skyline

---

# Image checklist

| # | Image | Used by |
| --- | --- | --- |
| 1 | Sliding gate at dusk, car arriving | Post 1 (featured) |
| 1b | Night-rain arrival, gate opening (optional) | Post 1 (inline) |
| 2 | Commercial compound gate, morning | Post 2 |
| 3 | Gate motor close-up | Post 3 |
| 4 | Glass wall frosted/clear split | Post 4 |
| 5 | Dome camera under eave, dusk | Post 5 |
| 6 | Phone with home-control screen | Post 6 |
| 7 | Bullet camera, color at night | Post 7 |
| A | Tagaytay hillside house at dusk | Project A |
| B | QC compound entrance, daytime | Project B |
| C | Makati smart-glass meeting rooms | Project C |

Generate each at 1600×900 or larger, upload via **Media → Add New** (or
directly in the Featured image panel), and paste the alt text into the
image's Alt Text field.

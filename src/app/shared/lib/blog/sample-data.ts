import type { BlogPost } from "./types";

/**
 * Sample blog content used until headless WordPress is connected.
 * Covers use images.unsplash.com (already whitelisted in next.config.ts).
 * HTML bodies are trusted, hand-authored content — see wordpress.ts for the
 * eventual external source (which should be sanitized before render).
 */
export const samplePosts: BlogPost[] = [
  {
    slug: "5-reasons-to-automate-your-gate",
    title: "5 Reasons Homeowners Are Switching to Smart Gate Automation in 2026",
    excerpt:
      "Convenience is only the start. Here is what is actually driving families across the Philippines to automate the front gate this year.",
    coverImage:
      "https://images.unsplash.com/photo-1770756051811-1612ac8bedfa?auto=format&fit=crop&w=1200&q=80",
    coverAlt: "Contemporary home with an automated sliding gate at dusk",
    category: "Guides",
    tags: ["Gate Automation", "Smart Home", "Buying Guide"],
    author: { name: "Marketing Team", role: "CV Mechatronics" },
    publishedAt: "2026-07-13",
    readingMinutes: 5,
    relatedProduct: { label: "Gate & Door Automation", href: "/solutions" },
    contentHtml: `
<p>Ten years ago, an automated gate was a luxury reserved for compounds and executives. In 2026 it is quietly becoming the default — and not for the reason most people assume. Convenience gets you in the door, but it is rarely what closes the decision.</p>
<h2>It starts with the 10pm arrival</h2>
<p>Ask anyone who has rolled up to a manual gate in the rain, headlights on, engine running, while someone fumbles for a padlock. The first drive home after automating is the moment it clicks: you never step out of the car again.</p>
<ul>
  <li><strong>Safety after dark</strong> — no getting out on an unlit street</li>
  <li><strong>Everyday speed</strong> — the gate is open before you reach it</li>
  <li><strong>Weather</strong> — rain and heat stop being your problem</li>
  <li><strong>Control from anywhere</strong> — let a guest in from your phone</li>
</ul>
<figure>
  <img src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80" alt="Modern automated gate at a residential driveway" />
  <figcaption>A sliding gate operator sized for daily residential use.</figcaption>
</figure>
<h2>What actually changes the decision</h2>
<p>The tipping point is almost always <strong>integration</strong>. Once the gate talks to the cameras and the lights, it stops being a gate and becomes the front line of the whole property. See how it fits together in our <a href="/solutions">solutions overview</a>.</p>
<blockquote>The gate you never think about is the one doing its job. That is the whole goal — a front line so smooth it disappears.</blockquote>
<p>Thinking about it for your own home? Send us your gate's width and a photo, and we will tell you exactly what it would take.</p>
`.trim(),
  },
  {
    slug: "500th-automated-gate-installation",
    title: "CV Mechatronics Completes Its 500th Automated Gate Installation",
    excerpt:
      "A milestone five years in the making — half a thousand gates across Metro Manila and beyond, each precision-installed and app-connected.",
    coverImage:
      "https://images.unsplash.com/photo-1770756051811-1612ac8bedfa?auto=format&fit=crop&w=1200&q=80",
    coverAlt:
      "Modern white house with contemporary full-glass automated garage doors",
    category: "News",
    tags: ["Milestone", "Gate Automation"],
    author: { name: "CV Mechatronics", role: "Team" },
    publishedAt: "2026-07-02",
    readingMinutes: 4,
    contentHtml: `
<p>This month we handed over our 500th automated gate — a heavy-duty sliding installation for a commercial compound in Quezon City. It is a number worth pausing on, because every one of those gates represents a site survey, a load calculation, and a crew on the ground making sure the finished install opens the same way on year five as it did on day one.</p>
<h2>Five years, five hundred gates</h2>
<p>When we started, most requests were simple residential swing gates. Today the mix has shifted toward larger, higher-duty systems — and toward properties that want the gate tied into their cameras, lighting, and phone.</p>
<ul>
  <li>Sliding motors rated up to 800&nbsp;kg for commercial entries</li>
  <li>Bi-parting swing operators for residential driveways</li>
  <li>Roll-up and sectional drives for industrial bays</li>
  <li>Battery backup on every install — gates open during outages</li>
</ul>
<blockquote>The gate is usually the first thing a system touches and the last thing anyone thinks about. We build it to be the part you never have to think about again.</blockquote>
<p>Thank you to every homeowner, builder, and facilities manager who trusted us with the entrance to their property. On to the next five hundred.</p>
`.trim(),
  },
  {
    slug: "choosing-the-right-gate-motor",
    title: "How to Choose the Right Gate Motor for Your Property",
    excerpt:
      "Sliding, swing, or roll-up? Gate weight, duty cycle, and power backup all shape the decision. Here is how we spec a motor that lasts.",
    coverImage:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
    coverAlt:
      "Modern property with a clean architectural entrance and automated gate",
    category: "Guides",
    tags: ["Gate Automation", "Buying Guide"],
    author: { name: "Engineering", role: "CV Mechatronics" },
    publishedAt: "2026-06-18",
    readingMinutes: 6,
    contentHtml: `
<p>The right gate motor is the one you forget is there. The wrong one announces itself — straining on hot afternoons, stalling mid-cycle, failing the week the warranty ends. Getting the spec right up front is almost entirely about matching the motor to how the gate is actually used.</p>
<h2>Start with the gate, not the motor</h2>
<p>Three properties of the gate decide most of the choice:</p>
<ul>
  <li><strong>Weight and length.</strong> A 300&nbsp;kg residential slider and an 800&nbsp;kg commercial one are different machines, not different settings.</li>
  <li><strong>Type of travel.</strong> Sliding, swing, roll-up, and bi-fold each want a purpose-built operator.</li>
  <li><strong>Cycle count.</strong> A driveway used twice a day and a delivery bay opening two hundred times a day need very different duty ratings.</li>
</ul>
<h2>Then plan for the bad day</h2>
<p>Power backup is not optional in our book. A gate that traps you in — or out — during a brownout is a safety problem, not an inconvenience. Every motor we install pairs with a battery that keeps it moving when the grid does not.</p>
<p>Add safety photocells and a vehicle loop detector, and the gate stops for people and cars automatically. Spec those in from the start; retrofitting them later always costs more.</p>
<p>Not sure where your gate lands? Send us the dimensions and a photo and we will tell you exactly what it needs.</p>
`.trim(),
  },
  {
    slug: "spotlight-pdlc-smart-glass",
    title: "Spotlight: PDLC Smart Glass That Switches from Clear to Private in Milliseconds",
    excerpt:
      "Switchable glass that goes from fully transparent to frosted at the touch of a button — how it works and where it earns its place.",
    coverImage:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
    coverAlt: "Modern open-plan interior with large sliding glass partitions",
    category: "Product Spotlight",
    tags: ["Smart Glass", "PDLC"],
    author: { name: "Product", role: "CV Mechatronics" },
    publishedAt: "2026-06-05",
    readingMinutes: 5,
    relatedProduct: { label: "Smart Glass Tint", href: "/solutions" },
    contentHtml: `
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
`.trim(),
  },
  {
    slug: "5-signs-your-cctv-needs-an-upgrade",
    title: "5 Signs Your CCTV System Is Due for an Upgrade",
    excerpt:
      "Grainy footage, blind spots, and no phone access are more than annoyances — they are the difference between evidence and a shrug.",
    coverImage:
      "https://images.unsplash.com/photo-1529265895721-65945a176cff?auto=format&fit=crop&w=1200&q=80",
    coverAlt: "Two security cameras mounted on the exterior wall of a building",
    category: "Guides",
    tags: ["CCTV", "Security"],
    author: { name: "Engineering", role: "CV Mechatronics" },
    publishedAt: "2026-05-22",
    readingMinutes: 5,
    contentHtml: `
<p>A camera system earns its keep on the one night something happens. If any of these sound familiar, that night will not go the way you hope.</p>
<h2>1. The footage is too soft to identify anyone</h2>
<p>Older analog cameras top out at a resolution where faces and plates blur into suggestion. Modern 4MP and 8MP IP cameras resolve the detail that actually matters.</p>
<h2>2. Night footage is unusable</h2>
<p>If your cameras go blind after dark, they are working part-time. Infrared reaches ~30&nbsp;m; ColorVu keeps full color at night entirely.</p>
<h2>3. You cannot check it from your phone</h2>
<p>Live view and playback from iOS or Android is now the baseline, not a luxury. If you have to be on-site to see anything, the system is a generation behind.</p>
<h2>4. There are blind spots you have learned to live with</h2>
<p>Coverage gaps become habits. A quick survey usually finds two or three angles that a single well-placed camera would close.</p>
<h2>5. Storage overwrites before you need it</h2>
<p>If clips vanish in days, an incident you discover a week later is already gone. A properly sized NVR fixes the math.</p>
<p>Any one of these is worth a conversation. Two or more, and it is time.</p>
`.trim(),
  },
  {
    slug: "introducing-centralized-app-control",
    title: "Introducing Centralized App Control Across Every CV Mechatronics System",
    excerpt:
      "Gates, glass, cameras, and lighting — now under a single dashboard, with access logs and real-time alerts for the whole property.",
    coverImage:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
    coverAlt: "Bright modern interior controlled by a unified smart system",
    category: "News",
    tags: ["App Control", "Product Launch"],
    author: { name: "CV Mechatronics", role: "Team" },
    publishedAt: "2026-05-08",
    readingMinutes: 4,
    contentHtml: `
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
`.trim(),
  },
  {
    slug: "spotlight-colorvu-night-vision",
    title: "Spotlight: ColorVu Cameras That See in Full Color at Night",
    excerpt:
      "Traditional night vision paints the dark in gray. ColorVu keeps the color — and with it, the detail that turns footage into evidence.",
    coverImage:
      "https://images.unsplash.com/photo-1529265895721-65945a176cff?auto=format&fit=crop&w=1200&q=80",
    coverAlt: "Security camera mounted outdoors against an evening sky",
    category: "Product Spotlight",
    tags: ["CCTV", "ColorVu"],
    author: { name: "Product", role: "CV Mechatronics" },
    publishedAt: "2026-04-20",
    readingMinutes: 4,
    relatedProduct: { label: "CCTV & Surveillance", href: "/products" },
    contentHtml: `
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
`.trim(),
  },
];

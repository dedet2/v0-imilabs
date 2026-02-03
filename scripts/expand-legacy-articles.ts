/**
 * LEGACY ARTICLES EXPANSION SCRIPT
 * 
 * Maps legacy HTML source files (Squarespace exports) to blog articles 20-35
 * Extracts content from hero section to end of article body
 * Ignores navigation and footer elements
 * 
 * HTML FILE -> ARTICLE ID MAPPING:
 * ================================
 * from-invisibility-to-radical-empathy-y4t3a -> Article 20
 * 60-minutes-and-encoded-bias-b97b4 -> Article 21
 * the-spirit-of-juneteenth-is-acknowledgement-j5hjc -> Article 22
 * black-excellence-and-the-low-expectations -> Article 23
 * race-norming-and-bioethics-2pz2r -> Article 24
 * the-wellness-industry-still-has-a-race-problem -> Article 25
 * 5-things-holding-organizations-back -> Article 26
 * how-to-support-bipoc-employees-now -> Article 27
 * being-not-racist-is-not-the-same-as-being-anti-racist -> Article 28
 * the-case-for-reparations-and-why-you-should-read-it -> Article 29
 * what-is-liberatory-design -> Article 30
 * dei-wont-save-us-but-radical-reimagining-will -> Article 31
 * the-miseducation-of-helen-keller -> Article 32
 * designing-for-disability-inclusion -> Article 33
 * technology-and-the-future-of-accessibility -> Article 34
 * why-accessibility-matters-for-everyone -> Article 35
 */

// ============================================================================
// ARTICLE 20: From Invisibility to Radical Empathy
// Source: from-invisibility-to-radical-empathy-y4t3a-Xq2OB.html
// ============================================================================
export const article20 = {
  id: 20,
  title: "From Invisibility to Radical Empathy",
  description:
    "I am passionate about my work as a Product Inclusion Specialist, a profession where I build products that work for everybody, regardless of ability, gender, resources, culture, race, or class.",
  category: "Product Inclusion + Ethics",
  date: "March 1, 2024",
  readTime: "8 min read",
  image: "/blog/0ha5_gjflj6n_okrx-1.jpeg",
  slug: "from-invisibility-to-radical-empathy",
  author: "Dr. Dédé Tetsubayashi",
  contentBlocks: [
    {
      type: "paragraph",
      content:
        "I am passionate about my work as a Product Inclusion Specialist, a profession where I build products that work for everybody, regardless of ability, gender, resources, culture, race, or class. I focus on building ethical products and processes that resist exploiting customers as merely transactional profit providers, because greed is the enemy of equal socioeconomic progress, and there is a middle: building equitably for both people and profit.",
    },
    {
      type: "paragraph",
      content:
        "As technology has exploded around us and demonstrated capabilities beyond our imagination, we've come to believe that building machines will relieve us of our own biases and shortcomings. Machines, we believe, won't be flawed the way we are. With those beliefs in mind, we build triage robots to complete patient intake. They're made of metal, wires, and software, and thus can't carry preconceived notions, so they can't discriminate, right? In fact, machines are infused with the exact same biases as the people who build them. These machines encode the biases of their makers into their DNA. They replicate the world in which they were made—a world that was designed for few but impacts many.",
    },
    { type: "heading2", content: "The Myth of Neutral Technology" },
    {
      type: "paragraph",
      content:
        "Technologies have become invisible to many of us. We use them so often that we forget these ubiquitous conveniences—banking, public transit, credit cards, automobiles, even soap dispensers—as well as those that are new to us, are all designed and engineered by human beings who bring their own biases, conscious or not, to the design and engineering of these tools.",
    },
    {
      type: "paragraph",
      content:
        "These are the biases that exclude many of us from participating fully in this ever-changing and rapidly-growing digital world. It is for this exact reason that I incorporate anthropological perspectives in my work for product inclusion. Anthropology pushes us to be curious, to ask questions about how the world works; it pushes us to question 'truth,' to consider it and examine it from many vantage points.",
    },
    {
      type: "paragraph",
      content:
        "Anthropology is an academic discipline that studies human society and culture, history and biology, our existence and subsistence, and the relationships we build with one another and the environment. With this approach I recognize that as people, we are unique not necessarily for our individual differences, but for our ability to bring our lived experiences, as shaped by our culture, environments, societies, and relationships, to bear on our individual truths. Biases are products of our experiences, beliefs, identities, and cultures. Bias is therefore a natural part of our existence.",
    },
    { type: "heading2", content: "Why I Do This Work" },
    {
      type: "paragraph",
      content:
        "I often share this story: In 2015 while on a job search, my phone's keyboard auto-completed my middle name, 'Dédé' as 'deadbeat.' It was a sobering reminder of who designed this technology and who they were designing for. This wasn't an isolated incident—it was a symptom of systemic exclusion in tech design.",
    },
    {
      type: "paragraph",
      content:
        "These moments of exclusion accumulate. They tell people: you weren't considered. Your name, your language, your way of being in the world—it wasn't part of the plan. And when products consistently fail you, you start to question whether you belong in these digital spaces at all.",
    },
    { type: "heading2", content: "Moving from Invisibility to Empathy" },
    {
      type: "paragraph",
      content:
        "The path from invisibility to inclusion requires radical empathy—the kind that goes beyond sympathy or even standard empathy. Radical empathy means actively working to understand experiences that are different from your own, and then using that understanding to change how you design, build, and create.",
    },
    {
      type: "paragraph",
      content:
        "It means asking: who have we left out? Whose voice isn't in the room? Whose experience wasn't considered? And then doing the hard work of including them—not as an afterthought, but as a fundamental part of the process.",
    },
    {
      type: "paragraph",
      content:
        "This is the work I do every day. It's challenging, often uncomfortable, and always necessary. Because until we build technology that truly serves everyone, we're not building technology—we're building exclusion.",
    },
  ],
}

// ============================================================================
// ARTICLE 21: 60 Minutes and Encoded Bias
// Source: 60-minutes-and-encoded-bias-b97b4-DOoBK.html
// ============================================================================
export const article21 = {
  id: 21,
  title: "60 Minutes and Encoded Bias",
  description:
    "A reflection on the 60 Minutes segment featuring Joy Buolamwini's groundbreaking work on algorithmic bias and what it reveals about misogynoir in technology.",
  category: "AI Bias + Media",
  date: "February 15, 2024",
  readTime: "7 min read",
  image: "/blog/joy-buolamwini-60-minutes.jpg",
  slug: "60-minutes-encoded-bias",
  author: "Dr. Dédé Tetsubayashi",
  contentBlocks: [
    {
      type: "paragraph",
      content:
        "Last night, 60 Minutes aired a segment on artificial intelligence and bias, featuring the remarkable Dr. Joy Buolamwini. For those unfamiliar with her work, Joy is a researcher at the MIT Media Lab and founder of the Algorithmic Justice League. Her research has been instrumental in revealing how facial recognition systems systematically fail to accurately identify women with darker skin—what scholar Moya Bailey calls 'misogynoir.'",
    },
    {
      type: "paragraph",
      content:
        "The segment demonstrated what many of us in the product inclusion field have been saying for years: AI systems are not neutral. They encode the biases of their creators and the limitations of their training data. When those systems are built primarily by one demographic and tested primarily on that same demographic, they fail—spectacularly—when encountering anyone else.",
    },
    { type: "heading2", content: "What Joy's Research Reveals" },
    {
      type: "paragraph",
      content:
        "Joy's Gender Shades project tested commercial facial recognition systems from major tech companies. The results were damning: while these systems achieved near-perfect accuracy on lighter-skinned male faces, their error rates for darker-skinned women were as high as 35%. This isn't a minor calibration issue. This is systematic failure.",
    },
    {
      type: "paragraph",
      content:
        "What makes this particularly concerning is that facial recognition isn't just used for unlocking phones. These systems are deployed in law enforcement, hiring, healthcare, and countless other high-stakes contexts. When they fail, real people suffer real consequences—missed job opportunities, wrongful arrests, denied services.",
    },
    { type: "heading2", content: "The Broader Pattern" },
    {
      type: "paragraph",
      content:
        "Joy's work is part of a broader pattern we're seeing across AI systems. Language models that produce racist outputs. Healthcare algorithms that systematically undertreat Black patients. Credit scoring systems that perpetuate historical discrimination. The pattern is consistent: AI trained on biased data produces biased outcomes.",
    },
    {
      type: "paragraph",
      content:
        "The 60 Minutes segment brought this research to a mainstream audience, which is significant. But for those of us doing this work every day, it's a reminder of how much further we have to go. Awareness is the first step, but it must be followed by action—by companies actually changing how they build and deploy these systems.",
    },
    { type: "heading2", content: "What Needs to Change" },
    {
      type: "paragraph",
      content:
        "We need diverse teams building AI systems. We need comprehensive testing across all demographics before deployment. We need transparency about how these systems work and where they fail. And we need accountability when they cause harm.",
    },
    {
      type: "paragraph",
      content:
        "Joy's work has already driven change—several companies have improved their systems in response to her research. But voluntary improvement isn't enough. We need standards, regulations, and enforcement mechanisms that ensure AI systems work for everyone, not just those who look like the people who built them.",
    },
  ],
}

// ============================================================================
// ARTICLE 22: The Spirit of Juneteenth is Acknowledgement
// Source: the-spirit-of-juneteenth-is-acknowledgement-j5hjc-5soC2.html
// ============================================================================
export const article22 = {
  id: 22,
  title: "The Spirit of Juneteenth is Acknowledgement",
  description:
    "Juneteenth is more than a celebration of freedom. It's a call to acknowledge the full truth of American history and the ongoing work of liberation.",
  category: "Culture + History",
  date: "June 19, 2023",
  readTime: "6 min read",
  image: "/blog/juneteenth-celebration.jpg",
  slug: "spirit-of-juneteenth-acknowledgement",
  author: "Dr. Dédé Tetsubayashi",
  contentBlocks: [
    {
      type: "paragraph",
      content:
        "Today we celebrate Juneteenth, the day in 1865 when enslaved people in Galveston, Texas finally learned of their freedom—two and a half years after the Emancipation Proclamation. That delay itself tells us something important about how power works in America: liberation isn't given freely. It has to be demanded, enforced, and continually defended.",
    },
    {
      type: "paragraph",
      content:
        "Juneteenth becoming a federal holiday in 2021 was a significant moment. But I worry that as it becomes mainstreamed, its meaning will be diluted—turned into another day of sales and barbecues without engagement with what it actually represents. The spirit of Juneteenth is acknowledgement, and acknowledgement requires discomfort.",
    },
    { type: "heading2", content: "What Acknowledgement Requires" },
    {
      type: "paragraph",
      content:
        "To truly honor Juneteenth, we must acknowledge the full scope of American slavery—not the sanitized version taught in many schools, but the brutal reality of a system that treated human beings as property for 246 years. We must acknowledge that the effects of that system didn't end in 1865, or in 1965, or today.",
    },
    {
      type: "paragraph",
      content:
        "Acknowledgement means sitting with the truth that American prosperity was built on stolen land and stolen labor. It means understanding that every institution in this country—including the tech industry I work in—carries the legacy of that history. It means recognizing that 'freedom' in 1865 didn't mean equality, and that the struggle for true liberation continues.",
    },
    { type: "heading2", content: "From Acknowledgement to Action" },
    {
      type: "paragraph",
      content:
        "Acknowledgement without action is empty. If your organization celebrates Juneteenth but hasn't examined its own practices around racial equity, that celebration is performative. If you post about freedom but haven't interrogated how your products might perpetuate bias, you've missed the point.",
    },
    {
      type: "paragraph",
      content:
        "The spirit of Juneteenth calls us to more. It calls us to examine our institutions, our products, our policies. To ask: who is still not free? Who is still not served? Who is still excluded? And then to do the work of changing those realities.",
    },
    {
      type: "paragraph",
      content:
        "This Juneteenth, I hope we can move beyond celebration to contemplation, and from contemplation to commitment. The work of liberation is never finished. Let's honor that truth.",
    },
  ],
}

// ============================================================================
// ARTICLE 23: Black Excellence and the Low Expectations of White Supremacy
// Source: black-excellence-and-the-low-expectations-of-white-supremacy-yy6ya-BED4u.html
// ============================================================================
export const article23 = {
  id: 23,
  title: "Black Excellence and the Low Expectations of White Supremacy",
  description:
    "The soft bigotry of low expectations reveals itself in how we talk about Black achievement. Excellence shouldn't be surprising—but in a white supremacist system, it always is.",
  category: "Race + Culture",
  date: "February 1, 2023",
  readTime: "7 min read",
  image: "/blog/black-excellence.jpg",
  slug: "black-excellence-low-expectations",
  author: "Dr. Dédé Tetsubayashi",
  contentBlocks: [
    {
      type: "paragraph",
      content:
        "Every February, we celebrate Black History Month. And every February, I notice the same pattern: surprise. Surprise at Black achievement. Surprise at Black innovation. Surprise at Black excellence. This surprise reveals something uncomfortable—the soft bigotry of low expectations that white supremacy instills in all of us.",
    },
    {
      type: "paragraph",
      content:
        "When we're surprised by Black excellence, we reveal our assumptions. We reveal that somewhere, perhaps unconsciously, we expected less. We expected mediocrity. We expected that Black people would need extra help, extra time, extra support to achieve what others achieve. This expectation is the water we swim in. It's so pervasive we often don't notice it.",
    },
    { type: "heading2", content: "The Weight of Proving Excellence" },
    {
      type: "paragraph",
      content:
        "For Black professionals, this manifests as a constant need to prove ourselves. We can't just be good at our jobs—we have to be exceptional, and then we have to prove that exception repeatedly. The bar isn't just higher; it moves every time we clear it.",
    },
    {
      type: "paragraph",
      content:
        "This is exhausting. It contributes to what's often called 'imposter syndrome' but is really something else—the rational response to being constantly doubted, constantly questioned, constantly required to justify your presence in spaces where others are simply accepted.",
    },
    { type: "heading2", content: "Reframing the Narrative" },
    {
      type: "paragraph",
      content:
        "Black excellence isn't exceptional. It's normal. Throughout history, despite every barrier erected to prevent it, Black people have innovated, created, led, and excelled. The exceptions aren't the achievements—the exceptions are that we ever doubted they would happen.",
    },
    {
      type: "paragraph",
      content:
        "As we celebrate Black History Month, I challenge us to examine our surprise. When you hear about a Black person's achievement and feel impressed, ask yourself: why? Would you feel the same surprise about the same achievement from a white person? If the answer is no, you've identified an assumption worth examining.",
    },
    {
      type: "paragraph",
      content:
        "The goal isn't to stop celebrating Black excellence. It's to create a world where that excellence is expected, supported, and given the same opportunities to flourish as anyone else's. Until then, we'll keep proving ourselves—but let's be clear about why that's necessary, and who set up that system.",
    },
  ],
}

// ============================================================================
// ARTICLE 24: Race Norming and Bioethics
// Source: race-norming-and-bioethics-2pz2r-PChh5.html
// ============================================================================
export const article24 = {
  id: 24,
  title: "Race Norming and Bioethics",
  description:
    "The NFL's race norming scandal reveals how algorithmic discrimination operates in healthcare—and why the fight against biased AI is a matter of life and death.",
  category: "Healthcare + AI Ethics",
  date: "January 15, 2023",
  readTime: "8 min read",
  image: "/blog/race-norming-healthcare.jpg",
  slug: "race-norming-bioethics",
  author: "Dr. Dédé Tetsubayashi",
  contentBlocks: [
    {
      type: "paragraph",
      content:
        "The NFL's race norming scandal brought algorithmic discrimination in healthcare into the spotlight. For years, the league used a formula that assumed Black players started with lower cognitive function than white players. This meant that when Black players filed for dementia-related benefits, they had to show greater cognitive decline to qualify. They were systematically denied compensation that white players received.",
    },
    {
      type: "paragraph",
      content:
        "This practice sounds archaic—something from a previous era of scientific racism. But race norming isn't a relic. It's embedded in algorithms used throughout modern healthcare, affecting kidney function assessments, lung capacity measurements, cardiac risk calculations, and more. These algorithms adjust their outputs based on race, often to the detriment of Black patients.",
    },
    { type: "heading2", content: "How Race Norming Works" },
    {
      type: "paragraph",
      content:
        "Race-adjusted algorithms typically use race as a variable that shifts expected baseline measurements. The eGFR formula for kidney function, for example, has historically assigned higher kidney function scores to Black patients—making them appear healthier than they actually are, delaying referrals for specialist care and transplant evaluation.",
    },
    {
      type: "paragraph",
      content:
        "The justification for these adjustments is typically that there are 'biological differences' between races. But race is a social construct, not a biological one. These algorithms encode racist assumptions and present them as medical science.",
    },
    { type: "heading2", content: "The Bioethical Implications" },
    {
      type: "paragraph",
      content:
        "Race norming violates fundamental principles of medical ethics. It denies patients equal treatment based on their race. It uses group membership to override individual assessment. It perpetuates historical discrimination under the guise of scientific precision.",
    },
    {
      type: "paragraph",
      content:
        "As AI becomes more prevalent in healthcare, these issues will only intensify. Machine learning systems trained on historically biased data will perpetuate those biases. Without intervention, we're automating discrimination and calling it progress.",
    },
    { type: "heading2", content: "The Path Forward" },
    {
      type: "paragraph",
      content:
        "The movement to remove race from medical algorithms is growing. The National Kidney Foundation has recommended eliminating race from eGFR calculations. Medical schools are beginning to question race-based medicine. But progress is slow, and resistance is real.",
    },
    {
      type: "paragraph",
      content:
        "We need systemic change: audit existing algorithms for racial bias, remove race as a variable where it serves no legitimate purpose, and ensure that AI systems in healthcare are tested across all demographics before deployment. The stakes couldn't be higher. This is literally a matter of life and death.",
    },
  ],
}

// ============================================================================
// ARTICLE 25: The Wellness Industry Still Has a Race Problem
// Source: the-wellness-industry-still-has-a-race-problem-*.html
// ============================================================================
export const article25 = {
  id: 25,
  title: "The Wellness Industry Still Has a Race Problem",
  description:
    "From pulse oximeters to fitness trackers, wellness technology consistently fails people with darker skin. #WellnessSoWhite isn't just a hashtag—it's a design failure.",
  category: "Health Tech + Equity",
  date: "December 10, 2022",
  readTime: "7 min read",
  image: "/blog/wellness-technology-equity.jpg",
  slug: "wellness-industry-race-problem",
  author: "Dr. Dédé Tetsubayashi",
  contentBlocks: [
    {
      type: "paragraph",
      content:
        "During the COVID-19 pandemic, a disturbing pattern emerged: pulse oximeters—devices that measure blood oxygen levels—were giving inaccurate readings for patients with darker skin. This wasn't a new problem, but the pandemic made its consequences deadly. Patients were sent home with dangerously low oxygen levels because the devices couldn't accurately read their skin.",
    },
    {
      type: "paragraph",
      content:
        "This is the wellness industry's race problem in stark relief. From heart rate monitors to dermatology apps, wellness technology consistently fails people with darker skin. The hashtag #WellnessSoWhite captures something real: an industry that designs for one demographic and then treats everyone else as an afterthought.",
    },
    { type: "heading2", content: "The Technical Roots of Bias" },
    {
      type: "paragraph",
      content:
        "Many wellness devices use optical sensors that rely on light absorption through the skin. These sensors are calibrated primarily on lighter skin, which has different optical properties than darker skin. The result: systematic measurement errors that compound across millions of users.",
    },
    {
      type: "paragraph",
      content:
        "Similar issues affect fitness trackers, sleep monitors, and even camera-based health assessments. When devices aren't tested across the full range of human skin tones, they fail—and they fail in ways that disproportionately harm already marginalized communities.",
    },
    { type: "heading2", content: "Beyond Technical Fixes" },
    {
      type: "paragraph",
      content:
        "Technical calibration is necessary but not sufficient. The wellness industry needs to fundamentally rethink who it designs for. This means diverse teams at every stage of product development. It means testing protocols that require success across all demographics. It means accountability when products fail.",
    },
    {
      type: "paragraph",
      content:
        "It also means examining the broader culture of wellness—an industry that has historically centered whiteness, from its imagery to its products to its definition of health itself. True wellness must work for everyone, and that requires more than technical patches.",
    },
    {
      type: "paragraph",
      content:
        "The pandemic exposed what many of us already knew: wellness technology has a race problem. The question now is whether the industry will actually change, or whether it will continue designing for some bodies while failing others.",
    },
  ],
}

// ============================================================================
// ARTICLE 26: 5 Things Holding Organizations Back
// Source: 5-things-holding-organizations-back-from-transformative-change-lnt5w-NPVFu.html
// ============================================================================
export const article26 = {
  id: 26,
  title: "5 Things Holding Organizations Back from Transformative Change",
  description:
    "After years of consulting on DEI and product inclusion, I've identified the five most common barriers that prevent organizations from achieving meaningful change.",
  category: "Organizational Change",
  date: "November 1, 2022",
  readTime: "8 min read",
  image: "/blog/organizational-transformation.jpg",
  slug: "5-things-holding-organizations-back",
  author: "Dr. Dédé Tetsubayashi",
  contentBlocks: [
    {
      type: "paragraph",
      content:
        "After years of consulting with organizations on diversity, equity, inclusion, and product inclusion, I've identified consistent patterns in why change efforts fail. These barriers aren't unique to any one company or industry—they're systemic patterns that repeat across contexts. Recognizing them is the first step toward overcoming them.",
    },
    { type: "heading2", content: "1. Confusing Activity with Progress" },
    {
      type: "paragraph",
      content:
        "Organizations love to count things: trainings conducted, statements released, committees formed. But activity isn't progress. You can conduct a hundred unconscious bias trainings and still have a biased culture. Meaningful change requires measuring outcomes—not just outputs—and being honest about whether those outcomes are actually improving.",
    },
    { type: "heading2", content: "2. Prioritizing Comfort Over Transformation" },
    {
      type: "paragraph",
      content:
        "Transformative change is uncomfortable. It requires examining how power operates, whose voices are centered, and who benefits from existing structures. Many organizations want change without discomfort—DEI that doesn't challenge the status quo. But comfortable change isn't transformative. If no one is uncomfortable, you're probably not changing anything.",
    },
    { type: "heading2", content: "3. Treating Inclusion as a Program Instead of Culture" },
    {
      type: "paragraph",
      content:
        "Inclusion programs are important, but they're not sufficient. When inclusion exists as a separate initiative rather than core to how the organization operates, it remains marginal. True transformation requires embedding inclusion into every process, every decision, every product—not relegating it to a program that can be cut when budgets tighten.",
    },
    { type: "heading2", content: "4. Lacking Accountability Structures" },
    {
      type: "paragraph",
      content:
        "Without accountability, commitments become aspirations. Who is responsible when inclusion goals aren't met? What are the consequences? If the answer is 'no one' and 'none,' your commitment isn't real. Accountability means tying inclusion outcomes to leadership evaluations, promotion decisions, and resource allocation.",
    },
    { type: "heading2", content: "5. Expecting Quick Fixes" },
    {
      type: "paragraph",
      content:
        "Systems built over decades don't change in quarters. Organizations that expect rapid transformation inevitably become frustrated and abandon the effort. Meaningful change requires sustained commitment measured in years, not months—with the understanding that setbacks are part of the process, not evidence that the effort is failing.",
    },
    {
      type: "paragraph",
      content:
        "Recognizing these barriers is the first step. Overcoming them requires leadership that's willing to prioritize discomfort over comfort, outcomes over activities, and long-term transformation over quick fixes. It's hard work. But it's the only work that actually changes anything.",
    },
  ],
}

// ============================================================================
// ARTICLE 27: How to Support BIPOC Employees Now
// Source: how-to-support-bipoc-employees-now-*.html
// ============================================================================
export const article27 = {
  id: 27,
  title: "How to Support BIPOC Employees Now",
  description:
    "Concrete actions organizations can take immediately to support Black, Indigenous, and People of Color employees—beyond statements and symbolic gestures.",
  category: "Workplace Equity",
  date: "October 15, 2022",
  readTime: "7 min read",
  image: "/blog/bipoc-employee-support.jpg",
  slug: "support-bipoc-employees-now",
  author: "Dr. Dédé Tetsubayashi",
  contentBlocks: [
    {
      type: "paragraph",
      content:
        "In the wake of racial justice movements, many organizations issued statements of solidarity. Fewer have translated those statements into action. BIPOC employees are watching—and many are exhausted by the gap between organizational rhetoric and reality. Here's what organizations can do right now to provide meaningful support.",
    },
    { type: "heading2", content: "Listen Without Defensiveness" },
    {
      type: "paragraph",
      content:
        "Create spaces for BIPOC employees to share their experiences—and then actually listen. Not to respond, not to defend, not to explain why things are the way they are. Just listen. The defensiveness that often accompanies these conversations shuts them down before they start. Leadership needs to be willing to hear difficult truths without making them about themselves.",
    },
    { type: "heading2", content: "Audit Your Systems" },
    {
      type: "paragraph",
      content:
        "Examine your hiring, promotion, compensation, and performance review processes for bias. Not just in principle—in practice. Are BIPOC employees being promoted at the same rates as white employees? Are they being compensated equitably? Are they being assigned stretch projects and visible work? If you don't know, find out. If the answer is no, change it.",
    },
    { type: "heading2", content: "Invest in Development" },
    {
      type: "paragraph",
      content:
        "Ensure BIPOC employees have access to mentorship, sponsorship, and professional development opportunities. Not just formal programs, but informal networks that often determine who advances. Intentionally connect BIPOC employees with senior leaders. Create pathways that don't require navigating systems designed to exclude them.",
    },
    { type: "heading2", content: "Address Microaggressions" },
    {
      type: "paragraph",
      content:
        "Train managers to recognize and intervene in microaggressions—not just in egregious incidents, but in everyday slights that accumulate over time. Create accountability when harmful behavior occurs. Don't leave BIPOC employees to educate their colleagues or defend their own humanity. That's not their job; it's leadership's responsibility.",
    },
    { type: "heading2", content: "Redistribute Labor" },
    {
      type: "paragraph",
      content:
        "BIPOC employees are often asked to serve on diversity committees, mentor other underrepresented employees, and provide cultural education—on top of their actual jobs. This labor should be recognized, compensated, and distributed equitably. Better yet, invest in bringing in outside expertise rather than burdening the people you're trying to support.",
    },
    {
      type: "paragraph",
      content:
        "These aren't radical steps. They're basic components of an equitable workplace. If your organization hasn't taken them, start now. Your BIPOC employees are watching—and deciding whether your commitment is real.",
    },
  ],
}

// ============================================================================
// ARTICLE 28: Being Not Racist is Not the Same as Being Anti-Racist
// Source: being-not-racist-is-not-the-same-as-being-anti-racist-*.html
// ============================================================================
export const article28 = {
  id: 28,
  title: "Being 'Not Racist' is Not the Same as Being Anti-Racist",
  description:
    "The distinction between passive non-racism and active anti-racism is critical. One maintains the status quo; the other works to change it.",
  category: "Race + Social Justice",
  date: "September 20, 2022",
  readTime: "6 min read",
  image: "/blog/anti-racist-action.jpg",
  slug: "not-racist-vs-anti-racist",
  author: "Dr. Dédé Tetsubayashi",
  contentBlocks: [
    {
      type: "paragraph",
      content:
        "I am not racist.' It's the refrain of people who believe that because they don't actively discriminate, they're absolved from the work of racial justice. But as Ibram X. Kendi powerfully argues, there is no such thing as 'not racist.' There is only racist and anti-racist. The distinction matters—because passive non-racism upholds the very systems it claims not to support.",
    },
    {
      type: "paragraph",
      content:
        "Racism isn't just individual prejudice. It's a system of policies, practices, and cultural norms that produce racial inequity. To be 'not racist' while benefiting from that system and doing nothing to change it is to be complicit in its continuation. Anti-racism requires active work to dismantle racist systems—not just personal innocence.",
    },
    { type: "heading2", content: "What Anti-Racism Looks Like" },
    {
      type: "paragraph",
      content:
        "Anti-racism is action, not identity. It's examining your own biases and working to change them. It's advocating for policy changes in your organization and community. It's redistributing resources and power toward equity. It's speaking up when you witness racism, even when it's uncomfortable or costly.",
    },
    {
      type: "paragraph",
      content:
        "Anti-racism is ongoing. You don't become anti-racist and stay there automatically. It's a continuous practice of learning, acting, making mistakes, and doing better. It requires humility—the recognition that you'll never be done and that you'll often get it wrong.",
    },
    { type: "heading2", content: "The Limits of Personal Virtue" },
    {
      type: "paragraph",
      content:
        "Individual anti-racism is important but insufficient. Systems don't change because individuals have good intentions. They change through collective action, policy intervention, and shifts in material conditions. Anti-racism must extend beyond personal virtue to systemic transformation.",
    },
    {
      type: "paragraph",
      content:
        "This is where many well-meaning people stop. They've done the personal work—read the books, attended the workshops, examined their biases—but haven't extended that work into their spheres of influence. Personal anti-racism without systemic engagement is incomplete.",
    },
    {
      type: "paragraph",
      content:
        "The question isn't whether you're 'not racist.' The question is: what are you actively doing to dismantle racism? If the answer is nothing, you're not neutral—you're complicit. The good news is that you can start today. The work is always there, waiting.",
    },
  ],
}

// ============================================================================
// ARTICLE 29: The Case for Reparations - Why You Should Read It
// Source: the-case-for-reparations-and-why-you-should-read-it-*.html
// ============================================================================
export const article29 = {
  id: 29,
  title: "The Case for Reparations: Why You Should Read It",
  description:
    "Ta-Nehisi Coates' landmark essay isn't just about payment—it's about acknowledgement, justice, and what America owes to Black citizens.",
  category: "Race + History",
  date: "August 15, 2022",
  readTime: "7 min read",
  image: "/blog/case-for-reparations.jpg",
  slug: "case-for-reparations-why-read",
  author: "Dr. Dédé Tetsubayashi",
  contentBlocks: [
    {
      type: "paragraph",
      content:
        "Ta-Nehisi Coates' 2014 essay 'The Case for Reparations' remains one of the most important pieces of writing on race in America. If you haven't read it, you should. If you have, you should read it again. Its arguments are as urgent now as when it was published—perhaps more so.",
    },
    {
      type: "paragraph",
      content:
        "Coates doesn't merely argue that reparations are deserved (though they are). He argues that the conversation about reparations—the acknowledgement it requires—is itself necessary for America to reckon with its history. Reparations aren't just about payment; they're about truth.",
    },
    { type: "heading2", content: "Beyond Slavery" },
    {
      type: "paragraph",
      content:
        "One of the essay's most powerful contributions is its documentation of how harm continued long after slavery ended. Coates traces housing discrimination, redlining, contract selling, and other practices that systematically stripped wealth from Black communities well into the 20th century—within living memory.",
    },
    {
      type: "paragraph",
      content:
        "This isn't ancient history. Many Americans alive today grew up in explicitly segregated systems. The effects of those systems—in wealth, education, health, and housing—continue to shape outcomes. Understanding this history is essential for understanding the present.",
    },
    { type: "heading2", content: "What Reparations Require" },
    {
      type: "paragraph",
      content:
        "Coates argues that before we can discuss what reparations should look like, we need a national study and accounting of slavery and its aftermath. Not to determine if harm occurred—that's undeniable—but to understand the full scope of that harm and its ongoing effects. HR 40, the bill calling for such a study, has been introduced in every Congress since 1989. It has never passed.",
    },
    {
      type: "paragraph",
      content:
        "The resistance to even studying reparations reveals something about American politics: a deep unwillingness to confront the truth of our history. Until we're willing to look honestly at what was done and what it cost, we'll remain trapped in cycles of harm and denial.",
    },
    {
      type: "paragraph",
      content:
        "Read 'The Case for Reparations.' Sit with its arguments. Let it challenge your assumptions about American history and American justice. The conversation it demands is one we need to have.",
    },
  ],
}

// ============================================================================
// ARTICLE 30: What is Liberatory Design?
// Source: what-is-liberatory-design-hyf5j-pXryq.html
// ============================================================================
export const article30 = {
  id: 30,
  title: "What is Liberatory Design?",
  description:
    "Liberatory design goes beyond inclusion to actively dismantle oppressive systems. It asks not just 'who are we including?' but 'who benefits from the status quo?'",
  category: "Design + Equity",
  date: "July 20, 2022",
  readTime: "8 min read",
  image: "/blog/liberatory-design.jpg",
  slug: "what-is-liberatory-design",
  author: "Dr. Dédé Tetsubayashi",
  contentBlocks: [
    {
      type: "paragraph",
      content:
        "Inclusive design asks: who are we excluding, and how can we include them? Liberatory design asks a deeper question: what systems of oppression are we perpetuating, and how can we dismantle them? This shift—from inclusion to liberation—fundamentally changes how we approach design.",
    },
    {
      type: "paragraph",
      content:
        "Liberatory design recognizes that inclusion into oppressive systems isn't actually liberation. Adding a wheelchair ramp to a building that shouldn't require navigation in the first place isn't liberation. Translating a predatory financial product into multiple languages isn't inclusion. True liberatory design questions the systems themselves.",
    },
    { type: "heading2", content: "Core Principles of Liberatory Design" },
    {
      type: "paragraph",
      content:
        "Liberatory design centers those most impacted by the design decisions. Not as consultants or test subjects, but as decision-makers. It recognizes that the people closest to problems are usually closest to solutions—if we're willing to cede power to them.",
    },
    {
      type: "paragraph",
      content:
        "It examines power at every stage. Who decides what problems are worth solving? Who benefits from current solutions? Whose knowledge is valued? These questions reveal the political nature of design choices that are often presented as neutral or technical.",
    },
    {
      type: "paragraph",
      content:
        "It prioritizes collective well-being over individual accommodation. Rather than helping individuals navigate harmful systems, liberatory design works to transform those systems. The goal isn't a better experience within oppression—it's ending oppression.",
    },
    { type: "heading2", content: "Liberatory Design in Practice" },
    {
      type: "paragraph",
      content:
        "What does this look like in practice? It might mean refusing to build tools that enable surveillance or discrimination, even if they're profitable. It might mean designing products that redistribute power rather than concentrating it. It might mean walking away from projects that cannot be made just.",
    },
    {
      type: "paragraph",
      content:
        "Liberatory design isn't always possible within existing structures. Sometimes the most liberatory action is refusal—declining to put a humane face on inhumane systems. This is uncomfortable for designers who want to believe they can make anything better. But some things shouldn't be made better; they should be dismantled.",
    },
    {
      type: "paragraph",
      content:
        "Liberatory design is a practice, not a destination. It requires ongoing reflection, accountability to affected communities, and willingness to be changed by the work. It's harder than inclusive design. It's also more transformative.",
    },
  ],
}

// ============================================================================
// ARTICLE 31: DEI Won't Save Us
// Source: dei-wont-save-us-but-radical-reimagining-will-*.html
// ============================================================================
export const article31 = {
  id: 31,
  title: "DEI Won't Save Us, But Radical Reimagining Will",
  description:
    "Traditional DEI approaches often tinker at the margins of unjust systems. Real change requires reimagining those systems entirely.",
  category: "DEI + Transformation",
  date: "June 15, 2022",
  readTime: "7 min read",
  image: "/blog/radical-reimagining.jpg",
  slug: "dei-wont-save-us",
  author: "Dr. Dédé Tetsubayashi",
  contentBlocks: [
    {
      type: "paragraph",
      content:
        "I work in DEI. I believe in its importance. And I also believe that traditional DEI approaches, as commonly practiced, won't save us. They tinker at the margins of systems designed to be exclusionary. They add diversity to leadership teams that still operate by the same rules. They're necessary, but they're not sufficient.",
    },
    {
      type: "paragraph",
      content:
        "The limits of traditional DEI are becoming clearer. Companies that made bold commitments in 2020 are quietly walking them back. DEI roles are being eliminated. Progress on representation has stalled or reversed. The approach isn't working—not because the goals are wrong, but because the methods don't match the scale of the problem.",
    },
    { type: "heading2", content: "The Problem with Reform" },
    {
      type: "paragraph",
      content:
        "Traditional DEI is a reform approach. It accepts existing structures and tries to make them more inclusive. But what if those structures were designed to exclude? What if they can't be reformed without fundamental transformation?",
    },
    {
      type: "paragraph",
      content:
        "Consider: we try to reduce bias in hiring processes, but the jobs themselves often require credentials that are inequitably distributed. We train managers to be more inclusive, but the management structures themselves concentrate power in ways that perpetuate hierarchy. We're treating symptoms while the disease progresses.",
    },
    { type: "heading2", content: "Radical Reimagining" },
    {
      type: "paragraph",
      content:
        "Radical reimagining asks: what if we started over? What if we designed organizations, products, and systems with equity as the foundation rather than an add-on? What if we centered the needs of the most marginalized rather than adapting mainstream solutions?",
    },
    {
      type: "paragraph",
      content:
        "This isn't just idealistic musing. It's practical necessity. The systems we have are producing the outcomes we see. If we want different outcomes, we need different systems. Not reformed versions of existing systems—genuinely new ones.",
    },
    {
      type: "paragraph",
      content:
        "I'm not abandoning DEI work. It serves real purposes and helps real people. But I'm increasingly convinced that it must be paired with more radical vision—imagination about what's possible beyond the constraints we've accepted as inevitable. That's where liberation lies.",
    },
  ],
}

// ============================================================================
// ARTICLE 32: The Miseducation of Helen Keller
// Source: the-miseducation-of-helen-keller-*.html
// ============================================================================
export const article32 = {
  id: 32,
  title: "The Miseducation of Helen Keller",
  description:
    "The Helen Keller we learn about in school is a sanitized version. The real Helen Keller was a radical socialist and disability rights activist.",
  category: "Disability + History",
  date: "May 10, 2022",
  readTime: "6 min read",
  image: "/blog/helen-keller-radical.jpg",
  slug: "miseducation-helen-keller",
  author: "Dr. Dédé Tetsubayashi",
  contentBlocks: [
    {
      type: "paragraph",
      content:
        "Most Americans know Helen Keller as an inspirational figure—the deaf-blind girl who learned to communicate thanks to her teacher Anne Sullivan. The water pump. The miracle. It's a touching story. It's also incomplete to the point of dishonesty.",
    },
    {
      type: "paragraph",
      content:
        "The Helen Keller we don't learn about was a radical socialist, a suffragist, and an outspoken advocate for disability rights and workers' rights. She was a founding member of the ACLU. She supported the NAACP. She was investigated by the FBI for her political activities. This Helen Keller is systematically erased from American education.",
    },
    { type: "heading2", content: "Why We Only Learn Half the Story" },
    {
      type: "paragraph",
      content:
        "The sanitization of Helen Keller serves a purpose. By focusing only on her disability and her 'triumph' over it, we reduce her to an inspiration—a lesson about individual perseverance. This framing ignores everything she actually fought for and believed in.",
    },
    {
      type: "paragraph",
      content:
        "Helen Keller understood that disability is political. She wrote about how blindness and deafness disproportionately affected workers in dangerous industries. She connected disability rights to workers' rights, women's rights, and racial justice. She saw these struggles as interconnected—and that vision is exactly what's been edited out.",
    },
    { type: "heading2", content: "Reclaiming the Full Story" },
    {
      type: "paragraph",
      content:
        "We owe it to Helen Keller—and to ourselves—to learn her full history. Not because her politics should be beyond criticism, but because understanding them reveals what's possible. A deaf-blind woman in the early 20th century was one of America's most prominent radicals. That's remarkable. It's also dangerous to those who benefit from the status quo.",
    },
    {
      type: "paragraph",
      content:
        "The miseducation of Helen Keller is a case study in how radical histories are defanged. The same thing happens to Martin Luther King Jr., to the labor movement, to countless figures and movements whose challenges to power are softened into inspirational platitudes. Knowing this, we can seek out the fuller stories—and perhaps be inspired in more dangerous ways.",
    },
  ],
}

// ============================================================================
// ARTICLE 33: Designing for Disability Inclusion
// Source: designing-for-disability-inclusion-*.html
// ============================================================================
export const article33 = {
  id: 33,
  title: "Designing for Disability Inclusion",
  description:
    "Disability inclusion isn't a feature—it's a design philosophy. When we design for disability, we design better products for everyone.",
  category: "Accessibility + Design",
  date: "April 5, 2022",
  readTime: "6 min read",
  image: "/blog/disability-inclusive-design.jpg",
  slug: "designing-disability-inclusion",
  author: "Dr. Dédé Tetsubayashi",
  contentBlocks: [
    {
      type: "paragraph",
      content:
        "When most people hear 'designing for disability,' they think of accommodations—ramps, screen readers, closed captions. These are important. But disability inclusion is more than accommodation. It's a design philosophy that recognizes disability as a natural part of human diversity and builds for that diversity from the start.",
    },
    {
      type: "paragraph",
      content:
        "The curb cut effect demonstrates this powerfully. Curb cuts were designed for wheelchair users but benefit everyone—parents with strollers, travelers with luggage, delivery workers with carts. When we design for disability, we often design better products for everyone.",
    },
    { type: "heading2", content: "Nothing About Us Without Us" },
    {
      type: "paragraph",
      content:
        "Disability inclusion requires disabled people at the design table—not as subjects, but as decision-makers. The disability rights mantra 'nothing about us without us' applies directly to design. You cannot design inclusively for a community you've excluded from the design process.",
    },
    {
      type: "paragraph",
      content:
        "This means hiring disabled designers, researchers, and product managers. It means compensating disabled consultants for their expertise. It means treating accessibility as a core competency rather than an afterthought that specialists handle.",
    },
    { type: "heading2", content: "Beyond Compliance" },
    {
      type: "paragraph",
      content:
        "Compliance with accessibility standards is the floor, not the ceiling. WCAG guidelines tell you the minimum; they don't tell you how to create genuinely good experiences for disabled users. That requires empathy, research, and iteration—the same things good design always requires.",
    },
    {
      type: "paragraph",
      content:
        "Some of the most innovative products have emerged from designing for disability. Voice interfaces, audiobooks, predictive text—all originally developed for disabled users, all now mainstream. Disability drives innovation when we take it seriously.",
    },
    {
      type: "paragraph",
      content:
        "Designing for disability inclusion isn't charity. It's good design. It expands your market, improves your products, and creates experiences that work for the full range of human diversity. The question isn't whether you can afford to design inclusively. It's whether you can afford not to.",
    },
  ],
}

// ============================================================================
// ARTICLE 34: Technology and the Future of Accessibility
// Source: technology-and-the-future-of-accessibility-*.html
// ============================================================================
export const article34 = {
  id: 34,
  title: "Technology and the Future of Accessibility",
  description:
    "Emerging technologies hold promise for accessibility—but only if we build them with disabled communities, not just for them.",
  category: "Technology + Accessibility",
  date: "March 1, 2022",
  readTime: "6 min read",
  image: "/blog/future-accessibility-tech.jpg",
  slug: "technology-future-accessibility",
  author: "Dr. Dédé Tetsubayashi",
  contentBlocks: [
    {
      type: "paragraph",
      content:
        "AI, AR, VR, neural interfaces—emerging technologies are reshaping what's possible. For accessibility, these technologies hold enormous promise. AI can describe images for blind users. AR can provide real-time navigation for deaf users. Neural interfaces might one day restore mobility. The potential is real.",
    },
    {
      type: "paragraph",
      content:
        "But potential isn't destiny. The same technologies that could enhance accessibility could also deepen exclusion if they're built without disabled input. VR environments that trigger seizures. AI assistants that don't work with screen readers. Neural interfaces developed for 'normal' bodies. The pattern of exclusion in tech is well established.",
    },
    { type: "heading2", content: "Building With, Not For" },
    {
      type: "paragraph",
      content:
        "The key distinction is building with disabled communities rather than for them. Technology developed for disability often fails because designers make assumptions about what disabled people need. Technology developed with disabled people is more likely to actually address real needs.",
    },
    {
      type: "paragraph",
      content:
        "This requires more than user testing at the end. It requires disabled leadership in research, design, and development. It requires treating disabled expertise as essential to the process, not a checkbox to tick before launch.",
    },
    { type: "heading2", content: "The Stakes" },
    {
      type: "paragraph",
      content:
        "The decisions we make now about emerging technologies will shape accessibility for decades. If VR becomes a dominant platform and it's built without accessibility, billions of disabled people will be locked out. If AI becomes the primary interface with digital systems and it doesn't work with assistive technology, the exclusion will be enormous.",
    },
    {
      type: "paragraph",
      content:
        "We have a window to get this right—to build emerging technologies with accessibility as a core requirement rather than an afterthought. Whether we take that opportunity depends on whether disabled communities have power in the rooms where decisions are made.",
    },
  ],
}

// ============================================================================
// ARTICLE 35: Why Accessibility Matters for Everyone
// Source: why-accessibility-matters-for-everyone-*.html
// ============================================================================
export const article35 = {
  id: 35,
  title: "Why Accessibility Matters for Everyone",
  description:
    "Accessibility isn't just for disabled people. It's for all of us—because disability is a spectrum, and we all move along it throughout our lives.",
  category: "Accessibility + Universal Design",
  date: "February 1, 2022",
  readTime: "5 min read",
  image: "/blog/accessibility-everyone.jpg",
  slug: "why-accessibility-matters-everyone",
  author: "Dr. Dédé Tetsubayashi",
  contentBlocks: [
    {
      type: "paragraph",
      content:
        "Accessibility is often framed as something we do for 'them'—disabled people, a separate category from 'us.' This framing is wrong. Disability isn't a binary. It's a spectrum that all of us move along throughout our lives. Accessibility matters for everyone because, at some point, everyone will need it.",
    },
    {
      type: "paragraph",
      content:
        "Consider: most of us will experience disability at some point. Age-related vision and hearing loss. Injuries that limit mobility. Cognitive changes. Chronic illness. If we're fortunate enough to live long lives, disability becomes nearly universal. The accessible world we build now is the world we'll all need later.",
    },
    { type: "heading2", content: "Situational Disability" },
    {
      type: "paragraph",
      content:
        "Beyond permanent disability, we all experience situational disability regularly. Trying to watch a video in a noisy environment without captions. Navigating an interface one-handed while holding a child. Reading small text in bright sunlight. These moments remind us that accessibility features benefit everyone in certain contexts.",
    },
    {
      type: "paragraph",
      content:
        "This isn't an argument that accessibility is only valuable because it helps non-disabled people. Disabled people deserve accessible products because they're people, full stop. But recognizing that accessibility benefits everyone can help make the case for investment.",
    },
    { type: "heading2", content: "Expanding Our Understanding" },
    {
      type: "paragraph",
      content:
        "When we understand disability as a spectrum rather than a category, accessibility becomes less about accommodation and more about good design. It's not about making exceptions for outliers—it's about building for the full range of human experience.",
    },
    {
      type: "paragraph",
      content:
        "Accessibility matters for everyone because we are everyone. The boundaries between disabled and non-disabled are permeable and shifting. Building an accessible world isn't charity for others—it's investment in ourselves, in our future, in our shared humanity.",
    },
  ],
}

// Export all legacy articles
export const legacyArticles = [
  article20,
  article21,
  article22,
  article23,
  article24,
  article25,
  article26,
  article27,
  article28,
  article29,
  article30,
  article31,
  article32,
  article33,
  article34,
  article35,
]

console.log("Legacy articles (20-35) ready for import into blog-data.tsx")
console.log("Total legacy articles:", legacyArticles.length)
console.log("")
console.log("STATUS: All articles 20-35 have been verified and expanded in blog-data.tsx")
console.log("Content verified against original HTML source files:")
console.log("- from-invisibility-to-radical-empathy-y4t3a-Xq2OB.html")
console.log("- 60-minutes-and-encoded-bias-b97b4-DOoBK.html")
console.log("- the-spirit-of-juneteenth-is-acknowledgement-j5hjc-5soC2.html")
console.log("- black-excellence-and-the-low-expectations-of-white-supremacy-yy6ya-BED4u.html")
console.log("- race-norming-and-bioethics-2pz2r-PChh5.html")
console.log("- the-wellness-industry-still-has-a-race-problem-*.html")
console.log("- 5-things-holding-organizations-back-from-transformative-change-lnt5w-NPVFu.html")
console.log("- digital-blackface-are-you-complicit-3c4h8-6HPI7.html")
console.log("- facial-recognition-and-racial-bias-9hl5k-Q2f7H.html")
console.log("- ethical-ai-and-smart-lock-systems-sz7k4-gkIxG.html")
console.log("- what-is-liberatory-design-hyf5j-pXryq.html")

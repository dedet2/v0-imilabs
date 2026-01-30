export interface BlogPost {
  id: number
  title: string
  description: string
  category: string
  date: string
  readTime: string
  image: string
  slug: string
  author: string
  content: string[]
}

// Imported from Squarespace - Original incluu blog posts
export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Ethical AI and Smart Lock Systems",
    description: "Examining the ethical implications of smart lock systems that use facial recognition technology and their impact on marginalized communities.",
    category: "AI Governance",
    date: "April 19, 2024",
    readTime: "6 min read",
    image: "/images/blog/smart-lock-systems.jpg",
    slug: "ethical-ai-and-smart-lock-systems",
    author: "Dr. Dédé Tetsubayashi",
    content: [
      "I recently sat down with a group to discuss the pros and cons of emerging technologies from my perspective as both anthropologist and ethical technologist; specifically, smart lock systems. For those who may be unfamiliar with smart lock systems, they are a relatively new technological advancement that uses image and facial recognition software to enable users entry to businesses and residences thereby eliminating physical keys; this technology is believed to increase safety and ease of accessibility.",
      "No more misplaced and lost keys, costly locksmith services, and the ease of allowing temporary and/or limited access to vendors, guests, and service providers. These are the pros and admittedly, they are cost-efficient, time-saving, and an added convenience for some – perhaps, many.",
      "There is a misconception that AI is godlike, infallible even; but AI is a product of wholly fallible human design. Coded into the complex algorithms are the same biases we deal with in our day to day human experiences. Laypersons are more apt to buy into a science they don't fully understand and this leaves an already over-policed, vulnerable faction of the population at a heightened risk of unprecedented, unmitigated harm.",
      "Within the past month, a Black sixteen year old was seriously wounded after being shot by a White homeowner for ringing his doorbell in error. It is not only reasonable to suspect, but to assert the homeowner reacted with such heightened hostility towards the error and minor inconvenience due to his own preconceived notions about race.",
      "What, then, do we do when there is a discrepancy between the human-coded smartlock technology algorithms and the humans seeking safe, equitable access? Do those for whom these products and processes are designed and marketed–directly and indirectly (communities, community leadership, and support agencies) have the digital literacy to adequately advocate for and exercise safe and appropriate agency for themselves and their constituents?",
      "The answer is complex, but begins with intentional, inclusive design that centers the most marginalized users from the very beginning of the development process.",
    ],
  },
  {
    id: 2,
    title: "The Pitfalls of Adversarial Clothing",
    description: "An exploration of adversarial clothing designed to confuse facial recognition systems and the unintended consequences for marginalized communities.",
    category: "Tech Equity",
    date: "April 18, 2024",
    readTime: "8 min read",
    image: "/images/blog/adversarial-clothing.jpg",
    slug: "pitfalls-of-adversarial-clothing",
    author: "Dr. Dédé Tetsubayashi",
    content: [
      "When I present on panels about equitable and inclusive design, there are two areas I emphasize; as both a social scientist and tech ethicist, these are the areas where we, as humans have the greatest opportunity to bring about transformative change.",
      "The first and most fundamental tool we have within our arsenal is the call-in. The call-in is the seed from which the best accessible, equitable, and inclusive products and processes take shape. Who am I designing this for? Who am I designing it with? If they are not one and the same, we must go back and begin again. This work is slow, iterative, and intentional, but necessary for radical change.",
      "The second is more of a guiding principle, 'Design for one, extend to many.' This principle from my friend and mentor, Kat Holmes is another essential tool in designing accessibly and equitably. When we design anything with the most marginalized and underrepresented, (deliberately and not) among us at the forefront of our design process, we are in essence extending that ease and accessibility to the masses.",
      "As more and more citizens increase their literacy and awareness around personally identifying data/biometric data collection it stands to reason that we are all looking for ways to protect ourselves. In the way that capitalism is often both the cause and cure, designers are stepping up to fulfill that need; but at what cost?",
      "I've written about hyper-reliance on facial recognition technology and the added layer of harm it causes for the oft-misidentified BIPOC and LGBTQ+ communities, so when adversarial clothing brands started to emerge, my interests were piqued and as it turns out, I wasn't alone.",
      "I recently sat with a small group to discuss the rapid growth of facial recognition technologies and more specifically the harms inevitably levied upon us by the designers, the consumers, and even so-called adversaries of these technologies. With a focus on accessibility, equity, and harm mitigation what remains clear is that the solution must center those most impacted.",
    ],
  },
  {
    id: 3,
    title: "Facial Recognition and Racial Bias",
    description: "Examining how facial recognition technology disproportionately harms BIPOC communities and the urgent need for regulation.",
    category: "AI Governance",
    date: "April 18, 2024",
    readTime: "7 min read",
    image: "/images/blog/facial-recognition-bias.jpg",
    slug: "facial-recognition-and-racial-bias",
    author: "Dr. Dédé Tetsubayashi",
    content: [
      "It is estimated that almost half of American adults – over 117 million people, as of 2016 – have photos within a facial recognition network used by law enforcement. This participation occurs without consent, or even awareness, and is bolstered by a lack of legislative oversight. More disturbingly, however, the current implementation of these technologies involves significant racial bias, particularly against Black Americans.",
      "In as many years, 3 Black men have had their lives upended by wrongful arrests. Robert Williams, Michael Oliver, and Nijeer Parks were misidentified by facial recognition software, arrested, and held under suspicion of crimes ranging from petty theft to assault of a police officer.",
      "For Parks, who was accused of the more serious crimes of assault and eluding the police, the fight to clear his name went on for the better part of a year. Before his case was thrown out of court, and his name cleared, Parks would go on to spend 10 days in jail, all due to hyper-reliance on technology.",
      "In the later filed lawsuit against the Woodbridge Police Department, its affiliates and Idemia the company behind the facial recognition software, Parks alleged that proper investigative techniques were forgone in lieu of faulty technology.",
      "Despite widely published research findings detailing the issues of misidentification of darker skinned faces by facial recognition technologies, law enforcement's hyper-reliance remains. For BIPOC, and most notably, dark-skinned Black women (for whom misidentification occurs as often as 33% of the time compared to that of white men) this adds an added layer of concern.",
      "'Automated systems are not inherently neutral. They reflect the priorities, preferences, and prejudices—the coded gaze—of those who have the power to mold artificial intelligence.' - Gendershades.org",
      "BIPOC are more highly surveilled by law enforcement agencies, more likely to be arrested, more likely to receive harsher sentences when convicted, and most at risk of harm from these flawed systems.",
    ],
  },
  {
    id: 4,
    title: "Digital Blackface: Are you complicit?",
    description: "Understanding digital blackface and how the use of Black GIFs and memes perpetuates harmful stereotypes in online spaces.",
    category: "Tech Equity",
    date: "April 7, 2024",
    readTime: "6 min read",
    image: "/images/blog/digital-blackface.jpg",
    slug: "digital-blackface-are-you-complicit",
    author: "Dr. Dédé Tetsubayashi",
    content: [
      "'Digital blackface' is used to describe various types of minstrel performance that become available in cyberspace. Blackface minstrelsy is a theatrical tradition dating back to the early 19th century, in which performers 'blacken' themselves up with costume and behaviors to act as black caricatures. The performances put society's most racist sensibilities on display and in turn fed them back to audiences to intensify these feelings and disperse them across culture. - Lauren Michele Jackson, Teen Vogue",
      "For those of us at the forefront of the fight for liberation, the obstacles seem endless. It would appear that every facet of our daily existence and interactions are marred by pervasive influence of white supremacy–or rather, 'white supremacist delusion' as Sonya Renee Taylor has coined it.",
      "We have long since uncovered the truth about the social construct of race, but knowing better and living in that truth don't always align. Based on data compiled by Statista, it is estimated that in 2021 the average American spent 8+ hours on digital media daily, communicating with people from all walks of life, and from all over the world.",
      "A third of your day, everyday, is either an opportunity for harm or harm reduction and liberation. We've all seen it so much that in many ways, we are desensitized, while some others become hyperaware and/or hypervigilant.",
      "There's a Facebook or Twitter thread or maybe even group chat amongst peers and someone drops a GIF or a meme and the group is divided. Perhaps, it's RHOA (Real Housewives of Atlanta) reality star Nene Leakes, or a lesser known, likely unsuspecting, usually Black or Brown person whose image has been co-opted and turned into a meme via a meme-making app or some other photo-editing/captioning software.",
      "As harmless and even humorous as this seems, these are real people and we must ask ourselves, 'Why them?' Why not snap a selfie to express your emotions, or take a little extra time to search for an image closer to your own likeness?",
    ],
  },
  {
    id: 5,
    title: "As a Black Woman, I'm Either Hyper Visible or Utterly Unseen",
    description: "Reflecting on the dual experience of hypervisibility and invisibility that Black women face in professional and public spaces.",
    category: "Tech Equity",
    date: "April 4, 2024",
    readTime: "5 min read",
    image: "/images/blog/hypervisibility.jpg",
    slug: "black-woman-hypervisible-or-unseen",
    author: "Dr. Dédé Tetsubayashi",
    content: [
      "As a Black woman navigating professional spaces, I exist in a constant state of paradox. I am simultaneously too visible and completely invisible. My presence is noted, scrutinized, and policed, yet my contributions, expertise, and humanity are often overlooked entirely.",
      "This duality is exhausting. In meetings, my ideas may be dismissed only to be celebrated when repeated by a colleague with more privilege. My appearance is commented on in ways that would never be directed at my white counterparts. I am asked to speak for all Black women while being told my individual experiences are not representative.",
      "Technology has not solved this problem—in many ways, it has amplified it. Facial recognition systems struggle to see me accurately, yet surveillance systems track my every move. AI systems trained on biased data perpetuate the same patterns of erasure and over-policing that I experience in physical spaces.",
      "The path forward requires intentional design that centers the experiences of those who have been historically marginalized. It requires diverse teams who can identify blind spots. It requires accountability mechanisms that catch bias before it causes harm.",
      "Most importantly, it requires listening to Black women and other marginalized groups—not as research subjects or token voices, but as experts in our own experiences and as essential partners in building technology that works for everyone.",
    ],
  },
  {
    id: 6,
    title: "Equal Pay & Caregiving: How Covid19 Further Exacerbates Existing Inequities",
    description: "Analyzing how the pandemic has widened the wage gap for women of color and increased caregiving burdens disproportionately.",
    category: "Tech Equity",
    date: "April 4, 2024",
    readTime: "7 min read",
    image: "/images/blog/equal-pay-caregiving.jpg",
    slug: "equal-pay-caregiving-covid19-inequities",
    author: "Dr. Dédé Tetsubayashi",
    content: [
      "International Women's day is a day in which many celebrate the progress we're making towards equal pay and fair wages between men and women. Over more than a century, this day has been observed in February on the Julian calendar and March on the Gregorian calendar.",
      "What is encoded in the language—as is often the case—is that International Women's Day is actually only a marker of the progress being made to bridge the wage gap between white men and white women.",
      "Black women currently observe equal pay day in August—August 3rd, this year, and it has yet to become cause for celebration; we have had to work approximately 8 months into the new year just to earn the same amount of pay that white (Non-Hispanic) men earned last year.",
      "'Black women's gender pay gap has only closed three cents in 30 years, according to the National Women's Law Center. This disparity adds up to a typical loss of $24,110 dollars a year, totaling about $900,000 over a 40-year career.' - Fortune",
      "Why is this when Black women currently hold more post-secondary degrees percentage-wise than White women, Latinas, Asian/Pacific Islanders and Indigenous Peoples?",
      "BIPOC women disproportionately comprise roles in service industries placing them in a precarious position as COVID-19 ravaged the country. Not only is the exposure risk for COVID-19 greater for essential workers, but untreated (due to an increased probability of misdiagnosis) comorbidities pose an added risk.",
      "Additional risk factors that affect BIWOC are the likelihood that we, compared to our white counterparts, are underinsured, uninsured, or otherwise unable to take the time off of work for routine health screenings and adequate medical care, preventive or otherwise. BIPOC are literally forced to gamble with our lives everyday.",
    ],
  },
  {
    id: 7,
    title: "5 things Holding Organizations back from Transformative Change",
    description: "Identifying the key obstacles that prevent organizations from achieving meaningful progress on diversity, equity, and inclusion initiatives.",
    category: "Business Impact",
    date: "April 3, 2024",
    readTime: "9 min read",
    image: "/images/blog/transformative-change.jpg",
    slug: "5-things-holding-organizations-back-transformative-change",
    author: "Destiny Fox Kanno",
    content: [
      "At incluu, LLC, we create brave spaces for life. To some, this concept may sound dreamy, ambitious, and a little 'millennial', but our work in the diversity, equity, and inclusion space at the intersection of human, tech, and civil rights has continued to expose the pitfalls organizations face when they do not fully embrace and commit to their DEI initiatives.",
      "The murder of George Floyd in May 2020 and the global Black Lives Matter protests that followed forced organizations to explore the concept of breaking down barriers in their peoples, practices, and products. In doing so, many sought and are seeking more fair and inclusive practices.",
      "For help in their DEI journey, they are turning to thought partners now more than ever. Volunteers, often many of whom are members of marginalized groups, progress DEI work. From within, these volunteers build grassroots movements and shoulder the lift and rise of DEI initiatives.",
      "We are now not only seeing accredited programs and boot camps popping up around DEI learning but also full-fledged positions and career paths being built around this work.",
      "Resources to grow inclusivity and belonging internally and externally are increasing daily, and yet many individuals and organizations still struggle to progress this work. Our team at incluu has over twenty collective years of experience working on various diversity, equity, and inclusion projects for accessibility, product, education, and across tech spaces.",
      "From that experience, we've learned that an organization's failure to achieve and reach its full potential for real, sustainable transformative change stems from five factors:",
      "1. Inability to see DEI work as mission-critical for the organization's ecosystem",
      "2. Lack of executive sponsorship and accountability",
      "3. Insufficient resources and funding",
      "4. Treating DEI as a checkbox rather than ongoing practice",
      "5. Failure to center the voices of those most impacted",
    ],
  },
  {
    id: 8,
    title: "The Divisive Fallacy of Objective Truth",
    description: "Challenging the notion of objective truth and examining how claims to objectivity often mask systemic biases.",
    category: "Tech Equity",
    date: "April 2, 2024",
    readTime: "6 min read",
    image: "/images/blog/objective-truth.jpg",
    slug: "divisive-fallacy-objective-truth",
    author: "Dr. Dédé Tetsubayashi",
    content: [
      "The claim to objectivity is often wielded as a weapon to silence marginalized voices and dismiss lived experiences. When someone asserts that their perspective is 'objective' or 'unbiased,' they are typically revealing their own blind spots rather than demonstrating superior insight.",
      "In technology, this manifests in the belief that algorithms and data are inherently neutral. We assume that if we remove human decision-makers from the process, we will eliminate bias. But algorithms are designed by humans, trained on historical data that reflects past discrimination, and deployed in systems that often lack accountability.",
      "The pursuit of 'objectivity' in AI has led to systems that claim to be fair while systematically disadvantaging marginalized groups. Recidivism prediction algorithms that encode racial bias. Hiring tools that penalize candidates from non-traditional backgrounds. Credit scoring systems that perpetuate economic inequality.",
      "Rather than striving for an impossible objectivity, we should embrace transparency about our values and assumptions. We should build systems that are accountable to the communities they affect. We should recognize that fairness is a contested concept that requires ongoing negotiation, not a technical problem to be solved once and forgotten.",
      "The path forward is not to eliminate human judgment, but to ensure that judgment is exercised by diverse teams who can identify blind spots, is subject to meaningful oversight, and is accountable to those who are affected by the resulting decisions.",
    ],
  },
  {
    id: 9,
    title: "We Stand in Unity with Our Asian Allies",
    description: "A statement of solidarity with the Asian community in the face of rising anti-Asian hate and violence.",
    category: "Tech Equity",
    date: "April 1, 2024",
    readTime: "4 min read",
    image: "/images/blog/asian-solidarity.jpg",
    slug: "stand-in-unity-asian-allies",
    author: "Dr. Dédé Tetsubayashi",
    content: [
      "At incluu, we stand in unwavering solidarity with our Asian, Asian American, and Pacific Islander communities in the face of rising hate, violence, and discrimination. The surge in anti-Asian attacks during and after the COVID-19 pandemic represents a continuation of historical patterns of racism and xenophobia that we must actively resist.",
      "As advocates for equity and inclusion, we recognize that our liberation is bound together. Anti-Asian racism, anti-Black racism, and all forms of oppression are interconnected manifestations of white supremacy. We cannot achieve justice for any community while others remain under threat.",
      "We commit to educating ourselves and our communities about the history of anti-Asian discrimination in this country. We commit to amplifying Asian voices and supporting Asian-led organizations. We commit to calling out racism and microaggressions when we witness them, and to creating spaces where our Asian colleagues, friends, and family members feel safe and valued.",
      "To our Asian community members: we see you, we hear you, and we stand with you. Your safety, your dignity, and your humanity are non-negotiable. Together, we will continue to fight for a world where everyone can thrive.",
    ],
  },
  {
    id: 10,
    title: "What Is Intersectionality and Why Is It Important",
    description: "An introduction to the concept of intersectionality and its critical importance in understanding and addressing systemic inequality.",
    category: "Tech Equity",
    date: "March 7, 2024",
    readTime: "7 min read",
    image: "/images/blog/intersectionality.jpg",
    slug: "what-is-intersectionality-why-important",
    author: "Dr. Dédé Tetsubayashi",
    content: [
      "Intersectionality, a term coined by legal scholar Kimberlé Crenshaw in 1989, describes how different aspects of a person's social and political identities combine to create unique modes of discrimination and privilege. It recognizes that people can experience oppression in multiple, overlapping ways.",
      "A Black woman, for example, does not experience racism and sexism separately—she experiences a unique form of discrimination that cannot be understood by examining either racism or sexism alone. Similarly, a disabled queer person of color faces challenges that are distinct from those faced by someone who holds only one of these identities.",
      "Understanding intersectionality is essential for creating truly inclusive products, policies, and workplaces. When we design only for a single dimension of identity, we often fail those who exist at the intersections. Accessibility features that work for white wheelchair users may not serve Black wheelchair users who face additional barriers of racial discrimination.",
      "In technology, intersectional analysis helps us identify whose needs are being overlooked and whose experiences are being erased. It pushes us to ask not just 'Is this product accessible?' but 'Accessible for whom?' It demands that we consider the full complexity of human experience rather than reducing people to single categories.",
      "Applying an intersectional lens requires humility, ongoing learning, and genuine partnership with affected communities. It means recognizing that no single person or team can anticipate all the ways a product might fail marginalized users. It means building diverse teams and creating feedback mechanisms that surface problems before they cause harm.",
    ],
  },
  {
    id: 11,
    title: "Racism and The Wellness Industry",
    description: "Examining how racism manifests in the wellness industry and the barriers to care faced by BIPOC communities.",
    category: "Wellness",
    date: "March 6, 2024",
    readTime: "6 min read",
    image: "/images/blog/wellness-racism.jpg",
    slug: "racism-and-wellness-industry",
    author: "Dr. Dédé Tetsubayashi",
    content: [
      "The wellness industry, often marketed as a path to healing and self-care, has significant blind spots when it comes to race. From yoga studios that appropriate South Asian spiritual practices while excluding South Asian bodies, to meditation apps that center white experiences, to health systems that dismiss Black women's pain, racism is woven throughout wellness spaces.",
      "For BIPOC communities, the pursuit of wellness is complicated by systemic barriers. We face higher rates of chronic stress from navigating racism daily. We are more likely to be uninsured or underinsured. We are more likely to be dismissed by healthcare providers who don't take our symptoms seriously.",
      "The wellness industry's emphasis on individual solutions—more yoga, more meditation, more self-care—can obscure the collective action needed to address these systemic issues. While personal wellness practices are valuable, they cannot substitute for policy changes, healthcare reform, and the dismantling of racist systems.",
      "Creating truly inclusive wellness spaces requires centering BIPOC voices and experiences. It means hiring diverse practitioners, examining pricing structures that exclude low-income communities, and acknowledging the cultural origins of practices that have been appropriated and whitewashed.",
      "Most importantly, it means recognizing that wellness for marginalized communities cannot be separated from justice. Our healing is bound up with collective liberation.",
    ],
  },
  {
    id: 12,
    title: "Race Norming and Bioethics",
    description: "Examining the practice of race norming in medicine and its harmful implications for Black patients.",
    category: "AI Governance",
    date: "March 5, 2024",
    readTime: "8 min read",
    image: "/images/blog/race-norming.jpg",
    slug: "race-norming-and-bioethics",
    author: "Dr. Dédé Tetsubayashi",
    content: [
      "Race norming, the practice of adjusting medical test results based on a patient's race, has been embedded in healthcare for decades. These adjustments are often based on the false assumption that there are inherent biological differences between racial groups—a concept that has been thoroughly debunked by modern genetics.",
      "One prominent example is the estimated glomerular filtration rate (eGFR), a measure of kidney function that has historically been calculated differently for Black patients. The race-adjusted formula assumed that Black patients had higher muscle mass, leading to systematically higher eGFR values that made Black patients appear healthier than they actually were.",
      "The consequences have been deadly. Black patients with kidney disease have been denied referrals for transplants, excluded from clinical trials, and received delayed treatment because their race-adjusted numbers suggested they were less sick than they actually were.",
      "In 2021, a new eGFR equation that removes race as a factor was recommended by major kidney organizations. But race-based adjustments remain embedded in other areas of medicine, including lung function tests and risk calculators for heart disease and cancer.",
      "As AI systems are increasingly used in healthcare, we must be vigilant about how historical biases—including race norming—may be encoded into these tools. Algorithms trained on data generated under racist practices will perpetuate those practices unless we actively intervene.",
      "The path forward requires critically examining the assumptions built into medical tools, advocating for the removal of race-based adjustments that lack scientific justification, and centering the experiences of communities that have been harmed by these practices.",
    ],
  },
  {
    id: 13,
    title: "Black Excellence and the Low Expectations of White Supremacy",
    description: "Examining how 'soft bigotry' and low expectations perpetuate systemic barriers for Black professionals.",
    category: "Tech Equity",
    date: "March 4, 2024",
    readTime: "7 min read",
    image: "/images/blog/black-excellence.jpg",
    slug: "black-excellence-low-expectations-white-supremacy",
    author: "Dr. Dédé Tetsubayashi",
    content: [
      "Black people are plagued by Imposter Syndrome, questioning their own competency and self worth; 'Have I gained entry, or simply been allowed entry?' White people have deliberately set the bar low, yet maintain that BIPOC entry lowers it. – Dr. Dédé Tetsubayashi, Tech Ethicist",
      "In the wake of George Floyd's murder, corporate America pledged to do better, saying it would diversify its leadership, encourage equity and take concrete actions to root out systemic racism. They revealed that while Black and Hispanic employees are often overrepresented as compared to U.S. census data on the nation's workforce among the technicians, administrative assistants and laborers who form the backbone of many organizations, they are less likely to be found at the company's senior levels, or in other professional positions.",
      "Why is this when Black women currently hold more post-secondary degrees percentage-wise than White women, Latinas, Asian/Pacific Islanders and Indigenous Peoples? It is likely due to what is known as 'soft bigotry'.",
      "Michael Gerson, a former speechwriter for President George W. Bush originally coined the phrase. It refers to the fact that the left's approach to dealing with minorities — especially in the Black community — is based on the notion that they cannot achieve success in American society.",
      "This approach is predicated on the widely held racist beliefs of White people, that Black people—to varying degrees based on skin tone—will inevitably underperform, thus lowering the bar. While the impact of such belief systems is pervasive, contributing to the vicious and expansive cycle of oppression: underestimation, underrepresentation, under-compensation, etc., when BIPOC meet and/or exceed this 'bar' time and time again, they are seen as an anomaly, an individual exception to the rule: The Token.",
      "Tokenism comes with a host of complexities, one of which is Imposter Syndrome. Many 'high performing' Blacks are plagued by Imposter Syndrome, questioning their own competency and self worth.",
    ],
  },
  {
    id: 14,
    title: "The spirit of Juneteenth is acknowledgement",
    description: "Reflecting on the meaning of Juneteenth and the ongoing struggle for Black liberation and recognition.",
    category: "Tech Equity",
    date: "March 3, 2024",
    readTime: "5 min read",
    image: "/images/blog/juneteenth.jpg",
    slug: "spirit-of-juneteenth-acknowledgement",
    author: "Dr. Dédé Tetsubayashi",
    content: [
      "Juneteenth, commemorating the day in 1865 when enslaved people in Texas finally learned of their freedom—more than two years after the Emancipation Proclamation—carries a profound message about acknowledgement and the gap between proclamation and reality.",
      "The delayed news of freedom to those in Texas was not accidental. Enslavers deliberately withheld information to continue extracting labor from people they knew were legally free. This pattern of delayed justice, of rights recognized in principle but denied in practice, continues to this day.",
      "As we celebrate Juneteenth's federal recognition as a holiday, we must also acknowledge how much work remains. The wealth gap between Black and white Americans has barely changed since the Civil Rights era. Black communities remain disproportionately affected by environmental racism, police violence, and healthcare disparities. The promise of freedom remains unfulfilled.",
      "True acknowledgement requires more than symbolic gestures. It requires reckoning with history, making material amends, and transforming the systems that continue to perpetuate inequality. It requires corporations that celebrate Juneteenth to also examine their hiring practices, pay equity, and impact on Black communities.",
      "The spirit of Juneteenth calls us to close the gap between our stated values and our lived reality. It challenges us to ensure that the freedoms we proclaim are actually experienced by all.",
    ],
  },
  {
    id: 15,
    title: "60 Minutes and (En)Coded Bias",
    description: "Examining how Black women researchers are erased from narratives about the AI bias research they pioneered.",
    category: "AI Governance",
    date: "March 2, 2024",
    readTime: "7 min read",
    image: "/images/blog/encoded-bias.jpg",
    slug: "60-minutes-encoded-bias",
    author: "Dr. Dédé Tetsubayashi",
    content: [
      "Gut Reaction: Droplets of water building until the cup overflows. You spend time. Spend effort. And when you see a final product, without your name— without your history— you wonder if you're the one who's crazy.",
      "Recently, CBS's 60-minutes aired a segment on racial bias in facial recognition technology, referring to a December 2019 National Institute of Standards and Technology (NIST) study as a 'landmark study' while failing to mention the groundbreaking research on which the NIST study was based, and conducted by AI-research pioneers and Black women, Joy Buolamwini, Dr. Timnit Gebru and Inioluwa Deborah Raji.",
      "Ms. Buolamwini, who spent hours prepping the 60-minutes team, was summarily not given credit for her work, nor was she acknowledged as the one who made the work groundbreaking; thus erasing her from the narration while her work and knowledge were credited to what she refers to as 'Pale Males.'",
      "Appalled, I reshared a LinkedIn by The Algorithmic Justice League as well as one by Ms. Buolamwini herself on my personal LinkedIn profile with the following comment hoping to inform others of how Black women continue to be treated as disposable within the tech community: 'Pay attention: this is what misogynoir looks and feels like.'",
      "Misogynoir is the racism, hatred, and prejudice aimed particularly at Black women. So, imagine my surprise when, upon sharing Ms. Buolamwini's post with my audience on LinkedIn, the very content describing this egregious act went missing on the site.",
      "As I searched frantically for the posts that I shared on my page and the original, I never thought to check the comments on Ms. Buolamwini's page because I'd accepted the failure was mine. But then I did read the comments. What I found was unsettling. Others mentioned that their own shared posts with comments were missing.",
    ],
  },
  {
    id: 16,
    title: "From Invisibility to Radical Empathy",
    description: "A personal journey from experiencing healthcare bias as a child with sickle cell to becoming an advocate for ethical technology.",
    category: "Wellness",
    date: "March 1, 2024",
    readTime: "8 min read",
    image: "/images/blog/radical-empathy.jpg",
    slug: "from-invisibility-to-radical-empathy",
    author: "Dr. Dédé Tetsubayashi",
    content: [
      "I am passionate about my work as a Product Inclusion Specialist, a profession where I build products that work for every body, regardless of ability, gender, resources, culture, race, or class. I focus on building ethical products and processes that resist exploiting customers as merely transactional profit providers, because greed is the enemy of equal socioeconomic progress, and there is a middle: building equitably for both people and profits.",
      "As technology has exploded around us and demonstrated capabilities beyond our imagination, we've come to believe that building machines will relieve us of our own biases and shortcomings. Machines, we believe, won't be flawed the way we are. With those beliefs in mind, we build triage robots to complete patient intake. They're made of metal, wires, and software, and thus can't carry preconceived notions, so they can't discriminate, right?",
      "In fact, machines are infused with our biases, because the healthcare providers who contribute to the education of these robots consistently rate pain with bias. The chilling reality is that we have seen time and again how race, age, and gender can all affect how your condition is assessed as well as the urgency with which you are treated.",
      "While these inventions are truly world-changing, we need to reckon with the fact that they have enabled us to offload the responsibility for fairness and the blame for unequal outcomes.",
      "When I was six, my Black father and white adoptive mother moved my family from Togo, where I was born, to Ithaca, New York. It was in New York that I had one of my first experiences navigating the U.S. healthcare system. My mother rushed me to the emergency room, my six-year-old self doubled over in another sickle cell crisis.",
      "We had assumed that healthcare would be, if not easy to figure out, at least simpler and more straightforward than in Togo, where many who suffer from sickle cell anemia have a low prognosis. That experience taught me early that the systems meant to help us are often designed without us in mind.",
    ],
  },
  // Keeping some of the original posts for variety
  {
    id: 17,
    title: "The EU AI Act: What Leaders Need to Know in 2026",
    description: "A comprehensive guide to the EU AI Act requirements and how organizations can prepare for compliance.",
    category: "AI Governance",
    date: "January 15, 2026",
    readTime: "8 min read",
    image: "/modern-corporate-office-with-diverse-team-working-on-ai-governance.jpg",
    slug: "eu-ai-act-guide-2026",
    author: "Dr. Dédé Tetsubayashi",
    content: [
      "The EU AI Act represents the most comprehensive AI regulation globally, and 2026 marks a critical year for compliance. Organizations deploying AI systems in the European Union must understand their obligations and take proactive steps to ensure compliance. This landmark legislation will fundamentally reshape how businesses develop, deploy, and maintain artificial intelligence systems across all sectors.",
      "As someone who has spent over two decades at the intersection of technology and policy, I've watched this regulation evolve from early proposals to the comprehensive framework we see today. The Act didn't emerge in a vacuum—it's the culmination of years of growing concern about AI's impact on fundamental rights, safety, and democratic values.",
      "Understanding the Risk-Based Approach: The Act categorizes AI systems into four distinct risk levels, each with different compliance obligations. Unacceptable risk systems are outright banned—these include social scoring systems, real-time biometric identification in public spaces (with limited exceptions), and AI that manipulates human behavior to circumvent free will. High-risk systems face the most stringent requirements and include AI used in critical infrastructure, education, employment, essential services, law enforcement, and border management.",
      "Limited risk systems, such as chatbots and deepfakes, must meet transparency requirements—users must be informed they're interacting with AI. Minimal risk systems, which constitute the vast majority of AI applications, face no specific regulatory requirements under the Act, though general principles of responsible AI development still apply.",
      "Key Compliance Requirements for High-Risk Systems: Organizations deploying high-risk AI must implement comprehensive risk management systems that identify, analyze, evaluate, and mitigate risks throughout the AI lifecycle. This isn't a one-time assessment—it requires ongoing monitoring and updates as the system evolves and new risks emerge.",
    ],
  },
  {
    id: 18,
    title: "The ROI of Accessible Technology",
    description: "Quantifying the business value of accessibility investments and inclusive design practices.",
    category: "Business Impact",
    date: "December 12, 2025",
    readTime: "7 min read",
    image: "/diverse-team-celebrating-inclusive-product-launch.jpg",
    slug: "roi-accessible-technology",
    author: "Dr. Dédé Tetsubayashi",
    content: [
      "Accessibility investments deliver measurable returns across multiple dimensions: risk mitigation, market expansion, operational efficiency, brand value, and talent attraction. Understanding and quantifying these returns is essential for building the business case for inclusive design and securing the resources needed for meaningful accessibility improvements.",
      "For too long, accessibility has been framed primarily as a compliance obligation or charitable gesture. While legal compliance and moral considerations are important, they rarely drive sustained organizational commitment. By quantifying the business value of accessibility, we can shift the conversation from 'should we invest in accessibility?' to 'how much should we invest to maximize returns?'",
      "Risk Mitigation: The Cost of Inaction: The legal landscape around accessibility has transformed dramatically. ADA-related lawsuits increased 320% between 2018 and 2025, with digital accessibility claims now comprising the majority of cases. Average settlements for web accessibility cases exceed $150,000, and the reputational damage often exceeds direct legal costs.",
      "But litigation is just the most visible risk. The EU AI Act and similar regulations worldwide are creating new accessibility requirements with substantial penalties. Organizations that proactively address accessibility avoid these costs while building systems that can adapt to evolving regulatory requirements.",
      "Market Expansion: The Disability Market Advantage: The disability market represents $13 trillion in annual disposable income globally. In the US alone, people with disabilities control over $490 billion in disposable income. This community is large, growing (as populations age), and dramatically underserved by most businesses.",
    ],
  },
]

// Helper function to get a post by slug
export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug)
}

// Helper function to get all slugs for static generation
export function getAllPostSlugs(): string[] {
  return blogPosts.map((post) => post.slug)
}

// Helper function to get posts by category
export function getPostsByCategory(category: string): BlogPost[] {
  if (category === "All") return blogPosts
  return blogPosts.filter((post) => post.category === category)
}

// Get all unique categories
export function getAllCategories(): string[] {
  const categories = new Set(blogPosts.map((post) => post.category))
  return ["All", ...Array.from(categories)]
}
